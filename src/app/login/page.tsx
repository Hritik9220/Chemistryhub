"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    if (isSignUp) {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) setError(error.message);
      else setMessage("Account created! You can now sign in.");
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) setError(error.message);
      else {
        router.push("/");
      }
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-8 min-h-screen py-20 flex flex-col justify-center">
      <div className="mb-6">
        <Link href="/" className="inline-block px-6 py-3 bg-[#1f1f1f] rounded-xl text-white hover:bg-[#2a2a2a] transition-colors">
          ← Back to Hub
        </Link>
      </div>

      <div className="bg-[#111] border border-[#222] rounded-3xl p-10">
        <h1 className="text-4xl font-bold mb-8 text-center">{isSignUp ? "Create Account" : "Welcome Back"}</h1>
        
        {error && <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-xl mb-6">{error}</div>}
        {message && <div className="bg-green-500/10 border border-green-500/50 text-green-400 p-4 rounded-xl mb-6">{message}</div>}

        <form onSubmit={handleAuth} className="flex flex-col gap-6">
          <div>
            <label className="block text-gray-400 mb-2 font-medium">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl px-6 py-4 text-lg outline-none focus:border-purple-500 text-white transition-colors"
              placeholder="student@school.edu"
              required
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2 font-medium">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl px-6 py-4 text-lg outline-none focus:border-purple-500 text-white transition-colors"
              placeholder="••••••••"
              required
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-4 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 rounded-xl font-bold text-white transition-colors mt-4 text-lg"
          >
            {loading ? "Processing..." : (isSignUp ? "Sign Up" : "Sign In")}
          </button>
        </form>

        <div className="mt-8 text-center text-gray-400">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <button 
            type="button"
            onClick={() => { setIsSignUp(!isSignUp); setError(null); setMessage(null); }}
            className="ml-2 text-purple-400 hover:text-purple-300 font-semibold underline underline-offset-4"
          >
            {isSignUp ? "Sign In" : "Register"}
          </button>
        </div>
      </div>
    </div>
  );
}
