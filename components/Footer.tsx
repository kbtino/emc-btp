import Image from 'next/image';
import { IconBrandFacebook, IconBrandWhatsapp, IconBrandTiktok } from '@tabler/icons-react';
import { navLinks, site, whatsappMessages } from '@/lib/content';
import { waLink } from '@/lib/whatsapp';
import { asset } from '@/lib/asset';

export default function Footer() {
  return (
    <footer className="bg-brand-darker text-[#a9c9bd]">
      <div className="mx-auto flex max-w-container flex-col gap-10 px-6 pb-8 pt-14">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-10">
          <div className="flex flex-col gap-3.5">
            <div className="w-fit rounded-xl bg-white px-4 py-2.5">
              <Image src={asset('/logo-emc.png')} alt="EMC BTP" width={120} height={46} className="h-[46px] w-auto mix-blend-multiply" />
            </div>
            <p className="max-w-[300px] text-[14px] leading-relaxed">
              Équipement Matériaux de Construction — vente, livraison et accompagnement de chantiers à Lomé, Togo.
            </p>
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="text-[14px] font-bold uppercase tracking-wide text-white">Liens rapides</div>
            {navLinks
              .filter((l) => l.href !== '#livraison' && l.href !== '#realisations')
              .map((l) => (
                <a key={l.href} href={l.href} className="text-[14.5px] text-[#a9c9bd] hover:text-white">
                  {l.label}
                </a>
              ))}
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-[14px] font-bold uppercase tracking-wide text-white">Suivez-nous</div>
            <div className="flex gap-3">
              <a
                href={site.socials.facebook}
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-white/10 text-white hover:bg-white/20"
              >
                <IconBrandFacebook size={20} />
              </a>
              <a
                href={waLink(whatsappMessages.default)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-white/10 text-white hover:bg-white/20"
              >
                <IconBrandWhatsapp size={20} />
              </a>
              <a
                href={site.socials.tiktok}
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-white/10 text-white hover:bg-white/20"
              >
                <IconBrandTiktok size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-3 border-t-[0.5px] border-white/[.12] pt-6 text-[13px]">
          <span>© 2026 EMC BTP — Tous droits réservés</span>
          <span>Site conçu avec soin — Sagbado, Lomé</span>
        </div>
      </div>
    </footer>
  );
}
