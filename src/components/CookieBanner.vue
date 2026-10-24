<template>
    <div
        v-if="mounted && consent === null"
        role="dialog"
        aria-label="Consentement aux cookies"
        class="fixed bottom-0 inset-x-0 z-50 p-3 sm:p-4"
    >
        <div
            class="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl border border-molten/20
                   p-4 sm:p-5 flex flex-col md:flex-row md:items-center gap-4 md:gap-6"
        >
            <!-- Logo -->
            <img src="/logos/Logo_ico_NO.svg" alt="LennyFit" class="h-10 w-auto shrink-0 self-start md:self-center" />

            <!-- Texte -->
            <p class="text-sm text-ink flex-1">
                Nous utilisons des services tiers (vidéos YouTube, contenus EmbedSocial) qui peuvent déposer des
                cookies. Vous pouvez les accepter ou les refuser. Votre choix est modifiable à tout moment.
                <a href="/cookies" class="underline hover:text-molten">En savoir plus</a>
            </p>

            <!-- Boutons -->
            <div class="flex flex-col-reverse sm:flex-row gap-2 sm:gap-3 shrink-0">
                <button
                    type="button"
                    @click="refuse"
                    class="px-5 py-2.5 rounded-full border-2 border-ink text-ink font-semibold text-sm
                           hover:bg-ink hover:text-white transition"
                >
                    Tout refuser
                </button>
                <button
                    type="button"
                    @click="accept"
                    class="px-5 py-2.5 rounded-full border-2 border-ink bg-ink text-white font-semibold text-sm
                           hover:opacity-90 transition"
                >
                    Tout accepter
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useCookieConsent } from '../composables/useCookieConsent'

const { consent, load, accept, refuse } = useCookieConsent()

// Évite un décalage d'hydratation en SSR : la barre ne s'affiche qu'après le montage côté client
const mounted = ref(false)
onMounted(() => {
    load()
    mounted.value = true
})
</script>