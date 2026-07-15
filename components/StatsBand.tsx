'use client';

import { useEffect, useRef, useState } from 'react';
import { iconMap, type IconName } from '@/lib/icons';
import { stats } from '@/lib/content';

function parseValue(value: string) {
  const match = value.match(/^(\D*)(\d+)(\D*)$/);
  if (!match) return { prefix: '', number: null as number | null, suffix: value };
  const [, prefix, number, suffix] = match;
  return { prefix, number: Number(number), suffix };
}

function StatCounter({ value }: { value: string }) {
  const { prefix, number, suffix } = parseValue(value);
  const [display, setDisplay] = useState(number === null ? value : prefix + '0' + suffix);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (number === null) return;
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplay(value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1200;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const current = Math.round(number * progress);
            setDisplay(prefix + current + suffix);
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [number, prefix, suffix, value]);

  return (
    <div ref={ref} className="text-[30px] font-extrabold tracking-tight text-white [font-variant-numeric:tabular-nums]">
      {display}
    </div>
  );
}

export default function StatsBand() {
  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #0F6E56 0%, #0c5c48 55%, #0a4f3d 100%)',
      }}
    >
      <div className="mx-auto grid max-w-container grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8 px-6 py-14">
        {stats.map((s) => {
          const Icon = iconMap[s.icon as IconName];
          return (
            <div key={s.label} className="flex items-center gap-4">
              <div className="flex h-[52px] w-[52px] flex-shrink-0 items-center justify-center rounded-xl border-[0.5px] border-white/[.22] bg-white/[.14]">
                {Icon ? <Icon size={26} color="#7fd4bc" /> : null}
              </div>
              <div>
                <StatCounter value={s.value} />
                <div className="text-[13.5px] font-medium text-[#a9dccb]">{s.label}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
