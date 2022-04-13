import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BeerDetail from '../views/DetailsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/beer-detail',
    name: 'beer-detail',
    component: BeerDetail,
    meta: { scrollToTop: true }
  }
]

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    if (to.matched.some(m => m.meta.scrollToTop)) {
      return { left: 0, top: 0 }
    }
  }
}
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior,
  routes
})

export default router
