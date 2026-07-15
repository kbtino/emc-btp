'use client';

import { useState } from 'react';
import { IconPlayerPlayFilled } from '@tabler/icons-react';
import { gallery, type GalleryItem } from '@/lib/content';
import RevealOnScroll from './RevealOnScroll';
import Lightbox from './Lightbox';
import SectionBackdrop from './SectionBackdrop';

export default function GallerySection() {
  const [active, setActive] = useState<GalleryItem | null>(null);

  return (
    <section id="realisations" className="bg-page">
      <SectionBackdrop>
        <div className="mx-auto max-w-container px-6 py-20">
          <div className="mx-auto mb-10 flex max-w-[620px] flex-col items-center gap-3.5 text-center">
            <div className="rounded-full bg-white/70 px-3.5 py-1.5 text-[12.5px] font-bold uppercase tracking-[1.5px] text-brand">
              Galerie
            </div>
            <h2 className="text-[38px] font-extrabold tracking-tight text-ink">
              Ils nous font confiance sur leurs chantiers
            </h2>
            <p className="text-[17px] leading-relaxed text-ink-muted">
              Matériaux stockés, déchargements, chantiers livrés — cliquez pour agrandir.
            </p>
          </div>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4.5">
            {gallery.map((g) => (
              <RevealOnScroll key={g.src}>
                <button
                  type="button"
                  onClick={() => setActive(g)}
                  className="group relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-xl border-[0.5px] border-hairline bg-page shadow-[0_1px_3px_rgba(0,0,0,.05)] transition-all duration-[180ms] hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(0,0,0,.16)]"
                >
                  {g.isVideo ? (
                    <>
                      <video
                        src={g.src}
                        muted
                        preload="metadata"
                        className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.06]"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black/55 backdrop-blur-sm">
                          <IconPlayerPlayFilled size={24} color="#ffffff" />
                        </div>
                      </div>
                    </>
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={g.src}
                      alt={g.caption}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.06]"
                    />
                  )}
                  <div className="absolute bottom-2.5 left-2.5 rounded-full bg-black/55 px-2.5 py-1 text-[12px] font-medium text-white backdrop-blur-sm">
                    {g.caption}
                  </div>
                </button>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </SectionBackdrop>

      {active && <Lightbox item={active} onClose={() => setActive(null)} />}
    </section>
  );
}
