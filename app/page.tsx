'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
export default function Page() {
  const [todos, setTodos] = useState([]);
  useEffect(() => { supabase?.from('todos').select('*').then(({ data }) => setTodos(data || [])); }, []);
  return <div className='p-8'><h1>Todos</h1><ul>{todos.map(t => <li key={t.id}>{t.title}</li>)}</ul></div>;
}