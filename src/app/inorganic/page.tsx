"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { itObservationLibrary } from "@/lib/data";
import { supabase, getUserStats, updateUserScore } from "@/lib/supabase";

type Observation = { category: string; question: string; answer: string };

export default function InorganicTrainer() {
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      const uid = session?.user?.id ?? null;
      setUserId(uid);
      if (uid) {
        const stats = await getUserStats(uid);
        if (stats && stats.inorganic_score !== undefined) {
          setScore(stats.inorganic_score);
        }
      }
    });
  }, []);

  const [category, setCategory] = useState("all");
  const [questionText, setQuestionText] = useState("Loading...");
  const [currentQuestion, setCurrentQuestion] = useState<Observation | null>(null);
  const [lastQuestionText, setLastQuestionText] = useState<string | null>(null);
  const [answerInput, setAnswerInput] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);
  const [feedbackHTML, setFeedbackHTML] = useState<string>("");

  const pickCard = useCallback(() => {
    const pool: Observation[] = category === "all" ? itObservationLibrary as Observation[] : (itObservationLibrary as Observation[]).filter(r => r.category === category);

    if (pool.length === 0) return null;

    let filtered = pool.filter((r) => r.question !== lastQuestionText);
    if (filtered.length === 0) filtered = pool;

    return filtered[Math.floor(Math.random() * filtered.length)];
  }, [category, lastQuestionText]);

  const newQuestion = useCallback(() => {
    setIsAnswered(false);
    setFeedbackHTML("");
    setAnswerInput("");

    const q = pickCard();
    if (!q) {
      setQuestionText("No observations available!");
      setCurrentQuestion(null);
      return;
    }

    setCurrentQuestion(q);
    setLastQuestionText(q.question);
    setQuestionText(q.question);
  }, [pickCard]);

  // Initial load
  useEffect(() => {
    newQuestion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const submitAnswer = useCallback(() => {
    if (isAnswered || !currentQuestion) return;
    setIsAnswered(true);
    const displayAnswer = currentQuestion.answer.replace(/\n/g, '<br>');
    setFeedbackHTML(`Correct observation:<br><span class="text-blue-400">${displayAnswer}</span>`);
  }, [isAnswered, currentQuestion]);

  const markCorrect = useCallback(() => {
    setScore(s => {
      const newScore = s + 1;
      if (userId) updateUserScore(userId, 'inorganic_score', newScore);
      return newScore;
    });
    setStreak(s => s + 1);
    newQuestion();
  }, [newQuestion, userId]);

  const markIncorrect = useCallback(() => {
    setStreak(0);
    newQuestion();
  }, [newQuestion]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") { e.preventDefault(); submitAnswer(); }
      if (e.key === "7" && isAnswered) { e.preventDefault(); markCorrect(); }
      if (e.key === "8" && isAnswered) { e.preventDefault(); markIncorrect(); }
      if (e.key === "9") { e.preventDefault(); newQuestion(); }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isAnswered, submitAnswer, markCorrect, markIncorrect, newQuestion]);

  return (
    <div className="max-w-3xl mx-auto p-8 min-h-screen py-12">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Observations Trainer</h1>
        <Link href="/" className="px-6 py-3 bg-[#1f1f1f] rounded-xl text-white hover:bg-[#2a2a2a] transition-colors">
          ← Global Hub
        </Link>
      </div>
      <p className="text-gray-400 mb-6">Identify the observation for each Eduqas inorganic test</p>

      <div className="flex justify-center mb-6">
        <div className="bg-[#111] border border-[#222] px-10 py-4 rounded-3xl flex gap-10 text-lg">
          <div>Score: <span className="text-blue-400 font-bold">{score}</span></div>
          <div>Streak: <span className="text-blue-400 font-bold">{streak}</span> 🔥</div>
        </div>
      </div>

      <div className="flex justify-center gap-6 mb-8">
        <select 
          value={category}
          onChange={(e) => { setLastQuestionText(null); setCategory(e.target.value); }}
          className="bg-[#111] border border-[#333] px-5 py-3 rounded-xl text-center outline-none focus:border-blue-500 text-white"
        >
          <option value="all">All Observations</option>
          <option value="flame">Flame Tests</option>
          <option value="aqueous">Aqueous Complex Ions</option>
          <option value="precipitate">Precipitation Reactions</option>
          <option value="ligand">Ligand Exchange</option>
        </select>
      </div>

      <div className="bg-[#111] border border-[#222] rounded-3xl p-10 mb-6">
        <div className="text-2xl text-center min-h-[120px] flex items-center justify-center font-medium">
          {questionText}
        </div>
      </div>

      <div className="flex gap-4">
        <input 
          type="text" 
          value={answerInput}
          onChange={(e) => setAnswerInput(e.target.value)}
          placeholder="Type your observation..." 
          className="flex-1 bg-[#1a1a1a] border border-[#333] rounded-3xl px-8 py-6 text-lg outline-none focus:border-blue-500 text-white"
        />
        <button onClick={submitAnswer} className="px-10 bg-blue-600 rounded-3xl font-semibold text-white">Submit</button>
      </div>

      <div className={`flex justify-center gap-6 mt-6 ${isAnswered ? '' : 'invisible'}`}>
        <button onClick={markCorrect} className="bg-blue-600 px-6 py-3 rounded-xl font-semibold text-white">✔ Correct (7)</button>
        <button onClick={markIncorrect} className="bg-[#1a1a1a] border border-[#333] px-6 py-3 rounded-xl font-semibold text-white">✖ Incorrect (8)</button>
      </div>

      <div className="flex justify-center mt-6">
        <button onClick={newQuestion} className="px-6 py-3 bg-[#1f1f1f] rounded-xl text-white hover:bg-[#2a2a2a] transition-colors">New Question (9)</button>
      </div>

      <div className="text-center text-xl mt-10 min-h-[60px]" dangerouslySetInnerHTML={{ __html: feedbackHTML }}></div>
    </div>
  );
}
