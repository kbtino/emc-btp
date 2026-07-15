'use client';

import { useEffect } from 'react';
import { IconX } from '@tabler/icons-react';
import type { GalleryItem } from '@/lib/content';

export default function Lightbox({ item, onClose }: { item: GalleryItem; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-black/85 p-8"
    >
      {item.isVideo ? (
        <video
          src={item.src}
          controls
          autoPlay
          onClick={(e) => e.stopPropagation()}
          className="max-h-[88%] max-w-[92%] rounded-xl shadow-[0_20px_60px_rgba(0,0,0,.5)]"
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.src}
          alt="Aperçu"
          onClick={(e) => e.stopPropagation()}
          className="max-h-[88%] max-w-[92%] rounded-xl object-contain shadow-[0_20px_60px_rgba(0,0,0,.5)]"
        />
      )}
      <div className="absolute right-6 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/[.14]">
        <IconX size={22} color="#ffffff" />
      </div>
    </div>
  );
}
