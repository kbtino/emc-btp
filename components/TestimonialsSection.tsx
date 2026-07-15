'use client';

import { useEffect, useRef, useState } from 'react';
import { IconStarFilled, IconCircleCheckFilled, IconAlertCircle, IconQuote } from '@tabler/icons-react';
import { site, testimonials as seedTestimonials, type Testimonial } from '@/lib/content';
import { fetchApprovedReviews, submitReview, reviewsBackendEnabled } from '@/lib/supabaseClient';
import RevealOnScroll from './RevealOnScroll';
import SectionBackdrop from './SectionBackdrop';

export default function TestimonialsSection() {
  const [localReviews, setLocalReviews] = useState<Testimonial[]>([]);
  const [tIndex, setTIndex] = useState(0);
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const roleRef = useRef<HTMLInputElement>(null);
  const quoteRef = useRef<HTMLTextAreaElement>(null);
  const doneTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (!reviewsBackendEnabled) return;
    fetchApprovedReviews().then((rows) => {
      if (rows.length === 0) return;
      setLocalReviews((prev) => [
        ...rows.map((r) => ({ name: r.name, role: r.role || 'Client EMC BTP', quote: r.quote, rating: r.rating })),
        ...prev,
      ]);
    });
  }, []);

  if (!site.showTestimonials) return null;

  const all = [...localReviews, ...seedTestimonials];
  const idx = Math.min(tIndex, all.length - 1);
  const active = all[idx];
  const activeStars = (n: number) => (active.rating >= n ? '#F2B01E' : '#d4d8d4');
  const ratingValue = hoverRating || rating;

  const prev = () => setTIndex((i) => (i - 1 + all.length) % all.length);
  const next = () => setTIndex((i) => (i + 1) % all.length);

  const publish = async () => {
    const name = nameRef.current?.value.trim() || '';
    const role = roleRef.current?.value.trim() || '';
    const quote = quoteRef.current?.value.trim() || '';

    if (rating === 0) {
      setError('Merci de sélectionner une note en étoiles.');
      return;
    }
    if (!name || !quote) {
      setError("Merci d'indiquer votre nom et votre avis.");
      return;
    }

    const review: Testimonial = { name, role: role || 'Client EMC BTP', quote, rating };
    setLocalReviews((r) => [review, ...r]);
    setTIndex(0);
    setRating(5);
    setHoverRating(0);
    setError('');
    setDone(true);

    if (nameRef.current) nameRef.current.value = '';
    if (roleRef.current) roleRef.current.value = '';
    if (quoteRef.current) quoteRef.current.value = '';

    clearTimeout(doneTimer.current);
    doneTimer.current = setTimeout(() => setDone(false), 4000);

    await submitReview({ name, role, quote, rating });
  };

  return (
    <section className="bg-brand-darker">
      <SectionBackdrop variant="dark">
        <div className="mx-auto max-w-container px-6 py-20">
        <div className="mx-auto mb-10 flex max-w-[620px] flex-col items-center gap-3.5 text-center">
          <div className="rounded-full border-[0.5px] border-white/20 bg-white/10 px-3.5 py-1.5 text-[12.5px] font-bold uppercase tracking-[1.5px] text-brand-light">
            Témoignages
          </div>
          <h2 className="text-[clamp(1.75rem,4.5vw,2.375rem)] font-extrabold tracking-tight text-white">Ce que disent nos clients</h2>
        </div>

        <div className="mx-auto flex max-w-[820px] flex-col gap-7">
          <RevealOnScroll>
            <div className="relative flex flex-col items-center gap-5.5 overflow-hidden rounded-2xl border-[0.5px] border-hairline bg-white px-11 py-12 text-center shadow-[0_14px_36px_rgba(31,138,59,.08)]">
              <div
                className="absolute -top-2 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full"
                style={{ background: 'linear-gradient(90deg, #1F8A3B, #F2B01E)' }}
              />
              <IconQuote
                size={92}
                className="pointer-events-none absolute -top-3 left-6 text-brand opacity-[.06]"
              />
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((n) => (
                  <IconStarFilled key={n} size={20} color={activeStars(n)} />
                ))}
              </div>
              <p className="relative text-balance text-[clamp(1.2rem,2.8vw,1.4375rem)] font-medium leading-snug text-[#143D28]">
                « {active.quote} »
              </p>
              <div>
                <div className="text-[16px] font-extrabold text-ink">{active.name}</div>
                <div className="text-[14.5px] text-ink-muted">{active.role}</div>
              </div>
            </div>
          </RevealOnScroll>

          <div className="flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={prev}
              aria-label="Précédent"
              className="flex h-[52px] w-[52px] items-center justify-center rounded-full border-[0.5px] border-hairline bg-white text-ink shadow-sm transition-all duration-150 hover:border-brand hover:bg-page hover:text-brand"
            >
              ‹
            </button>
            <div className="min-w-[56px] text-center text-[15px] font-semibold text-white/75">
              {idx + 1} / {all.length}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Suivant"
              className="flex h-[52px] w-[52px] items-center justify-center rounded-full border-[0.5px] border-hairline bg-white text-ink shadow-sm transition-all duration-150 hover:border-brand hover:bg-page hover:text-brand"
            >
              ›
            </button>
          </div>

          <RevealOnScroll className="mt-3 flex flex-col gap-5.5 rounded-2xl border-[0.5px] border-hairline bg-white p-10 shadow-[0_1px_4px_rgba(0,0,0,.06)]">
            <div className="flex flex-col gap-1.5">
              <h3 className="text-[clamp(1.4rem,3.5vw,1.625rem)] font-extrabold tracking-tight text-ink">Laissez votre évaluation</h3>
              <p className="text-[15.5px] text-ink-muted">Votre avis aide d&apos;autres clients à nous faire confiance.</p>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="flex gap-1.5">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setRating(n)}
                    onMouseEnter={() => setHoverRating(n)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="cursor-pointer transition-transform duration-100 hover:scale-[1.12]"
                    aria-label={`${n} étoile${n > 1 ? 's' : ''}`}
                  >
                    <IconStarFilled size={32} color={ratingValue >= n ? '#F2B01E' : '#d4d8d4'} />
                  </button>
                ))}
              </div>
              <span className="text-[15px] font-bold text-ink-muted">{ratingValue > 0 ? `${ratingValue}/5` : ''}</span>
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
              <input
                ref={nameRef}
                type="text"
                placeholder="Votre nom"
                className="rounded-[10px] border-[0.5px] border-hairline bg-[#f9fafb] px-4 py-3.5 text-[15px] outline-none focus:border-brand focus:bg-white"
              />
              <input
                ref={roleRef}
                type="text"
                placeholder="Votre profession (optionnel)"
                className="rounded-[10px] border-[0.5px] border-hairline bg-[#f9fafb] px-4 py-3.5 text-[15px] outline-none focus:border-brand focus:bg-white"
              />
            </div>
            <textarea
              ref={quoteRef}
              rows={3}
              placeholder="Votre expérience avec EMC BTP..."
              className="resize-y rounded-[10px] border-[0.5px] border-hairline bg-[#f9fafb] px-4 py-3.5 text-[15px] outline-none focus:border-brand focus:bg-white"
            />

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={publish}
                className="inline-flex items-center gap-2.5 rounded-[10px] bg-brand-dark px-7 py-[15px] text-[16px] font-bold text-white transition-all duration-150 hover:bg-[#0A3D1E] active:scale-[.99] active:opacity-[.78]"
              >
                <IconStarFilled size={19} />
                Publier mon évaluation
              </button>
              {done && (
                <span className="inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-brand">
                  <IconCircleCheckFilled size={18} />
                  Merci ! Votre évaluation est publiée.
                </span>
              )}
              {error && (
                <span className="inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-[#c0392b]">
                  <IconAlertCircle size={18} />
                  {error}
                </span>
              )}
            </div>
          </RevealOnScroll>
        </div>
        </div>
      </SectionBackdrop>
    </section>
  );
}
