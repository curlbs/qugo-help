import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const sections = [
  {
    img: '/img/benefits_1.png',
    title: 'Настройка кабинета',
    text: 'Регистрация, доступ для сотрудников, стоп-лист и ЭДО с исполнителями.',
    to: '/docs/category/nastroyka-kabineta',
  },
  {
    img: '/img/benefits_2.png',
    title: 'Приглашение исполнителей',
    text: 'Четыре способа пригласить исполнителей на платформу.',
    to: '/docs/category/priglashenie-ispolniteley',
  },
  {
    img: '/img/benefits_3.png',
    title: 'Задания и документы',
    text: 'Формирование заданий, выплаты, баланс и закрывающие документы.',
    to: '/docs/category/zadaniya-i-vyplaty',
  },
];

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroCard}>
        <h1 className={styles.heroTitle}>
          База знаний <span className={styles.accent}>Qugo</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Пошаговые инструкции по всем функциям платформы — от регистрации до закрывающих документов
        </p>
        <Link className={styles.heroButton} to="/docs/category/nastroyka-kabineta">
          Открыть руководство
        </Link>
      </div>
    </section>
  );
}

function Cards() {
  return (
    <section className={styles.cardsSection}>
      <h2 className={styles.sectionTitle}>С чего начать</h2>
      <div className={styles.cards}>
        {sections.map((s) => (
          <Link key={s.title} to={s.to} className={styles.card}>
            <img src={s.img} alt={s.title} className={styles.cardImg} />
            <h3 className={styles.cardTitle}>{s.title}</h3>
            <p className={styles.cardText}>{s.text}</p>
          </Link>
        ))}
      </div>
    </section>
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
  return (
    <Layout
      title="База знаний Qugo"
      description="Руководство пользователя платформы Qugo для работы с самозанятыми, физлицами и ИП">
      <main>
        <Hero />
        <Cards />
        <Support />
      </main>
    </Layout>
  );
}
