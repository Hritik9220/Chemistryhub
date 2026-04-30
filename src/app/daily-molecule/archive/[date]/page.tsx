import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { molecules } from "@/lib/molecules";
import QuestionCard from "@/components/QuestionCard";

export const dynamic = "force-dynamic";

export default async function HistoricalMoleculePage({ 
  params 
}: { 
  params: Promise<{ date: string }> 
}) {
  const { date } = await params;

  // Fetch the record from the archive for this date
  const { data: record } = await supabase
    .from('daily_molecule_archive')
    .select('*')
    .eq('date', date)
    .single();

  if (!record) {
    return (
      <div className="max-w-4xl mx-auto p-8 min-h-screen flex flex-col py-12 justify-center items-center">
        <h1 className="text-3xl font-bold text-white mb-4">No Record Found</h1>
        <p className="text-gray-400 mb-8">We couldn't find a molecule archived on {date}.</p>
        <Link href="/daily-molecule/archive" className="px-6 py-3 bg-[#1f1f1f] rounded-xl text-white hover:bg-[#2a2a2a] transition-colors">
          Return to Archive
        </Link>
      </div>
    );
  }

  // Find the full molecule data from our local bank using the molecule_id
  const currentMolecule = molecules.find(m => m.id === record.molecule_id);

  if (!currentMolecule) {
    return (
      <div className="max-w-4xl mx-auto p-8 min-h-screen flex flex-col py-12 justify-center items-center">
        <h1 className="text-3xl font-bold text-white mb-4">Molecule Data Missing</h1>
        <p className="text-gray-400 mb-8">The molecule {record.molecule_name} is in the archive, but its data is no longer in the code.</p>
        <Link href="/daily-molecule/archive" className="px-6 py-3 bg-[#1f1f1f] rounded-xl text-white hover:bg-[#2a2a2a] transition-colors">
          Return to Archive
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8 min-h-screen flex flex-col py-12">
      <div className="mb-6 flex justify-between items-center">
        <Link href="/daily-molecule/archive" className="inline-block px-6 py-3 bg-[#1f1f1f] rounded-xl text-white hover:bg-[#2a2a2a] transition-colors">
          ← Back to Archive
        </Link>
        <span className="text-gray-500 font-mono bg-[#111] px-4 py-2 rounded-lg border border-[#222]">
          Archived: {date}
        </span>
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
