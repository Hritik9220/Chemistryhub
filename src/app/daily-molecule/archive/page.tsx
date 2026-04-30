import Link from "next/link";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export default async function ArchivePage() {
  const { data: archive, error } = await supabase
    .from("daily_molecule_archive")
    .select("*")
    .order("date", { ascending: false });

  return (
    <div className="max-w-4xl mx-auto p-8 min-h-screen flex flex-col py-12">
      <div className="mb-6 flex items-center justify-between">
        <Link href="/daily-molecule" className="inline-block px-6 py-3 bg-[#1f1f1f] rounded-xl text-white hover:bg-[#2a2a2a] transition-colors">
          ← Today's Molecule
        </Link>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-green-500">Molecule Archive 📅</h1>
        <p className="text-gray-400 text-xl">Review and practice previous Daily Molecules</p>
      </div>

      {(!archive || archive.length === 0) && !error ? (
        <div className="text-center text-gray-400 mt-10">
          <p>No molecules have been archived yet.</p>
        </div>
      ) : error ? (
        <div className="text-center text-red-400 mt-10">
          <p>Failed to load archive. Make sure the database script has been run.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {archive?.map((entry) => (
            <Link 
              key={entry.id} 
              href={`/daily-molecule/archive/${entry.date}`}
              className="bg-[#111] border border-[#222] rounded-3xl p-6 cursor-pointer hover:border-green-500 transition-all hover:-translate-y-1 flex flex-col items-center"
            >
              <div className="text-3xl mb-4">🗓️</div>
              <h2 className="text-xl font-bold text-white mb-2 text-center">{entry.molecule_name}</h2>
              <p className="text-gray-500 text-sm">{entry.date}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
