import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'База знаний Qugo',
  tagline: 'Руководство пользователя платформы Qugo',
  favicon: 'img/favicon.ico',

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

  themeConfig: {
    image: 'img/qugo-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'База знаний',
      logo: {
        alt: 'Qugo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/docs',
          label: 'Документация',
          position: 'left',
        },
        {
          href: 'https://qugo.ru',
          label: 'qugo.ru',
          position: 'right',
        },
        {
          href: 'https://lk.qugo.ru',
          label: 'Личный кабинет',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Документация',
          items: [
            {label: 'Настройка кабинета', to: '/docs/category/nastroyka-kabineta'},
            {label: 'Приглашение исполнителей', to: '/docs/category/priglashenie-ispolniteley'},
            {label: 'Задания и выплаты', to: '/docs/category/zadaniya-i-vyplaty'},
            {label: 'Документы и финансы', to: '/docs/category/dokumenty-i-finansy'},
          ],
        },
        {
          title: 'Qugo',
          items: [
            {label: 'Сайт', href: 'https://qugo.ru'},
            {label: 'Личный кабинет', href: 'https://lk.qugo.ru'},
            {label: 'API-документация', href: 'https://qugo.ru/api'},
          ],
        },
        {
          title: 'Контакты',
          items: [
            {label: 'hello@qugo.ru', href: 'mailto:hello@qugo.ru'},
            {label: '+7 (495) 799-00-82', href: 'tel:+74957990082'},
            {label: 'Telegram', href: 'https://t.me/qugo'},
          ],
        },
      ],
      copyright: `© ООО «КЬЮГО ТЕК» ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
