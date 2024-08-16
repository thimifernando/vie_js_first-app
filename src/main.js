// Import Vue and necessary modules
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'





// Import Bootstrap and BootstrapVue styles
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Create Vue app
const app = createApp(App)

// Use the router
app.use(router)

// Mount the app
app.mount('#app')

// Initialize Owl Carousel


