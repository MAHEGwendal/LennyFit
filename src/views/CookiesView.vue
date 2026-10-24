<template>
    <div class="bg-moon min-h-screen py-12 px-4">
        <div class="max-w-4xl mx-auto bg-white/50 rounded-2xl p-6 sm:p-10 font-zalando text-ink space-y-8">
            <h1 class="font-krona text-3xl text-center">Déclaration relative aux cookies</h1>

            <!-- Introduction -->
            <section class="space-y-3">
                <p class="font-semibold">Ce site web utilise des cookies.</p>
                <p>
                    Ce site ne dépose aucun cookie publicitaire ni de mesure d'audience. Seul le widget d'avis
                    clients, qui affiche du contenu YouTube (Google), dépose des cookies, et uniquement avec votre
                    accord. Si vous refusez, les avis ne s'affichent pas mais le reste du site fonctionne
                    normalement. Vous pouvez modifier votre choix à tout moment.
                </p>
                <p>
                    Pour en savoir plus sur qui nous sommes, comment nous contacter et comment nous traitons vos
                    données personnelles, consultez notre
                    <RouterLink to="/Confidentialite" class="underline hover:text-molten">
                        politique de confidentialité
                    </RouterLink>.
                </p>
                <p>Votre choix s'applique au domaine suivant : <strong>lennyfit.fr</strong></p>
            </section>

            <!-- État du consentement -->
            <section class="rounded-2xl border-2 border-molten/30 bg-white/70 p-5 space-y-4">
                <p>
                    <span class="font-semibold">Votre état actuel :</span>
                    {{ statusLabel }}
                </p>

                <div class="flex flex-col sm:flex-row gap-3">
                    <button type="button" @click="refuse"
                        class="px-5 py-2.5 rounded-full border-2 border-ink text-ink font-semibold text-sm hover:bg-ink hover:text-white transition">
                        Tout refuser
                    </button>
                    <button type="button" @click="accept"
                        class="px-5 py-2.5 rounded-full border-2 border-ink bg-ink text-white font-semibold text-sm hover:opacity-90 transition">
                        Tout accepter
                    </button>
                    <button type="button" @click="reset"
                        class="px-5 py-2.5 rounded-full text-ink underline text-sm hover:text-molten transition">
                        Retirer mon choix
                    </button>
                </div>

                <p class="text-sm text-ink/70">
                    Retirer ou refuser votre consentement n'efface pas les cookies déjà déposés par des services
                    tiers : vous pouvez les supprimer depuis les paramètres de votre navigateur.
                </p>
            </section>

            <!-- Catégories -->
            <section v-for="category in categories" :key="category.name" class="space-y-3">
                <h2 class="font-krona text-xl sm:text-2xl border-b border-molten/20 pb-2">
                    {{ category.name }} ({{ category.cookies.length }})
                </h2>
                <p>{{ category.description }}</p>

                <div class="overflow-x-auto">
                    <table class="w-full text-sm text-left border-collapse">
                        <thead>
                            <tr class="border-b-2 border-molten/30">
                                <th class="py-2 pr-4 font-semibold">Nom</th>
                                <th class="py-2 pr-4 font-semibold">Fournisseur</th>
                                <th class="py-2 pr-4 font-semibold">Finalité</th>
                                <th class="py-2 pr-4 font-semibold whitespace-nowrap">Durée maximale</th>
                                <th class="py-2 font-semibold">Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="cookie in category.cookies" :key="cookie.name"
                                class="border-b border-ink/10 align-top">
                                <td class="py-2 pr-4 font-mono text-xs break-all">{{ cookie.name }}</td>
                                <td class="py-2 pr-4">{{ cookie.provider }}</td>
                                <td class="py-2 pr-4">{{ cookie.purpose }}</td>
                                <td class="py-2 pr-4 whitespace-nowrap">{{ cookie.duration }}</td>
                                <td class="py-2 whitespace-nowrap">{{ cookie.type }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <p class="text-sm text-ink/70">Déclaration relative aux cookies mise à jour le 24/10/2026.</p>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useCookieConsent } from '@/composables/useCookieConsent'

const { consent, load, accept, refuse, reset } = useCookieConsent()

onMounted(load)

const statusLabel = computed(() => {
    if (consent.value === 'accepted') return 'Tout autoriser.'
    if (consent.value === 'refused') return 'Tout refuser.'
    return "Aucun choix enregistré pour le moment."
})

const categories = [
    {
        name: 'Nécessaires',
        description:
            'Les cookies nécessaires permettent le fonctionnement de base du site, comme la navigation et l\'affichage des pages, ainsi que celui du formulaire de rendez-vous. Le site ne peut pas fonctionner correctement sans eux. Ils ne servent à aucune fin publicitaire.',
        cookies: [
            {
                name: '__cf_bm',
                provider: 'Vimeo',
                purpose:
                    'Distingue les humains des robots, afin de protéger le site et de produire des statistiques d\'utilisation valides.',
                duration: '1 jour',
                type: 'Cookie HTTP',
            },
            {
                name: 'cookie-consent',
                provider: 'lennyfit.fr',
                purpose: 'Mémorise votre choix concernant les cookies (accepté ou refusé).',
                duration: '6 mois',
                type: 'Cookie HTTP',
            },
        ],
    },
    {
        name: 'Marketing',
        description:
            'Ces cookies sont déposés par YouTube (Google) lorsque le widget d\'avis est chargé. Ils permettent la lecture des contenus vidéo et peuvent servir à personnaliser les contenus et à identifier les visiteurs. Sans votre accord, les avis ne s\'affichent pas.',
        cookies: [
            {
                name: '__Secure-BUCKET',
                provider: 'YouTube',
                purpose: 'Finalité non précisée par le fournisseur.',
                duration: '180 jours',
                type: 'Cookie HTTP',
            },
            {
                name: '__Secure-ROLLOUT_TOKEN',
                provider: 'YouTube',
                purpose: 'Suit l\'interaction de l\'utilisateur avec le contenu intégré.',
                duration: '180 jours',
                type: 'Cookie HTTP',
            },
            {
                name: '__Secure-YEC',
                provider: 'YouTube',
                purpose: 'Stocke les préférences de lecture vidéo pour les vidéos YouTube intégrées.',
                duration: 'Session',
                type: 'Cookie HTTP',
            },
            {
                name: '__Secure-YNID',
                provider: 'YouTube',
                purpose: 'Suit l\'interaction de l\'utilisateur avec le contenu intégré.',
                duration: '180 jours',
                type: 'Cookie HTTP',
            },
            {
                name: 'VISITOR_INFO1_LIVE',
                provider: 'YouTube',
                purpose: 'Estime la bande passante de l\'utilisateur sur les pages avec des vidéos YouTube intégrées.',
                duration: '180 jours',
                type: 'Cookie HTTP',
            },
            {
                name: 'YSC',
                provider: 'YouTube',
                purpose: 'Enregistre un identifiant unique pour conserver des statistiques sur les vidéos YouTube vues.',
                duration: 'Session',
                type: 'Cookie HTTP',
            },
        ],
    },
]
</script>