/* ============================================================================
   ClinicDesk deployment configuration
   ----------------------------------------------------------------------------
   1. Open your Supabase project -> Project Settings -> API.
   2. Copy the "anon" / "public" key (starts with eyJ... or sb_publishable_...).
   3. Paste it between the quotes below and save this file.
   4. Keep this file next to clinicdesk.html and open the HTML file.

   The anon key is a public browser key: it is safe to ship with the app and is
   restricted by Row Level Security. NEVER put the service_role key here.
   ============================================================================ */
window.CLINIC_CONFIG = {
  url: 'https://nuerkhavcjlhosyyoxrm.supabase.co',
  key: 'PASTE_YOUR_ANON_PUBLIC_KEY_HERE'
};
