const fs = require('fs');
const env = fs.readFileSync('.env.local', 'utf8');
const { createClient } = require('@supabase/supabase-js');

let supabaseUrl = '';
let supabaseKey = '';
let serviceRoleKey = '';

env.split('\n').forEach(line => {
  if (line.startsWith('NEXT_PUBLIC_SUPABASE_URL=')) supabaseUrl = line.split('=')[1].trim();
  if (line.startsWith('NEXT_PUBLIC_SUPABASE_ANON_KEY=')) supabaseKey = line.split('=')[1].trim();
  if (line.startsWith('SUPABASE_SERVICE_ROLE_KEY=')) serviceRoleKey = line.split('=')[1].trim();
});

const keyToUse = serviceRoleKey || supabaseKey;
const supabase = createClient(supabaseUrl, keyToUse);

async function fixArchive() {
  console.log("Using key starting with:", keyToUse.substring(0, 10));
  const { data, error } = await supabase
    .from('daily_molecule_archive')
    .delete()
    .eq('date', '2026-05-07');
    
  if (error) console.error("Error:", error);
  else console.log("Deleted data:", data);
}

fixArchive();
