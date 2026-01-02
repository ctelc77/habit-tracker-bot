import { createClient } from '@supabase/supabase-js';

// Ці дані візьми в налаштуваннях Supabase (Project Settings -> API)
const supabaseUrl = 'https://dfhlppkkfbjqtosqdjpq.supabase.co';
const supabaseAnonKey = 'sb_publishable_XRr2MyH6KYisWEOdX-VDqQ_-9Ah2uRn';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
