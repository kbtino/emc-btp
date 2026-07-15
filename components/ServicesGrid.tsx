import { iconMap, type IconName } from '@/lib/icons';
import { services, companyVideo } from '@/lib/content';
import RevealOnScroll from './RevealOnScroll';

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-page">
      <div className="mx-auto max-w-container px-6 py-24">
        <div className="mx-auto mb-14 flex max-w-[620px] flex-col gap-3.5 text-center">
          <div className="text-[12.5px] font-bold uppercase tracking-[1.5px] text-brand">Expertise</div>
          <h2 className="text-[38px] font-extrabold tracking-tight text-ink">Nos services</h2>
          <p className="text-[17px] leading-relaxed text-ink-muted">
            Plus qu&apos;un fournisseur : un partenaire qui accompagne votre projet du plan à la remise des clés.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-7">
          {services.map((s) => {
            const Icon = iconMap[s.icon as IconName];
            return (
              <RevealOnScroll key={s.title}>
                <div className="flex h-full flex-col gap-4 rounded-2xl border-[0.5px] border-hairline bg-white px-7 py-8 transition-all duration-[180ms] hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(15,110,86,.12)]">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl shadow-[0_3px_8px_rgba(15,110,86,.3)]"
                    style={{ background: 'linear-gradient(135deg, #0F6E56, #0a4f3d)' }}
                  >
                    {Icon ? <Icon size={28} color="#ffffff" /> : null}
                  </div>
                  <h3 className="text-[20px] font-bold text-ink">{s.title}</h3>
                  <p className="text-[15px] leading-relaxed text-ink-muted">{s.desc}</p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        <RevealOnScroll className="mx-auto mt-16 max-w-[880px]">
          <div className="overflow-hidden rounded-2xl border-[0.5px] border-hairline bg-white shadow-[0_1px_4px_rgba(0,0,0,.06)]">
            <video
              src={companyVideo.src}
              controls
              preload="metadata"
              className="aspect-video w-full bg-black"
            />
            <div className="flex flex-col gap-1.5 px-7 py-6 text-center">
              <h3 className="text-[20px] font-bold text-ink">{companyVideo.title}</h3>
              <p className="text-[15px] leading-relaxed text-ink-muted">{companyVideo.desc}</p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
