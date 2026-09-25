<template>
  <footer class="w-full bg-ink text-moon py-10 px-6">
    <div class="flex justify-center mb-10">
      <img src="/logos/Logo_secondaire_BV.svg" class="w-64 md:w-72" alt="Logo Lenny Fit">
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 items-center max-w-7xl mx-auto">
      <div class="flex justify-center md:flex-col md:items-start space-y-4">
        <GoogleRatingWidget
          :rating="5"
          :review-count="1"
          link="https://www.google.com/maps/place/LennyFit/@47.2383201,-1.6429067,12z/data=!3m1!4b1!4m6!3m5!1s0x2a6ab5f8560c691:0x1f5a6d95a661c95f!8m2!3d47.2382332!4d-1.5603346!16s%2Fg%2F11zxq84_jt?entry=ttu&g_ep=EgoyMDI2MDkyMS4wIKXMDSoASAFQAw%3D%3D"
        />
      </div>

      <nav class="flex flex-col items-center space-y-4" aria-label="Navigation rapide">
        <h2 class="font-zalando font-semibold underline text-3xl">Lien rapide</h2>
        <RouterLink v-for="link in navLinks" :key="link.name" :to="link.href"
          class="font-zalando text-xl text-center md:text-2xl text-moon hover:text-molten hover:underline hover:scale-110 transition-transform duration-200">
          {{ link.name }}
        </RouterLink>
      </nav>
      <div class="flex flex-row justify-center md:justify-end space-x-6">
        <a href="https://www.instagram.com/lenny.briey/" target="_blank"
          aria-label="Rejoins-moi sur Instagram (nouvel onglet)"
          class="cursor-pointer hover:scale-110 transition-transform duration-200">
          <img src="/icon/instagramMoon.svg" alt="Instagram" class="w-12 h-12 md:w-20 md:h-20" />
        </a>
        <a href="https://www.facebook.com" target="_blank" aria-label="Rejoins-moi sur Facebook (nouvel onglet)"
          class="cursor-pointer hover:scale-110 transition-transform duration-200">
          <img src="/icon/facebookMoon.svg" alt="Facebook" class="w-12 h-12 md:w-20 md:h-20" />
        </a>
        <a href="mailto:lennybriey96@gmail.com" aria-label="Envoyez-moi un e-mail"
          class="cursor-pointer hover:scale-110 transition-transform duration-200">
          <img src="/icon/emailMoon.svg" alt="E-mail" class="w-12 h-12 md:w-20 md:h-20" />
        </a>
      </div>

    </div>

    <div
      class="mt-12 pt-8 border-t border-molten/30 flex flex-col items-center text-center font-zalando space-y-3 text-sm md:text-base">
      <p class="leading-relaxed text-moon/80">
        Lenny Briey, coach sportif à Nantes.<br>
        © 2026 LennyFit. Tous droits réservés.<br>
        SIRET : 10722134300018
      </p>
      <div class="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 pt-2">
        <RouterLink to="/Politique-Confidentialites" class="hover:text-molten hover:underline transition-colors">
          Politique de confidentialité</RouterLink>
        <RouterLink to="/Mentions-Legales" class="hover:text-molten hover:underline transition-colors">Mentions légales
        </RouterLink>
      </div>
    </div>

  </footer>
</template>

<script setup>
import GoogleRatingWidget from '@/components/GoogleRatingWidget.vue'

const navLinks = [
  { name: 'Accueil', href: '/' },
  { name: 'Présentation', href: '/Presentation' },
  { name: 'Détail des propositions', href: '/Propositions' },
  { name: 'Formules', href: '/Formules' },
  { name: 'FAQ', href: '/Faq' },
  { name: 'Contact', href: '/Contact' },
]
</script>