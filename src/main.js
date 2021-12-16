import { createApp } from 'vue'
import App from './App.vue'

import FontDirectivesPlugin from '../plugins/FontDirectivesPlugin';
import AlertPlugin from '../plugins/AlertPlugin';

createApp(App)
    .use(FontDirectivesPlugin)
    .use(AlertPlugin)
    .mount('#app')
