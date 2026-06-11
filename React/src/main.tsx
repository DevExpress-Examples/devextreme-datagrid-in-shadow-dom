import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import config from 'devextreme/core/config';
import './index.css';
import App from './App.tsx';
import { licenseKey } from './devextreme-license';

config({ licenseKey });

const shadowHost = document.getElementById('root') as HTMLElement;
const shadowRoot = shadowHost.attachShadow({ mode: 'open' });
const root = createRoot(shadowRoot);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
