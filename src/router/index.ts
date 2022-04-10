import { createRouter, createWebHistory } from 'vue-router'
import ProductsList from '../views/ProductsListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'products-list',
      component: ProductsList
    },
    {
      path: '/products/:id',
      name: 'product',
      component: () => import('../views/ProductView.vue')
    }
  ]
})

export default router
