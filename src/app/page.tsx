'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
const content = {
  ID: {
    nav: { home: 'Home', about: 'Tentang', services: 'Layanan', workflow: 'Alur Kerja', contact: 'Kontak', consultNow: 'Konsultasi Sekarang' },
    hero: {
      badge: 'Est. 2024 — Excellence',
      title1: 'Wujudkan Ruang',
      title2: 'Impian Anda',
      descDesktop: 'Mengubah ruang menjadi seni digital abadi. Luxora Spaces menjembatani estetika arsitektur kelas atas dengan fungsionalitas modern yang menenangkan jiwa.',
      descMobile: 'Menentukan puncak kemewahan modern melalui presisi arsitektur dan estetika yang menawan.',
      consultNow: 'Konsultasi Sekarang',
      viewPortfolio: 'Lihat Portofolio',
      curation1: 'Kurasi 01',
      curationDesc: 'Zen Minimalis'
    },
    about: {
      firm: 'Tentang Kami',
      title: 'Membentuk Identitas Melalui Arsitektur',
      desc1: 'Luxora Space adalah biro desain interior komprehensif dari awal hingga akhir. Kami percaya setiap ruang memiliki cerita dan potensi untuk memberikan <span class="text-primary font-semibold">pengalaman bermakna.</span>',
      desc2: 'Kami percaya setiap ruang memiliki cerita. Pendekatan kami memadukan fungsionalitas yang ketat dengan kepekaan estetika yang menawan.',
      quote: '"Desain bukan sekadar tentang tampilannya, tetapi bagaimana rasanya hidup di dalamnya."',
      features: [
        { icon: 'auto_awesome', title: 'Estetika', desc: 'Lingkungan visual menakjubkan yang menginspirasi setiap hari.' },
        { icon: 'architecture', title: 'Fungsionalitas', desc: 'Tata letak cerdas yang dirancang untuk alur hidup modern.' },
        { icon: 'spa', title: 'Kenyamanan', desc: 'Desain yang berpusat pada manusia dan mengutamakan kedamaian.' },
        { icon: 'fingerprint', title: 'Identitas', desc: 'Ruang yang disesuaikan untuk mencerminkan kepribadian unik Anda.' }
      ]
    },
    services: {
      title: 'Layanan Kami',
      subtitle: 'Solusi premium untuk setiap sudut kehidupan Anda.',
      curation: 'Kurasi',
      items: [
        { title: 'Dapur', subtitle: 'Keunggulan Kuliner', icon: 'restaurant', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTN4WG8k89xgOaQ1lic0k4zcb8QV3sFrjByfB7RZW5cA5NL-ITpdvtm8FA08RXATMkHjYzj0vTMltTq24onq_4REpsBALUrjctgUKMh_RkEbzpz855f8cLugPEjgESdGSY7V_iB8WWFM_p6nYDvWe5tUfhgGN0qr1bHrgcXp_wghxYZ1Dwe1MqkbQzlM9CPDOU2evqUvOYRjfzYwz5XLVWDA_SU8_7K6yJCveNpdJwE_pc1-k4KF3CtgUkBjDaFARXbJmsUtwzB9n5' },
        { title: 'Kamar Tidur', subtitle: 'Tempat Suci Pribadi', icon: 'bed', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKId1m-t0dK3FTt2UG9d5ffY7b_9sJ7nbSrwmLHl1lset10q29HHdRG_uXalO6hx2czkB4SQ8I2-n8kCkS_s1VJh6RfX2ZzrAJkoX4SHvWrWcqbuAi6zj9DHHbw00pndmwaWbaabpnZbVPTjn5429ECb8AqyvZ_eMi-HRBHIA6yaogNvC8_3-gQgvHA3iyPynLL8fvnJ9HC6FYFZlL_meK5N2SRGengzWKIhKKt8U54g1DD2Sav0An8_PtbXG_hqj1n7uzRe4MVNnU' },
        { title: 'Ruang Keluarga', subtitle: 'Pusat Sosial', icon: 'chair', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7tevRx8in6Y8jBBicXo7p9Neb-PKW5-SpQZ2dN5EugvUwYDGmxkcIZa2Pxqq1ke_fAE1ujhNpVO0Of2hNvriCN6VAcamKz-lDomz92UrG__om-PBF_BD3SgfJTfFtUWlHjZsSOEtuSHQKuWAwZHa273XJmGcOpdNWuzKwODe4l2lP-_br7Ipq0Cx-_TRZqcXjTejMFM9LSc6Fx9GTVXqQAblssnjceVitY97dHV72WUX6FyT4Z-pOgwrR5IaqrVmLLkamqNA8qtfR' }
      ],
      bookBtn: 'Pesan Survei'
    },
    workflow: {
      title: 'Alur Kerja Kami',
      subtitle: 'Perjalanan mulus dari inspirasi awal hingga serah terima, dengan transparansi.',
      steps: [
        { title: 'Konsultasi', desc: 'Diskusikan visi dan kebutuhan ruang Anda.' },
        { title: 'Survei', desc: 'Pengukuran akurat di lokasi Anda.' },
        { title: 'Desain', desc: 'Pembuatan konsep 3D & material.' },
        { title: 'Kontrak', desc: 'Kesepakatan spesifikasi & harga.' },
        { title: 'Produksi', desc: 'Dikerjakan oleh ahli berpengalaman.' },
        { title: 'Serah Terima', desc: 'Selamat datang di ruang impian Anda.' }
      ]
    },
    cta: {
      title: 'Siap mengubah pengalaman hidup Anda?',
      desc: 'Bergabunglah dengan ratusan klien yang telah mewujudkan ruang mewah mereka.',
      btn: 'Jadwalkan Konsultasi'
    },
    footer: {
      copyright: '© 2024 Luxora Spaces. Diciptakan untuk yang istimewa.',
      privacy: 'Kebijakan Privasi',
      terms: 'Syarat & Ketentuan'
    }
  },
  EN: {
    nav: { home: 'Home', about: 'About', services: 'Services', workflow: 'Workflow', contact: 'Contact', consultNow: 'Consult Now' },
    hero: {
      badge: 'Est. 2024 — Excellence',
      title1: 'Realize Your',
      title2: 'Dream Space',
      descDesktop: 'Transforming spaces into timeless digital art. Luxora Spaces bridges high-end architectural aesthetics with modern soul-filling functionality.',
      descMobile: 'Defining the pinnacle of modern luxury through architectural precision and ethereal aesthetics.',
      consultNow: 'Consult Now',
      viewPortfolio: 'View Portfolio',
      curation1: 'Curation 01',
      curationDesc: 'Minimalist Zen'
    },
    about: {
      firm: 'About the Firm',
      title: 'Crafting Identity Through Architecture',
      desc1: 'Luxora Space is a comprehensive end-to-end interior design firm. We believe every space has a story and potential to provide a <span class="text-primary font-semibold">meaningful experience.</span>',
      desc2: 'We believe every space has a story. Our approach combines rigorous functionality with an ethereal aesthetic sense.',
      quote: '"Design is not just what it looks like, it\'s how it feels to live within it."',
      features: [
        { icon: 'auto_awesome', title: 'Aesthetics', desc: 'Visually stunning environments that inspire every day.' },
        { icon: 'architecture', title: 'Functionality', desc: 'Smart layouts designed for modern living workflows.' },
        { icon: 'spa', title: 'Comfort', desc: 'Human-centric design prioritizing peace and ergonomic flow.' },
        { icon: 'fingerprint', title: 'Identity', desc: 'Tailored spaces that reflect your unique personality.' }
      ]
    },
    services: {
      title: 'Our Services',
      subtitle: 'Premium solutions for every corner of your life.',
      curation: 'Curation',
      items: [
        { title: 'Kitchen', subtitle: 'Culinary Excellence', icon: 'restaurant', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTN4WG8k89xgOaQ1lic0k4zcb8QV3sFrjByfB7RZW5cA5NL-ITpdvtm8FA08RXATMkHjYzj0vTMltTq24onq_4REpsBALUrjctgUKMh_RkEbzpz855f8cLugPEjgESdGSY7V_iB8WWFM_p6nYDvWe5tUfhgGN0qr1bHrgcXp_wghxYZ1Dwe1MqkbQzlM9CPDOU2evqUvOYRjfzYwz5XLVWDA_SU8_7K6yJCveNpdJwE_pc1-k4KF3CtgUkBjDaFARXbJmsUtwzB9n5' },
        { title: 'Bedroom', subtitle: 'Private Sanctuary', icon: 'bed', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKId1m-t0dK3FTt2UG9d5ffY7b_9sJ7nbSrwmLHl1lset10q29HHdRG_uXalO6hx2czkB4SQ8I2-n8kCkS_s1VJh6RfX2ZzrAJkoX4SHvWrWcqbuAi6zj9DHHbw00pndmwaWbaabpnZbVPTjn5429ECb8AqyvZ_eMi-HRBHIA6yaogNvC8_3-gQgvHA3iyPynLL8fvnJ9HC6FYFZlL_meK5N2SRGengzWKIhKKt8U54g1DD2Sav0An8_PtbXG_hqj1n7uzRe4MVNnU' },
        { title: 'Living Room', subtitle: 'Social Hub', icon: 'chair', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7tevRx8in6Y8jBBicXo7p9Neb-PKW5-SpQZ2dN5EugvUwYDGmxkcIZa2Pxqq1ke_fAE1ujhNpVO0Of2hNvriCN6VAcamKz-lDomz92UrG__om-PBF_BD3SgfJTfFtUWlHjZsSOEtuSHQKuWAwZHa273XJmGcOpdNWuzKwODe4l2lP-_br7Ipq0Cx-_TRZqcXjTejMFM9LSc6Fx9GTVXqQAblssnjceVitY97dHV72WUX6FyT4Z-pOgwrR5IaqrVmLLkamqNA8qtfR' }
      ],
      bookBtn: 'Book Survey'
    },
    workflow: {
      title: 'Our Workflow',
      subtitle: 'A seamless journey from initial spark to final handover, defined by transparency.',
      steps: [
        { title: 'Consultation', desc: 'Discuss your vision and spatial needs.' },
        { title: 'Survey', desc: 'Precise measurement of your actual site.' },
        { title: 'Design', desc: '3D renderings and material selection.' },
        { title: 'Contract', desc: 'Agreement on timeline and specifications.' },
        { title: 'Production', desc: 'Quality fabrication by expert craftsmen.' },
        { title: 'Handover', desc: 'Welcome to your new dream space.' }
      ]
    },
    cta: {
      title: 'Ready to evolve your living experience?',
      desc: 'Join the hundreds of luxury spaces curated by our expert team. Your masterpiece awaits.',
      btn: 'Schedule a Consultation'
    },
    footer: {
      copyright: '© 2024 Luxora Spaces. Crafted for the Ethereal.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    }
  }
};

export default function Home() {
  const [lang, setLang] = useState<'ID' | 'EN'>('ID');
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'workflow', 'contact'];
      const scrollPosition = window.scrollY + 150; // offset for header

      if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50) {
        setActiveSection('contact');
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // init on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = content[lang];

  return (
    <>
      {/* TopNavBar */}
      <header className="fixed md:top-4 md:left-1/2 md:-translate-x-1/2 md:w-[90%] md:max-w-7xl md:rounded-full top-0 w-full z-50 bg-background/85 md:bg-surface-variant/40 md:dark:bg-surface-variant/20 backdrop-blur-[40px] md:backdrop-blur-2xl flex justify-between items-center px-4 md:px-8 h-16 md:h-14 transition-all duration-300 shadow-[0_4px_24px_0_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]">
        <div className="flex items-center gap-2 md:gap-3">
          <img src="https://lh3.googleusercontent.com/aida/ADBb0ugOajBhieaEF_H4rlp9XfI5ugywpLGLXtsaHQFtv2P41gI8ERGhoHJTw5Gic5cf0ZIQ7GpKP-RmCROpUQn0FaZivo3NXgxQBQ6sp6wgFsXbW2ZBc9mYT3dMYNPyqVAZtOH0exE5V7uCzt-QxFm-952jdQ9KVnk01LVQvfRWbL-YV_8fiWi5_GGQZQezTmJYRg_JfMXVWdwWzSF67Iyw1ocuWS-UhAo-X0-oYFeU6j4BeCAVp86-ClOMiGhx" className="h-8 w-8 rounded-full object-cover logo-img" alt="Luxora Logo" />
          <div className="text-[10px] md:text-xl font-extrabold text-on-surface tracking-[0.2em] md:tracking-tighter uppercase md:capitalize font-headline">Luxora Spaces</div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-headline tracking-tight font-semibold">
          <a href="#home" className={`transition-colors ${activeSection === 'home' ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}>{t.nav.home}</a>
          <a href="#about" className={`transition-colors ${activeSection === 'about' ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}>{t.nav.about}</a>
          <a href="#services" className={`transition-colors ${activeSection === 'services' ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}>{t.nav.services}</a>
          <a href="#workflow" className={`transition-colors ${activeSection === 'workflow' ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}>{t.nav.workflow}</a>
          <a href="#contact" className={`transition-colors ${activeSection === 'contact' ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}>{t.nav.contact}</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Bilingual Toggle */}
          <div className="flex items-center text-[9px] md:text-xs font-bold tracking-tighter border border-outline-variant rounded-full px-2 py-1 gap-1.5 bg-surface/50 cursor-pointer">
            <button onClick={() => setLang('ID')} className={lang === 'ID' ? 'text-primary' : 'text-on-surface-variant'}>ID</button>
            <span className="text-on-surface/20">|</span>
            <button onClick={() => setLang('EN')} className={lang === 'EN' ? 'text-primary' : 'text-on-surface-variant'}>EN</button>
          </div>

          {/* Theme Toggle */}
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 flex items-center justify-center rounded-full hover:bg-surface-variant/50 transition-colors text-on-surface-variant hover:text-primary">
            {mounted && theme === 'dark' ? (
              <span className="material-symbols-outlined text-[20px]">light_mode</span>
            ) : (
              <span className="material-symbols-outlined text-[20px]">dark_mode</span>
            )}
          </button>

          {/* Mobile Menu Btn */}
          <button className="md:hidden text-primary active:scale-95 transition-transform duration-200">
            <span className="material-symbols-outlined">menu</span>
          </button>

          {/* Desktop CTA */}
          <button className="hidden md:flex gold-gradient-btn px-6 py-2 rounded-full font-headline font-bold text-sm hover:scale-105 transition-transform">
            {t.nav.consultNow}
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
          <div className="absolute inset-0 gold-pattern opacity-40 z-0 pointer-events-none"></div>
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="relative z-10 w-full max-w-5xl md:text-center space-y-6 md:space-y-8 mt-12 md:mt-0">
            
            <h1 className="text-5xl md:text-8xl font-headline font-extrabold tracking-tight md:tracking-tighter leading-[1.1] text-on-surface">
              {t.hero.title1} <br className="hidden md:block" />
              <span className="italic md:not-italic hero-gradient-text"> {t.hero.title2}</span>
            </h1>
            
            <p className="text-on-surface-variant font-light md:text-xl md:max-w-2xl mx-auto leading-relaxed">
              <span className="md:hidden">{t.hero.descMobile}</span>
              <span className="hidden md:block">{t.hero.descDesktop}</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="w-full sm:w-auto gold-gradient-btn font-headline font-bold py-4 px-10 rounded-full uppercase md:normal-case tracking-widest md:tracking-normal text-sm md:text-lg shadow-[0_0_30px_rgba(196,164,132,0.2)] hover:scale-105 transition-transform">
                {t.hero.consultNow}
              </button>
              <button className="hidden md:block px-10 py-4 rounded-full liquid-glass text-on-surface font-semibold text-lg hover:bg-surface-variant/50 transition-all">
                {t.hero.viewPortfolio}
              </button>
            </div>
          </div>

          {/* Mobile Image Decor */}
          <div className="mt-16 relative md:hidden w-full z-10">
            <div className="rounded-none overflow-hidden shadow-2xl border border-primary/10">
              <img src="/hero-bg.png" className="w-full h-80 object-cover grayscale-[15%]" alt="Luxury" />
            </div>
            <div className="absolute -bottom-6 -right-2 liquid-glass p-5 rounded-none w-44 border-l-4 border-l-primary">
              <p className="text-[10px] text-primary uppercase tracking-[0.2em] mb-1 font-bold">{t.hero.curation1}</p>
              <p className="text-xs font-bold font-headline text-on-surface">{t.hero.curationDesc}</p>
            </div>
          </div>

          {/* Desktop Asymmetric Visual */}
          <div className="hidden md:block mt-20 w-full max-w-6xl relative z-10">
            <div className="aspect-[21/9] rounded-[2.5rem] overflow-hidden liquid-glass p-2">
              <img src="/hero-bg.png" className="w-full h-full object-cover rounded-[2rem]" alt="Interior Gallery" />
            </div>
          </div>
        </section>

        {/* About Us */}
        <section id="about" className="px-6 py-16 md:py-32 relative bg-surface-variant/30 md:bg-surface-container">
          <div className="absolute top-0 right-0 w-1/2 h-full gold-pattern opacity-10 pointer-events-none md:hidden"></div>
          
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">
            
            {/* Desktop Image */}
            <div className="hidden md:block relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB43CwQy-q6x--uS0E7WnZb2IFCRObYLMNUYASLjfN60G4P0FONdd3IG55uSdPszpGI70m-eMUpMhEIZ_gORG6tyQXCYxvvPHlv38OTSnX-UrNn_jAj6g9r_fHSxHxQUCzpyud1IzdQZAsStNPjoR-We3aoCx4sqElwJO97eYrQdYVa05vuDI18nsWoQEs0ZcuWlEs9uXXi6xY1DNsHBrVYrI3RtwldBQPw8oJtAhK6R65NsXLJ1Qu6ENMHwGKwCbmh-XZLTAe2WReG" className="w-full h-full object-cover" alt="Detail" />
              </div>
              <div className="absolute -bottom-10 -right-10 liquid-glass p-8 rounded-3xl max-w-xs shadow-2xl">
                <p className="text-on-surface italic font-light">{t.about.quote}</p>
              </div>
            </div>

            {/* Text & Features Grid */}
            <div className="liquid-glass md:!bg-transparent md:!border-none md:!backdrop-blur-none md:!shadow-none p-8 md:p-0 rounded-none relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl md:hidden"></div>
              
              <h2 className="md:hidden text-[10px] font-headline font-bold uppercase tracking-[0.4em] text-primary mb-6">{t.about.firm}</h2>
              
              <div className="hidden md:block space-y-4 mb-12">
                <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">{t.about.title}</h2>
                <p className="text-on-surface-variant text-lg">{t.about.desc2}</p>
              </div>

              <p className="md:hidden text-lg font-light leading-relaxed text-on-surface/90 font-body mb-10">
                <span dangerouslySetInnerHTML={{ __html: t.about.desc1 }} />
              </p>

              <div className="grid grid-cols-2 gap-8">
                {t.about.features.map((ft, i) => (
                  <div key={i} className="space-y-3 md:space-y-2">
                    <span className="material-symbols-outlined text-primary text-3xl">{ft.icon}</span>
                    <h4 className="text-[10px] md:text-xl font-headline font-bold uppercase md:normal-case tracking-[0.2em] md:tracking-normal text-on-surface-variant md:text-on-surface">{ft.title}</h4>
                    <p className="hidden md:block text-on-surface-variant text-sm">{ft.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="px-6 py-16 md:py-32 space-y-8 md:space-y-20 max-w-7xl mx-auto">
          {/* Mobile Header */}
          <div className="md:hidden flex items-center gap-4 mb-2">
            <div className="h-px flex-1 bg-primary/20"></div>
            <h2 className="text-xl font-headline font-extrabold tracking-[0.2em] uppercase text-on-surface">{t.services.curation}</h2>
            <div className="h-px flex-1 bg-primary/20"></div>
          </div>

          {/* Desktop Header */}
          <div className="hidden md:block text-center space-y-4">
            <h2 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight">{t.services.title}</h2>
            <p className="text-on-surface-variant text-xl">{t.services.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.services.items.map((svc, i) => (
              <div key={i} className="liquid-glass rounded-none md:rounded-[2rem] p-1 md:p-0 overflow-hidden group hover:scale-[1.02] transition-all duration-500">
                <div className="relative h-56 md:h-64 rounded-none overflow-hidden">
                  <img src={svc.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[15%] md:grayscale-0" alt={svc.title} />
                  <div className="md:hidden absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
                  <div className="md:hidden absolute bottom-4 left-6">
                    <h3 className="text-xl font-headline font-bold text-on-surface tracking-wide">{svc.title}</h3>
                  </div>
                </div>
                
                {/* Mobile Info */}
                <div className="p-6 flex justify-end items-center md:hidden">
                  <button className="gold-gradient-btn p-3 rounded-full">
                    <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
                  </button>
                </div>

                {/* Desktop Info */}
                <div className="hidden md:flex flex-col p-8 space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{svc.title}</h3>
                      <p className="text-on-surface-variant text-sm">{svc.subtitle}</p>
                    </div>
                    <span className="material-symbols-outlined text-primary text-3xl">{svc.icon}</span>
                  </div>
                  <button className="w-full py-4 rounded-full bg-surface-variant text-on-surface font-bold hover:!bg-primary hover:text-on-primary transition-all duration-300">
                    {t.services.bookBtn}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Workflow */}
        <section id="workflow" className="px-6 py-16 md:py-32 bg-surface-variant/30 md:bg-surface-container transition-colors duration-300">
          <div className="max-w-7xl mx-auto">
            {/* Mobile Header */}
            <h2 className="md:hidden text-2xl font-headline font-extrabold tracking-tight mb-12 text-center uppercase tracking-[0.3em] text-on-surface">
              {t.workflow.title}
            </h2>

            {/* Desktop Header */}
            <div className="hidden md:flex mb-20 flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-xl">
                <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">{t.workflow.title}</h2>
                <p className="text-on-surface-variant text-lg">{t.workflow.subtitle}</p>
              </div>
              <div className="hidden md:block h-px bg-outline-variant/50 flex-grow mx-12 mb-6"></div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden relative border-l border-primary/30 ml-4 space-y-12 pb-4">
              {t.workflow.steps.map((step, i) => (
                <div key={i} className="relative pl-10 group">
                  <div className={`absolute -left-[11px] top-0 w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${i === 0 || i === t.workflow.steps.length - 1 ? 'gold-gradient-btn text-white' : 'bg-surface border border-primary/40 text-primary'}`}>
                    {i + 1}
                  </div>
                  <h3 className={`font-headline font-bold text-lg mb-2 uppercase tracking-widest ${i === 0 || i === t.workflow.steps.length - 1 ? 'text-primary' : 'text-on-surface'}`}>{step.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed font-light">{step.desc}</p>
                </div>
              ))}
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
              {t.workflow.steps.map((step, i) => (
                <div key={i} className="liquid-glass p-6 rounded-2xl flex flex-col items-center text-center group hover:bg-primary/10 transition-colors">
                  <div className="w-12 h-12 rounded-full gold-gradient-btn flex items-center justify-center text-white font-bold mb-4">{i + 1}</div>
                  <h4 className="font-bold mb-2">{step.title}</h4>
                  <p className="text-xs text-on-surface-variant">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA - Desktop Only in Original, but we'll adapt for mobile too */}
        <section className="py-16 md:py-32 px-6">
          <div className="max-w-5xl mx-auto liquid-glass rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px]"></div>
            <div className="relative z-10">
              <h2 className="font-headline text-3xl md:text-6xl font-bold mb-6 md:mb-8">{t.cta.title}</h2>
              <p className="text-on-surface-variant text-lg md:text-xl mb-10 md:mb-12 max-w-2xl mx-auto">{t.cta.desc}</p>
              <button className="gold-gradient-btn text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-bold md:text-xl hover:shadow-2xl hover:scale-105 transition-all">
                {t.cta.btn}
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-background border-t border-black/5 dark:border-white/5 md:bg-surface-variant/20 md:backdrop-blur-xl w-full md:rounded-t-[2rem] flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-16 mt-0 md:mt-20 font-body text-sm tracking-wide relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 gold-pattern opacity-5 pointer-events-none md:hidden"></div>
        
        <div className="flex flex-col gap-4 items-center md:items-start mb-8 md:mb-0 relative z-10">
          <div className="flex items-center gap-2">
            <img src="https://lh3.googleusercontent.com/aida/ADBb0ugOajBhieaEF_H4rlp9XfI5ugywpLGLXtsaHQFtv2P41gI8ERGhoHJTw5Gic5cf0ZIQ7GpKP-RmCROpUQn0FaZivo3NXgxQBQ6sp6wgFsXbW2ZBc9mYT3dMYNPyqVAZtOH0exE5V7uCzt-QxFm-952jdQ9KVnk01LVQvfRWbL-YV_8fiWi5_GGQZQezTmJYRg_JfMXVWdwWzSF67Iyw1ocuWS-UhAo-X0-oYFeU6j4BeCAVp86-ClOMiGhx" className="w-12 h-12 md:w-6 md:h-6 object-contain md:rounded-full md:object-cover logo-img" alt="Logo" />
            <div className="text-xl md:text-xl font-bold md:font-black text-on-surface font-headline uppercase tracking-[0.4em] md:tracking-normal md:capitalize">Luxora Spaces</div>
          </div>
          <div className="text-on-surface-variant max-w-xs text-center md:text-left text-[10px] md:text-sm uppercase tracking-[0.3em] md:tracking-normal md:normal-case">{t.footer.copyright}</div>
        </div>

        <div className="flex flex-col gap-6 items-center md:items-end relative z-10 w-full md:w-auto">
          {/* Mobile contact info style */}
          <div className="md:hidden space-y-4 w-full">
            <div className="liquid-glass rounded-none py-4 px-6 flex items-center gap-4 text-left border-primary/10">
              <span className="material-symbols-outlined text-primary text-xl">mail</span>
              <span className="text-on-surface/80 truncate font-light tracking-wide">luxoraspace@gmail.com</span>
            </div>
            <div className="liquid-glass rounded-none py-4 px-6 flex items-center gap-4 text-left border-primary/10">
              <span className="material-symbols-outlined text-primary text-xl">call</span>
              <span className="text-on-surface/80 font-light tracking-wide">0896-4351-4203</span>
            </div>
          </div>

          {/* Desktop contact info style */}
          <div className="hidden md:flex gap-8">
            <a href="mailto:luxoraspace@gmail.com" className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">mail</span>
              luxoraspace@gmail.com
            </a>
            <a href="tel:089643514203" className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">call</span>
              0896-4351-4203
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hidden md:block text-on-surface-variant hover:text-primary transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hidden md:block text-on-surface-variant hover:text-primary transition-colors">{t.footer.terms}</a>
            <a href="#" className="text-on-surface/40 md:text-on-surface-variant hover:text-primary uppercase md:normal-case tracking-widest md:tracking-normal text-[10px] md:text-sm font-bold md:font-normal transition-all">Instagram</a>
            <a href="#" className="text-on-surface/40 md:text-on-surface-variant hover:text-primary uppercase md:normal-case tracking-widest md:tracking-normal text-[10px] md:text-sm font-bold md:font-normal transition-all">LinkedIn</a>
          </div>
        </div>
      </footer>

      {/* Floating Action Button (Mobile Only) */}
      <div className="md:hidden fixed bottom-8 right-6 z-40">
        <button className="gold-gradient-btn p-4 rounded-full shadow-2xl shadow-primary/20 border border-white/20 active:scale-90 transition-transform">
          <span className="material-symbols-outlined text-white text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>chat_bubble</span>
        </button>
      </div>
    </>
  );
}
