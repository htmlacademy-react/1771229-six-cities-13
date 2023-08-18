import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

// eslint-disable-next-line react-refresh/only-export-components
const SETTING = {
  cardAmount: 5,
} as const;


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      cardAmount={SETTING.cardAmount}
    />
  </React.StrictMode>,
);
