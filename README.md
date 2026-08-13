# furkxndev.com — Portfolyo

Furkan Coşkun'un kişisel portfolyo sitesi. Next.js 16 (App Router) + Tailwind CSS v4 ile
yazıldı, tamamen statik olarak üretilir.

## Çalıştırma

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # üretim derlemesi
npm run lint
```

## İçeriği güncelleme

Sitedeki **tüm metin ve projeler** tek bir dosyada: [`lib/data.ts`](lib/data.ts).

| Ne değişecek | Nerede |
| --- | --- |
| İsim, unvan, konum, biyografi | `profile` |
| E-posta ve sosyal hesaplar | `profile.email`, `profile.socials` |
| İş / staj deneyimleri | `experience` |
| Eğitim | `education` |
| Sertifikalar | `certificates` |
| Projeler (başlık, özet, öne çıkanlar, teknolojiler) | `projects` |
| Yetenek grupları | `skillGroups` |
| Zaman çizelgesi | `timeline` |
| Hero altındaki sayaçlar | `stats` |

Birkaç not:

- **Deneyim bölümü veriye bağlı:** `experience`, `education` ve `certificates` dizilerinin
  üçü de boşken "Deneyim" bölümü ve menüdeki bağlantısı hiç render edilmez. İçlerinden
  birine kayıt eklediğin anda bölüm görünür, menüye eklenir ve bölüm numaraları
  (01, 02, 03…) kendiliğinden yeniden sıralanır.
- `experience` içindeki alanların çoğu isteğe bağlı: `description`, `bullets`, `stack`,
  `location`, `type` — yalnızca verdiklerin görünür.
- Bir projeyi öne çıkarmak için `featured: true` ver — geniş kart olarak listelenir,
  diğerleri alttaki ızgarada küçük kart olur.
- **Özel repolar:** `private: true` ver ve `repo` alanını hiç yazma. Kart başlığı link
  olmaz, bunun yerine kilit ikonlu "Özel repo" rozeti gösterilir.

Örnek bir deneyim kaydı:

```ts
export const experience: Experience[] = [
  {
    role: "Mobil Uygulama Geliştirici (Staj)",
    company: "Örnek Teknoloji A.Ş.",
    period: "Temmuz 2025 — Eylül 2025",
    location: "Antalya",
    type: "Staj",
    description: "Şirketin müşteri uygulamasının yeniden yazımında görev aldım.",
    bullets: ["Ödeme akışını uçtan uca geliştirdim", "Açılış süresini %40 kısalttım"],
    stack: ["React Native", "TypeScript", "REST"],
  },
];
```

## Yapı

```
app/
  layout.tsx      # metadata, SEO, JSON-LD (schema.org Person), fontlar
  page.tsx        # bölümlerin sırası
  globals.css     # tema değişkenleri, animasyonlar, arka plan dokusu
  icon.svg        # favicon
  sitemap.ts / robots.ts
components/       # Nav, Hero, About, Skills, Projects, Timeline, Contact, Footer
lib/data.ts       # tüm içerik
```

Tema `app/globals.css` içindeki `@theme` bloğunda: `--color-accent` ve `--color-accent-2`
değerlerini değiştirirsen tüm sitedeki vurgu renkleri birlikte değişir.

## Yayına alma (Vercel + furkxndev.com)

1. Projeyi bir GitHub reposuna gönder:

   ```bash
   git init && git add -A && git commit -m "portfolyo sitesi"
   git remote add origin git@github.com:furkxndev/<repo-adi>.git
   git push -u origin main
   ```

2. [vercel.com/new](https://vercel.com/new) → repoyu içe aktar. Next.js otomatik algılanır,
   ayar değiştirmene gerek yok.
3. Vercel projesinde **Settings → Domains** → `furkxndev.com` ve `www.furkxndev.com` ekle.
4. Domain sağlayıcında DNS kayıtlarını Vercel'in gösterdiği şekilde ayarla (tipik olarak
   kök alan adı için `A → 76.76.21.21`, `www` için `CNAME → cname.vercel-dns.com`).
5. Yayına aldıktan sonra `lib/data.ts` içindeki `siteUrl` değerinin `https://furkxndev.com`
   olduğundan emin ol — sitemap, canonical ve Open Graph adresleri buradan üretiliyor.

## Erişilebilirlik ve performans notları

- Hareket azaltma tercihi (`prefers-reduced-motion`) açık olan cihazlarda tüm animasyonlar
  ve kaydırma efektleri kapanır.
- Sayfa tamamen statik üretilir (SSG); istemci tarafında yalnızca menü, kaydırma takibi ve
  yazı animasyonu için küçük bileşenler çalışır.
