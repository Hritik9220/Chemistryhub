"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Script from "next/script";
import { sdReactionLibrary } from "@/lib/data";
import { supabase, getUserStats, updateUserScore } from "@/lib/supabase";

type StructureReaction = { category: string; type: string; reactant: string; product: string; reagents: string; smiles: string[] };

export default function StructureDrawer() {
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      const uid = session?.user?.id ?? null;
      setUserId(uid);
      if (uid) {
        const stats = await getUserStats(uid);
        if (stats && stats.structure_score !== undefined) {
          setScore(stats.structure_score);
        }
      }
    });
  }, []);

  const [category, setCategory] = useState("all");
  const [questionHTML, setQuestionHTML] = useState("Loading...");
  const [currentReaction, setCurrentReaction] = useState<StructureReaction | null>(null);
  const [lastReactionId, setLastReactionId] = useState<string | null>(null);
  const [feedbackHTML, setFeedbackHTML] = useState<string>("");
  const [jsmeLoaded, setJsmeLoaded] = useState(false);

  const getFilteredReactions = useCallback(() => {
    if (category === "all") return sdReactionLibrary as StructureReaction[];
    if (category === "multi") return (sdReactionLibrary as StructureReaction[]).filter(r => r.category === "multi");
    return (sdReactionLibrary as StructureReaction[]).filter(r => r.category === category);
  }, [category]);

  const pickReaction = useCallback(() => {
    const pool = getFilteredReactions();
    if (pool.length === 0) return null;
    
    const typeGroups: Record<string, StructureReaction[]> = {};
    for (const r of pool) {
      if (!typeGroups[r.type]) typeGroups[r.type] = [];
      typeGroups[r.type].push(r);
    }
    
    const types = Object.keys(typeGroups);
    const randomType = types[Math.floor(Math.random() * types.length)];
    const typeReactions = typeGroups[randomType];
    
    let filtered = typeReactions.filter(r => `${r.reactant}-${r.product}` !== lastReactionId);
    if (filtered.length === 0) filtered = typeReactions;
    
    return filtered[Math.floor(Math.random() * filtered.length)];
  }, [getFilteredReactions, lastReactionId]);

  const clearDrawing = () => {
    // @ts-ignore
    if (window.sdJsmeApplet) window.sdJsmeApplet.clear();
  };

  const newQuestion = useCallback(() => {
    const r = pickReaction();
    if (!r) {
      setQuestionHTML("No reactions available!");
      setCurrentReaction(null);
      return;
    }
    
    setCurrentReaction(r);
    setLastReactionId(`${r.reactant}-${r.product}`);
    setQuestionHTML(`<strong>${r.reactant} → ?</strong><br><span class="text-lg text-gray-400">${r.reagents}</span>`);
    setFeedbackHTML("");
    clearDrawing();
  }, [pickReaction]);

  useEffect(() => {
    if (jsmeLoaded) {
      newQuestion();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, jsmeLoaded]);

  useEffect(() => {
    const timer = setInterval(() => {
      // @ts-ignore
      if (window.JSApplet && document.getElementById("jsme_container")) {
        // @ts-ignore
        window.sdJsmeApplet = new window.JSApplet.JSME("jsme_container", "700px", "500px");
        setJsmeLoaded(true);
        clearInterval(timer);
      }
    }, 100);
    
    return () => {
      clearInterval(timer);
      // @ts-ignore
      window.sdJsmeApplet = null; // Clean up so it re-initializes on returning to the page
    };
  }, []);

  const checkAnswer = () => {
    // @ts-ignore
    if (!window.sdJsmeApplet) {
      setFeedbackHTML('<span class="text-yellow-400">Editor not loaded yet</span>');
      return;
    }
    // @ts-ignore
    const drawnSmiles = window.sdJsmeApplet.smiles();
    if (!drawnSmiles || drawnSmiles.trim() === '') {
      setFeedbackHTML('<span class="text-yellow-400">Please draw a structure first</span>');
      return;
    }
    
    const drawnNorm = drawnSmiles.replace(/\s/g, '').toLowerCase();
    if (!currentReaction) return;
    
    const correctVariants = Array.isArray(currentReaction.smiles) ? currentReaction.smiles : [currentReaction.smiles];
    const match = correctVariants.some(v => drawnNorm === v);
    
    if (match) {
      setScore(s => {
        const newScore = s + 1;
        if (userId) updateUserScore(userId, 'structure_score', newScore);
        return newScore;
      });
      setStreak(s => s + 1);
      setFeedbackHTML(`<span class="text-green-400 text-2xl font-bold">✔ Correct!</span><br><span class="text-gray-400 text-base">Product: ${currentReaction.product}</span>`);
    } else {
      setStreak(0);
      setFeedbackHTML(`<span class="text-red-400 text-2xl font-bold">✖ Incorrect</span><br><span class="text-gray-400 text-sm">Expected: ${currentReaction.product}</span><br><span class="text-gray-400 text-sm">Your SMILES: ${drawnNorm}</span><br><span class="text-gray-400 text-sm">Accepted: ${correctVariants.join(' or ')}</span>`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 min-h-screen py-12">
      <Script 
        src="https://jsme-editor.github.io/dist/jsme/jsme.nocache.js" 
        strategy="lazyOnload"
      />
      
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Structure Drawer</h1>
        <Link href="/organic" className="px-6 py-3 bg-[#1f1f1f] rounded-xl text-white hover:bg-[#2a2a2a] transition-colors">
          ← Organic Hub
        </Link>
      </div>
      <p className="text-gray-400 mb-6">Draw the correct product structure</p>

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
          <option value="aliphatic">Aliphatic</option>
          <option value="aromatic">Aromatic</option>
          <option value="multi">Multiple Step Syntheses</option>
        </select>
      </div>

      <div className="bg-[#111] border border-[#222] rounded-3xl p-10 mb-6">
        <div 
          className="text-2xl text-center mb-6 min-h-[60px]"
          dangerouslySetInnerHTML={{ __html: questionHTML }}
        ></div>
        <div className="flex justify-center">
          <div id="jsme_container"></div>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <button onClick={checkAnswer} className="px-8 py-4 bg-purple-600 rounded-xl font-semibold text-white">Check Answer</button>
        <button onClick={clearDrawing} className="px-8 py-4 bg-[#1a1a1a] border border-[#333] rounded-xl font-semibold text-white">Clear</button>
        <button onClick={newQuestion} className="px-8 py-4 bg-[#1f1f1f] rounded-xl font-semibold text-white hover:bg-[#2a2a2a] transition-colors">New Question</button>
      </div>

      <div className="text-center text-xl mt-6 min-h-[100px]" dangerouslySetInnerHTML={{ __html: feedbackHTML }}></div>
    </div>
  );
}
