//ตั้งค่า supabase
import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://bsktyxptxbjuuvnkaese.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJza3R5eHB0eGJqdXV2bmthZXNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3MTE5NDIsImV4cCI6MjA5NTI4Nzk0Mn0.uewriuHkHSSdRymMm9Y8s_ojuHZXXJTt8S3dXgfirwE'

let realtimeOptions: { transport?: any } | undefined
if (typeof window === 'undefined') {
  // Node.js (SSR) — ใช้ ws เพราะ Node < 22 ไม่มี WebSocket แบบ native
  realtimeOptions = { transport: require('ws') }
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  realtime: realtimeOptions,
})
