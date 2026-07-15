import Image from 'next/image';
import { IconMapPinFilled, IconWall, IconBrandWhatsapp } from '@tabler/icons-react';
import { site, whatsappMessages } from '@/lib/content';
import { waLink } from '@/lib/whatsapp';

export default function Hero() {
  // Titre bicolore façon maquette page1 : partie "matériaux" en blanc, partie
  // "livraison" (après la virgule) en jaune doré. On ne modifie aucun mot.
  const commaIndex = site.tagline.indexOf(',');
  const headlineHead = commaIndex >= 0 ? site.tagline.slice(0, commaIndex + 1) : site.tagline;
  const headlineTail = commaIndex >= 0 ? site.tagline.slice(commaIndex + 1).trim() : '';

  return (
    <section
      id="accueil"
      className="relative flex min-h-[620px] items-center overflow-hidden bg-brand-darker"
    >
      <Image
        src="/images/equipe-chantier.webp"
        alt="Équipe de génie civil sur un chantier à Lomé"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_35%]"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(0,0,0,.55) 0%, rgba(0,0,0,.3) 50%, rgba(0,0,0,.06) 100%)',
        }}
      />
      <div className="relative mx-auto w-full max-w-container px-6 py-24">
        <div className="flex max-w-[640px] animate-fadeInUp flex-col gap-6">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border-[0.5px] border-brand-light/40 bg-brand/25 px-4 py-1.5 text-[12.5px] font-bold uppercase tracking-[1.5px] text-brand-light backdrop-blur-sm">
            <IconMapPinFilled size={15} />
            Sagbado · Lomé · Togo
          </div>
          <h1 className="text-balance text-[34px] font-extrabold leading-[1.08] tracking-tight text-white md:text-[52px]">
            {headlineHead}
            {headlineTail && (
              <>
                {' '}
                <span className="text-accent">{headlineTail}</span>
              </>
            )}
          </h1>
          <p className="max-w-[540px] text-balance text-[17px] leading-[1.55] text-white/85 md:text-[19px]">
            {site.description}
          </p>
          <div className="mt-1.5 flex flex-wrap gap-3.5">
            <a
              href="#materiaux"
              className="inline-flex items-center gap-2 rounded-[10px] bg-accent px-7 py-[15px] text-[16px] font-bold text-accent-text transition-all duration-150 hover:scale-[1.02] hover:bg-accent-hover"
            >
              <IconWall size={19} />
              Voir nos matériaux
            </a>
            <a
              href={waLink(whatsappMessages.default)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[10px] border-[0.5px] border-white/35 bg-white/[.14] px-7 py-[15px] text-[16px] font-semibold text-white transition-all duration-150 hover:bg-white/[.24]"
            >
              <IconBrandWhatsapp size={20} />
              Nous contacter sur WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
