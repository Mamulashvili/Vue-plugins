import { createApp } from 'vue'
import App from './App.vue'

import FontDirectivesPlugin from '../plugins/FontDirectivesPlugin';

createApp(App)
    .use(FontDirectivesPlugin)
    .mount('#app')
