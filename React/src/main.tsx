import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

const shadowHost = document.getElementById('root') as HTMLElement;
const shadowRoot = shadowHost.attachShadow({ mode: 'open' });
const root = createRoot(shadowRoot);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
