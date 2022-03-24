/* eslint-disable prefer-destructuring */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const ANON_KEY = process.env.SERVICE_ROLE_KEY;
const SUPABASE_URL = process.env.SUPABASE_URL;

console.log('SUPABASE_URL', SUPABASE_URL);
console.log('KEY', ANON_KEY);

const supabase = createClient(SUPABASE_URL, ANON_KEY, {
  localStorage: AsyncStorage,
});

async function fetchStudentQuotes() {
  console.log('starting');
  console.log(supabase.auth.user());
  const { data, status, statusText, error } = await supabase.from('quotes').select().single();
  console.log('fetching supabase');
  if (error) {
    console.log('error', error);
    console.log('status', status);
    console.log('text', statusText);
  } else {
    console.log('data', data);
  }
}

fetchStudentQuotes()
  .then(() => {
    console.log('done');
    return 0;
  })
  .catch(() => {
    console.log('failed');
  });

export default supabase;
