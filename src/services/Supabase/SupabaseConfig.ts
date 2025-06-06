import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lwrfrmcykchxmsrfhimr.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3cmZybWN5a2NoeG1zcmZoaW1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5OTUxMTMsImV4cCI6MjA2NDU3MTExM30.7HYZItkrt_dxHo4UojVAQi7YbA7AEOhYTjoZQBlL6-4";



export const supabase = createClient(supabaseUrl, supabaseKey);

//& Aqui lo tengo para insertar los pollocks
//&CREATE POLICY "Allow public read 93grjv_0" ON storage.objects FOR INSERT TO public WITH CHECK ((bucket_id = 'pollocks'::text));

//&Aqui lo tengo para pinta o pa poner el texto
//&CREATE POLICY "Pa pintar o para poner texto en las casillas 93grjv_1" ON storage.objects FOR UPDATE TO public USING ((bucket_id = 'pollocks'::text));