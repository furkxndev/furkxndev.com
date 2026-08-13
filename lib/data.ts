/**
 * Sitenin tüm içeriği burada. Metin/proje güncellemek için sadece bu dosyayı düzenle.
 */

export const profile = {
  name: "Furkan Coşkun",
  handle: "furkxndev",
  title: "Bilgisayar Mühendisi",
  tagline: "Mobil, backend ve oyun tarafında uçtan uca ürün geliştiriyorum.",
  location: "Antalya, Türkiye",
  bio: [
    "Uçtan uca ürün geliştiriyorum: QR ile masadan sipariş alıp kartla ödeme tahsil eden bir restoran sistemi (Masapp), yapay zekâ destekli bir seyahat rota platformu (Gezio), sahiplendirme odaklı bir mobil uygulama (PatiBak). Hepsinde arayüzü de, API'yi de, veritabanı şemasını da kendim kurguladım.",
    "Bir işi \"çalışıyor\" noktasında bırakmıyorum; kimlik doğrulama, Socket.IO ile gerçek zamanlı senkron, ödeme entegrasyonu, migration tabanlı şema yönetimi ve Docker ile dağıtım da işin parçası. Yapay zekâyı süs olarak değil, ürünün merkezinde kullanıyorum — Gemini API ile üretken tarif ve rota akışları kurdum.",
    "Bunların yanında Unity ile fizik tabanlı 2D oyunlar yazıyor, tekrar eden işleri otomatikleştiriyorum: Playwright ve GitHub Actions ile 7/24 çalışan bildirim botları kuruyorum.",
  ],
  email: "furkxndev@gmail.com",
  socials: {
    github: "https://github.com/furkxndev",
    x: "https://x.com/furkxndev",
    linkedin: "https://www.linkedin.com/in/furkxndev/",
  },
  siteUrl: "https://furkxndev.com",
  availability: "Yeni projelere ve iş birliklerine açık",
};

export type Experience = {
  role: string;
  company: string;
  /** Örn: "Temmuz 2025 — Eylül 2025" ya da "2025 — halen" */
  period: string;
  location?: string;
  type?: string; // Staj, Tam zamanlı, Freelance, Yarı zamanlı...
  /** true ise kartta canlı "Devam ediyor" rozeti gösterilir. */
  current?: boolean;
  description?: string;
  bullets?: string[];
  stack?: string[];
};

/**
 * İş/staj deneyimleri — en yeniden eskiye doğru sırala.
 * Dizi boşken "Deneyim" bölümü ve menüdeki bağlantısı hiç görünmez.
 */
export const experience: Experience[] = [
  {
    role: "Bilgisayar Mühendisi",
    company: "Viofun",
    // "Devam ediyor" bilgisini current rozeti taşıyor, dönemde tekrar etmiyoruz.
    period: "Ağu 2026",
    type: "Stajyer",
    current: true,
    // Ne üzerinde çalıştığını anlatmak için: description ve/veya bullets ekle.
  },
  {
    role: "Bilgisayar Mühendisi",
    company: "Moon Workshop",
    period: "Tem 2025 — Ağu 2025",
    type: "Stajyer",
  },
];

export type Education = {
  school: string;
  program: string;
  period: string;
  detail?: string;
};

/** Eğitim bilgileri — dizi boşken bölümün eğitim sütunu görünmez. */
export const education: Education[] = [
  {
    school: "Fırat Üniversitesi",
    program: "Bilgisayar Mühendisliği — Lisans",
    period: "Eki 2023 — Eki 2027",
  },
];

export type Certificate = {
  title: string;
  issuer: string;
  year?: string;
  url?: string;
};

