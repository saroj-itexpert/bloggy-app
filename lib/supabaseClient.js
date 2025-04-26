import {createClient } from "@supabase/supabase-js"

//RETRIEVE SUPABASE PROJECT
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANONKEY; //Anon = anonymous

export const supabase = createClient(supabaseUrl, supabaseAnonKey);


