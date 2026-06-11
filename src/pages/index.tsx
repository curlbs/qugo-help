import React, {useEffect} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

const sections = [
  {
    img: '/img/benefits_2.png',
    title: 'Настройка кабинета',
    text: 'Регистрация, доступ сотрудникам, стоп-лист и ЭДО.',
    to: '/docs/category/nastroyka-kabineta',
  },
  {
    img: '/img/benefits_1.png',
    title: 'Приглашение исполнителей',
    text: 'Четыре способа пригласить исполнителей.',
    to: '/docs/category/priglashenie-ispolniteley',
  },
  {
    img: '/img/benefits_2.png',
    title: 'Задания и выплаты',
    text: 'Формирование заданий, оплата и арбитраж.',
    to: '/docs/category/zadaniya-i-vyplaty',
  },
  {
    img: '/img/benefits_3.png',
    title: 'Документы и финансы',
    text: 'Баланс, отчёты и закрывающие документы.',
    to: '/docs/category/dokumenty-i-finansy',
  },
];

function SectionCard({img, title, text, to}: typeof sections[number]) {
  const src = useBaseUrl(img);
  return (
    <Link to={to} className={styles.card}>
      <img src={src} alt={title} className={styles.cardImg} />
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardText}>{text}</p>
    </Link>
  );
}

function Support() {
  return (
    <section className={styles.support}>
      <div className={styles.supportInner}>
        <h2 className={styles.supportTitle}>Не нашли ответ?</h2>
        <p className={styles.supportText}>
          Напишите в техподдержку через чат в личном кабинете. Будни 9:00–21:00, выходные 10:00–19:00 (МСК).
        </p>
        <Link className={styles.supportButton} to="/docs/nastroyka-kabineta/tekhnicheskaya-podderzhka">
          Как связаться с поддержкой
        </Link>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  // Класс на body включает прозрачный навбар и выравнивание только на главной
  useEffect(() => {
    document.body.classList.add('home-page');
    return () => document.body.classList.remove('home-page');
  }, []);

  return (
    <Layout
      title="База знаний Qugo"
      description="Руководство пользователя платформы Qugo для работы с самозанятыми, физлицами и ИП">
      <main>
        {/* Первый экран: заголовок + 4 раздела */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <h1 className={styles.heroTitle}>
              База знаний <span className={styles.accent}>Qugo</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Пошаговые инструкции по всем функциям платформы — от регистрации до закрывающих документов
            </p>
            <div className={styles.cards}>
              {sections.map((s) => (
                <SectionCard key={s.title} {...s} />
              ))}
            </div>
          </div>
        </section>
        <Support />
      </main>
    </Layout>
  );
}
