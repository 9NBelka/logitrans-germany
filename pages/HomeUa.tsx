import React, { useState } from 'react';
import { Section } from '../components/Section/Section';
import { Button } from '../components/Button/Button';
import { Modal } from '../components/Modal/Modal';
import { LeadForm } from '../components/LeadForm/LeadForm';
import { FormType } from '../types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import {
  Truck,
  MapPin,
  ShieldCheck,
  Clock,
  Package,
  TrendingUp,
  Users,
  Phone,
  ChevronRight,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import s from '../src/styles/Home.module.scss';
import clsx from 'clsx';
import { BsWhatsapp } from 'react-icons/bs';

export const HomeUa = () => {
  const [activeForm, setActiveForm] = useState<FormType | null>(null);

  const openForm = (type: FormType) => setActiveForm(type);
  const closeForm = () => setActiveForm(null);

  return (
    <div>
      {/* ===== HERO ===== */}
      <div className={s.hero}>
        <div className={s.heroBg}>
          <img src='/images/hero-bg-main.jpg' alt='Логістична вантажівка на дорозі' />
          <div className={s.heroOverlay} />
        </div>

        <div className={s.heroContent}>
          <span className={s.heroBadge}>НАДІЙНО. ПО ВСІЙ ЄВРОПІ. ШВИДКО.</span>
          <h1 className={s.heroTitle}>
            Ваша логістика. <br />
            <span className={s.heroTitleGradient}>Наша відповідальність.</span>
          </h1>
          <p className={s.heroSubtitle}>
            Спеціалізуємося на перевезеннях від 3,5 до 20 тонн — оптимізуємо ваш ланцюг постачання з
            точністю та німецькою надійністю.
          </p>
          <div className={s.heroCta}>
            <Button variant='primary' size='lg' onClick={() => openForm(FormType.TRANSPORT)}>
              Безкоштовний розрахунок
              <ArrowRight style={{ marginLeft: 8, width: 20, height: 20 }} />
            </Button>
            <Button
              variant='outline'
              size='lg'
              onClick={() =>
                document.getElementById('logistics')?.scrollIntoView({ behavior: 'smooth' })
              }>
              Логістичний аутсорсинг
            </Button>
          </div>
        </div>

        <a href='#about' className={s.scrollIndicator}>
          <svg fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 14l-7 7m0 0l-7-7m7 7V3'
            />
          </svg>
        </a>
      </div>

      {/* ===== ABOUT ===== */}
      <Section id='about'>
        <div className={s.aboutGrid}>
          <div>
            <p className={s.sectionLabel}>Про нас</p>
            <h3 className={s.sectionTitle}>
              З 2022 року — ваш партнер у сфері <span>професійних</span> транспортних рішень.
            </h3>
            <p className={s.bodyText}>
              Kantsedal Artem було засновано з чітким баченням: зробити транспортні послуги більш
              прозорими, швидкими та надійними. Те, що починалося з однієї вантажівки, сьогодні є
              потужним автопарком, який щодня перевозить товари по всій Німеччині та Європі.
            </p>
            <p className={s.bodyText}>
              Ми зосереджені на середньому бізнесі. Ми розуміємо, що кожна затримка поставки коштує
              грошей. Саме тому ми використовуємо сучасну телематику, кваліфікований персонал і
              пряму комунікацію.
            </p>

            <div className={s.featureGrid}>
              <div className={s.featureItem}>
                <div className={s.featureIcon}>
                  <Truck size={22} />
                </div>
                <div>
                  <div className={s.featureLabel}>Сучасний автопарк</div>
                  <div className={s.featureSub}>Стандарт Euro 6</div>
                </div>
              </div>
              <div className={s.featureItem}>
                <div className={s.featureIcon}>
                  <MapPin size={22} />
                </div>
                <div>
                  <div className={s.featureLabel}>По всій Європі</div>
                  <div className={s.featureSub}>Логістика без кордонів</div>
                </div>
              </div>
            </div>
          </div>

          <div className={s.imageBlock}>
            {/* <div className={s.imageTilt} /> */}

            <Swiper
              modules={[Autoplay, Navigation]}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              navigation
              loop
              className={s.swiper}>
              {[
                '/images/slide-image-one.jpg',
                '/images/slide-image-two.jpg',
                '/images/slide-image-three.jpg',
                '/images/slide-image-four.jpg',
              ].map((src, i) => (
                <SwiperSlide key={i}>
                  <img src={src} alt={`Slide ${i + 1}`} className={s.mainImage} />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className={s.liveCard}>
              <div className={s.liveCardHeader}>
                <div className={s.liveDot} />
                <span className={s.liveLabel}>Live Status</span>
              </div>
              <p className={s.liveValue}>98.9% Pünktlichkeit</p>
              <p className={s.liveSub}>im letzten Quartal</p>
            </div>
          </div>
        </div>
      </Section>

      {/* ===== TRANSPORT ===== */}
      <Section id='transport' gray>
        <div className={s.sectionHeader}>
          <p className={s.sectionLabel}>Транспортні послуги</p>
          <h3 className={s.sectionTitle}>Безпечно. Вчасно. Індивідуально.</h3>
          <p className={s.sectionDesc}>
            Чи то збірні вантажі, повне завантаження або термінові перевезення — ми маємо
            відповідний транспорт для вашого вантажу від 3,5 т до 20 т.
          </p>
        </div>

        <div className={s.cardsGrid}>
          {[
            {
              icon: Truck,
              title: 'Власний автопарк',
              desc: 'Сучасні транспортні засоби з корисним навантаженням від 3,5 т до 20 т для гнучкого використання.',
            },
            {
              icon: MapPin,
              title: 'GPS‑відстеження',
              desc: 'Відстеження відправлень у реальному часі 24/7. Ви завжди знаєте, де знаходиться ваш вантаж.',
            },
            {
              icon: ShieldCheck,
              title: 'Повне страхування',
              desc: 'Комплексне страхове покриття всіх перевезень відповідно до CMR/HGB.',
            },
            {
              icon: Clock,
              title: 'Just‑in‑Time',
              desc: 'Точне планування термінів для критично важливих виробничих поставок.',
            },
          ].map((f, i) => (
            <div key={i} className={s.card}>
              <div className={s.cardIcon}>
                <f.icon size={30} />
              </div>
              <h4 className={s.cardTitle}>{f.title}</h4>
              <p className={s.cardDesc}>{f.desc}</p>
            </div>
          ))}
        </div>

        <div className={s.sectionCta}>
          <Button onClick={() => openForm(FormType.TRANSPORT)}>
            Розрахувати вартість перевезення
          </Button>
        </div>
      </Section>

      {/* ===== WHY US ===== */}
      <Section id='why-us' dark>
        <div className={s.sectionHeader}>
          <p className={s.sectionLabel}>Чому нам довіряють</p>
          <h3 className={`${s.sectionTitle} ${s.sectionTitleWhite}`}>
            Ваші переваги та наша гарантія
          </h3>
        </div>

        <div className={s.whyGrid}>
          {[
            {
              icon: TrendingUp,
              title: 'Прозорість',
              desc: 'Жодних прихованих витрат. Ми відкрито інформуємо вас про вартість та хід роботи на кожному етапі.',
            },
            {
              icon: Users,
              title: 'Персональні менеджери',
              desc: 'Жодних кол‑центрів. Ви спілкуєтеся безпосередньо з диспетчерами, які розуміють ваш бізнес.',
            },
            {
              icon: ShieldCheck,
              title: 'Максимальна безпека',
              desc: 'Підготовлені водії, надійно закріплений вантаж та відмінно обслуговувані транспортні засоби.',
            },
          ].map((w, i) => (
            <div key={i} className={s.whyItem}>
              <div className={s.whyIconWrap}>
                <w.icon size={38} />
              </div>
              <h4 className={s.whyTitle}>{w.title}</h4>
              <p className={s.whyDesc}>{w.desc}</p>
            </div>
          ))}
        </div>

        <div className={s.sectionCta}>
          <Button variant='white' onClick={() => openForm(FormType.GENERAL)}>
            Запросити комерційну пропозицію
          </Button>
        </div>
      </Section>

      {/* ===== LOGISTICS ===== */}
      <Section id='logistics'>
        <div className={s.logisticsRow}>
          <div className={s.logisticsLeft}>
            <p className={s.sectionLabel}>Логістичний аутсорсинг для бізнесу</p>
            <h3 className={s.sectionTitle}>
              Ви зосереджуєтесь на виробництві — ми беремо на себе всю логістику
            </h3>
            <p className={s.bodyText}>
              Утримання власного логістичного відділу, автопарку та персоналу — це великі постійні
              витрати. Ми пропонуємо повний логістичний аутсорсинг: доставка, перевезення,
              планування маршрутів, контроль і звітність — все в одних руках.
            </p>

            <p className={s.bodyText}>З нами вам не потрібно:</p>
            <ul className={s.dotList}>
              {[
                'утримувати власний логістичний відділ',
                'купувати та обслуговувати транспорт',
                'наймати водіїв і диспетчерів',
                'вирішувати операційні логістичні питання',
              ].map((item, i) => (
                <li key={i} className={s.dotItem}>
                  {item}
                </li>
              ))}
            </ul>

            <p className={s.boldText}>Ви виробляєте продукт. Ми забезпечуємо його доставку.</p>

            <p className={s.subLabel}>Що ви отримуєте, працюючи з нами</p>
            <ul className={s.checkList}>
              {[
                'Повну логістичну підтримку — від планування до доставки кінцевому клієнту',
                'Власний автопарк — без залучення сторонніх перевізників',
                'Зниження витрат — ви платите лише за послугу, а не за штат і техніку',
                'Гнучкість та масштабування — легко збільшуємо або зменшуємо обсяги',
                'Прозорість — зрозумілі процеси та регулярна звітність',
              ].map((item, i) => (
                <li key={i} className={s.checkItem}>
                  <CheckCircle size={18} />
                  {item}
                </li>
              ))}
            </ul>

            <Button variant='primary' onClick={() => openForm(FormType.LOGISTICS)}>
              Безкоштовний логістичний аналіз
            </Button>

            <p className={s.subLabel}>Результат для вашого бізнесу</p>
            <ul className={s.checkList}>
              {[
                'менші витрати',
                'відсутність логістичного штату',
                'передбачувані терміни доставки',
                'повний контроль без занурення в процес',
                'більше часу на розвиток і виробництво',
              ].map((item, i) => (
                <li key={i} className={s.checkItem}>
                  <CheckCircle size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={s.logisticsRight}>
            <h4 className={s.stepsTitle}>Як ми працюємо з бізнесом</h4>
            <div className={s.stepsContainer}>
              {[
                {
                  title: 'Вивчаємо ваш бізнес',
                  subLabel: 'Аналізуємо:',
                  list: [
                    'обсяги виробництва',
                    'тип і частоту перевезень',
                    'географію доставки',
                    'поточні витрати на логістику',
                  ],
                  desc: '👉 Мета — зрозуміти, як зробити логістику дешевшою та ефективнішою.',
                },
                {
                  title: 'Беремо логістику під свій контроль',
                  subLabel: 'Ми повністю беремо на себе:',
                  list: [
                    'організацію перевезень',
                    'управління транспортом',
                    'планування маршрутів',
                    'координацію водіїв',
                    'контроль термінів доставки',
                  ],
                  desc: '👉 Ви більше не залучені в операційні логістичні процеси.',
                },
                {
                  title: 'Виконуємо доставку власним транспортом',
                  subLabel: 'Ми використовуємо власний автопарк, що гарантує:',
                  list: [
                    'стабільність',
                    'контроль якості',
                    'дотримання термінів',
                    'відсутність «посередників»',
                  ],
                  desc: '👉 Менше ризиків — більше відповідальності з нашого боку.',
                },
                {
                  title: 'Оптимізуємо та звітуємо',
                  subLabel: 'Ми постійно:',
                  list: [
                    'оптимізуємо маршрути',
                    'зменшуємо витрати',
                    'підвищуємо швидкість доставки',
                    'надаємо зрозумілу звітність',
                  ],
                  desc: '👉 Ваша логістика працює як система, а не «гасіння пожеж».',
                },
              ].map((step, idx) => (
                <div key={idx} className={s.step}>
                  <div className={s.stepNum}>{idx + 1}</div>
                  <div className={s.stepBody}>
                    <h5 className={s.stepTitle}>{step.title}</h5>
                    <p className={s.stepSubLabel}>{step.subLabel}</p>
                    <ul className={s.dotList}>
                      {step.list.map((item, i) => (
                        <li key={i} className={s.dotItem}>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className={s.stepDesc}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ===== MOVING ===== */}
      <Section id='moving' gray>
        <div className={s.movingCard}>
          <div className={s.movingGrid}>
            <div className={s.movingContent}>
              <div className={s.movingTag}>
                <Package size={18} />
                <span>B2B & B2C</span>
              </div>
              <h3 className={s.movingTitle}>Переїзди по всій Німеччині</h3>
              <p className={s.movingDesc}>
                Чи то корпоративний переїзд, чи приватна зміна житла — ми безпечно доставимо ваше
                майно до пункту призначення. Включно з монтажем, пакуванням та страхуванням.
              </p>
              <Button onClick={() => openForm(FormType.MOVING)}>
                Індивідуальна пропозиція з переїзду
              </Button>
            </div>
            <div
              className={s.movingImage}
              style={{ backgroundImage: 'url("/images/newPhotoLastSection.jpg")' }}
            />
          </div>
        </div>
      </Section>

      {/* ===== FOOTER ===== */}
      <footer className={s.footer}>
        <div className={s.footerInner}>
          <div className={s.footerGrid}>
            <div>
              <a href='#' className={s.footerLogo}>
                <span>Kantsedal Artem</span>
              </a>
              <p className={s.footerDesc}>
                Ваш надійний партнер з перевезень та логістичних рішень у Німеччині та Європі.
              </p>
            </div>

            <div>
              <h4 className={s.footerColTitle}>Навігація</h4>
              <div className={s.footerLinks}>
                <a href='#about'>Про нас</a>
                <a href='#transport'>Перевезення</a>
                <a href='#logistics'>Логістика</a>
                <a href='#moving'>Переїзди</a>
              </div>
            </div>

            <div>
              <h4 className={s.footerColTitle}>Контакти</h4>
              <div className={s.contactList}>
                <div className={s.contactItem}>
                  <MapPin size={16} />
                  <span>
                    Bahnhofstr 7<br />
                    85221 Dachau
                  </span>
                </div>
                <div className={s.contactItem}>
                  <Phone size={16} />
                  <a href='tel:+491753426987'>+49 1753 426987</a>
                </div>
                <div className={s.contactItem}>
                  <Phone size={16} />
                  <a href='tel:+491733970527'>+49 1733 970527</a>
                </div>
                <div className={s.contactItem}>
                  <BsWhatsapp size={16} />
                  <a href='https://wa.me/491753426987'>+49 1511 5885744</a>
                </div>
                <div className={s.contactItem}>
                  <span className={s.contactAt}>@</span>
                  <a href='mailto:hinundher.de@gmail.com'>hinundher.de@gmail.com</a>
                </div>
              </div>
            </div>

            <div className={s.careerBox}>
              <h4 className={s.careerTitle}>Карʼєра</h4>
              <p className={s.careerSub}>Ми продовжуємо зростати! Наразі шукаємо:</p>
              <ul className={s.careerList}>
                <li className={s.careerItem}>
                  <ChevronRight size={12} /> Водій вантажівки (CE)
                </li>
                <li className={s.careerItem}>
                  <ChevronRight size={12} /> Диспетчери
                </li>
              </ul>
              <a href='#' className={s.careerLink}>
                Подати заявку →
              </a>
            </div>
          </div>

          <div className={s.footerBottom}>
            <p>&copy; 2026 Kantsedal Artem GmbH. Усі права захищено.</p>
            <div className={s.footerLegal}>
              {/* <a href='#'>Вихідні дані</a> */}
              <a href='/ua/privacy-policy' target='_blank'>
                Політика конфіденційності
              </a>
              {/* <a href='#'>Умови</a> */}
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {(
        [
          { ft: FormType.TRANSPORT, title: 'Розрахунок вартості перевезення' },
          { ft: FormType.LOGISTICS, title: 'Замовити аналіз логістики' },
          { ft: FormType.MOVING, title: 'Замовити пропозицію переїзду' },
          { ft: FormType.GENERAL, title: 'Загальний запит' },
        ] as { ft: FormType; title: string }[]
      ).map(({ ft, title }) => (
        <Modal key={ft} isOpen={activeForm === ft} onClose={closeForm} title={title}>
          <LeadForm type={ft} onSuccess={closeForm} />
        </Modal>
      ))}
    </div>
  );
};
