import { site } from './content';

function waBase(): string {
  const digits = site.whatsappNumber.replace(/[^0-9]/g, '');
  return `https://wa.me/${digits}`;
}

export function waLink(text: string): string {
  return `${waBase()}?text=${encodeURIComponent(text)}`;
}
