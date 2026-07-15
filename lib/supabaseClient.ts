import { createClient, SupabaseClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const reviewsBackendEnabled = Boolean(url && anonKey);

export const supabase: SupabaseClient | null = reviewsBackendEnabled
  ? createClient(url as string, anonKey as string)
  : null;

export type ReviewRow = {
  id: string;
  created_at: string;
  name: string;
  role: string | null;
  quote: string;
  rating: number;
  status: 'pending' | 'approved';
};

export async function fetchApprovedReviews(): Promise<ReviewRow[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('reviews')
    .select('*')
    .eq('status', 'approved')
    .order('created_at', { ascending: false });
  if (error) {
    console.error('fetchApprovedReviews', error.message);
    return [];
  }
  return data ?? [];
}

export async function submitReview(review: { name: string; role: string; quote: string; rating: number }) {
  if (!supabase) return { error: null };
  const { error } = await supabase.from('reviews').insert({
    name: review.name,
    role: review.role || null,
    quote: review.quote,
    rating: review.rating,
  });
  if (error) console.error('submitReview', error.message);
  return { error };
}
