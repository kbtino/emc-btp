import Image from 'next/image';
import { IconCalendarTime, IconMapPin } from '@tabler/icons-react';
import { iconMap, type IconName } from '@/lib/icons';
import { delivery, whatsappMessages } from '@/lib/content';
import { waLink } from '@/lib/whatsapp';
import RevealOnScroll from './RevealOnScroll';
import SectionBackdrop from './SectionBackdrop';

export default function DeliverySection() {
  return (
    <section id="livraison" className="bg-[#fafcfb]">
      <SectionBackdrop>
        <div className="mx-auto grid max-w-container grid-cols-[repeat(auto-fit,minmax(340px,1fr))] items-center gap-14 px-6 py-20">
          <RevealOnScroll className="flex flex-col gap-5">
            <div className="w-fit rounded-full bg-brand-badge px-3.5 py-1.5 text-[12.5px] font-bold uppercase tracking-[1.5px] text-brand">
              Logistique
            </div>
            <h2 className="text-[38px] font-extrabold tracking-tight text-ink">{delivery.title}</h2>
            <p className="text-[17px] leading-relaxed text-ink-muted">{delivery.text}</p>
            <div className="mt-1 flex flex-col gap-3.5">
              {delivery.fleet.map((f) => {
                const Icon = iconMap[f.icon as IconName];
                return (
                  <div key={f.label} className="flex items-center gap-3.5 text-[15.5px] text-ink-body">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[10px] bg-brand-badge">
                      {Icon ? <Icon size={18} color="#0F6E56" /> : null}
                    </div>
                    <span>
                      <strong className="font-bold">{f.label}</strong> — {f.desc}
                    </span>
                  </div>
                );
              })}
              <div className="flex items-center gap-3.5 text-[15.5px] text-ink-body">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[10px] bg-brand-badge">
                  <IconMapPin size={18} color="#0F6E56" />
                </div>
                <span>
                  Zones desservies : <span className="font-medium">{delivery.zones}</span>
                </span>
              </div>
            </div>
            <a
              href={waLink(whatsappMessages.livraison)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-[10px] bg-brand px-7 py-[15px] text-[16px] font-bold text-white shadow-[0_3px_8px_rgba(15,110,86,.3)] transition-all duration-150 hover:scale-[1.02] hover:bg-brand-dark"
            >
              <IconCalendarTime size={19} />
              Planifier une livraison
            </a>
          </RevealOnScroll>

          <RevealOnScroll className="grid grid-cols-2 gap-4">
            <div className="col-span-2 aspect-video overflow-hidden rounded-2xl border-[0.5px] border-hairline bg-page shadow-[0_10px_30px_rgba(15,110,86,.1)]">
              <Image
                src={delivery.images.wide.src}
                alt={delivery.images.wide.alt}
                width={800}
                height={450}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-xl border-[0.5px] border-hairline bg-page">
              <Image
                src={delivery.images.a.src}
                alt={delivery.images.a.alt}
                width={400}
                height={300}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-xl border-[0.5px] border-hairline bg-page">
              <Image
                src={delivery.images.b.src}
                alt={delivery.images.b.alt}
                width={400}
                height={300}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </RevealOnScroll>
        </div>
      </SectionBackdrop>
    </section>
  );
}
