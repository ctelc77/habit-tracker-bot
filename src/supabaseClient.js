import { createClient } from '@supabase/supabase-js';

// Ці дані візьми в налаштуваннях Supabase (Project Settings -> API)
const supabaseUrl = 'ТВІЙ_URL_З_SUPABASE';
const supabaseAnonKey = 'ТВІЙ_ANON_KEY_З_SUPABASE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
