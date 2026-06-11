import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const sections = [
  {
    num: '1',
    title: 'Настройка личного кабинета',
    text: 'Регистрация, доступ для сотрудников, стоп-лист исполнителей и работа с ЭДО.',
    to: '/docs/category/nastroyka-kabineta',
  },
  {
    num: '2',
    title: 'Приглашение исполнителей',
    text: 'Четыре способа пригласить исполнителей на платформу — выбирайте подходящий.',
    to: '/docs/category/priglashenie-ispolniteley',
  },
  {
    num: '3',
    title: 'Задания и выплаты',
    text: 'Формирование заданий, оплата, арбитраж и мгновенные выплаты исполнителям.',
    to: '/docs/category/zadaniya-i-vyplaty',
  },
  {
    num: '4',
    title: 'Документы и финансы',
    text: 'Пополнение баланса, отчёты о движении средств и закрывающие документы.',
    to: '/docs/category/dokumenty-i-finansy',
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
      </div>
    </section>
  );
}

function Sections() {
  return (
    <section className={styles.cardsSection}>
      <h2 className={styles.sectionTitle}>Разделы базы знаний</h2>
      <div className={styles.cards}>
        {sections.map((s) => (
          <Link key={s.num} to={s.to} className={styles.card}>
            <div className={styles.cardNum}>{s.num}</div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardText}>{s.text}</p>
            </div>
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
        <Sections />
        <Support />
      </main>
    </Layout>
  );
}
