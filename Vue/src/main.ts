import config from 'devextreme/core/config';
import { licenseKey } from './devextreme-license';

config({ licenseKey });

import { createApp } from 'vue';
import App from './App.vue';

import './assets/main.css';

const app = createApp(App);
const shadowHost = document.getElementById('app') as HTMLElement;
const shadowRoot = shadowHost.attachShadow({ mode: 'open' }) as any;

app.mount(shadowRoot);
