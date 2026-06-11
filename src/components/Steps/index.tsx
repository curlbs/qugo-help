import React from 'react';
import styles from './styles.module.css';

type StepProps = {
  title?: string;
  children: React.ReactNode;
  _index?: number;
};

export function Step({title, children, _index}: StepProps): JSX.Element {
  return (
    <div className={styles.step}>
      <div className={styles.num}>{_index}</div>
      <div className={styles.body}>
        {title && <h3 className={styles.title}>{title}</h3>}
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}

export function Steps({children}: {children: React.ReactNode}): JSX.Element {
  // Автоматическая нумерация шагов
  let n = 0;
  const items = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && (child.type as any) === Step) {
      n += 1;
      return React.cloneElement(child as React.ReactElement<StepProps>, {_index: n});
    }
    return child;
  });
  return <div className={styles.steps}>{items}</div>;
}
