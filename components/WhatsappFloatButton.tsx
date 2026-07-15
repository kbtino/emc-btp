import { IconBrandWhatsapp } from '@tabler/icons-react';
import { site } from '@/lib/content';
import { waLink } from '@/lib/whatsapp';
import { whatsappMessages } from '@/lib/content';

export default function WhatsappFloatButton() {
  if (!site.showWhatsappFloat) return null;

  return (
    <a
      href={waLink(whatsappMessages.default)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed right-6 bottom-6 z-[60] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-whatsapp shadow-[0_4px_14px_rgba(0,0,0,.25)] transition-transform duration-150 ease-out hover:scale-[1.08] animate-waPulse"
    >
      <IconBrandWhatsapp size={32} color="#ffffff" />
    </a>
  );
}
