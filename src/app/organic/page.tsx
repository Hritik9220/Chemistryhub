import Link from "next/link";

export default function OrganicHub() {
  return (
    <div className="max-w-4xl mx-auto p-8 min-h-screen flex flex-col py-12">
      <div className="mb-6">
        <Link href="/" className="inline-block px-6 py-3 bg-[#1f1f1f] rounded-xl text-white hover:bg-[#2a2a2a] transition-colors">
          ← Global Hub
        </Link>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-purple-500">Organic Chemistry</h1>
        <p className="text-gray-400 text-xl">Reactions, Mechanisms, and Structures</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Link href="/organic/reaction-trainer" className="bg-[#111] border border-[#222] rounded-3xl p-10 cursor-pointer hover:border-purple-600 transition-all hover:-translate-y-1 block">
          <div className="text-5xl mb-6 text-center">🧪</div>
          <h2 className="text-2xl font-bold mb-3 text-center">Reaction Trainer</h2>
          <p className="text-gray-400 text-center mb-6">Test your knowledge of organic pathways</p>
          <div className="flex justify-center">
            <div className="px-8 py-3 bg-purple-600 rounded-xl font-semibold text-center mt-auto w-full text-white">Start Training</div>
          </div>
        </Link>

        <Link href="/organic/structure-drawer" className="bg-[#111] border border-[#222] rounded-3xl p-10 cursor-pointer hover:border-purple-600 transition-all hover:-translate-y-1 block">
          <div className="text-5xl mb-6 text-center">✏️</div>
          <h2 className="text-2xl font-bold mb-3 text-center">Structure Drawer</h2>
          <p className="text-gray-400 text-center mb-6">Draw skeletal structures of products</p>
          <div className="flex justify-center">
            <div className="px-8 py-3 bg-purple-600 rounded-xl font-semibold text-center mt-auto w-full text-white">Start Drawing</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
