/**
 * Гасит ошибки, которые приходят НЕ из кода сайта, а из браузерных
 * расширений (например, MetaMask внедряет inpage.js в каждую страницу).
 * Такие ошибки попадают в dev-оверлей Docusaurus и пугают, хотя к сайту
 * отношения не имеют. Реальные ошибки сайта НЕ подавляются.
 */
function isExtensionNoise(text: string): boolean {
  return /chrome-extension:\/\/|moz-extension:\/\/|MetaMask|ethereum|web3/i.test(text);
}

if (typeof window !== 'undefined') {
  // Необработанные промис-реджекты (как у MetaMask connect)
  window.addEventListener(
    'unhandledrejection',
    (event) => {
      const reason = event.reason;
      const text =
        (reason && (reason.stack || reason.message)) || String(reason ?? '');
      if (isExtensionNoise(text)) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    },
    true,
  );

  // Синхронные ошибки из скриптов расширений
  window.addEventListener(
    'error',
    (event) => {
      const source = event.filename || '';
      const text = event.message || '';
      if (isExtensionNoise(source) || isExtensionNoise(text)) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    },
    true,
  );
}

export {};
