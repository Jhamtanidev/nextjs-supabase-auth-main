/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { cookies, headers } from 'next/headers';

const supabaseURl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// This needs to export a function, as the headers and cookies are not populated with values until the Server Component is requesting data.
export default () =>
  createServerComponentSupabaseClient({
    headers,
    cookies,
  });