/** Sertifika/eğitim programları — boşken görünmez. */
export const certificates: Certificate[] = [];

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  highlights: string[];
  stack: string[];
  /** Özel repolarda boş bırak — kart link yerine "Özel repo" rozeti gösterir. */
  repo?: string;
  demo?: string;
  private?: boolean;
  featured?: boolean;
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "masapp",
    title: "Masapp",
    category: "Full-stack · Restoran",
    year: "2026",
    summary:
      "Misafirin masadaki QR kodu okutup sipariş verdiği, hesabı bölüştüğü ve kartla ödediği; işletmenin ise siparişleri, masaları ve menüyü tek panelden canlı yönettiği uçtan uca restoran sistemi.",
    highlights: [
      "Socket.IO ile müşteri ekranı ve yönetim paneli anlık senkron — sipariş verildiği an mutfakta görünür",
      "Hesap bölüşme: tüm hesap, kişi başı ya da seçili ürünler üzerinden",
      "İyzico kart ödemesi; geliştirme için ortam değişkeniyle dummy sağlayıcıya geçiş",
      "Paylaşılan sözleşme paketi: tipler, REST yolları, socket olayları ve para mantığı tek yerde — frontend ham fetch çağırmaz",
      "Canlı sipariş akışı, masa ızgarası, menü düzenleme, gün sonu özeti ve nakit tahsilat",
    ],
    stack: [
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Socket.IO",
      "JWT",
      "React 19",
      "Vite",
      "TypeScript",
      "Tailwind v4",
      "Zustand",
      "İyzico",
    ],
    private: true,
    featured: true,
    accent: "from-rose-400 to-orange-500",
  },
  {
    slug: "gezio",
    title: "Gezio",
    category: "Yapay Zekâ · Platform",
    year: "2026",
    summary:
      "Destinasyon, bütçe, süre ve ilgi alanlarına göre gün gün seyahat programı kuran; toplulukta paylaşılan rotaların beğenilip kendi bütçene göre yapay zekâyla yeniden düzenlenebildiği seyahat platformu.",
    highlights: [
      "\"Bu Rotayı Kullan\" — başkasının rotasını kendi bütçe ve süresine göre yeniden kurgulama",
      "Üçüncü partilere açık REST API; OpenAPI 3 şeması ve Swagger UI ile belgelendirildi",
      "PostgreSQL 17 üzerinde TypeORM ile migration tabanlı şema yönetimi",
      "Tek origin mimarisi: nginx `/api` proxy'si sayesinde CORS yok, imaj alan adına bağlı değil",
      "Docker Compose ile web + api + veritabanı tek komutta ayağa kalkar",
    ],
    stack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Bun",
      "Tailwind v4",
      "Zustand",
      "NestJS",
      "PostgreSQL",
      "TypeORM",
      "OpenAPI",
      "Docker",
      "nginx",
    ],
    demo: "https://gezio.furkxndev.com",
    private: true,
    featured: true,
    accent: "from-cyan-400 to-indigo-500",
  },
  {
    slug: "patibak",
    title: "PatiBak",
    category: "Mobil Uygulama",
    year: "2026",
    summary:
      "Sahiplendirilmeyi bekleyen hayvanları yuvalarla, evcil hayvan sahiplerini de güvenilir geçici bakıcılarla buluşturan uçtan uca mobil platform.",
    highlights: [
      "Okundu bilgisi olan gerçek zamanlı mesajlaşma akışı",
      "JWT + BCrypt ile güvenli oturum yönetimi ve doğrulanmış hesap sistemi",
      "Güven puanı ve yorumlara dayalı profil analizi",
      "Reanimated ile akıcı geçişler, iOS'a yakın arayüz hissi",
    ],
    stack: [
      "React Native",
      "Expo Router",
      "TypeScript",
      "Node.js",
      "Express",
      "MySQL",
      "Sequelize",
      "JWT",
    ],
    repo: "https://github.com/furkxndev/patibak",
    featured: true,
    accent: "from-emerald-400 to-teal-500",
  },
  {
    slug: "aifiyet",
    title: "AIfiyet",
    category: "Yapay Zekâ · Web",
    year: "2026",
    summary:
      "Elindeki malzemelere göre yapay zekâ destekli tarif üreten, günlük makro ve kalori takibi yapan beslenme platformu.",
    highlights: [
      "Gemini 2.5 Flash ile tarif + besin değeri üretimi; tehlikeli girdileri reddeden güvenlik katmanı",
      "Controller → Service → Repository → Entity katmanlı mimari",
      "HttpSession + HandlerInterceptor ile korumalı uçlar, merkezî hata yönetimi",
      "Docker Compose ile tek komutta ayağa kalkan uygulama + PostgreSQL",
    ],
    stack: [
      "Java 17",
      "Spring Boot",
      "Spring Data JPA",
      "PostgreSQL",
      "Gemini API",
      "Docker",
      "REST",
    ],
    repo: "https://github.com/furkxndev/aifiyet",
    demo: "https://aifiyet.site",
    featured: true,
    accent: "from-amber-400 to-orange-500",
  },
  {
    slug: "sinav-bildirim",
    title: "OBS Not Bildirici",
    category: "Otomasyon · Bot",
    year: "2026",
    summary:
      "Üniversite otomasyonuna düzenli girip yeni açıklanan sınav sonuçlarını yakalayan ve Telegram'dan haber veren, GitHub Actions üzerinde ücretsiz çalışan bot.",
    highlights: [
      "Playwright ile oturum açma ve sayfa karşılaştırmalı değişiklik tespiti",
      "Çoklu öğrenci desteği; ortak derslerde tek bildirim, isim paylaşmadan",
      "Gizlilik önceliği: puan değil yalnızca \"açıklandı mı?\" bilgisi saklanır",
      "Rastgele gecikme ve saat kısıtı ile engellenmeye karşı korumalı çalışma",
    ],
    stack: ["Python", "Playwright", "Telegram Bot API", "GitHub Actions", "Cron"],
    repo: "https://github.com/furkxndev/sinav-bildirim",
    accent: "from-sky-400 to-blue-500",
  },
  {
    slug: "karanlik-tuzak",
    title: "Karanlık Tuzak",
    category: "Oyun · Unity",
    year: "2026",
    summary:
      "\"Level Devil\" tarzı, karanlık atmosferli 2D mobil troll platform oyunu. Dünya, karakter ve seviyeler tamamen kodla çalışma anında üretiliyor.",
    highlights: [
      "Sprite, ses ve geometri dahil her şey runtime'da üretiliyor — prefab yok",
      "Coyote-time ve jump-buffer ile hassas zıplama hissi",
      "Çöken zemin, sahte platform, yerçekimi ters çevirme, kaçan kapı mekanikleri",
      "Tamamen prosedürel ses sentezi; tek bir ses dosyası kullanılmıyor",
    ],
    stack: ["Unity 2022.3", "C#", "URP 2D", "Mobil Dokunmatik"],
    repo: "https://github.com/furkxndev/Karanlik-Tuzak",
    accent: "from-violet-400 to-fuchsia-500",
  },
  {
    slug: "top-climbing",
    title: "Top Climbing",
    category: "Oyun · Unity",
    year: "2026",
    summary:
      "Hill Climb tarzı, fizik tabanlı mobil tırmanma oyunu: süspansiyonlu araç, sonsuz prosedürel arazi ve garaj ekonomisi.",
    highlights: [
      "WheelJoint2D ile gövde + iki tekerlek + süspansiyon fiziği",
      "Chunk üretimi ve nesne havuzu ile sonsuz arazi",
      "Yakıt, coin, upgrade ve satın alınabilir harita ekonomisi",
      "Editör menüsünden tek tıkla tüm sahne/prefab/sprite üretimi",
    ],
    stack: ["Unity 2022.3", "C#", "2D Physics", "PlayerPrefs"],
    repo: "https://github.com/furkxndev/Top-Climbing",
    accent: "from-lime-400 to-emerald-500",
  },
  {
    slug: "kargo-takip-sistemi",
    title: "Kargo Takip Sistemi",
    category: "Masaüstü",
    year: "2025",
    summary:
      "Gönderi ekleme, takip numarasıyla sorgulama ve durum güncelleme yapılabilen Windows Forms masaüstü uygulaması.",
    highlights: [
      "Takip numarası ile sorgulama ve durum güncelleme akışı",
      "Dosya tabanlı kalıcı veri saklama",
    ],
    stack: ["C#", "WinForms", ".NET"],
    repo: "https://github.com/furkxndev/kargo-takip-sistemi",
    accent: "from-slate-400 to-slate-500",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React 19", "Next.js", "Vite", "TypeScript", "Tailwind CSS", "Zustand"],
  },
  {
    title: "Mobil",
    items: ["React Native", "Expo Router", "Reanimated", "AsyncStorage"],
  },
  {
    title: "Backend & Altyapı",
    items: [
      "NestJS",
      "Spring Boot",
      "Node.js",
      "Express",
      "Java",
      "REST API",
      "JWT",
      "Socket.IO",
    ],
  },
  {
    title: "Veritabanı & ORM",
    items: ["PostgreSQL", "MySQL", "Prisma", "TypeORM", "Sequelize", "Hibernate"],
  },
  {
    title: "Oyun Geliştirme",
    items: ["Unity", "C#", "URP 2D", "2D Physics", "Prosedürel Üretim"],
  },
  {
    title: "DevOps & Otomasyon",
    items: [
      "Docker",
      "nginx",
      "GitHub Actions",
      "Git",
      "Bun",
      "Python",
      "Playwright",
      "Gemini API",
    ],
  },
];

