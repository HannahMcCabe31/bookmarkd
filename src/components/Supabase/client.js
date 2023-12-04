import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ddcqxtxffblwpqoaufri.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkY3F4dHhmZmJsd3Bxb2F1ZnJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE2MjI0NzUsImV4cCI6MjAxNzE5ODQ3NX0.nlntFCyjPs75FGTe9kMqDWxBuqI82azMsH7re_Qwn_w";
// const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
