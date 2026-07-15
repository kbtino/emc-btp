import type { ReactNode } from 'react';

// Habillage décoratif réutilisable (grille "plan de construction" + halos de couleur) pour
// casser les aplats blancs/gris plats entre les sections. Purement visuel, aria-hidden.
export default function SectionBackdrop({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(15,110,86,.18) 1.2px, transparent 1.2px)',
          backgroundSize: '26px 26px',
          maskImage: 'radial-gradient(ellipse 75% 55% at 50% 0%, black 35%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 55% at 50% 0%, black 35%, transparent 100%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-28 -top-28 h-[420px] w-[420px] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(15,110,86,.16), transparent 70%)' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 -left-28 h-[380px] w-[380px] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(244,164,96,.16), transparent 70%)' }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
