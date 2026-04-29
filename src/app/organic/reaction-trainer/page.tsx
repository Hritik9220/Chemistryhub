"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { rtReactionLibrary, rtMultiStepLibrary, rtTestLibrary } from "@/lib/data";
import { supabase, getUserStats, updateUserScore } from "@/lib/supabase";

type Reaction = { category: string; from: string; to: string; answer: string; type?: string };

export default function ReactionTrainer() {
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      const uid = session?.user?.id ?? null;
      setUserId(uid);
      if (uid) {
        const stats = await getUserStats(uid);
        if (stats && stats.reaction_score !== undefined) {
          setScore(stats.reaction_score);
        }
      }
    });
  }, []);

  const [category, setCategory] = useState("all");
  const [questionText, setQuestionText] = useState("Loading...");
  const [currentReaction, setCurrentReaction] = useState<Reaction | null>(null);
  const [lastReactionId, setLastReactionId] = useState<string | null>(null);
  const [answerInput, setAnswerInput] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);
  const [feedbackHTML, setFeedbackHTML] = useState<string>("");

  const pickCard = useCallback(() => {
    let pool: Reaction[] = [];
    if (category === "all") pool = rtReactionLibrary as Reaction[];
    else if (category === "multi") pool = rtMultiStepLibrary as Reaction[];
    else if (category === "tests") pool = rtTestLibrary as Reaction[];
    else pool = (rtReactionLibrary as Reaction[]).filter((r) => r.category === category);

    if (pool.length === 0) return null;

    let filtered = pool.filter((r) => `${r.from}-${r.to}` !== lastReactionId);
    if (filtered.length === 0) filtered = pool;

    return filtered[Math.floor(Math.random() * filtered.length)];
  }, [category, lastReactionId]);

  const newQuestion = useCallback(() => {
    setIsAnswered(false);
    setFeedbackHTML("");
    setAnswerInput("");

    const r = pickCard();
    if (!r) {
      setQuestionText("No questions available!");
      setCurrentReaction(null);
      return;
    }

    setCurrentReaction(r);
    setLastReactionId(`${r.from}-${r.to}`);

    if (r.category === "multi") setQuestionText(`How do you convert ${r.from} → ${r.to} (multi-step)?`);
    else if (r.category === "tests") setQuestionText(`What is the test for ${r.from}?`);
    else setQuestionText(`How do you convert ${r.from} → ${r.to}?`);
  }, [pickCard]);

  // Initial load
  useEffect(() => {
    newQuestion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const submitAnswer = useCallback(() => {
    if (isAnswered || !currentReaction) return;
    setIsAnswered(true);
    const displayAnswer = currentReaction.answer.replace(/\n/g, '<br>');
    setFeedbackHTML(`Correct answer:<br><span class="text-purple-400">${displayAnswer}</span>`);
  }, [isAnswered, currentReaction]);

  const markCorrect = useCallback(() => {
    setScore(s => {
      const newScore = s + 1;
      if (userId) updateUserScore(userId, 'reaction_score', newScore);
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
        <h1 className="text-4xl font-bold">Reaction Trainer</h1>
        <Link href="/organic" className="px-6 py-3 bg-[#1f1f1f] rounded-xl text-white hover:bg-[#2a2a2a] transition-colors">
          ← Organic Hub
        </Link>
      </div>
      <p className="text-gray-400 mb-6">Test your knowledge of organic pathways, conditions, and tests.</p>

      <div className="flex justify-center mb-6">
        <div className="bg-[#111] border border-[#222] px-10 py-4 rounded-3xl flex gap-10 text-lg">
          <div>Score: <span className="text-purple-400 font-bold">{score}</span></div>
          <div>Streak: <span className="text-purple-400 font-bold">{streak}</span> 🔥</div>
        </div>
      </div>

      <div className="flex justify-center gap-6 mb-8">
        <select 
          value={category}
          onChange={(e) => { setLastReactionId(null); setCategory(e.target.value); }}
          className="bg-[#111] border border-[#333] px-5 py-3 rounded-xl text-center outline-none focus:border-purple-500 text-white"
        >
          <option value="all">All Reactions</option>
          <option value="aromatic">Aromatic</option>
          <option value="aliphatic">Aliphatic</option>
          <option value="multi">Multiple Step Syntheses</option>
          <option value="tests">Organic Tests</option>
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
          placeholder="Type your answer..." 
          className="flex-1 bg-[#1a1a1a] border border-[#333] rounded-3xl px-8 py-6 text-lg outline-none focus:border-purple-500 text-white"
        />
        <button onClick={submitAnswer} className="px-10 bg-purple-600 rounded-3xl font-semibold text-white">Submit</button>
      </div>

      <div className={`flex justify-center gap-6 mt-6 ${isAnswered ? '' : 'invisible'}`}>
        <button onClick={markCorrect} className="bg-purple-600 px-6 py-3 rounded-xl font-semibold text-white">✔ Correct (7)</button>
        <button onClick={markIncorrect} className="bg-[#1a1a1a] border border-[#333] px-6 py-3 rounded-xl font-semibold text-white">✖ Incorrect (8)</button>
      </div>

      <div className="flex justify-center mt-6">
        <button onClick={newQuestion} className="px-6 py-3 bg-[#1f1f1f] rounded-xl text-white hover:bg-[#2a2a2a] transition-colors">New Question (9)</button>
      </div>

      <div className="text-center text-xl mt-10 min-h-[60px]" dangerouslySetInnerHTML={{ __html: feedbackHTML }}></div>
    </div>
  );
}
