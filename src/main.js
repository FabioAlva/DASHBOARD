import './assets/main.css'
import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import App from './App.vue'
import router from './routes/index'
import { createPinia } from 'pinia';
const app = createApp(App);

const pinia = createPinia()
app.use(PrimeVue, {
    // Aplica el preset de Tailwind
    theme: {
        preset: Aura, // O cualquier otro preset que uses
        // Otras opciones de configuración global...
    }
});

app.use(pinia).use(router).mount('#app');