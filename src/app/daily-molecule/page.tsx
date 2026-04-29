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
        <p className="text-gray-400 text-xl">Molecule of the Day: Paracetamol</p>
      </div>

      <div className="flex justify-center mb-10">
        <div className="bg-[#111] border border-[#222] p-8 rounded-3xl w-full max-w-md flex justify-center items-center">
          {/* Using standard img for simplicity */}
          <img 
            src="/paracetamol.png" 
            alt="Paracetamol structure" 
            className="max-h-48 invert opacity-90"
          />
        </div>
      </div>

      <div className="space-y-6">
        {/* Q1 */}
        <div className="bg-[#111] border border-[#222] rounded-3xl p-8">
          <h3 className="text-2xl font-bold mb-4 text-green-400">Question 1</h3>
          <p className="text-lg text-gray-200 mb-6">
            Write an equation for the base hydrolysis of paracetamol when heated under reflux with excess aqueous sodium hydroxide. State the structures of the salt and the amine formed.
          </p>
          <button 
            onClick={() => toggleAnswer('q1')} 
            className="px-6 py-2 bg-[#1f1f1f] rounded-lg font-semibold hover:bg-[#2a2a2a] transition-colors text-white"
          >
            {openAnswers['q1'] ? 'Hide Answer' : 'Reveal Answer'}
          </button>
          
          {openAnswers['q1'] && (
            <div className="mt-6 p-6 bg-[#1a1a1a] border border-[#333] rounded-xl">
              <p className="text-gray-300 mb-4"><strong>Products:</strong> Sodium 4-aminophenoxide and Sodium ethanoate.</p>
              <p className="text-gray-400 text-sm mb-4">Because excess strong base is used, both the amide link is hydrolysed and the acidic phenol group is deprotonated.</p>
              <div className="font-mono text-sm bg-black p-4 rounded-lg text-gray-300">
                Paracetamol + 2NaOH → NaOC₆H₄NH₂ + CH₃COONa + H₂O
              </div>
            </div>
          )}
        </div>

        {/* Q2 */}
        <div className="bg-[#111] border border-[#222] rounded-3xl p-8">
          <h3 className="text-2xl font-bold mb-4 text-green-400">Question 2</h3>
          <p className="text-lg text-gray-200 mb-6">
            Outline a 3-step synthesis plan to form paracetamol starting from phenol. Include the reagents and essential conditions for each step.
          </p>
          <button 
            onClick={() => toggleAnswer('q2')} 
            className="px-6 py-2 bg-[#1f1f1f] rounded-lg font-semibold hover:bg-[#2a2a2a] transition-colors text-white"
          >
            {openAnswers['q2'] ? 'Hide Answer' : 'Reveal Answer'}
          </button>
          
          {openAnswers['q2'] && (
            <div className="mt-6 p-6 bg-[#1a1a1a] border border-[#333] rounded-xl">
              <ol className="list-decimal list-inside text-gray-300 space-y-4">
                <li><strong>Nitration:</strong> React phenol with dilute HNO₃ at room temperature to form 4-nitrophenol (and 2-nitrophenol, which must be separated).</li>
                <li><strong>Reduction:</strong> Heat 4-nitrophenol under reflux with Tin (Sn) and concentrated HCl, followed by adding NaOH(aq) to liberate the free amine. This forms 4-aminophenol.</li>
                <li><strong>Acylation:</strong> React 4-aminophenol with ethanoyl chloride (or ethanoic anhydride) at room temperature to form paracetamol.</li>
              </ol>
            </div>
          )}
        </div>

        {/* Q3 */}
        <div className="bg-[#111] border border-[#222] rounded-3xl p-8">
          <h3 className="text-2xl font-bold mb-4 text-green-400">Question 3</h3>
          <p className="text-lg text-gray-200 mb-2">
            Describe the appearance of the high-resolution ¹H NMR spectrum of paracetamol. State the relative peak areas and splitting patterns.
          </p>
          <p className="text-sm text-gray-400 mb-6 italic">Note: Specific chemical shift values (positions of the peaks) are not required for this question.</p>
          <button 
            onClick={() => toggleAnswer('q3')} 
            className="px-6 py-2 bg-[#1f1f1f] rounded-lg font-semibold hover:bg-[#2a2a2a] transition-colors text-white"
          >
            {openAnswers['q3'] ? 'Hide Answer' : 'Reveal Answer'}
          </button>
          
          {openAnswers['q3'] && (
            <div className="mt-6 p-6 bg-[#1a1a1a] border border-[#333] rounded-xl">
              <p className="text-gray-300 mb-4">There are 4 distinct proton environments:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-3">
                <li><strong>Singlet, integration 3</strong> (The R-C(=O)-CH₃ group).</li>
                <li><strong>Two Doublets, integration 2 each</strong> (The 4 aromatic Ar-H protons).</li>
                <li><strong>Singlet, integration 1</strong> (The phenol -OH proton).</li>
                <li><strong>Singlet, integration 1</strong> (The amide -NH proton).</li>
              </ul>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
