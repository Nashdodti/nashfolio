
import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/supabase';

const SUPABASE_URL = "https://ovldgcrvatzgubramajs.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92bGRnY3J2YXR6Z3VicmFtYWpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxMjgzMDgsImV4cCI6MjA1OTcwNDMwOH0.nz0pP9eivNGArcxJzLCXCBgP1dwDnGXD1OMobuKn_OM";

// Create a properly typed Supabase client
export const supabaseTyped = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
