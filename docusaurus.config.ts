import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'База знаний Qugo',
  tagline: 'Руководство пользователя платформы Qugo',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://help.qugo.ru',
  baseUrl: '/',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  // Гасит ошибки браузерных расширений (MetaMask и т.п.) в dev-оверлее
  clientModules: ['./src/clientModules/suppressExtensionErrors.ts'],

  // Надёжная загрузка шрифта Inter на весь сайт
  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap',
      type: 'text/css',
    },
  ],
  headTags: [
    {
      tagName: 'link',
      attributes: {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
    },
    {
      tagName: 'link',
      attributes: {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous'},
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [{from: '/docs', to: '/'}],
      },
    ],
  ],

  themeConfig: {
    image: 'img/qugo-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Qugo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://qugo.ru/',
          label: 'Qugo.ru',
          position: 'right',
          className: 'navbar-btn navbar-btn--outline',
        },
        {
          href: 'https://qugo.ru/app/authorization',
          label: 'Личный кабинет',
          position: 'right',
          className: 'navbar-btn navbar-btn--filled',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Решения для бизнеса',
          items: [
            {label: 'Проверка статуса самозанятого', href: 'https://qugo.ru/b2b/proverit-status-samozanyatogo'},
            {label: 'Оплата налогов за самозанятых', href: 'https://qugo.ru/b2b/oplata-nalogov-za-samozanyatyh'},
            {label: 'ЭДО', href: 'https://qugo.ru/edo'},
            {label: 'Интеграция с 1С', href: 'https://qugo.ru/b2b/integraciya-s-1s'},
            {label: 'API-документация', href: 'https://app.theneo.io/9d13aa25-024b-4881-8720-6c20ddac5a92/qugo/qugo-integration-api/introduction'},
            {label: 'Калькулятор ФОТ', href: 'https://qugo.ru/b2b/calculator'},
          ],
        },
        {
          title: 'Продукты для исполнителей',
          items: [
            {label: 'Маркетплейс заданий', href: 'https://qugo.ru/jobs'},
            {label: 'Платформа для внештатников', href: 'https://qugo.ru/samozanyatym'},
            {label: 'База знаний для исполнителей', href: 'https://qugo.ru/b2b/baza-znaniy-dlya-ispolniteley'},
          ],
        },
        {
          title: 'Компания',
          items: [
            {label: 'О компании', href: 'https://qugo.ru/b2b/about'},
            {label: 'Вопросы и ответы', href: 'https://qugo.ru/b2b/faq'},
            {label: 'Блог', href: 'https://qugo.ru/blog'},
            {label: 'Вебинары', href: 'https://qugo.ru/b2b/webinars'},
            {label: 'Партнёрская программа', href: 'https://qugo.ru/b2b/partners'},
          ],
        },
        {
          title: 'Для кого',
          items: [
            {label: 'Бухгалтерам', href: 'https://qugo.ru/b2b/avtomatizaciya-raboty-buhgaltera'},
            {label: 'HR-специалистам', href: 'https://qugo.ru/b2b/hr-platforma'},
            {label: 'Копирайтерам', href: 'https://qugo.ru/b2b/vyplaty-samozanyatym-kopirajteram'},
            {label: 'Маркетологам', href: 'https://qugo.ru/b2b/vyplaty-samozanyatym-marketologam'},
            {label: 'Блогерам', href: 'https://qugo.ru/b2b/vyplaty-samozanyatym-blogeram'},
          ],
        },
        {
          title: 'Отрасли',
          items: [
            {label: 'Курьерские службы', href: 'https://qugo.ru/b2b/vyplaty-samozanyatym-kureram'},
            {label: 'Аутсорсинг', href: 'https://qugo.ru/b2b/vyplaty-autsorser-ispolnitelyam'},
            {label: 'Строительные компании', href: 'https://qugo.ru/b2b/vyplaty-samozanyatym-stroitelnye-raboty'},
            {label: 'Клининг', href: 'https://qugo.ru/b2b/vyplaty-za-uborku'},
            {label: 'Турагенства', href: 'https://qugo.ru/b2b/turisticheskie-kompanii'},
          ],
        },
        {
          title: 'Юридические документы',
          items: [
            {label: 'Патент №2023683288', href: 'https://www1.fips.ru/registers-doc-view/fips_servlet'},
            {label: 'Пользовательское соглашение', href: 'https://qugo.ru/documents/terms-of-use'},
            {label: 'Политика конфиденциальности', href: 'https://qugo.ru/documents/data-policy'},
          ],
        },
        {
          title: 'Контакты',
          items: [
            {label: '+7 495 799 00 82', href: 'tel:+74957990082'},
            {label: 'hello@qugo.ru', href: 'mailto:hello@qugo.ru'},
            {label: 'Telegram', href: 'https://t.me/+doQ_06abdQ9iNjky'},
            {label: 'VK', href: 'https://vk.cc/cPEfmi'},
            {label: 'Max', href: 'https://max.ru/id7727452605_biz'},
          ],
        },
      ],
      copyright: `Основной код ОКВЭД 62.01 · © ООО «КЬЮГО ТЕК» ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
