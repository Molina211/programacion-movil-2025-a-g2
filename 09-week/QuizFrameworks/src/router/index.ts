import EnfermeroPage from '@/views/EnfermeroPage.vue';
import MedicoPage from '@/views/MedicoPage.vue';
import PacientePage from '@/views/PacientePage.vue';
import RecepcionistaPage from '@/views/RecepcionistaPage.vue';
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/Recepcionista'
  },
  {
    path: '/paciente',
    name: 'Paciente',
    component: PacientePage
  },
  {
    path: '/enfermero',
    name: 'Enfermero',
    component: EnfermeroPage
  },
  {
    path: '/recepcionista',
    name: 'Recepcionista',
    component: RecepcionistaPage
  },
  {
    path: '/medico',
    name: 'Medico',
    component: MedicoPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
