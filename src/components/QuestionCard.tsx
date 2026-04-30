"use client";

import { useState } from "react";
import { Question } from "@/lib/molecules";

export default function QuestionCard({ question }: { question: Question }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#111] border border-[#222] rounded-3xl p-8">
      <h3 className="text-2xl font-bold mb-4 text-green-400">{question.title}</h3>
      <p className="text-lg text-gray-200 mb-6" dangerouslySetInnerHTML={{ __html: question.questionText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
      
      {question.questionImage && (
        <div className="flex justify-center mb-6">
          <div className="bg-[#0a0a0a] border border-[#222] p-4 rounded-2xl">
            <img 
              src={question.questionImage.src} 
              alt={question.questionImage.alt} 
              className="max-h-32 invert opacity-90"
            />
            {question.questionImage.caption && (
              <p className="text-center text-gray-500 text-xs mt-2">{question.questionImage.caption}</p>
            )}
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="px-6 py-2 bg-[#1f1f1f] rounded-lg font-semibold hover:bg-[#2a2a2a] transition-colors text-white"
      >
        {isOpen ? 'Hide Answer' : 'Reveal Answer'}
      </button>
      
      {isOpen && (
        <div className="mt-6 p-6 bg-[#1a1a1a] border border-[#333] rounded-xl space-y-4">
          {question.answerElements.map((el, index) => (
            <div key={index}>
              {el.label.includes('Step') ? (
                <>
                  <p className="text-gray-200 font-bold">{el.label}</p>
                  <p className="text-gray-400" dangerouslySetInnerHTML={{ __html: el.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                </>
              ) : (
                <p className="text-gray-300">
                  <strong>{el.label}:</strong> <span dangerouslySetInnerHTML={{ __html: el.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
