<template>
    <nav class="w-full sticky top-0 z-40 bg-moon text-ink border-b border-gray-100 shadow-md"
        aria-label="Barre de navigation">
        <div class="w-full mx-auto px-4 py-3 lg:px-8 lg:py-4 flex items-center justify-between">
            <router-link to="/" class="tracking-tighter shrink-0">
                <img src="/logos/Logo_secondaire_NO.svg" alt="Logo LennyFit" class="w-40 md:w-48 lg:w-70 h-auto ">
            </router-link>
            <div class="hidden lg:flex items-center space-x-2 xl:space-x-6">
                <router-link v-for="link in navLinks" :key="link.name" :to="link.to" class="font-zalando font-medium text-lg xl:text-2xl text-gray-700 
                          border-2 border-transparent rounded-xl 
                          px-3 py-1.5 xl:px-4 xl:py-2 
                          whitespace-nowrap
                          hover:text-molten hover:border-molten hover:scale-110 
                          transition-all duration-300 ease-in-out">
                    {{ link.name }}
                </router-link>
            </div>
            <button @click="toggleMenu" type="button"
                class="block lg:hidden text-ink focus:outline-none focus:ring-2 focus:ring-molten focus:ring-offset-2 p-2 rounded-lg"
                aria-label="Ouvrir le menu">
                <img src="/icon/menu.svg" alt="Menu" class="w-10 h-10 md:w-12 md:h-12" />
            </button>
        </div>
    </nav>
    <div class="fixed inset-0 z-50 w-full h-screen bg-moon overflow-y-auto transform transition-transform duration-500 ease-in-out lg:hidden"
        :class="[isMenuOpen ? 'translate-x-0' : 'translate-x-full']">
        <div class="flex items-center justify-end p-6">
            <button @click="closeMenu" type="button"
                class="text-ink focus:outline-none focus:ring-2 focus:ring-molten focus:ring-offset-2 p-2 rounded-lg"
                aria-label="Fermer le menu">
                <img src="/icon/close.svg" alt="Fermer" class="w-12 h-12" />
            </button>
        </div>

        <div class="flex flex-col items-center justify-center space-y-12 pt-5 px-10">
            <img src="/logos/Logo_principal_NO.svg" class="md:w-60 md:h-60" alt="Logo secondaire">
            <router-link v-for="link in navLinks" :key="link.name + 'mobile'" :to="link.to"
                class="text-3xl font-zalando font-semibold text-ink" @click="closeMenu">
                {{ link.name }}
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
const toggleMenu = () => { isMenuOpen.value = !isMenuOpen.value }
const closeMenu = () => { isMenuOpen.value = false }

const navLinks = [
    { name: 'Accueil', to: '/' },
    { name: 'Qui suis-je ?', to: '/Presentation' },
    { name: 'Propositions', to: '/Propositions' },
    { name: 'Formules', to: '/Formules' },
    { name: 'Contact', to: '/Contact' },
]
</script>