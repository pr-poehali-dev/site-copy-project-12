import Icon from '@/components/ui/icon';

const HERO_IMAGE = "https://cdn.poehali.dev/projects/9bf7c9ec-7d4c-49a6-bcc6-4a2c4b2b8e89/files/8df025da-9b54-4544-becb-f2a3b3e592d7.jpg";
const VALUES_IMAGE = "https://cdn.poehali.dev/projects/9bf7c9ec-7d4c-49a6-bcc6-4a2c4b2b8e89/files/67b13929-952b-4450-a2ec-c0579bd609e7.jpg";
const VK_LINK = "https://vk.com/club235557781";

const services = [
  { num: "01", title: "Прорыв", sub: "Активация ресурсов", icon: "Zap" },
  { num: "02", title: "Я‑женщина", sub: "Открытие женской энергии", icon: "Sparkles" },
  { num: "03", title: "Поиск и раскрытие предназначения", sub: "Путь к своему смыслу и призванию", icon: "Compass" },
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
      "Баня закрытие травм после замершей беременности, выкидышей и абортов",
      "Женская баня для здоровья и красоты",
      "Релакс‑бани",
    ],
  },
  { num: "08", title: "Арт‑терапия", sub: "Женские посиделки и рукоделие, групповая и индивидуальная проработка", icon: "Palette" },
  { num: "09", title: "Кризисный психолог", sub: "Услуги психолога", icon: "Brain" },
];

const values = [
  {
    icon: "Heart",
    title: "Забота о себе",
    text: "Пространство, где можно замедлиться, услышать себя и вернуть внутреннюю опору без спешки и осуждения.",
  },
  {
    icon: "Waves",
    title: "Телесные практики",
    text: "Мягкое возвращение в тело через движение, дыхание и ритуалы — от бань до осознанных практик.",
  },
  {
    icon: "Brain",
    title: "Психология",
    text: "Поддержка в кризисах и трансформациях: от тени и предназначения до восстановления после трудных периодов.",
  },
  {
    icon: "Palette",
    title: "Творчество",
    text: "Арт-терапия, женские посиделки и рукоделие — путь к выражению чувств и связи с собой и другими.",
  },
];

