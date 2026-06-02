import Icon from '@/components/ui/icon';

const HERO_IMAGE = "https://cdn.poehali.dev/projects/9bf7c9ec-7d4c-49a6-bcc6-4a2c4b2b8e89/files/8df025da-9b54-4544-becb-f2a3b3e592d7.jpg";
const VALUES_IMAGE = "https://cdn.poehali.dev/projects/9bf7c9ec-7d4c-49a6-bcc6-4a2c4b2b8e89/files/67b13929-952b-4450-a2ec-c0579bd609e7.jpg";
const VK_LINK = "https://vk.com/club235557781";

const services = [
  { num: "01", title: "Прорыв", sub: "Активация ресурсов", icon: "Zap" },
  { num: "02", title: "Я‑женщина", sub: "Открытие женской энергии", icon: "Sparkles" },
  { num: "03", title: "Поиск предназначения", sub: "Путь к своему смыслу и призванию", icon: "Compass" },
  { num: "04", title: "Деньги", sub: "Вхождение в поток материальных ресурсов", icon: "TrendingUp" },
  { num: "05", title: "Баланс и восстановление", sub: "Собери себя по кусочкам", icon: "RefreshCw" },
  { num: "06", title: "Моя тень", sub: "Подружись со своей теневой стороной", icon: "Moon" },
  {
    num: "07",
    title: "Тематические бани",
    sub: "Ритуальные женские бани для разных жизненных этапов",
    icon: "Flame",
    children: [
      "Баня именинницы",
      "Баня невесты",
      "Баня закрытие родов",
      "Баня закрытие травм",
      "Баня для здоровья и красоты",
      "Релакс‑бани",
    ],
  },
  { num: "08", title: "Арт‑терапия", sub: "Женские посиделки, рукоделие, групповая и индивидуальная проработка", icon: "Palette" },
  { num: "09", title: "Кризисный психолог", sub: "Услуги психолога", icon: "Brain" },
];

const values = [
  { icon: "Heart", title: "Забота о себе", text: "Пространство, где можно замедлиться, услышать себя и вернуть внутреннюю опору без спешки и осуждения." },
  { icon: "Waves", title: "Телесные практики", text: "Мягкое возвращение в тело через движение, дыхание и ритуалы — от бань до осознанных практик." },
  { icon: "Brain", title: "Психология", text: "Поддержка в кризисах и трансформациях: от тени и предназначения до восстановления после трудных периодов." },
  { icon: "Palette", title: "Творчество", text: "Арт-терапия, женские посиделки и рукоделие — путь к выражению чувств и связи с собой и другими." },
];

const GRAPE_IMAGE = "https://cdn.poehali.dev/projects/9bf7c9ec-7d4c-49a6-bcc6-4a2c4b2b8e89/files/43f891bf-6e84-4a84-9734-3cdc1c8b82c0.jpg";

