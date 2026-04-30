-- Run this in your Supabase SQL Editor to create the archive table

CREATE TABLE daily_molecule_archive (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    date DATE NOT NULL UNIQUE,
    molecule_id TEXT NOT NULL,
    molecule_name TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Add an index on date for faster lookups
CREATE INDEX idx_daily_molecule_date ON daily_molecule_archive(date);

-- Enable Row Level Security
ALTER TABLE daily_molecule_archive ENABLE ROW LEVEL SECURITY;

-- Allow public read access (since it's an archive users will view)
CREATE POLICY "Public profiles are viewable by everyone."
  ON daily_molecule_archive FOR SELECT
  USING ( true );

-- Restrict insert/update/delete to service role only (since our Server Component uses the service role or we can bypass RLS via server)
-- Note: If your Next.js Server Component uses the anon key, you will need an insert policy!
CREATE POLICY "Allow anon insert if not exists"
  ON daily_molecule_archive FOR INSERT
  WITH CHECK ( true );

-- Backlog yesterday's molecule (Paracetamol)
INSERT INTO daily_molecule_archive (date, molecule_id, molecule_name)
VALUES ('2026-04-29', 'paracetamol', 'Paracetamol')
ON CONFLICT (date) DO NOTHING;

