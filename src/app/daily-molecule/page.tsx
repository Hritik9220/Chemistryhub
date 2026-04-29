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
        <p className="text-gray-400 text-xl">Molecule of the Day: Aspirin</p>
      </div>

      <div className="flex justify-center mb-10">
        <div className="bg-[#111] border border-[#222] p-8 rounded-3xl w-full max-w-md flex flex-col justify-center items-center">
          {/* Change this to aspirin.png once you upload the image! */}
          <div className="text-8xl mb-4">💊</div>
          <p className="text-gray-500 text-sm">2-acetoxybenzoic acid</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Q1 */}
        <div className="bg-[#111] border border-[#222] rounded-3xl p-8">
          <h3 className="text-2xl font-bold mb-4 text-green-400">Question 1</h3>
          <p className="text-lg text-gray-200 mb-6">
            Aspirin is synthesized by reacting 2-hydroxybenzoic acid with ethanoic anhydride. State the conditions required for this reaction and explain why ethanoic anhydride is used in preference to ethanoyl chloride in industrial manufacturing.
          </p>
          <button 
            onClick={() => toggleAnswer('q1')} 
            className="px-6 py-2 bg-[#1f1f1f] rounded-lg font-semibold hover:bg-[#2a2a2a] transition-colors text-white"
          >
            {openAnswers['q1'] ? 'Hide Answer' : 'Reveal Answer'}
          </button>
          
          {openAnswers['q1'] && (
            <div className="mt-6 p-6 bg-[#1a1a1a] border border-[#333] rounded-xl">
              <p className="text-gray-300 mb-4"><strong>Conditions:</strong> Warm with a few drops of concentrated phosphoric(V) acid (or sulfuric acid) as a catalyst.</p>
              <p className="text-gray-300"><strong>Why Ethanoic Anhydride?</strong></p>
              <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                <li>It is cheaper than ethanoyl chloride.</li>
                <li>It is less corrosive and less vulnerable to hydrolysis.</li>
                <li>It does not produce dangerous, toxic, and corrosive hydrogen chloride (HCl) fumes.</li>
                <li>The reaction is less violently exothermic, making it safer to control on an industrial scale.</li>
              </ul>
            </div>
          )}
        </div>

        {/* Q2 */}
        <div className="bg-[#111] border border-[#222] rounded-3xl p-8">
          <h3 className="text-2xl font-bold mb-4 text-green-400">Question 2</h3>
          <p className="text-lg text-gray-200 mb-6">
            Aspirin can be hydrolyzed by heating under reflux with a known excess of aqueous sodium hydroxide. Give the structures of the organic products formed during the <strong>complete base hydrolysis</strong> of aspirin with excess NaOH.
          </p>
          <button 
            onClick={() => toggleAnswer('q2')} 
            className="px-6 py-2 bg-[#1f1f1f] rounded-lg font-semibold hover:bg-[#2a2a2a] transition-colors text-white"
          >
            {openAnswers['q2'] ? 'Hide Answer' : 'Reveal Answer'}
          </button>
          
          {openAnswers['q2'] && (
            <div className="mt-6 p-6 bg-[#1a1a1a] border border-[#333] rounded-xl">
              <p className="text-gray-300 mb-4"><strong>Products:</strong> Sodium ethanoate and the disodium salt of 2-hydroxybenzoic acid (sodium 2-oxidobenzoate).</p>
              <p className="text-gray-400 text-sm mb-4">Because excess strong base is used, the ester linkage is hydrolysed AND the acidic carboxylic acid group is deprotonated. Furthermore, the newly formed phenol group will also be deprotonated to form a phenoxide ion.</p>
            </div>
          )}
        </div>

        {/* Q3 */}
        <div className="bg-[#111] border border-[#222] rounded-3xl p-8">
          <h3 className="text-2xl font-bold mb-4 text-green-400">Question 3</h3>
          <p className="text-lg text-gray-200 mb-6">
            Outline the procedure to purify the crude aspirin product by recrystallisation, and explain how the purity of the final crystals can be verified using melting point determination.
          </p>
          <button 
            onClick={() => toggleAnswer('q3')} 
            className="px-6 py-2 bg-[#1f1f1f] rounded-lg font-semibold hover:bg-[#2a2a2a] transition-colors text-white"
          >
            {openAnswers['q3'] ? 'Hide Answer' : 'Reveal Answer'}
          </button>
          
          {openAnswers['q3'] && (
            <div className="mt-6 p-6 bg-[#1a1a1a] border border-[#333] rounded-xl">
              <p className="text-gray-300 mb-2"><strong>Recrystallisation Procedure:</strong></p>
              <ol className="list-decimal list-inside text-gray-400 space-y-2 mb-6">
                <li>Dissolve the crude aspirin in the <em>minimum volume</em> of <em>hot</em> solvent (e.g., ethanol/water mix).</li>
                <li>Filter the hot solution through fluted filter paper to remove any insoluble impurities.</li>
                <li>Allow the filtrate to cool slowly to room temperature to let the aspirin crystallise out (soluble impurities remain in solution).</li>
                <li>Filter the crystals under reduced pressure using a Buchner funnel and wash with a little ice-cold solvent.</li>
                <li>Leave to dry.</li>
              </ol>
              <p className="text-gray-300 mb-2"><strong>Purity Verification:</strong></p>
              <p className="text-gray-400 text-sm">Measure the melting point using melting point apparatus. Pure aspirin will melt over a very narrow range (sharp melting point) that closely matches the literature value (approx 136°C). If impurities are present, the melting point will be <em>lowered</em> and it will melt over a <em>broader range</em>.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
