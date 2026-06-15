import React from 'react';
import clsx from 'clsx';
import {
  useCurrentSidebarSiblings,
  filterDocCardListItems,
} from '@docusaurus/plugin-content-docs/client';
import DocCard from '@theme/DocCard';
import type {Props} from '@theme/DocCardList';

import styles from './styles.module.css';

function DocCardListForCurrentSidebarCategory({className}: Props) {
  const items = useCurrentSidebarSiblings();
  return <DocCardList items={items} className={className} />;
}

function DocCardListItem({item}: {item: Props['items'][number]}) {
  // col--4 — три карточки в строке
  return (
    <article className={clsx(styles.docCardListItem, 'col col--4')}>
      <DocCard item={item} />
    </article>
  );
}

export default function DocCardList(props: Props): JSX.Element {
  const {items, className} = props;
  if (!items) {
    return <DocCardListForCurrentSidebarCategory {...props} />;
  }
  const filteredItems = filterDocCardListItems(items);
  return (
    <section className={clsx('row', className)}>
      {filteredItems.map((item, index) => (
        <DocCardListItem key={index} item={item} />
      ))}
    </section>
  );
}
