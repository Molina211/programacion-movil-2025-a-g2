import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import EmpleadoPage from '../views/EmpleadoPage.vue'
import ClientePage from '../views/ClientePage.vue'
import ProveedorPage from '../views/ProveedorPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/proveedor'
  },
  {
    path: '/empleado',
    name: 'Empleado',
    component: EmpleadoPage
  },
  {
    path: '/cliente',
    name: 'Cliente',
    component: ClientePage
  },
  {
    path: '/proveedor',
    name: 'Proveedor',
    component: ProveedorPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
