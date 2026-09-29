<template>
    <div class="bg-moon min-h-screen py-12 px-4">
        <div class="max-w-4xl mx-auto bg-white/50 rounded-2xl p-6 sm:p-10">
            <h1 class="font-krona text-3xl mb-6 text-center">Déclaration relative aux cookies</h1>
            <div ref="declaration"></div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const declaration = ref(null)

onMounted(() => {
    const js = document.createElement('script')
    js.id = 'CookieDeclaration'
    js.src = 'https://consent.cookiebot.com/a77cb1d3-d80a-4bfa-8a2b-2653f5e5e5f4/cd.js'
    js.async = true
    declaration.value.appendChild(js)
})
</script>