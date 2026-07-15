'use client';

import { useRef } from 'react';
import {
  IconMapPin,
  IconMapPinFilled,
  IconPhone,
  IconBrandWhatsapp,
  IconClock,
  IconSend,
} from '@tabler/icons-react';
import { site, contactMaterialOptions, whatsappMessages } from '@/lib/content';
import { waLink } from '@/lib/whatsapp';
import RevealOnScroll from './RevealOnScroll';
import SectionBackdrop from './SectionBackdrop';

export default function ContactSection() {
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const materialRef = useRef<HTMLSelectElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const send = () => {
    const name = nameRef.current?.value || '';
    const phone = phoneRef.current?.value || '';
    const material = materialRef.current?.value || '';
    const message = messageRef.current?.value || '';
    const text = whatsappMessages.contactForm({ name, phone, material, message });
    window.open(waLink(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="bg-page">
      <SectionBackdrop>
      <div className="mx-auto max-w-container px-6 py-20">
        <div className="mx-auto mb-10 flex max-w-[620px] flex-col items-center gap-3.5 text-center">
          <div className="rounded-full bg-white/70 px-3.5 py-1.5 text-[12.5px] font-bold uppercase tracking-[1.5px] text-brand">
            Contact
          </div>
          <h2 className="text-[38px] font-extrabold tracking-tight text-ink">Parlons de votre chantier</h2>
          <p className="text-[17px] leading-relaxed text-ink-muted">
            Devis gratuit sous 24h. Réponse rapide par téléphone ou WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] items-start gap-8">
          <RevealOnScroll className="flex flex-col gap-4.5 rounded-2xl border-[0.5px] border-hairline bg-white p-8 shadow-[0_1px_4px_rgba(0,0,0,.06)]">
            <div className="grid grid-cols-2 gap-4">
              <label className="flex flex-col gap-1.5 text-[13.5px] font-semibold text-ink-body">
                Nom complet
                <input
                  ref={nameRef}
                  type="text"
                  placeholder="Kossi Mensah"
                  className="rounded-[10px] border-[0.5px] border-hairline bg-[#f9fafb] px-3.5 py-3 text-[15px] outline-none focus:border-brand focus:bg-white"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-[13.5px] font-semibold text-ink-body">
                Téléphone
                <input
                  ref={phoneRef}
                  type="tel"
                  placeholder="+228 90 00 00 00"
                  className="rounded-[10px] border-[0.5px] border-hairline bg-[#f9fafb] px-3.5 py-3 text-[15px] outline-none focus:border-brand focus:bg-white"
                />
              </label>
            </div>
            <label className="flex flex-col gap-1.5 text-[13.5px] font-semibold text-ink-body">
              Email <span className="font-normal text-ink-placeholder">(optionnel)</span>
              <input
                type="email"
                placeholder="vous@exemple.com"
                className="rounded-[10px] border-[0.5px] border-hairline bg-[#f9fafb] px-3.5 py-3 text-[15px] outline-none focus:border-brand focus:bg-white"
              />
            </label>
            <label className="flex flex-col gap-1.5 text-[13.5px] font-semibold text-ink-body">
              Matériau souhaité
              <select
                ref={materialRef}
                className="rounded-[10px] border-[0.5px] border-hairline bg-[#f9fafb] px-3.5 py-3 text-[15px] text-ink-body outline-none"
              >
                {contactMaterialOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1.5 text-[13.5px] font-semibold text-ink-body">
              Message
              <textarea
                ref={messageRef}
                rows={4}
                placeholder="Ex. : 2 voyages de sable + 50 sacs de ciment à livrer à Agoè…"
                className="resize-y rounded-[10px] border-[0.5px] border-hairline bg-[#f9fafb] px-3.5 py-3 text-[15px] outline-none focus:border-brand focus:bg-white"
              />
            </label>
            <button
              type="button"
              onClick={send}
              className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-brand px-7 py-[15px] text-[16px] font-bold text-white shadow-[0_3px_8px_rgba(15,110,86,.3)] transition-all duration-150 hover:bg-brand-dark active:scale-[.99] active:opacity-[.78]"
            >
              <IconSend size={18} />
              Envoyer la demande
            </button>
            <p className="text-center text-[12.5px] text-ink-placeholder">
              L&apos;envoi ouvre WhatsApp avec votre message pré-rempli.
            </p>
          </RevealOnScroll>

          <RevealOnScroll className="flex flex-col gap-4">
            <div className="flex flex-col gap-4.5 rounded-2xl border-[0.5px] border-hairline bg-white p-7 shadow-[0_1px_4px_rgba(0,0,0,.06)]">
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[10px] bg-brand-badge">
                  <IconMapPin size={20} color="#0F6E56" />
                </div>
                <div>
                  <div className="text-[15px] font-bold text-ink">Adresse</div>
                  <div className="text-[14.5px] leading-relaxed text-ink-muted">{site.address}</div>
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[10px] bg-brand-badge">
                  <IconPhone size={20} color="#0F6E56" />
                </div>
                <div>
                  <div className="text-[15px] font-bold text-ink">Téléphone</div>
                  <div className="text-[14.5px] leading-relaxed text-ink-muted">{site.whatsappNumber}</div>
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[10px] bg-[#e6f9ee]">
                  <IconBrandWhatsapp size={20} color="#25D366" />
                </div>
                <div>
                  <div className="text-[15px] font-bold text-ink">WhatsApp</div>
                  <a
                    href={waLink(whatsappMessages.default)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14.5px] font-semibold"
                  >
                    Écrire sur WhatsApp →
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[10px] bg-brand-badge">
                  <IconClock size={20} color="#0F6E56" />
                </div>
                <div>
                  <div className="text-[15px] font-bold text-ink">Horaires</div>
                  <div className="text-[14.5px] leading-relaxed text-ink-muted">
                    {site.hours.weekdays}
                    <br />
                    {site.hours.sunday}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border-[0.5px] border-hairline bg-[#e8dfc8]">
              <iframe
                src={site.mapsEmbedSrc}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dépôt EMC BTP — Sagbado, Lomé"
              />
              <div className="pointer-events-none absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-[12px] font-medium text-white backdrop-blur-sm">
                <IconMapPinFilled size={14} color="#7fd4bc" />
                Dépôt EMC BTP · Sagbado
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
      </SectionBackdrop>
    </section>
  );
}
