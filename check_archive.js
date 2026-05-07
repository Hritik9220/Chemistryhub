const fs = require('fs');
const env = fs.readFileSync('.env.local', 'utf8');
const { createClient } = require('@supabase/supabase-js');

let supabaseUrl = '';
let supabaseKey = '';

env.split('\n').forEach(line => {
  if (line.startsWith('NEXT_PUBLIC_SUPABASE_URL=')) supabaseUrl = line.split('=')[1].trim();
  if (line.startsWith('NEXT_PUBLIC_SUPABASE_ANON_KEY=')) supabaseKey = line.split('=')[1].trim();
});

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkArchive() {
  const { data, error } = await supabase
    .from('daily_molecule_archive')
    .select('*')
    .order('date', { ascending: false })
    .limit(10);
    
  if (error) console.error(error);
  console.log(data);
}

checkArchive();
