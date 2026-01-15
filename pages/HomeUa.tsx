import React, { useState, useEffect } from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Modal } from '../components/Modal';
import { LeadForm } from '../components/LeadForm';
import { FormType } from '../types';
import {
  Truck,
  MapPin,
  ShieldCheck,
  Clock,
  BarChart3,
  Package,
  TrendingUp,
  Users,
  Phone,
  Menu,
  X,
  ChevronRight,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const HomeUa = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeForm, setActiveForm] = useState<FormType | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { lang } = useLanguage();

  // Scroll handler for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const modalTitles = {
    [FormType.TRANSPORT]:
      lang === 'de' ? 'Frachtkosten Kalkulation' : 'Розрахунок вартості перевезення',
    [FormType.LOGISTICS]:
      lang === 'de' ? 'Logistik-Analyse anfordern' : 'Замовити аналіз логістики',
    [FormType.MOVING]: lang === 'de' ? 'Umzugsangebot anfordern' : 'Замовити пропозицію переїзду',
    [FormType.GENERAL]: lang === 'de' ? 'Allgemeine Anfrage' : 'Загальний запит',
  };

  const openForm = (type: FormType) => setActiveForm(type);
  const closeForm = () => setActiveForm(null);
  return (
    <div className='min-h-screen bg-gray-50 font-sans text-slate-800'>
      {/* --- Hero Section --- */}

      {/* --- Hero Section --- */}
      <div className='relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden'>
        {/* Background Image with Overlay */}
        <div className='absolute inset-0 z-0'>
          <img
            src='https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
            alt='Логістична вантажівка на дорозі'
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-navy-900 bg-opacity-70'></div>
        </div>

        <div className='relative z-10 text-center px-4 max-w-4xl mx-auto mt-16'>
          <span className='inline-block py-1 px-3 rounded-full bg-signal-500 bg-opacity-20 border border-signal-500 text-signal-500 font-bold mb-6 backdrop-blur-sm animate-fade-in-up'>
            НАДІЙНО. ПО ВСІЙ ЄВРОПІ. ШВИДКО.
          </span>
          <h1 className='text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6'>
            Ваша логістика.
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300'>
              Наша відповідальність.
            </span>
          </h1>
          <p className='text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light'>
            Спеціалізуємося на перевезеннях від 3,5 до 20 тонн. - оптимізуємо ваш ланцюг постачання
            з точністю та німецькою надійністю.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              variant='primary'
              size='lg'
              onClick={() => openForm(FormType.TRANSPORT)}
              className='group'>
              Безкоштовний розрахунок
              <ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
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

        {/* Scroll Indicator */}
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white opacity-70'>
          <a href='#about'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 14l-7 7m0 0l-7-7m7 7V3'
              />
            </svg>
          </a>
        </div>
      </div>

      {/* --- About Section --- */}
      <Section id='about'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div>
            <h2 className='text-signal-500 font-bold tracking-wider uppercase mb-2'>Про нас</h2>
            <h3 className='text-4xl font-extrabold text-navy-900 mb-6'>
              З 2022 року — ваш партнер у сфері професійних (комплексних) транспортних рішень.
            </h3>
            <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
              Kantsedal Artem було засновано з чітким баченням: зробити транспортні послуги більш
              прозорими, швидкими та надійними. Те, що починалося з однієї вантажівки, сьогодні є
              потужним автопарком, який щодня перевозить товари по всій Німеччині та Європі.
            </p>
            <p className='text-lg text-gray-600 mb-8 leading-relaxed'>
              Ми зосереджені на середньому бізнесі. Ми розуміємо, що кожна затримка поставки коштує
              грошей. Саме тому ми використовуємо сучасну телематику, кваліфікований персонал і
              пряму комунікацію.
            </p>

            <div className='grid grid-cols-2 gap-6'>
              <div className='flex items-start'>
                <div className='bg-navy-50 p-3 rounded-lg mr-4 text-navy-900'>
                  <Truck size={24} />
                </div>
                <div>
                  <h4 className='font-bold text-navy-900'>Сучасний автопарк</h4>
                  <p className='text-sm text-gray-500'>Стандарт Euro 6</p>
                </div>
              </div>
              <div className='flex items-start'>
                <div className='bg-navy-50 p-3 rounded-lg mr-4 text-navy-900'>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className='font-bold text-navy-900'>По всій Європі</h4>
                  <p className='text-sm text-gray-500'>Логістика без кордонів</p>
                </div>
              </div>
            </div>
          </div>
          <div className='relative'>
            <div className='absolute -inset-4 bg-signal-500 rounded-lg opacity-20 transform rotate-3'></div>
            <img
              src='/images/screen-two.jpg'
              alt='Професійна логістична команда'
              className='relative rounded-lg shadow-2xl w-full h-auto object-cover'
            />
            <div className='absolute bottom-6 left-6 bg-white p-6 rounded-lg shadow-lg max-w-xs hidden lg:block'>
              <div className='flex items-center gap-3 mb-2'>
                <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'></div>
                <span className='text-sm font-bold text-gray-600'>Статус онлайн</span>
              </div>
              <p className='font-bold text-navy-900 text-lg'>98,9% своєчасності</p>
              <p className='text-xs text-gray-500'>за останній квартал</p>
            </div>
          </div>
        </div>
      </Section>

      {/* --- Transport Services --- */}
      <Section id='transport' className='bg-gray-100'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <h2 className='text-signal-500 font-bold tracking-wider uppercase mb-2'>
            Транспортні послуги
          </h2>
          <h3 className='text-4xl font-extrabold text-navy-900 mb-4'>
            Безпечно. Вчасно. Індивідуально.
          </h3>
          <p className='text-gray-600'>
            Чи то збірні вантажі, повне завантаження або термінові перевезення — ми маємо
            відповідний транспорт для вашого вантажу від 3,5 т до 20 т.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
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
          ].map((feature, idx) => (
            <div
              key={idx}
              className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-transparent hover:border-signal-500 group'>
              <div className='mb-6 inline-block p-4 bg-navy-50 rounded-full group-hover:bg-signal-500 group-hover:text-white transition-colors duration-300 text-navy-900'>
                <feature.icon size={32} />
              </div>
              <h4 className='text-xl font-bold text-navy-900 mb-3'>{feature.title}</h4>
              <p className='text-gray-600 text-sm leading-relaxed'>{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className='mt-16 text-center'>
          <Button onClick={() => openForm(FormType.TRANSPORT)}>
            Розрахувати вартість перевезення
          </Button>
        </div>
      </Section>

      {/* --- Why Us / Value Prop --- */}
      <Section id='why-us' dark>
        <div className='text-center mb-16'>
          <h2 className='text-signal-500 font-bold tracking-wider uppercase mb-2'>
            Чому нам довіряють
          </h2>
          <h3 className='text-4xl font-extrabold text-white'>Ваші переваги та наша гарантія</h3>
        </div>

        <div className='grid md:grid-cols-3 gap-10'>
          <div className='flex flex-col items-center text-center'>
            <div className='bg-white/10 p-6 rounded-full mb-6 backdrop-blur-sm'>
              <TrendingUp size={40} className='text-signal-500' />
            </div>
            <h4 className='text-xl font-bold text-white mb-3'>Прозорість</h4>
            <p className='text-gray-300'>
              Жодних прихованих витрат. Ми відкрито інформуємо вас про вартість та хід роботи на
              кожному етапі.
            </p>
          </div>
          <div className='flex flex-col items-center text-center'>
            <div className='bg-white/10 p-6 rounded-full mb-6 backdrop-blur-sm'>
              <Users size={40} className='text-signal-500' />
            </div>
            <h4 className='text-xl font-bold text-white mb-3'>Персональні менеджери</h4>
            <p className='text-gray-300'>
              Жодних кол‑центрів. Ви спілкуєтеся безпосередньо з диспетчерами, які розуміють ваш
              бізнес.
            </p>
          </div>
          <div className='flex flex-col items-center text-center'>
            <div className='bg-white/10 p-6 rounded-full mb-6 backdrop-blur-sm'>
              <ShieldCheck size={40} className='text-signal-500' />
            </div>
            <h4 className='text-xl font-bold text-white mb-3'>Максимальна безпека</h4>
            <p className='text-gray-300'>
              Підготовлені водії, надійно закріплений вантаж та відмінно обслуговувані транспортні
              засоби.
            </p>
          </div>
        </div>

        <div className='mt-12 text-center'>
          <Button variant='white' onClick={() => openForm(FormType.GENERAL)}>
            Запросити комерційну пропозицію
          </Button>
        </div>
      </Section>

      {/* --- Logistics Outsourcing --- */}
      <Section id='logistics'>
        <div className='flex flex-col lg:flex-row gap-16'>
          <div className='lg:w-1/2'>
            <h2 className='text-signal-500 font-bold tracking-wider uppercase mb-2'>
              Логістичний аутсорсинг для бізнесу
            </h2>
            <h3 className='text-4xl font-extrabold text-navy-900 mb-6'>
              Ви зосереджуєтесь на виробництві — ми беремо на себе всю логістику
            </h3>

            <p className='text-lg text-gray-600 mb-8'>
              Утримання власного логістичного відділу, автопарку та персоналу — це великі постійні
              витрати. Ми пропонуємо повний логістичний аутсорсинг: доставка, перевезення,
              планування маршрутів, контроль і звітність — все в одних руках.
            </p>

            <p className='text-lg text-gray-600'>З нами вам не потрібно:</p>
            <ul className='space-y-4 mb-8'>
              {[
                'утримувати власний логістичний відділ',
                'купувати та обслуговувати транспорт',
                'наймати водіїв і диспетчерів',
                'вирішувати операційні логістичні питання',
              ].map((item, i) => (
                <li key={i} className='flex items-center text-navy-900 font-medium mt-2'>
                  {/* <CheckCircle className='text-signal-500 mr-3 flex-shrink-0' size={20} /> */}•{' '}
                  {item}
                </li>
              ))}
            </ul>

            <p className='text-lg text-gray-600 mb-8 font-bold'>
              Ви виробляєте продукт. Ми забезпечуємо його доставку.
            </p>

            <p className='text-lg text-gray-600 mb-4'>Що ви отримуєте, працюючи з нами</p>
            <ul className='space-y-4 mb-8'>
              {[
                'Повну логістичну підтримку — від планування до доставки кінцевому клієнту',
                'Власний автопарк — без залучення сторонніх перевізників',
                'Зниження витрат — ви платите лише за послугу, а не за штат і техніку',
                'Гнучкість та масштабування — легко збільшуємо або зменшуємо обсяги',
                'Прозорість — зрозумілі процеси та регулярна звітність',
              ].map((item, i) => (
                <li key={i} className='flex items-center text-navy-900 font-medium'>
                  <CheckCircle className='text-signal-500 mr-3 flex-shrink-0' size={20} />
                  {item}
                </li>
              ))}
            </ul>

            <Button variant='primary' onClick={() => openForm(FormType.LOGISTICS)}>
              Безкоштовний логістичний аналіз
            </Button>

            <p className='text-lg text-gray-600 mb-4 mt-8'>Результат для вашого бізнесу</p>
            <ul className='space-y-4 mb-8'>
              {[
                'менші витрати',
                'відсутність логістичного штату',
                'передбачувані терміни доставки',
                'повний контроль без занурення в процес',
                'більше часу на розвиток і виробництво',
              ].map((item, i) => (
                <li key={i} className='flex items-center text-navy-900 font-medium '>
                  <CheckCircle className='text-signal-500 mr-3 flex-shrink-0' size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className='lg:w-1/2'>
            <h4 className='text-2xl font-bold text-navy-900 mb-8'>Як ми працюємо з бізнесом</h4>
            <div className='space-y-8 relative'>
              <div className='absolute left-6 top-4 bottom-4 w-0.5 bg-gray-200'></div>

              {[
                {
                  title: 'Вивчаємо ваш бізнес',
                  titleList: 'Аналізуємо:',
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
                  titleList: 'Ми повністю беремо на себе:',
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
                  titleList: 'Ми використовуємо власний автопарк, що гарантує:',
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
                  titleList: 'Ми постійно:',
                  list: [
                    'оптимізуємо маршрути',
                    'зменшуємо витрати',
                    'підвищуємо швидкість доставки',
                    'надаємо зрозумілу звітність',
                  ],
                  desc: '👉 Ваша логістика працює як система, а не «гасіння пожеж».',
                },
              ].map((step, idx) => (
                <div key={idx} className='relative flex items-start'>
                  <div className='flex-shrink-0 w-12 h-12 rounded-full bg-navy-900 text-white flex items-center justify-center font-bold z-10 border-4 border-white shadow-md'>
                    {idx + 1}
                  </div>

                  <div className='ml-6 pt-2'>
                    <h5 className='text-lg font-bold text-navy-900'>{step.title}</h5>
                    <p className='text-lg text-gray-600 mt-4'>{step.titleList}</p>
                    <ul className='space-y-4 mb-8'>
                      {step.list.map((listText, i) => (
                        <li key={i} className='flex items-center text-navy-900 font-medium mt-2'>
                          {/* <CheckCircle className='text-signal-500 mr-3 flex-shrink-0' size={20} /> */}
                          • {''} {listText}
                        </li>
                      ))}
                    </ul>

                    <p className='text-gray-600 '>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* --- Moving Services --- */}
      <Section id='moving' className='bg-gray-100'>
        <div className='bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200'>
          <div className='grid md:grid-cols-2'>
            <div className='p-12 flex flex-col justify-center'>
              <div className='flex items-center gap-2 mb-4'>
                <Package className='text-signal-500' />
                <span className='text-sm font-bold text-gray-500 uppercase tracking-wide'>
                  B2B & B2C
                </span>
              </div>
              <h3 className='text-3xl font-extrabold text-navy-900 mb-4'>
                Переїзди по всій Німеччині
              </h3>
              <p className='text-gray-600 mb-8'>
                Чи то корпоративний переїзд, чи приватна зміна житла — ми безпечно доставимо ваше
                майно до пункту призначення. Включно з монтажем, пакуванням та страхуванням.
              </p>
              <Button onClick={() => openForm(FormType.MOVING)}>
                Індивідуальна пропозиція з переїзду
              </Button>
            </div>
            <div
              className='h-64 md:h-auto bg-cover bg-center'
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1600518464441-9154a4dea21b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")',
              }}></div>
          </div>
        </div>
      </Section>

      {/* --- Career & Footer --- */}
      <footer className='bg-navy-900 text-white border-t border-navy-800'>
        <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-20 pb-10'>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16'>
            <div>
              <a
                href='#'
                className='text-2xl font-extrabold text-white tracking-tighter mb-6 block'>
                <span className='text-signal-500'>Kantsedal Artem</span>
              </a>
              <p className='text-gray-400 text-sm leading-relaxed mb-6'>
                Ваш надійний партнер з перевезень та логістичних рішень у Німеччині та Європі.
              </p>
            </div>

            <div>
              <h4 className='font-bold text-lg mb-6'>Навігація</h4>
              <ul className='space-y-3 text-gray-400 text-sm'>
                <li>
                  <a href='#about' className='hover:text-signal-500 transition-colors'>
                    Про нас
                  </a>
                </li>
                <li>
                  <a href='#transport' className='hover:text-signal-500 transition-colors'>
                    Перевезення
                  </a>
                </li>
                <li>
                  <a href='#logistics' className='hover:text-signal-500 transition-colors'>
                    Логістика
                  </a>
                </li>
                <li>
                  <a href='#moving' className='hover:text-signal-500 transition-colors'>
                    Переїзди
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className='font-bold text-lg mb-6'>Контакти</h4>
              <ul className='space-y-4 text-gray-400 text-sm'>
                <li className='flex items-start'>
                  <MapPin size={18} className='mr-3 text-signal-500 mt-0.5' />
                  <span>
                    Pflaumdorfer tr.5
                    <br />
                    86922 Eresing
                  </span>
                </li>
                <li className='flex items-center'>
                  <Phone size={18} className='mr-3 text-signal-500' />
                  <a href='tel:+4915115885744'>
                    <span>+49 1511 5885744</span>
                  </a>
                </li>
                <li className='flex items-center'>
                  <span className='w-4 h-4 mr-3 flex items-center justify-center text-signal-500 font-bold'>
                    @
                  </span>
                  <a href='mailto:hinundher.de@gmail.com' target='_blank'>
                    <span>hinundher.de@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className='bg-navy-800 p-6 rounded-lg'>
              <h4 className='font-bold text-white mb-2'>Карʼєра</h4>
              <p className='text-xs text-gray-400 mb-4'>Ми продовжуємо зростати! Наразі шукаємо:</p>
              <ul className='text-xs text-gray-300 space-y-2 mb-4'>
                <li className='flex items-center'>
                  <ChevronRight size={12} className='text-signal-500 mr-1' /> Водій вантажівки (CE)
                </li>
                <li className='flex items-center'>
                  <ChevronRight size={12} className='text-signal-500 mr-1' /> Диспетчери
                </li>
              </ul>
              <a
                href='#'
                className='text-xs font-bold text-signal-500 hover:text-white transition-colors'>
                Подати заявку →
              </a>
            </div>
          </div>

          <div className='border-t border-navy-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500'>
            <p>&copy; 2026 Kantsedal Artem GmbH. Усі права захищено.</p>
            <div className='flex space-x-6 mt-4 md:mt-0'>
              <a href='#' className='hover:text-white'>
                Вихідні дані
              </a>
              <a href='#' className='hover:text-white'>
                Захист даних
              </a>
              <a href='#' className='hover:text-white'>
                Умови
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* --- Modals --- */}
      <Modal
        isOpen={activeForm === FormType.TRANSPORT}
        onClose={closeForm}
        title={modalTitles[FormType.TRANSPORT]}>
        <LeadForm type={FormType.TRANSPORT} onSuccess={closeForm} />
      </Modal>

      <Modal
        isOpen={activeForm === FormType.LOGISTICS}
        onClose={closeForm}
        title={modalTitles[FormType.TRANSPORT]}>
        <LeadForm type={FormType.LOGISTICS} onSuccess={closeForm} />
      </Modal>

      <Modal
        isOpen={activeForm === FormType.MOVING}
        onClose={closeForm}
        title={modalTitles[FormType.TRANSPORT]}>
        <LeadForm type={FormType.MOVING} onSuccess={closeForm} />
      </Modal>

      <Modal
        isOpen={activeForm === FormType.GENERAL}
        onClose={closeForm}
        title={modalTitles[FormType.TRANSPORT]}>
        <LeadForm type={FormType.GENERAL} onSuccess={closeForm} />
      </Modal>
    </div>
  );
};
