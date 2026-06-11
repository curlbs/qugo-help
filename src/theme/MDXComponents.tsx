import React from 'react';
// Импортируем стандартные компоненты темы
import MDXComponents from '@theme-original/MDXComponents';
import {Steps, Step} from '@site/src/components/Steps';

export default {
  ...MDXComponents,
  // Глобально доступны во всех .md/.mdx без импорта
  Steps,
  Step,
};
