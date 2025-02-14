import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const Supabase = createClient(
  "https://fwpdokjfwfokcqrgoanf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3cGRva2pmd2Zva2NxcmdvYW5mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkyOTczNzYsImV4cCI6MjA1NDg3MzM3Nn0.whEtYfHBB2HhohG47f0j6bgeM4vgm0XhLLPKLRqmsB8"
);

export default Supabase;
