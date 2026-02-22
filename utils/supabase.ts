import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// This is the strict client. If variables are missing in Vercel, 
// the app will fail fast, which is better for debugging production.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
