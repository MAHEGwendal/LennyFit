<template>
  <footer class="w-full bg-ink text-moon py-10 px-6">
    <div class="flex justify-center mb-10">
      <img src="/logos/Logo_secondaire_BV.svg" class="w-64 md:w-72" alt="Logo Lenny Fit">
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 items-center max-w-7xl mx-auto">
      <div class="flex md:flex-col justify-between md:items-start space-y-4">
        <div class="embedsocial-hashtag w-full max-w-[85%]"" 
  data-ref=" ebc1a65c5553d1288b10da3a74a71d06b2f92ade">
          <a class="feed-powered-by-es feed-powered-by-es-feed-img es-widget-branding" href="https://embedsocial.com/"
            target="_blank" title="Widget by EmbedSocial">
            <img src="https://embedsocial.com/cdn/icon/embedsocial-logo.webp" alt="EmbedSocial">
            <div class="es-widget-branding-text">Widget by EmbedSocial</div>
          </a>
        </div>

        <img src="/image/trustpilot.png" class="w-32 md:w-50 h-auto" alt="Note excellente sur Trustpilot">
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
import { onMounted } from 'vue'

onMounted(() => {
  const scriptId = "EmbedSocialHashtagScript"
  if (!document.getElementById(scriptId)) {
    const js = document.createElement("script")
    js.id = scriptId
    js.src = "https://embedsocial.com/cdn/ht.js"
    document.getElementsByTagName("head")[0].appendChild(js)
  }
})

const navLinks = [
  { name: 'Accueil', href: '/' },
  { name: 'Présentation', href: '/Presentation' },
  { name: 'Détail des propositions', href: '/Propositions' },
  { name: 'Formules', href: '/Formules' },
  { name: 'Contact', href: '/Contact' },
]
</script>