import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Home - My App' } // Add meta title for home route
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { title: 'About Us - My App' } // Add meta title for about route
    }
  ]
});

// Global navigation guard to update the document title
router.beforeEach((to) => {
  const title = to.meta.title || 'Default Title'; // Fallback title if none is provided
  document.title = title;
});

export default router;
