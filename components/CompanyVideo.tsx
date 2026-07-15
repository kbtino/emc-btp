'use client';

import { useEffect, useRef, useState } from 'react';
import { IconVolume, IconVolumeOff } from '@tabler/icons-react';
import { companyVideo } from '@/lib/content';

// Lecture auto quand la vidéo entre dans le viewport, pause quand elle en sort.
// On tente d'ABORD de démarrer AVEC le son : les navigateurs l'autorisent si le
// visiteur a déjà interagi avec la page (clic sur un lien/bouton), ce qui est le cas
// le plus courant. Si le son est refusé, on bascule en muet (autoplay garanti) et on
// affiche un bouton pour l'activer en un clic.
export default function CompanyVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(false);

  // React n'applique pas toujours l'attribut `muted` de façon fiable via la prop :
  // on le force sur l'élément à chaque changement d'état.
  useEffect(() => {
    if (ref.current) ref.current.muted = muted;
  }, [muted]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const playInView = async () => {
      // 1re tentative : avec le son.
      el.muted = false;
      try {
        await el.play();
        setMuted(false);
        return;
      } catch {
        /* son refusé par le navigateur : on retombe sur l'autoplay muet garanti */
      }
      // 2e tentative : en muet (toujours autorisée).
      el.muted = true;
      setMuted(true);
      el.play().catch(() => {});
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          playInView();
        } else {
          el.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      <video
        ref={ref}
        src={companyVideo.src}
        controls
        playsInline
        preload="metadata"
        className="aspect-video w-full bg-black"
      />
      {muted && (
        <button
          type="button"
          onClick={() => setMuted(false)}
          className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-full bg-black/70 px-4 py-2 text-[13.5px] font-bold text-white backdrop-blur-sm transition-all duration-150 hover:bg-black/85"
          aria-label="Activer le son de la vidéo"
        >
          <IconVolumeOff size={18} />
          Activer le son
        </button>
      )}
      {!muted && (
        <button
          type="button"
          onClick={() => setMuted(true)}
          className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-sm transition-all duration-150 hover:bg-black/85"
          aria-label="Couper le son de la vidéo"
        >
          <IconVolume size={18} />
        </button>
      )}
    </div>
  );
}
