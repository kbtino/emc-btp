'use client';

import { useState } from 'react';
import Image from 'next/image';
import { IconFileInvoice, IconMenu2, IconX } from '@tabler/icons-react';
import { navLinks } from '@/lib/content';
import { asset } from '@/lib/asset';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <header className="sticky top-0 z-50 border-b-[0.5px] border-hairline bg-white/96 backdrop-blur-sm">
      <div className="mx-auto flex h-[68px] max-w-container items-center justify-between gap-6 px-6">
        <a href="#accueil" className="flex flex-shrink-0 items-center gap-2.5">
          <Image
            src={asset('/logo-emc.png')}
            alt="EMC BTP"
            width={160}
            height={52}
            className="h-[52px] w-auto mix-blend-multiply"
            priority
          />
        </a>

        <nav className="hidden items-center gap-7 text-[14.5px] font-medium text-ink-body lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-ink-body transition-colors hover:text-brand">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-lg bg-accent px-5 py-[11px] text-[14.5px] font-bold text-accent-text shadow-sm transition-all duration-150 hover:-translate-y-px hover:bg-accent-hover lg:inline-flex"
        >
          <IconFileInvoice size={17} />
          Demander un Devis
        </a>

        <button
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink lg:hidden"
        >
          <IconMenu2 size={26} />
        </button>
      </div>
    </header>

      {/* Panneau mobile slide-in (hors <header> : backdrop-blur-sm crée un containing block
          pour les éléments fixed, ce qui casserait le plein écran si le panneau restait dedans) */}
      <div
        className={`fixed inset-0 z-[70] transition-opacity duration-200 lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
        <div
          className={`absolute right-0 top-0 flex h-full w-[78%] max-w-[320px] flex-col gap-1 bg-white p-6 shadow-2xl transition-transform duration-200 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="mb-6 flex items-center justify-between">
            <Image src={asset('/logo-emc.png')} alt="EMC BTP" width={120} height={40} className="h-10 w-auto mix-blend-multiply" />
            <button type="button" aria-label="Fermer le menu" onClick={() => setOpen(false)} className="p-1 text-ink">
              <IconX size={26} />
            </button>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-[16px] font-medium text-ink-body hover:bg-page hover:text-brand"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-[15px] font-bold text-accent-text"
          >
            <IconFileInvoice size={17} />
            Demander un Devis
          </a>
        </div>
      </div>
    </>
  );
}
