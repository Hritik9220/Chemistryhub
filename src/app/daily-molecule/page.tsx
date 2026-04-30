import Link from "next/link";
import { molecules } from "@/lib/molecules";
import QuestionCard from "@/components/QuestionCard";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export default async function DailyMolecule() {
  // Calculate days since the feature launched (April 29, 2026)
  const START_DATE = new Date("2026-04-29").getTime();
  const daysSinceStart = Math.max(0, Math.floor((Date.now() - START_DATE) / 86400000));
  
  // Use direct indexing so past days don't change if we append new molecules
  // If we run out of molecules, we just stay on the last one until a new one is added
  const safeIndex = Math.min(daysSinceStart, molecules.length - 1);
  const currentMolecule = molecules[safeIndex];

  // Database Archiving Logic
  if (currentMolecule) {
    const today = new Date();
    const dateStr = today.toISOString().split('T')[0];

    const { data: existing } = await supabase
      .from('daily_molecule_archive')
      .select('id')
      .eq('date', dateStr)
      .single();

    if (!existing) {
      await supabase.from('daily_molecule_archive').insert({
        date: dateStr,
        molecule_id: currentMolecule.id,
        molecule_name: currentMolecule.name,
      });
    }
  }

  if (!currentMolecule) {
    return (
      <div className="max-w-4xl mx-auto p-8 min-h-screen flex flex-col py-12 justify-center items-center">
        <h1 className="text-3xl font-bold text-white mb-4">No Molecule Available</h1>
        <Link href="/" className="px-6 py-3 bg-[#1f1f1f] rounded-xl text-white hover:bg-[#2a2a2a] transition-colors">
          Return to Global Hub
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8 min-h-screen flex flex-col py-12">
      <div className="mb-6 flex justify-between items-center">
        <Link href="/" className="inline-block px-6 py-3 bg-[#1f1f1f] rounded-xl text-white hover:bg-[#2a2a2a] transition-colors">
          ← Global Hub
        </Link>
        <Link href="/daily-molecule/archive" className="inline-block px-6 py-3 bg-[#1f1f1f] rounded-xl text-white hover:bg-[#2a2a2a] transition-colors font-semibold">
          Archive 🗓️
        </Link>
      </div>
      
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-green-500">Daily Molecule</h1>
        <p className="text-gray-400 text-xl">Molecule of the Day: {currentMolecule.name}</p>
      </div>

      <div className="flex justify-center mb-10">
        <div className="bg-[#111] border border-[#222] p-8 rounded-3xl w-full max-w-2xl flex flex-col justify-center items-center">
          <img 
            src={currentMolecule.image} 
            alt={`${currentMolecule.name} structure`} 
            className="max-h-48 invert opacity-90"
          />
          <p className="text-gray-500 text-sm mt-4">{currentMolecule.formula}</p>
          {currentMolecule.description && (
            <div className="mt-6 p-4 bg-[#1a1a1a] border border-[#333] rounded-xl text-center">
              <p className="text-gray-300">{currentMolecule.description}</p>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-6">
        {currentMolecule.questions.map((q) => (
          <QuestionCard key={q.id} question={q} />
        ))}
      </div>
    </div>
  );
}