const Index = () => {
  return (
    <div className="relative" style={{ backgroundColor: 'var(--laza-cream)', color: 'var(--laza-dark)', minHeight: '100vh' }}>

      {/* Лоза левая */}
      <div className="hidden md:block absolute left-0 top-0 w-28 pointer-events-none" style={{ height: '100%', zIndex: 1 }}>
        <svg width="112" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '112px', height: '100%' }}>
          <defs>
            <pattern id="vinePatL" x="0" y="0" width="112" height="400" patternUnits="userSpaceOnUse">
              {/* Главный стебель */}
              <path d="M70 0 Q50 50 65 100 Q80 150 60 200 Q40 250 65 300 Q80 350 60 400"
                stroke="#6b8f5e" strokeWidth="3.5" fill="none" strokeLinecap="round"/>

              {/* Усик 1 */}
              <path d="M65 80 Q45 65 38 72 Q35 82 42 85 Q52 87 62 82"
                stroke="#8aaa7a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>

              {/* Лист 1 — влево, резной виноградный */}
              <g transform="translate(8, 90) rotate(-15)">
                <path d="M30 0 Q20-8 4-4 Q-6 8 0 20 Q8 30 22 26 Q18 18 14 12 Q22 8 30 0Z" fill="#7a9e6a" opacity="0.7"/>
                <path d="M30 0 Q38-6 50 0 Q56 12 48 22 Q38 28 28 24 Q32 16 36 10 Q34 4 30 0Z" fill="#6b8f5e" opacity="0.65"/>
                <path d="M30 0 Q26 16 22 26" stroke="#5a7a50" strokeWidth="1" fill="none"/>
                <path d="M30 0 Q34 14 36 22" stroke="#5a7a50" strokeWidth="1" fill="none"/>
                <path d="M30 0 Q18 10 10 16" stroke="#5a7a50" strokeWidth="0.8" fill="none"/>
                <path d="M30 0 Q40 8 46 16" stroke="#5a7a50" strokeWidth="0.8" fill="none"/>
              </g>

              {/* Усик 2 */}
              <path d="M62 175 Q80 162 86 170 Q88 182 78 184 Q68 185 64 178"
                stroke="#8aaa7a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>

              {/* Гроздь 1 — влево вниз */}
              <g transform="translate(4, 110)">
                <path d="M28 0 Q18 8 14 20" stroke="#8aaa7a" strokeWidth="1.5" fill="none"/>
                <path d="M14 20 Q8 24 6 30 M14 20 Q18 26 16 32"
                  stroke="#8aaa7a" strokeWidth="1.2" fill="none"/>
                <circle cx="6" cy="33" r="6.5" fill="#7a5c8a" opacity="0.55"/>
                <circle cx="17" cy="35" r="6.5" fill="#6b4d7a" opacity="0.5"/>
                <circle cx="11" cy="43" r="6.5" fill="#7a5c8a" opacity="0.52"/>
                <circle cx="4" cy="44" r="5.5" fill="#6b4d7a" opacity="0.45"/>
                <circle cx="19" cy="45" r="5.5" fill="#7a5c8a" opacity="0.48"/>
                <circle cx="11" cy="53" r="6" fill="#6b4d7a" opacity="0.5"/>
                <circle cx="4" cy="53" r="5" fill="#7a5c8a" opacity="0.4"/>
                <circle cx="19" cy="54" r="5" fill="#6b4d7a" opacity="0.42"/>
                <circle cx="11" cy="62" r="5.5" fill="#7a5c8a" opacity="0.45"/>
                <circle cx="5" cy="61" r="4.5" fill="#6b4d7a" opacity="0.38"/>
                <circle cx="18" cy="62" r="4.5" fill="#7a5c8a" opacity="0.4"/>
                <circle cx="11" cy="70" r="5" fill="#6b4d7a" opacity="0.42"/>
                <circle cx="7" cy="69" r="4" fill="#7a5c8a" opacity="0.35"/>
                <circle cx="16" cy="70" r="4" fill="#6b4d7a" opacity="0.38"/>
              </g>

              {/* Лист 2 — вправо */}
              <g transform="translate(56, 195) rotate(10)">
                <path d="M0 30 Q-8 18 -2 4 Q10-4 22 2 Q28 14 22 28 Q14 22 8 16 Q2 22 0 30Z" fill="#7a9e6a" opacity="0.65"/>
                <path d="M0 30 Q8 20 18 14 Q30 10 36 18 Q36 30 26 36 Q14 38 6 32 Q4 30 0 30Z" fill="#6b8f5e" opacity="0.6"/>
                <path d="M0 30 Q12 20 22 14" stroke="#5a7a50" strokeWidth="1" fill="none"/>
                <path d="M0 30 Q6 18 8 8" stroke="#5a7a50" strokeWidth="0.8" fill="none"/>
                <path d="M0 30 Q14 28 24 26" stroke="#5a7a50" strokeWidth="0.8" fill="none"/>
              </g>

              {/* Усик 3 */}
              <path d="M63 270 Q44 258 38 266 Q36 278 46 280 Q56 281 62 273"
                stroke="#8aaa7a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>

              {/* Лист 3 — большой влево */}
              <g transform="translate(2, 280) rotate(-8)">
                <path d="M36 0 Q22-10 4-4 Q-6 10 2 24 Q12 34 28 28 Q24 18 18 12 Q26 6 36 0Z" fill="#8aaa7a" opacity="0.6"/>
                <path d="M36 0 Q46-8 60-2 Q68 12 58 26 Q46 32 34 26 Q38 16 42 10 Q40 4 36 0Z" fill="#7a9e6a" opacity="0.55"/>
                <path d="M36 0 Q30 18 28 28" stroke="#5a7a50" strokeWidth="1" fill="none"/>
                <path d="M36 0 Q40 16 40 24" stroke="#5a7a50" strokeWidth="1" fill="none"/>
                <path d="M36 0 Q20 10 12 18" stroke="#5a7a50" strokeWidth="0.8" fill="none"/>
                <path d="M36 0 Q48 8 54 18" stroke="#5a7a50" strokeWidth="0.8" fill="none"/>
              </g>

              {/* Гроздь 2 — вправо */}
              <g transform="translate(62, 300)">
                <path d="M0 0 Q10 8 14 20" stroke="#8aaa7a" strokeWidth="1.5" fill="none"/>
                <path d="M14 20 Q8 26 7 33 M14 20 Q20 26 19 33"
                  stroke="#8aaa7a" strokeWidth="1.2" fill="none"/>
                <circle cx="6" cy="36" r="6" fill="#7a5c8a" opacity="0.5"/>
                <circle cx="20" cy="36" r="6" fill="#6b4d7a" opacity="0.48"/>
                <circle cx="13" cy="44" r="6.5" fill="#7a5c8a" opacity="0.52"/>
                <circle cx="5" cy="45" r="5.5" fill="#6b4d7a" opacity="0.44"/>
                <circle cx="21" cy="45" r="5.5" fill="#7a5c8a" opacity="0.46"/>
                <circle cx="13" cy="54" r="6" fill="#6b4d7a" opacity="0.48"/>
                <circle cx="6" cy="54" r="5" fill="#7a5c8a" opacity="0.4"/>
                <circle cx="20" cy="54" r="5" fill="#6b4d7a" opacity="0.42"/>
                <circle cx="13" cy="63" r="5.5" fill="#7a5c8a" opacity="0.44"/>
                <circle cx="7" cy="62" r="4.5" fill="#6b4d7a" opacity="0.36"/>
                <circle cx="19" cy="62" r="4.5" fill="#7a5c8a" opacity="0.38"/>
                <circle cx="13" cy="71" r="5" fill="#6b4d7a" opacity="0.4"/>
              </g>
            </pattern>
          </defs>
          <rect width="112" height="100%" fill="url(#vinePatL)"/>
        </svg>
      </div>

      {/* Лоза правая */}
      <div className="hidden md:block absolute right-0 top-0 w-28" style={{ height: '100%', zIndex: 1 }}>
        <div className="pointer-events-none" style={{ height: 'calc(100% - 90px)' }}>
          <svg width="112" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '112px', height: '100%' }}>
            <defs>
              <pattern id="vinePatR" x="0" y="0" width="112" height="400" patternUnits="userSpaceOnUse">
                {/* Главный стебель */}
                <path d="M42 0 Q62 50 47 100 Q32 150 52 200 Q72 250 47 300 Q32 350 52 400"
                  stroke="#6b8f5e" strokeWidth="3.5" fill="none" strokeLinecap="round"/>

                {/* Усик 1 */}
                <path d="M47 80 Q67 65 74 72 Q77 82 70 85 Q60 87 50 82"
                  stroke="#8aaa7a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>

                {/* Лист 1 — вправо */}
                <g transform="translate(54, 88) rotate(15)">
                  <path d="M0 0 Q-10-8 -26-4 Q-36 8 -30 20 Q-22 30 -8 26 Q-12 18 -16 12 Q-8 8 0 0Z" fill="#7a9e6a" opacity="0.7"/>
                  <path d="M0 0 Q8-6 20 0 Q26 12 18 22 Q8 28 -2 24 Q2 16 6 10 Q4 4 0 0Z" fill="#6b8f5e" opacity="0.65"/>
                  <path d="M0 0 Q-4 16 -8 26" stroke="#5a7a50" strokeWidth="1" fill="none"/>
                  <path d="M0 0 Q4 14 6 22" stroke="#5a7a50" strokeWidth="1" fill="none"/>
                  <path d="M0 0 Q-12 10 -20 16" stroke="#5a7a50" strokeWidth="0.8" fill="none"/>
                  <path d="M0 0 Q10 8 16 16" stroke="#5a7a50" strokeWidth="0.8" fill="none"/>
                </g>

                {/* Гроздь 1 — вправо */}
                <g transform="translate(68, 108)">
                  <path d="M0 0 Q10 8 12 20" stroke="#8aaa7a" strokeWidth="1.5" fill="none"/>
                  <path d="M12 20 Q6 26 5 33 M12 20 Q18 26 17 33"
                    stroke="#8aaa7a" strokeWidth="1.2" fill="none"/>
                  <circle cx="4" cy="36" r="6.5" fill="#7a5c8a" opacity="0.55"/>
                  <circle cx="18" cy="36" r="6.5" fill="#6b4d7a" opacity="0.5"/>
                  <circle cx="11" cy="44" r="6.5" fill="#7a5c8a" opacity="0.52"/>
                  <circle cx="3" cy="45" r="5.5" fill="#6b4d7a" opacity="0.45"/>
                  <circle cx="19" cy="45" r="5.5" fill="#7a5c8a" opacity="0.48"/>
                  <circle cx="11" cy="53" r="6" fill="#6b4d7a" opacity="0.5"/>
                  <circle cx="4" cy="54" r="5" fill="#7a5c8a" opacity="0.42"/>
                  <circle cx="18" cy="54" r="5" fill="#6b4d7a" opacity="0.44"/>
                  <circle cx="11" cy="62" r="5.5" fill="#7a5c8a" opacity="0.45"/>
                  <circle cx="5" cy="62" r="4.5" fill="#6b4d7a" opacity="0.38"/>
                  <circle cx="17" cy="62" r="4.5" fill="#7a5c8a" opacity="0.4"/>
                  <circle cx="11" cy="70" r="5" fill="#6b4d7a" opacity="0.42"/>
                </g>

                {/* Усик 2 */}
                <path d="M50 175 Q32 162 26 170 Q24 182 34 184 Q44 185 48 178"
                  stroke="#8aaa7a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>

                {/* Лист 2 — влево */}
                <g transform="translate(10, 192) rotate(-10)">
                  <path d="M46 30 Q54 18 48 4 Q36-4 24 2 Q18 14 24 28 Q32 22 38 16 Q44 22 46 30Z" fill="#7a9e6a" opacity="0.65"/>
                  <path d="M46 30 Q38 20 28 14 Q16 10 10 18 Q10 30 20 36 Q32 38 40 32 Q42 30 46 30Z" fill="#6b8f5e" opacity="0.6"/>
                  <path d="M46 30 Q34 20 24 14" stroke="#5a7a50" strokeWidth="1" fill="none"/>
                  <path d="M46 30 Q40 18 38 8" stroke="#5a7a50" strokeWidth="0.8" fill="none"/>
                  <path d="M46 30 Q32 28 22 26" stroke="#5a7a50" strokeWidth="0.8" fill="none"/>
                </g>

                {/* Усик 3 */}
                <path d="M49 270 Q68 258 74 266 Q76 278 66 280 Q56 281 50 273"
                  stroke="#8aaa7a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>

                {/* Лист 3 — вправо большой */}
                <g transform="translate(46, 278) rotate(8)">
                  <path d="M0 0 Q-14-10 -32-4 Q-42 10 -34 24 Q-24 34 -8 28 Q-12 18 -18 12 Q-10 6 0 0Z" fill="#8aaa7a" opacity="0.6"/>
                  <path d="M0 0 Q10-8 24-2 Q32 12 22 26 Q10 32 -2 26 Q2 16 6 10 Q4 4 0 0Z" fill="#7a9e6a" opacity="0.55"/>
                  <path d="M0 0 Q-6 18 -8 28" stroke="#5a7a50" strokeWidth="1" fill="none"/>
                  <path d="M0 0 Q4 16 4 24" stroke="#5a7a50" strokeWidth="1" fill="none"/>
                  <path d="M0 0 Q-16 10 -24 18" stroke="#5a7a50" strokeWidth="0.8" fill="none"/>
                  <path d="M0 0 Q12 8 18 18" stroke="#5a7a50" strokeWidth="0.8" fill="none"/>
                </g>

                {/* Гроздь 2 — влево */}
                <g transform="translate(-4, 304)">
                  <path d="M28 0 Q18 8 14 20" stroke="#8aaa7a" strokeWidth="1.5" fill="none"/>
                  <path d="M14 20 Q8 26 7 33 M14 20 Q20 26 19 33"
                    stroke="#8aaa7a" strokeWidth="1.2" fill="none"/>
                  <circle cx="6" cy="36" r="6" fill="#7a5c8a" opacity="0.5"/>
                  <circle cx="20" cy="36" r="6" fill="#6b4d7a" opacity="0.48"/>
                  <circle cx="13" cy="44" r="6.5" fill="#7a5c8a" opacity="0.52"/>
                  <circle cx="5" cy="45" r="5.5" fill="#6b4d7a" opacity="0.44"/>
                  <circle cx="21" cy="45" r="5.5" fill="#7a5c8a" opacity="0.46"/>
                  <circle cx="13" cy="54" r="6" fill="#6b4d7a" opacity="0.48"/>
                  <circle cx="6" cy="54" r="5" fill="#7a5c8a" opacity="0.4"/>
                  <circle cx="20" cy="54" r="5" fill="#6b4d7a" opacity="0.42"/>
                  <circle cx="13" cy="63" r="5.5" fill="#7a5c8a" opacity="0.44"/>
                  <circle cx="13" cy="71" r="5" fill="#6b4d7a" opacity="0.4"/>
                </g>
              </pattern>
            </defs>
            <rect width="112" height="100%" fill="url(#vinePatR)"/>
          </svg>
        </div>
        {/* Виноград-кнопка в конце */}
        <a
          href={VK_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-20 mx-auto transition-transform hover:scale-110"
          title="Сообщество ВКонтакте"
          style={{ position: 'relative', zIndex: 2 }}
        >
          <img src={GRAPE_IMAGE} alt="Виноград" className="w-14 h-14 object-contain drop-shadow-md" />
        </a>
      </div>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: 'var(--laza-cream)', borderBottom: '1px solid var(--laza-sand)' }}>
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
          <span className="font-display text-xl md:text-2xl font-light tracking-widest" style={{ color: 'var(--laza-terracotta)' }}>
            ЛАЗА
          </span>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="font-body text-sm tracking-wide transition-opacity hover:opacity-100" style={{ color: 'var(--laza-dark)', opacity: 0.65 }}>О нас</a>
            <a href="#services" className="font-body text-sm tracking-wide transition-opacity hover:opacity-100" style={{ color: 'var(--laza-dark)', opacity: 0.65 }}>Услуги</a>
            <a href="#values" className="font-body text-sm tracking-wide transition-opacity hover:opacity-100" style={{ color: 'var(--laza-dark)', opacity: 0.65 }}>Направления</a>
            <a href={VK_LINK} target="_blank" rel="noopener noreferrer"
              className="font-body text-sm px-5 py-2 rounded-full transition-all hover:opacity-90"
              style={{ backgroundColor: 'var(--laza-terracotta)', color: 'var(--laza-cream)' }}>
              Записаться
            </a>
          </div>
          <a href={VK_LINK} target="_blank" rel="noopener noreferrer"
            className="md:hidden font-body text-xs px-4 py-2 rounded-full"
            style={{ backgroundColor: 'var(--laza-terracotta)', color: 'var(--laza-cream)' }}>
            Записаться
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-16 md:pt-20 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMAGE})`, opacity: 0.12 }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(168,184,154,0.15) 0%, transparent 60%)' }} />

        <div className="relative w-full max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-24">
          {/* Mobile: stack vertically, image first as bg accent */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="animate-fade-up text-center md:text-left">
              <p className="font-body text-xs tracking-[0.25em] uppercase mb-4 md:mb-6" style={{ color: 'var(--laza-terracotta)', opacity: 0.85 }}>
                Женское сообщество
              </p>
              <h1 className="font-display text-5xl md:text-8xl font-light leading-[1.05] mb-5 md:mb-8" style={{ color: 'var(--laza-dark)' }}>
                Сообщество<br />
                <em className="not-italic" style={{ color: 'var(--laza-terracotta)' }}>Лаза</em>
              </h1>
              <p className="font-body text-base md:text-lg leading-relaxed mb-8 md:mb-10 mx-auto md:mx-0 max-w-sm md:max-w-md" style={{ color: 'var(--laza-dark)', opacity: 0.72 }}>
                Окунитесь в мир заботы о себе. Телесные практики, психология и творчество — чтобы найти ресурс и обрести уверенность.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a href={VK_LINK} target="_blank" rel="noopener noreferrer"
                  className="font-body px-7 py-3.5 rounded-full text-sm md:text-base transition-all hover:opacity-90 text-center"
                  style={{ backgroundColor: 'var(--laza-terracotta)', color: 'var(--laza-cream)' }}>
                  Записаться в сообщество
                </a>
                <a href="#about"
                  className="font-body px-7 py-3.5 rounded-full text-sm md:text-base border transition-all hover:opacity-70 text-center"
                  style={{ borderColor: 'var(--laza-sage-dark)', color: 'var(--laza-dark)' }}>
                  Узнать больше
                </a>
              </div>
            </div>

            {/* Hero image — hidden on mobile */}
            <div className="hidden md:block" style={{ animation: 'fadeIn 0.8s ease 0.3s forwards', opacity: 0 }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '4/5' }}>
                <img src={HERO_IMAGE} alt="Сообщество Лаза" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(45,34,24,0.4) 0%, transparent 50%)' }} />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm" style={{ backgroundColor: 'rgba(247,243,238,0.88)' }}>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--laza-sage-dark)' }} />
                    <span className="font-body text-sm" style={{ color: 'var(--laza-dark)' }}>Сообщество живёт и растёт</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1" style={{ opacity: 0.3 }}>
          <span className="font-body text-xs tracking-widest uppercase" style={{ color: 'var(--laza-dark)' }}>Листать</span>
          <Icon name="ChevronDown" size={14} />
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 md:py-32">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl" style={{ aspectRatio: '1/1' }}>
              <img src={VALUES_IMAGE} alt="О сообществе Лаза" className="w-full h-full object-cover" />
              <div className="absolute inset-4 rounded-xl border" style={{ borderColor: 'rgba(247,243,238,0.3)' }} />
            </div>
            <div>
              <p className="font-body text-xs tracking-[0.25em] uppercase mb-3" style={{ color: 'var(--laza-terracotta)', opacity: 0.85 }}>О нас</p>
              <h2 className="font-display text-3xl md:text-5xl font-light leading-tight mb-5" style={{ color: 'var(--laza-dark)' }}>
                Пространство, где женщина возвращается к себе
              </h2>
              <div className="w-10 h-px mb-6" style={{ backgroundColor: 'var(--laza-sage-dark)' }} />
              <p className="font-body text-sm md:text-base leading-relaxed mb-4" style={{ color: 'var(--laza-dark)', opacity: 0.72 }}>
                «Лаза» — это живое сообщество: мы соединяем тело, душу и творчество, чтобы каждая участница могла мягко пройти свой путь — от восстановления до раскрытия потенциала.
              </p>
              <p className="font-body text-sm md:text-base leading-relaxed mb-8" style={{ color: 'var(--laza-dark)', opacity: 0.72 }}>
                Здесь нет спешки и осуждения — только забота, поддержка и живое женское сообщество.
              </p>
              <a href={VK_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-sm font-medium transition-all hover:gap-4"
                style={{ color: 'var(--laza-terracotta)' }}>
                Вступить в сообщество <Icon name="ArrowRight" size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-24" style={{ backgroundColor: 'var(--laza-sand)' }}>
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="mb-10 md:mb-14">
            <p className="font-body text-xs tracking-[0.25em] uppercase mb-3" style={{ color: 'var(--laza-terracotta)', opacity: 0.85 }}>
              Наши услуги
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-light mb-3" style={{ color: 'var(--laza-dark)' }}>
              Практики для тела, души и ресурса
            </h2>
            <p className="font-body text-sm max-w-md" style={{ color: 'var(--laza-dark)', opacity: 0.62 }}>
              Выберите направление, которое откликается сейчас
            </p>
          </div>

          {/* Mobile: vertical list. Desktop: 3-col grid */}
          <div className="flex flex-col gap-3 md:grid md:grid-cols-3 md:gap-4">
            {services.map((s, i) => (
              <a
                key={i}
                href={VK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 md:flex-col md:gap-3 p-4 md:p-6 rounded-2xl transition-all hover:-translate-y-0.5 hover:shadow-md"
                style={{ backgroundColor: 'var(--laza-cream)' }}
              >
                {/* Mobile row: icon + text side by side */}
                <div className="flex items-center gap-3 md:w-full md:justify-between">
                  <div className="w-9 h-9 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: 'var(--laza-sage)', color: 'var(--laza-cream)' }}>
                    <Icon name={s.icon} size={15} fallback="Star" />
                  </div>
                  <span className="md:hidden font-display text-base font-medium leading-snug" style={{ color: 'var(--laza-dark)' }}>
                    {s.title}
                  </span>
                  <span className="hidden md:block font-display text-xs font-light" style={{ color: 'var(--laza-terracotta)', opacity: 0.5 }}>
                    {s.num}
                  </span>
                </div>

                <div className="flex-1 md:flex-none">
                  <h3 className="hidden md:block font-display text-lg font-medium leading-snug mb-1" style={{ color: 'var(--laza-dark)' }}>
                    {s.title}
                  </h3>
                  <p className="font-body text-xs leading-relaxed" style={{ color: 'var(--laza-dark)', opacity: 0.58 }}>
                    {s.sub}
                  </p>
                  {s.children && (
                    <ul className="flex flex-col gap-1 mt-2 pt-2" style={{ borderTop: '1px solid var(--laza-sand)' }}>
                      {s.children.map((c, j) => (
                        <li key={j} className="flex items-start gap-1.5">
                          <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: 'var(--laza-sage-dark)' }} />
                          <span className="font-body text-xs" style={{ color: 'var(--laza-dark)', opacity: 0.65 }}>{c}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <Icon name="ChevronRight" size={14} className="shrink-0 md:hidden opacity-30 mt-1" fallback="ChevronRight" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="py-16 md:py-24" style={{ backgroundColor: 'var(--laza-cream)' }}>
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-14">
            <p className="font-body text-xs tracking-[0.25em] uppercase mb-3" style={{ color: 'var(--laza-terracotta)', opacity: 0.85 }}>Направления</p>
            <h2 className="font-display text-3xl md:text-5xl font-light" style={{ color: 'var(--laza-dark)' }}>Что вас ждёт</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {values.map((item, i) => (
              <div key={i} className="rounded-2xl p-5 md:p-8 flex flex-col gap-3 md:gap-5 transition-transform hover:-translate-y-1"
                style={{ backgroundColor: 'var(--laza-sand)' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'var(--laza-sage)', color: 'var(--laza-cream)' }}>
                  <Icon name={item.icon} size={18} fallback="Heart" />
                </div>
                <h3 className="font-display text-base md:text-xl font-medium" style={{ color: 'var(--laza-dark)' }}>{item.title}</h3>
                <p className="font-body text-xs leading-relaxed hidden md:block" style={{ color: 'var(--laza-dark)', opacity: 0.68 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-32 text-center px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMAGE})`, opacity: 0.08 }} />
        <div className="relative max-w-xl mx-auto">
          <h2 className="font-display text-4xl md:text-6xl font-light mb-4 md:mb-6" style={{ color: 'var(--laza-dark)' }}>
            Готова вернуться к себе?
          </h2>
          <p className="font-body text-sm md:text-base mb-8 md:mb-10 leading-relaxed" style={{ color: 'var(--laza-dark)', opacity: 0.65 }}>
            Присоединяйтесь к сообществу Лаза — первый шаг навстречу себе уже сделан.
          </p>
          <a href={VK_LINK} target="_blank" rel="noopener noreferrer"
            className="inline-block font-body px-8 md:px-10 py-4 md:py-5 rounded-full text-base md:text-lg transition-all hover:opacity-90 hover:scale-105 shadow-lg"
            style={{ backgroundColor: 'var(--laza-terracotta)', color: 'var(--laza-cream)' }}>
            Записаться в ВКонтакте
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-10" style={{ borderTop: '1px solid var(--laza-sand)', backgroundColor: 'var(--laza-cream)' }}>
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          <span className="font-display text-lg md:text-xl tracking-widest" style={{ color: 'var(--laza-terracotta)' }}>ЛАЗА</span>
          <p className="font-body text-xs md:text-sm text-center" style={{ color: 'var(--laza-dark)', opacity: 0.42 }}>
            Женское сообщество · Забота, тело, душа, творчество
          </p>
          <a href={VK_LINK} target="_blank" rel="noopener noreferrer"
            className="font-body text-sm flex items-center gap-2 transition-opacity hover:opacity-100"
            style={{ color: 'var(--laza-dark)', opacity: 0.52 }}>
            <Icon name="ExternalLink" size={13} />
            ВКонтакте
          </a>
        </div>
      </footer>

    </div>
  );
};

export default Index;