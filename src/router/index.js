import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import Afiliados from '../views/Afiliados.vue'
import Parametros from '../views/Parametros.vue'
import ParametrosSFE from '../views/ParametrosSFE.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/afiliados',
    name: 'Afiliados',
    component: Afiliados
  },
  {
    path: '/parametros',
    name: 'Parametros',
    component: Parametros
  },
  {
    path: '/parametrosSFE',
    name: 'ParametrosSFE',
    component: ParametrosSFE
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
