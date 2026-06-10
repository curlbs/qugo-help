import React, {useEffect, useState} from 'react';
import {createPortal} from 'react-dom';
import clsx from 'clsx';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import DocItemPaginator from '@theme/DocItem/Paginator';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocItemFooter from '@theme/DocItem/Footer';
import DocItemTOCMobile from '@theme/DocItem/TOC/Mobile';
import DocItemContent from '@theme/DocItem/Content';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import ContentVisibility from '@theme/ContentVisibility';
import TOCItems from '@theme/TOCItems';
import type {Props} from '@theme/DocItem/Layout';

import styles from './styles.module.css';

// Десктопный сайдбар монтируется только при ширине ≥997px, поэтому ищем слот
// устойчиво: при монтировании, при ресайзе и короткими повторами.
function useSidebarSlot() {
  const [slot, setSlot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const find = () => setSlot(document.getElementById('sidebar-toc-slot'));
    find();
    window.addEventListener('resize', find);
    let tries = 0;
    const interval = setInterval(() => {
      find();
      if (++tries > 10) clearInterval(interval);
    }, 250);
    return () => {
      window.removeEventListener('resize', find);
      clearInterval(interval);
    };
  }, []);

  return slot;
}

// Оглавление текущей страницы, встроенное в левый сайдбар (через портал).
function SidebarTOC() {
  const {frontMatter, toc} = useDoc();
  const slot = useSidebarSlot();

  const hidden = frontMatter.hide_table_of_contents;
  if (hidden || toc.length === 0 || !slot) {
    return null;
  }

  return createPortal(
    <TOCItems
      toc={toc}
      className="sidebarToc__list"
      linkClassName="sidebarToc__link"
      linkActiveClassName="sidebarToc__link--active"
    />,
    slot,
  );
}

export default function DocItemLayout({children}: Props): JSX.Element {
  const {metadata, frontMatter, toc} = useDoc();
  const showMobileTOC = !frontMatter.hide_table_of_contents && toc.length > 0;

  return (
    <div className="row">
      <div className={clsx('col', styles.docItemCol)}>
        <ContentVisibility metadata={metadata} />
        <DocVersionBanner />
        <div className={styles.docItemContainer}>
          <article>
            <DocBreadcrumbs />
            <DocVersionBadge />
            {showMobileTOC && <DocItemTOCMobile />}
            <DocItemContent>{children}</DocItemContent>
            <DocItemFooter />
          </article>
          <DocItemPaginator />
        </div>
      </div>
      <SidebarTOC />
    </div>
  );
}
