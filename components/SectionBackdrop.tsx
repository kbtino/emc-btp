import type { ReactNode } from 'react';

// Habillage décoratif réutilisable (grille "plan de construction" + halos de couleur) pour
// casser les aplats plats entre les sections. Purement visuel, aria-hidden.
// variant="dark" adapte les couleurs aux sections à fond vert forêt.
export default function SectionBackdrop({
  children,
  variant = 'light',
}: {
  children: ReactNode;
  variant?: 'light' | 'dark';
}) {
  const isDark = variant === 'dark';
  const dot = isDark ? 'rgba(255,255,255,.07)' : 'rgba(31,138,59,.16)';
  const greenHalo = isDark ? 'rgba(76,185,68,.22)' : 'rgba(31,138,59,.16)';
  const amberHalo = isDark ? 'rgba(242,176,30,.18)' : 'rgba(242,176,30,.2)';

  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, ${dot} 1.2px, transparent 1.2px)`,
          backgroundSize: '26px 26px',
          maskImage: 'radial-gradient(ellipse 75% 55% at 50% 0%, black 35%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 55% at 50% 0%, black 35%, transparent 100%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-28 -top-28 h-[420px] w-[420px] rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle, ${greenHalo}, transparent 70%)` }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 -left-28 h-[380px] w-[380px] rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle, ${amberHalo}, transparent 70%)` }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