const Index = () => {
  return (
    <div style={{ backgroundColor: 'var(--laza-cream)', color: 'var(--laza-dark)', minHeight: '100vh' }}>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: 'var(--laza-cream)', borderBottom: '1px solid var(--laza-sand)' }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-display text-2xl font-light tracking-widest" style={{ color: 'var(--laza-terracotta)' }}>
            ЛАЗА
          </span>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="font-body text-sm tracking-wide transition-opacity hover:opacity-100" style={{ color: 'var(--laza-dark)', opacity: 0.65 }}>
              О нас
            </a>
            <a href="#services" className="font-body text-sm tracking-wide transition-opacity hover:opacity-100" style={{ color: 'var(--laza-dark)', opacity: 0.65 }}>
              Услуги
            </a>
            <a href="#values" className="font-body text-sm tracking-wide transition-opacity hover:opacity-100" style={{ color: 'var(--laza-dark)', opacity: 0.65 }}>
              Направления
            </a>
            <a
              href={VK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm px-5 py-2 rounded-full transition-all hover:opacity-90"
              style={{ backgroundColor: 'var(--laza-terracotta)', color: 'var(--laza-cream)' }}
            >
              Записаться
            </a>
          </div>
          <a
            href={VK_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden font-body text-sm px-4 py-2 rounded-full"
            style={{ backgroundColor: 'var(--laza-terracotta)', color: 'var(--laza-cream)' }}
          >
            Записаться
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-20 min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})`, opacity: 0.15 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 70% 50%, rgba(168,184,154,0.15) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(184,113,74,0.1) 0%, transparent 50%)',
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center w-full">
          <div className="animate-fade-up">
            <p className="font-body text-xs tracking-[0.3em] uppercase mb-6" style={{ color: 'var(--laza-terracotta)', opacity: 0.85 }}>
              Женское сообщество
            </p>
            <h1 className="font-display text-6xl md:text-8xl font-light leading-[1.05] mb-8" style={{ color: 'var(--laza-dark)' }}>
              Сообщество<br />
              <em className="not-italic" style={{ color: 'var(--laza-terracotta)' }}>Лаза</em>
            </h1>
            <p className="font-body text-lg leading-relaxed mb-10 max-w-md" style={{ color: 'var(--laza-dark)', opacity: 0.75 }}>
              Окунитесь в мир заботы о себе. Мы объединяем телесные практики, психологию и творчество, чтобы помочь вам найти ресурс, восстановить силы и обрести уверенность.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={VK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body px-8 py-4 rounded-full text-base transition-all hover:opacity-90 hover:scale-105"
                style={{ backgroundColor: 'var(--laza-terracotta)', color: 'var(--laza-cream)' }}
              >
                Записаться в сообщество
              </a>
              <a
                href="#about"
                className="font-body px-8 py-4 rounded-full text-base border transition-all hover:opacity-70"
                style={{ borderColor: 'var(--laza-sage-dark)', color: 'var(--laza-dark)' }}
              >
                Узнать больше
              </a>
            </div>
          </div>

          <div className="hidden md:block" style={{ animation: 'fadeIn 0.8s ease 0.3s forwards', opacity: 0 }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '4/5' }}>
              <img src={HERO_IMAGE} alt="Сообщество Лаза" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(45,34,24,0.4) 0%, transparent 50%)' }} />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm"
                  style={{ backgroundColor: 'rgba(247,243,238,0.88)' }}>
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--laza-sage-dark)' }} />
                  <span className="font-body text-sm" style={{ color: 'var(--laza-dark)' }}>Сообщество живёт и растёт</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1" style={{ opacity: 0.35 }}>
          <span className="font-body text-xs tracking-widest uppercase" style={{ color: 'var(--laza-dark)' }}>Листать</span>
          <Icon name="ChevronDown" size={16} />
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-xl" style={{ aspectRatio: '1/1' }}>
              <img src={VALUES_IMAGE} alt="О сообществе Лаза" className="w-full h-full object-cover" />
              <div className="absolute inset-4 rounded-2xl border" style={{ borderColor: 'rgba(247,243,238,0.3)' }} />
            </div>

            <div>
              <p className="font-body text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--laza-terracotta)', opacity: 0.85 }}>
                О нас
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-6" style={{ color: 'var(--laza-dark)' }}>
                Пространство, где женщина возвращается к себе
              </h2>
              <div className="w-12 h-px mb-8" style={{ backgroundColor: 'var(--laza-sage-dark)' }} />
              <p className="font-body text-base leading-relaxed mb-5" style={{ color: 'var(--laza-dark)', opacity: 0.72 }}>
                «Лаза» — это живое сообщество: мы соединяем тело, душу и творчество, чтобы каждая участница могла мягко пройти свой путь — от восстановления до раскрытия потенциала.
              </p>
              <p className="font-body text-base leading-relaxed mb-10" style={{ color: 'var(--laza-dark)', opacity: 0.72 }}>
                Здесь нет спешки и осуждения — только забота, поддержка и живое женское сообщество.
              </p>
              <a
                href={VK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-sm font-medium transition-all hover:gap-4"
                style={{ color: 'var(--laza-terracotta)' }}
              >
                Вступить в сообщество <Icon name="ArrowRight" size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 md:py-32" style={{ backgroundColor: 'var(--laza-sand)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="font-body text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--laza-terracotta)', opacity: 0.85 }}>
              Наши услуги
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-4" style={{ color: 'var(--laza-dark)' }}>
              Практики для тела, души и ресурса
            </h2>
            <p className="font-body text-base max-w-xl" style={{ color: 'var(--laza-dark)', opacity: 0.65 }}>
              Выберите направление, которое откликается сейчас — от энергии и предназначения до тематических бань и поддержки психолога.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <a
                key={i}
                href={VK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-3 p-6 rounded-2xl transition-all hover:-translate-y-0.5 hover:shadow-md"
                style={{ backgroundColor: 'var(--laza-cream)' }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs font-light" style={{ color: 'var(--laza-terracotta)', opacity: 0.55 }}>
                    {s.num}
                  </span>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--laza-sage)', color: 'var(--laza-cream)' }}>
                    <Icon name={s.icon} size={13} fallback="Star" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-lg font-medium leading-snug mb-1" style={{ color: 'var(--laza-dark)' }}>
                    {s.title}
                  </h3>
                  <p className="font-body text-xs leading-relaxed" style={{ color: 'var(--laza-dark)', opacity: 0.58 }}>
                    {s.sub}
                  </p>
                </div>
                {s.children && (
                  <ul className="flex flex-col gap-1 mt-1 pt-3" style={{ borderTop: '1px solid var(--laza-sand)' }}>
                    {s.children.map((c, j) => (
                      <li key={j} className="flex items-start gap-1.5">
                        <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: 'var(--laza-sage-dark)' }} />
                        <span className="font-body text-xs" style={{ color: 'var(--laza-dark)', opacity: 0.65 }}>{c}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-auto pt-2 flex items-center gap-1 font-body text-xs opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--laza-terracotta)' }}>
                  <span>Записаться</span>
                  <Icon name="ArrowRight" size={11} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="py-24" style={{ backgroundColor: 'var(--laza-cream)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-body text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--laza-terracotta)', opacity: 0.85 }}>
              Направления
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light" style={{ color: 'var(--laza-dark)' }}>
              Что вас ждёт
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-8 flex flex-col gap-5 transition-transform hover:-translate-y-1 hover:shadow-lg"
                style={{ backgroundColor: 'var(--laza-cream)' }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'var(--laza-sage)', color: 'var(--laza-cream)' }}
                >
                  <Icon name={item.icon} size={20} fallback="Heart" />
                </div>
                <h3 className="font-display text-xl font-medium" style={{ color: 'var(--laza-dark)' }}>
                  {item.title}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--laza-dark)', opacity: 0.68 }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 text-center px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})`, opacity: 0.1 }}
        />
        <div className="relative max-w-2xl mx-auto">
          <h2 className="font-display text-5xl md:text-6xl font-light mb-6" style={{ color: 'var(--laza-dark)' }}>
            Готова вернуться к себе?
          </h2>
          <p className="font-body text-base mb-10 leading-relaxed" style={{ color: 'var(--laza-dark)', opacity: 0.68 }}>
            Присоединяйтесь к сообществу Лаза — первый шаг навстречу себе уже сделан.
          </p>
          <a
            href={VK_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-body px-10 py-5 rounded-full text-lg transition-all hover:opacity-90 hover:scale-105 shadow-lg"
            style={{ backgroundColor: 'var(--laza-terracotta)', color: 'var(--laza-cream)' }}
          >
            Записаться в ВКонтакте
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10" style={{ borderTop: '1px solid var(--laza-sand)', backgroundColor: 'var(--laza-cream)' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-xl tracking-widest" style={{ color: 'var(--laza-terracotta)' }}>
            ЛАЗА
          </span>
          <p className="font-body text-sm" style={{ color: 'var(--laza-dark)', opacity: 0.45 }}>
            Женское сообщество · Забота, тело, душа, творчество
          </p>
          <a
            href={VK_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm flex items-center gap-2 transition-opacity hover:opacity-100"
            style={{ color: 'var(--laza-dark)', opacity: 0.55 }}
          >
            <Icon name="ExternalLink" size={14} />
            ВКонтакте
          </a>
        </div>
      </footer>

    </div>
  );
};

export default Index;