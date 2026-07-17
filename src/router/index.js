import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue' // Ton fichier Home principal
import Presentation from '@/views/Presentation.vue'
import Propositions from '@/views/Propositions.vue'
import Formules from '@/views/Formules.vue'
import Contact from '@/views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Presentation',
    name: 'Presentation',
    component: Presentation
  },
  {
    path: '/Propositions',
    name: 'Propositions',
    component: Propositions
  },
  {
    path: '/Formules',
    name: 'Formules',
    component: Formules
  },
    {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router