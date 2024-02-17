import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ItemView from '../views/ItemView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  { path: '/product/:id', name: 'product', component: ItemView, props: true } // Route for product details, :id is a dynamic parameter
]

const router = new VueRouter({
  mode: 'history', // Use HTML5 History API for clean URLs
  routes
})

export default router