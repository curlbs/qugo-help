import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

type LinkItem = {label: string; href: string};

const businessSolutions: LinkItem[] = [
  {label: 'Проверка статуса самозанятого', href: 'https://qugo.ru/b2b/proverit-status-samozanyatogo'},
  {label: 'Оплата налогов за самозанятых', href: 'https://qugo.ru/b2b/oplata-nalogov-za-samozanyatyh'},
  {label: 'ЭДО', href: 'https://qugo.ru/edo'},
  {label: 'Интеграция с 1С', href: 'https://qugo.ru/b2b/integraciya-s-1s'},
  {label: 'API-документация', href: 'https://app.theneo.io/9d13aa25-024b-4881-8720-6c20ddac5a92/qugo/qugo-integration-api/introduction'},
  {label: 'Калькулятор ФОТ', href: 'https://qugo.ru/b2b/calculator'},
];

const company: LinkItem[] = [
  {label: 'О компании', href: 'https://qugo.ru/b2b/about'},
  {label: 'Вопросы и ответы', href: 'https://qugo.ru/b2b/faq'},
  {label: 'Блог', href: 'https://qugo.ru/blog'},
  {label: 'Вебинары', href: 'https://qugo.ru/b2b/webinars'},
  {label: 'Партнёрская программа', href: 'https://qugo.ru/b2b/partners'},
];

const forWhom: LinkItem[] = [
  {label: 'Бухгалтерам', href: 'https://qugo.ru/b2b/avtomatizaciya-raboty-buhgaltera'},
  {label: 'HR-специалистам', href: 'https://qugo.ru/b2b/hr-platforma'},
  {label: 'Копирайтерам', href: 'https://qugo.ru/b2b/vyplaty-samozanyatym-kopirajteram'},
  {label: 'Маркетологам', href: 'https://qugo.ru/b2b/vyplaty-samozanyatym-marketologam'},
  {label: 'Блогерам', href: 'https://qugo.ru/b2b/vyplaty-samozanyatym-blogeram'},
];

const industries: LinkItem[] = [
  {label: 'Курьерские службы', href: 'https://qugo.ru/b2b/vyplaty-samozanyatym-kureram'},
  {label: 'Аутсорсинг', href: 'https://qugo.ru/b2b/vyplaty-autsorser-ispolnitelyam'},
  {label: 'Строительные компании', href: 'https://qugo.ru/b2b/vyplaty-samozanyatym-stroitelnye-raboty'},
  {label: 'Клининг', href: 'https://qugo.ru/b2b/vyplaty-za-uborku'},
  {label: 'Турагенства', href: 'https://qugo.ru/b2b/turisticheskie-kompanii'},
];

const forContractors: LinkItem[] = [
  {label: 'Маркетплейс заданий', href: 'https://qugo.ru/jobs'},
  {label: 'Платформа для внештатников', href: 'https://qugo.ru/samozanyatym'},
  {label: 'База знаний для исполнителей', href: 'https://qugo.ru/b2b/baza-znaniy-dlya-ispolniteley'},
];

const legal: LinkItem[] = [
  {label: 'Патент №2023683288', href: 'https://www1.fips.ru/registers-doc-view/fips_servlet'},
  {label: 'Пользовательское соглашение', href: 'https://qugo.ru/documents/terms-of-use'},
  {label: 'Политика конфиденциальности', href: 'https://qugo.ru/documents/data-policy'},
];

function Column({title, items}: {title: string; items: LinkItem[]}) {
  return (
    <div className={styles.col}>
      <div className={styles.colTitle}>{title}</div>
      <ul className={styles.colList}>
        {items.map((it) => (
          <li key={it.label}>
            <Link className={styles.link} href={it.href}>
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TelegramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
    </svg>
  );
}
function VkIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.79 16.95c-5.45 0-8.56-3.74-8.69-9.95h2.73c.09 4.56 2.1 6.49 3.7 6.89V7h2.57v3.94c1.57-.17 3.23-1.97 3.79-3.94h2.57c-.43 2.43-2.22 4.23-3.5 4.97 1.28.6 3.32 2.17 4.1 4.98h-2.83c-.6-1.9-2.12-3.37-4.13-3.57v3.57h-.31z" />
    </svg>
  );
}
function MaxIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-4 14V8l4 4 4-4v8h-2v-4l-2 2-2-2v4H8z" />
    </svg>
  );
}

export default function Footer(): JSX.Element {
  const moon = useBaseUrl('/img/footer_moon.png');
  const mywork = useBaseUrl('/img/footer_mywork.png');
  const fns = useBaseUrl('/img/footer_fns.png');
  const moscow = useBaseUrl('/img/footer_moscowSB.png');
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.moon} style={{backgroundImage: `url(${moon})`}} aria-hidden="true" />
      <div className={styles.inner}>
        {/* Верхний ряд из четырёх колонок */}
        <div className={styles.topRow}>
          <Column title="Решения для бизнеса" items={businessSolutions} />
          <Column title="Компания" items={company} />
          <Column title="Для кого" items={forWhom} />
          <Column title="Отрасли" items={industries} />
        </div>

        {/* Официальные партнёры */}
        <div className={styles.partners}>
          <div className={styles.colTitle}>Официальные партнёры</div>
          <div className={styles.partnerLogos}>
            <img src={mywork} alt="Моя работа" />
            <img src={fns} alt="Федеральная налоговая служба" />
            <img src={moscow} alt="Малый бизнес Москвы" />
          </div>
        </div>

        {/* Нижний ряд: продукты, контакты, юр. документы */}
        <div className={styles.bottomRow}>
          <Column title="Продукты для исполнителей" items={forContractors} />

          <div className={styles.col}>
            <div className={styles.colTitle}>Контакты</div>
            <p className={styles.address}>Москва, 1-я Тверская-Ямская улица, 23, стр. 1</p>
            <div className={styles.contactLine}>
              <Link className={styles.link} href="tel:+74957990082">
                +7 495 799 00 82
              </Link>
              <Link className={styles.link} href="mailto:hello@qugo.ru">
                hello@qugo.ru
              </Link>
            </div>
            <div className={styles.socials}>
              <Link className={styles.social} href="https://t.me/+doQ_06abdQ9iNjky">
                <TelegramIcon /> Telegram
              </Link>
              <Link className={styles.social} href="https://vk.cc/cPEfmi">
                <VkIcon /> Vk
              </Link>
              <Link className={styles.social} href="https://max.ru/id7727452605_biz">
                <MaxIcon /> Max
              </Link>
            </div>
          </div>

          <Column title="Юридические документы" items={legal} />
        </div>

        {/* Нижняя строка */}
        <div className={styles.legalBar}>
          <span>Основной код ОКВЭД 62.01</span>
          <span>Вид деятельности согласно приказу Минцифры: 15.01</span>
          <span>© ООО «КЬЮГО ТЕК» {year}</span>
        </div>
      </div>
    </footer>
  );
}
