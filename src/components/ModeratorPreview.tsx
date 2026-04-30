"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ModeratorPreview({ futureMolecules }: { futureMolecules: any[] }) {
  const [isModerator, setIsModerator] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user?.email === "hritiksanyal@gmail.com") {
        setIsModerator(true);
      }
    });
  }, []);

  if (!isModerator || futureMolecules.length === 0) return null;

  return (
    <div>
      <div className="mb-6 border-b border-[#333] pb-2 flex items-center gap-3">
        <span className="text-2xl">🔮</span>
        <h2 className="text-2xl font-bold text-yellow-500">Moderator Preview (Future Days)</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {futureMolecules.map((entry) => (
          <Link 
            key={entry.date} 
            href={`/daily-molecule/archive/${entry.date}?mod=true`}
            className="bg-[#1a1500] border border-yellow-700 rounded-3xl p-6 cursor-pointer hover:border-yellow-400 transition-all hover:-translate-y-1 flex flex-col items-center"
          >
            <div className="text-3xl mb-4">🤫</div>
            <h2 className="text-xl font-bold text-white mb-2 text-center">{entry.molecule_name}</h2>
            <p className="text-yellow-600 text-sm">{entry.date}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
