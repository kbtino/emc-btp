import Image from 'next/image';
import { IconTag } from '@tabler/icons-react';
import { materials, whatsappMessages } from '@/lib/content';
import { waLink } from '@/lib/whatsapp';
import { asset } from '@/lib/asset';
import RevealOnScroll from './RevealOnScroll';
import SectionBackdrop from './SectionBackdrop';

export default function MaterialsGrid() {
  return (
    <section id="materiaux" className="bg-surface-sand">
      <SectionBackdrop>
        <div className="mx-auto max-w-container px-6 py-20">
          <div className="mx-auto mb-10 flex max-w-[620px] flex-col items-center gap-3.5 text-center">
            <div className="rounded-full bg-brand-badge px-3.5 py-1.5 text-[12.5px] font-bold uppercase tracking-[1.5px] text-brand">
              Catalogue
            </div>
            <h2 className="text-[clamp(1.75rem,4.5vw,2.375rem)] font-extrabold tracking-tight text-ink">Nos matériaux</h2>
            <p className="text-[17px] leading-relaxed text-ink-muted">
              Tout ce qu&apos;il faut pour votre chantier, de la fondation à la finition. Disponible en gros et au
              détail, à Sagbado et livré partout à Lomé.
            </p>
          </div>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-7">
            {materials.map((m, i) => (
              <RevealOnScroll key={m.name + i}>
                <div className="group flex h-full flex-col overflow-hidden rounded-xl border-[0.5px] border-hairline bg-white transition-all duration-[180ms] hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(31,138,59,.16)]">
                  <div
                    className="h-[3px] w-full"
                    style={{ background: 'linear-gradient(90deg, #1F8A3B, #F2B01E)' }}
                  />
                  <div className="aspect-[4/3] overflow-hidden bg-page">
                    <Image
                      src={asset(m.img)}
                      alt={m.name}
                      width={480}
                      height={360}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.06]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-1.5 px-5 pb-5 pt-4.5">
                    <div className="flex items-center justify-between gap-2.5">
                      <h3 className="text-[17.5px] font-bold text-ink">{m.name}</h3>
                      <span className="flex-shrink-0 rounded-[5px] bg-brand-badge px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-brand">
                        Gros &amp; Détail
                      </span>
                    </div>
                    <p className="text-[14px] leading-relaxed text-ink-muted">{m.desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={waLink(whatsappMessages.tarifs)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-[30px] py-[15px] text-[16px] font-bold text-white shadow-[0_3px_8px_rgba(31,138,59,.3)] transition-all duration-150 hover:scale-[1.02] hover:bg-brand-dark"
            >
              <IconTag size={19} />
              Demander les tarifs
            </a>
          </div>
        </div>
      </SectionBackdrop>
    </section>
  );
}
