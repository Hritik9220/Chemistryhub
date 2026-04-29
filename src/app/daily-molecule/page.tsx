"use client";

import { useState } from "react";
import Link from "next/link";

export default function DailyMolecule() {
  const [openAnswers, setOpenAnswers] = useState<Record<string, boolean>>({});

  const toggleAnswer = (id: string) => {
    setOpenAnswers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-8 min-h-screen flex flex-col py-12">
      <div className="mb-6">
        <Link href="/" className="inline-block px-6 py-3 bg-[#1f1f1f] rounded-xl text-white hover:bg-[#2a2a2a] transition-colors">
          ← Global Hub
        </Link>
      </div>
      
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-green-500">Daily Molecule</h1>
        <p className="text-gray-400 text-xl">Molecule of the Day: Benzocaine</p>
      </div>

      <div className="flex justify-center mb-10">
        <div className="bg-[#111] border border-[#222] p-8 rounded-3xl w-full max-w-md flex flex-col justify-center items-center">
          <img 
            src="/benzocaine.png" 
            alt="Benzocaine structure" 
            className="max-h-48 invert opacity-90"
          />
          <p className="text-gray-500 text-sm mt-4">Ethyl 4-aminobenzoate</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Q1 */}
        <div className="bg-[#111] border border-[#222] rounded-3xl p-8">
          <h3 className="text-2xl font-bold mb-4 text-green-400">Question 1</h3>
          <p className="text-lg text-gray-200 mb-6">
            Benzocaine contains a primary aromatic amine group. State the reagents and the specific temperature conditions required to convert this amine group into a <strong>diazonium salt</strong>.
          </p>
          <button 
            onClick={() => toggleAnswer('q1')} 
            className="px-6 py-2 bg-[#1f1f1f] rounded-lg font-semibold hover:bg-[#2a2a2a] transition-colors text-white"
          >
            {openAnswers['q1'] ? 'Hide Answer' : 'Reveal Answer'}
          </button>
          
          {openAnswers['q1'] && (
            <div className="mt-6 p-6 bg-[#1a1a1a] border border-[#333] rounded-xl">
              <p className="text-gray-300 mb-4"><strong>Reagents:</strong> Sodium nitrate(III) (sodium nitrite, NaNO₂) and dilute hydrochloric acid (HCl).</p>
              <p className="text-gray-300"><strong>Conditions:</strong> The temperature must be kept below <strong>10°C</strong> (usually between 0°C and 5°C) to prevent the diazonium salt from decomposing into a phenol and nitrogen gas.</p>
            </div>
          )}
        </div>

        {/* Q2 */}
        <div className="bg-[#111] border border-[#222] rounded-3xl p-8">
          <h3 className="text-2xl font-bold mb-4 text-green-400">Question 2</h3>
          <p className="text-lg text-gray-200 mb-6">
            The diazonium salt formed in Question 1 can be reacted with phenol to form a brightly coloured <strong>azo dye</strong>. Name the reagents and conditions required for this coupling reaction, and state the term used to describe the part of a molecule responsible for its colour.
          </p>
          <button 
            onClick={() => toggleAnswer('q2')} 
            className="px-6 py-2 bg-[#1f1f1f] rounded-lg font-semibold hover:bg-[#2a2a2a] transition-colors text-white"
          >
            {openAnswers['q2'] ? 'Hide Answer' : 'Reveal Answer'}
          </button>
          
          {openAnswers['q2'] && (
            <div className="mt-6 p-6 bg-[#1a1a1a] border border-[#333] rounded-xl">
              <p className="text-gray-300 mb-2"><strong>Reagents:</strong> Phenol dissolved in <strong>aqueous sodium hydroxide</strong> (alkaline conditions).</p>
              <p className="text-gray-300 mb-4"><strong>Conditions:</strong> The mixture must be kept <strong>cold</strong>.</p>
              <p className="text-gray-300"><strong>Term:</strong> The part of the compound responsible for the colour is called the <strong>chromophore</strong>.</p>
            </div>
          )}
        </div>

        {/* Q3 */}
        <div className="bg-[#111] border border-[#222] rounded-3xl p-8">
          <h3 className="text-2xl font-bold mb-4 text-green-400">Question 3</h3>
          <p className="text-lg text-gray-200 mb-6">
            Benzocaine can be synthesized from <strong>4-ethylphenylamine</strong> in a multi-step process. Identify the reagents required for the oxidation of the ethyl side-chain and the final esterification step.
          </p>
          <button 
            onClick={() => toggleAnswer('q3')} 
            className="px-6 py-2 bg-[#1f1f1f] rounded-lg font-semibold hover:bg-[#2a2a2a] transition-colors text-white"
          >
            {openAnswers['q3'] ? 'Hide Answer' : 'Reveal Answer'}
          </button>
          
          {openAnswers['q3'] && (
            <div className="mt-6 p-6 bg-[#1a1a1a] border border-[#333] rounded-xl">
              <ol className="list-decimal list-inside text-gray-400 space-y-4">
                <li>
                  <strong className="text-gray-200">Oxidation:</strong> Heat the compound with <strong>alkaline potassium manganate(VII)</strong> (KMnO₄), followed by acidification. This oxidizes the ethyl side-chain into a carboxylic acid group.
                </li>
                <li>
                  <strong className="text-gray-200">Esterification:</strong> Heat the resulting acid under reflux with <strong>ethanol</strong> and <strong>concentrated sulfuric acid</strong> catalyst to form benzocaine.
                </li>
              </ol>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
