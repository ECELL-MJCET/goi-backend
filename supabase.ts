
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'http://localhost:8000'
const supabaseKey = process.env.SUPABASE_KEY || ''
export const supabase = createClient(supabaseUrl, supabaseKey)