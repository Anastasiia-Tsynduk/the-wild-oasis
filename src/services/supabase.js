import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://mthokguynbtcbasmiskx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10aG9rZ3V5bmJ0Y2Jhc21pc2t4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2MTA5MDEsImV4cCI6MjAyNDE4NjkwMX0.rUPlFBV1dABDA-3e8ukY9oYCA6wseDdyQZbRq5-gVMc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
