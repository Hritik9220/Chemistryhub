"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { User } from "@supabase/supabase-js";

export default function Home() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div className="max-w-4xl mx-auto p-8 min-h-screen flex flex-col justify-center relative">
      {/* Auth Status Bar */}
      <div className="absolute top-8 right-8 flex gap-4 items-center">
        {user ? (
          <div className="flex items-center gap-4 bg-[#111] border border-[#222] px-6 py-3 rounded-2xl">
            <span className="text-gray-400">Signed in as <strong className="text-white">{user.email}</strong></span>
            <button onClick={handleSignOut} className="text-red-400 hover:text-red-300 font-semibold transition-colors">Sign Out</button>
          </div>
        ) : (
          <Link href="/login" className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-2xl font-bold text-white transition-colors">
            Sign In
          </Link>
        )}
      </div>

      <div className="text-center mb-12 mt-16">
        <h1 className="text-5xl font-bold mb-4">Chemistry Revision Hub</h1>
        <p className="text-gray-400 text-xl">A-Level Chemistry • Eduqas Aligned</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <Link href="/organic" className="bg-[#111] border border-[#222] rounded-3xl p-10 cursor-pointer hover:border-purple-600 transition-all hover:-translate-y-1 block">
          <div className="text-6xl mb-6 text-center">🌿</div>
          <h2 className="text-2xl font-bold mb-3 text-center">Organic Chemistry</h2>
          <p className="text-gray-400 text-center mb-6">Reactions, mechanisms, and structures</p>
          <div className="flex justify-center">
            <div className="px-8 py-3 bg-purple-600 rounded-xl font-semibold text-center mt-auto w-full text-white">Enter Hub</div>
          </div>
        </Link>

        <Link href="/inorganic" className="bg-[#111] border border-[#222] rounded-3xl p-10 cursor-pointer hover:border-blue-500 transition-all hover:-translate-y-1 block">
          <div className="text-6xl mb-6 text-center">💎</div>
          <h2 className="text-2xl font-bold mb-3 text-center">Inorganic Chemistry</h2>
          <p className="text-gray-400 text-center mb-6">Flame tests, complex colours, and precipitates</p>
          <div className="flex justify-center">
            <div className="px-8 py-3 bg-blue-600 rounded-xl font-semibold text-center mt-auto w-full text-white">Enter Hub</div>
          </div>
        </Link>

        <Link href="/daily-molecule" className="bg-[#111] border border-[#222] rounded-3xl p-10 cursor-pointer hover:border-green-500 transition-all hover:-translate-y-1 block">
          <div className="text-6xl mb-6 text-center">🗓️</div>
          <h2 className="text-2xl font-bold mb-3 text-center">Daily Molecule</h2>
          <p className="text-gray-400 text-center mb-6">Hard A-Level application questions</p>
          <div className="flex justify-center">
            <div className="px-8 py-3 bg-green-600 rounded-xl font-semibold text-center mt-auto w-full text-white">Enter Challenge</div>
          </div>
        </Link>
      </div>

      <div className="text-center mt-16 text-gray-500 text-sm">
        <p>Complete A-Level exam preparation</p>
        <p className="mt-2">Organic Synthesis • Transition Metals • Observations</p>
      </div>
    </div>
  );
}
