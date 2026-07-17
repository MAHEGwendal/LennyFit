<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen bg-moon">
    <!-- Ta barre de navigation reste visible sur toutes les pages -->
    <Navbar />

    <!-- Le contenu de la page active s'injecte ici -->
    <main class="grow">
      <router-view />
    </main>

    <!-- Ton pied de page reste visible partout -->
    <Footer />
  </div>
</template>
