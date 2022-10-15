import { createApp } from 'vue';
import App from './App.vue';

import BaseDialog from './components/dialogs/BaseDialog.vue';

const app = createApp(App);

app.component('BaseDialog', BaseDialog);

app.mount('#app');
