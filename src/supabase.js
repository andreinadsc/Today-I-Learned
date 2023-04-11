
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://omksyznyzxregmeuifvp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ta3N5em55enhyZWdtZXVpZnZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA4OTEwMjcsImV4cCI6MTk5NjQ2NzAyN30.4nDNhQRD1-x3na2Ov2xrr9JI4V-D2gMBnHWmiu4UYmI';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;