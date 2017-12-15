import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import ProductsPage from '@/components/ProductsPage'
import AboutPage from '@/components/AboutPage'
import ContactsPage from '@/components/ContactsPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/products',
      name: 'ProductsPage',
      component: ProductsPage
    },
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage
    },
    {
      path: '/contacts',
      name: 'ContactsPage',
      component: ContactsPage
    }
  ]
})
