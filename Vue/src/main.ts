import { createApp } from 'vue';
import config from 'devextreme/core/config';
import App from './App.vue';
import './assets/main.css';
import { licenseKey } from './devextreme-license';

config({ licenseKey });

const app = createApp(App);
const shadowHost = document.getElementById('app') as HTMLElement;
const shadowRoot = shadowHost.attachShadow({ mode: 'open' }) as any;

app.mount(shadowRoot);