export const timeline = [
  {
    period: "2026 — Ağustos",
    title: "Üretim ölçeğinde platformlar",
    description:
      "Masapp ve Gezio: gerçek zamanlı sipariş ve ödeme akışı, üçüncü partilere açık REST API, migration tabanlı veritabanı şeması ve Docker ile dağıtım.",
    tags: ["NestJS", "Socket.IO", "PostgreSQL", "Docker"],
  },
  {
    period: "2026 — Haziran",
    title: "Unity ile oyun geliştirme",
    description:
      "Karanlık Tuzak ve Top Climbing: fizik sistemleri, prosedürel arazi üretimi, nesne havuzu ve mobil dokunmatik kontroller üzerine yoğunlaşma.",
    tags: ["Unity", "C#"],
  },
  {
    period: "2026 — Mayıs",
    title: "Yapay zekâ destekli servisler",
    description:
      "AIfiyet ile Spring Boot üzerinde katmanlı mimari, Gemini API entegrasyonu ve Docker ile dağıtım.",
    tags: ["Spring Boot", "Gemini API", "Docker"],
  },
  {
    period: "2026 — Mart",
    title: "Uçtan uca mobil ürün",
    description:
      "PatiBak ile React Native arayüzünden Node.js + MySQL backend'ine kadar tüm katmanların tasarımı ve geliştirilmesi.",
    tags: ["React Native", "Node.js"],
  },
  {
    period: "2025",
    title: "Temeller",
    description:
      "C# ve .NET ile masaüstü uygulama geliştirme; veri saklama ve arayüz kurgusu üzerine ilk projeler.",
    tags: ["C#", ".NET"],
  },
];

export const stats = [
  { label: "GitHub Reposu", value: "12" },
  { label: "Aktif Dil", value: "6" },
  { label: "Vitrindeki Proje", value: "8" },
  { label: "Odak Alanı", value: "3" },
];
