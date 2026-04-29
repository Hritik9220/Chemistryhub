import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function getUserStats(userId: string) {
  const { data, error } = await supabase
    .from('user_stats')
    .select('*')
    .eq('user_id', userId)
    .single();
    
  if (error && error.code !== 'PGRST116') { // Ignore "no rows returned" error
    console.error("Error fetching stats:", error);
  }
  return data;
}

export async function updateUserScore(userId: string, column: 'reaction_score' | 'structure_score' | 'inorganic_score', newScore: number) {
  const { error } = await supabase
    .from('user_stats')
    .upsert({ user_id: userId, [column]: newScore }, { onConflict: 'user_id' });
  
  if (error) {
    console.error("Failed to sync score:", error);
  }
}
