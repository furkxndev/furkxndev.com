import { profile } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const principles = [
  {
    title: "Uçtan uca sahiplenme",
    body: "Arayüzden veritabanı şemasına, kimlik doğrulamadan dağıtıma kadar ürünün tamamını kurgularım.",
  },
  {
    title: "Sağlam temel",
    body: "Katmanlı mimari, merkezî hata yönetimi ve güvenli oturum yönetimi olmadan bir işi bitmiş saymam.",
  },
  {
    title: "Detaydaki deneyim",
    body: "Animasyon zamanlaması, boş durum ekranları, dokunma hedefleri — kullanıcının hissettiği yer burası.",
  },
  {
    title: "Otomasyon refleksi",
    body: "Tekrar eden her işi bir script'e devrederim; kalan zamanı ürünün kendisine ayırırım.",
  },
];

export default function About({ index }: { index: string }) {
  return (
    <section id="hakkimda" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index={index} eyebrow="Hakkımda" title="Kod yazan bir ürün insanı" />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div className="space-y-5">
            {profile.bio.map((paragraph, i) => (
              <Reveal key={i} delay={i * 90}>
                <p className="text-base leading-[1.85] text-fg/75 sm:text-lg">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-line bg-ink-900/50 p-5 backdrop-blur transition-colors hover:border-accent/40">
                  <span className="block size-1.5 rounded-full bg-accent transition-transform group-hover:scale-150" />
                  <h3 className="mt-4 text-sm font-semibold text-fg">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
