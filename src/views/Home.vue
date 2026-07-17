<template>
    <section
        class="relative w-full min-h-[90vh] flex flex-col justify-center items-center px-4 py-12 text-center overflow-hidden md:mt-20">

        <div class="absolute inset-0 z-0">
            <img src="/hero/hero1.jpg" alt="" class="w-full h-full object-cover" fetchpriority="high" />
            <div class="absolute inset-0 bg-black/60 backdrop-blur-[10px]"></div>
        </div>

        <div class="relative z-10 flex flex-col items-center mx-auto w-full space-y-6">

            <!-- Logo principal de la marque -->
            <div class="w-auto h-auto mb-2">
                <h1 class="w-70 h-auto md:w-100 mb-2">
                    <img src="/logos/Logo_principal_BV.svg" alt="LennyFit - Coach sportif personnel à Nantes"
                        class="w-full h-auto" />
                </h1>
            </div>

            <!-- Slogan principal -->
            <p class="font-krona text-2xl md:text-4xl font-semibold leading-snug text-icemint">
                Dépassez vos <span class="text-molten">limites</span>, atteignez vos <span
                    class="text-molten">objectifs</span>
            </p>

            <!-- Description des prestations -->
            <p class="font-zalando text-icemint text-base font-medium md:text-2xl leading-relaxed max-w-xl px-2">
                Un suivi sportif <span class="text-molten font-medium">individuel</span> et <span
                    class="text-molten font-medium">personnalisé</span>,
                en présentiel à Nantes ou 100% en ligne.
            </p>

            <!-- Les 3 cercles d'arguments de la maquette -->
            <div class="flex flex-row items-center justify-center gap-3 md:gap-8 pt-8 w-full">

                <!-- Cercle 1 -->
                <div
                    class="flex flex-col items-center justify-center w-30 h-30 md:w-40 md:h-40 shrink-0 rounded-full border-3 border-molten bg-molten/15 backdrop-blur-sm shadow-lg">
                    <span class="font-krona text-2xl md:text-3xl font-bold text-icemint">+10</span>
                    <span class="font-zalando text-s md:text-sm text-moon leading-tight font-medium">
                        Champs d'action
                    </span>
                </div>

                <!-- Cercle 2 -->
                <div
                    class="flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-full border-3 border-molten bg-molten/15 backdrop-blur-sm shadow-lg">
                    <span class="font-krona text-2xl md:text-3xl font-bold text-icemint">100%</span>
                    <span class="font-zalando text-s md:text-sm text-moon leading-tight font-medium">
                        Personnalisé
                    </span>
                </div>

                <!-- Cercle 3 -->
                <div
                    class="flex flex-col items-center justify-center w-30 h-30 md:w-40 md:h-40 shrink-0 rounded-full border-3 border-molten bg-molten/15 backdrop-blur-sm shadow-lg">
                    <span class="font-krona text-2xl md:text-3xl font-bold text-icemint">6j/7</span>
                    <span class="font-zalando text-s md:text-sm text-moon leading-tight font-medium">
                        Disponible
                    </span>
                </div>

            </div>

        </div>
    </section>

    <div class="bg-moon">
        <div class="py-8 px-4">
            <div class="max-w-7xl lg:max-w-[1700px] mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8 md:gap-15">
                <div class="shrink-0">
                    <img src="/image/lenny1.jpg" alt="Photo du coach Lenny"
                        class="w-60 h-60 md:w-110 md:h-110 rounded-full mx-auto md:mx-0 border-4 border-molten shadow-xl/30 object-cover" />
                </div>

                <div class="flex-1 text-center lg:text-left">
                    <h2 class="font-krona text-3xl lg:text-5xl mb-8">Salut, moi c'est Lenny !</h2>

                    <p class="font-zalando text-base md:text-3xl text-ink leading-relaxed mx-auto md:mx-0">
                        Sport dans le sang et diplômes en poche, mon but est simple : t’aider à changer ton physique et
                        ton état d’esprit pour de bon.
                        Que tu sois à Nantes pour des séances en face-à-face, ou ailleurs, je te propose un suivi
                        personnalisé, un programme sur mesure, à ton niveau et calé sur tes objectifs. <br/> 
                        Si t’es prêt à faire de ta santé une vraie priorité, contacte-moi !
                    </p>

                    <div class="mt-6 flex justify-center">
                        <RouterLink to='/Presentation' role="button" aria-label="À propos de moi"
                            class="inline-block bg-molten text-ink font-zalando px-8 py-3 rounded-xl font-medium text-xl shadow-xl/20 md:px-7 md:py-4 md:text-2xl transform hover:scale-110 transition">
                            À propos de moi
                        </RouterLink>
                    </div>

                    <div class="mt-6 flex justify-center gap-8">
                        <a href="https://www.instagram.com/sparagwen/" target="_blank" aria-label="Instagram"
                            class="transform hover:scale-110 transition">
                            <img src="/icon/instagramMolten.svg" alt="Instagram" class="w-20 h-20 md:w-25 md:h-25" />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" aria-label="Facebook"
                            class="transform hover:scale-110 transition">
                            <img src="/icon/facebookMolten.svg" alt="Facebook" class="w-20 h-20 md:w-25 md:h-25" />
                        </a>
                        <a href="mailto:sparagwen@gmail.com" aria-label="E-mail"
                            class="transform hover:scale-110 transition">
                            <img src="/icon/emailMolten.svg" alt="E-mail" class="w-20 h-20 md:w-25 md:h-25" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="py-8 flex justify-center">
            <div class="w-full max-w-3xl lg:max-w-4xl px-4">
                <p class="text-center text-ink font-zalando mt-3">Vidéo de présentation — cliquez pour lancer</p>
                <div
                    class="relative rounded-2xl overflow-hidden shadow-lg aspect-video bg-black/40 border-2 border-molten">
                    <img src="/video/placeholder.jpg" alt="Aperçu vidéo"
                        class="w-full h-full object-cover" />

                    <button aria-label="Lire la vidéo" class="absolute inset-0 flex items-center justify-center">
                        <span
                            class="flex items-center justify-center w-20 h-20 rounded-full bg-molten/95 hover:scale-105 transition-transform duration-200 shadow-lg cursor-pointer">
                            <svg class="w-8 h-8 text-ink" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M8 5v14l11-7-11-7z" fill="currentColor" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>

        <div class="bg-icemint/15 py-10 px-4">
            <div class="-mx-4 w-full">
                <h2 class="font-krona text-2xl md:text-5xl text-ink pl-4 md:pl-5">Ce que je te propose</h2>
                <p class="font-zalando text-xl md:text-3xl text-ink/80 mt-2 mb-12 pl-4 md:pl-6">En présentiel ou en
                    distanciel</p>
            </div>

            <div class="max-w-7xl mx-auto">
                <div class="flex flex-col md:flex-row items-stretch gap-8 lg:gap-20">
                    <!-- Section Sport Bien-être -->
                    <div class="flex-1 flex flex-col rounded-2xl shadow-xl/30 py-8 px-3 border-2 border-black/10">
                        <h3 class="font-krona text-2xl mb-8 text-ink text-center">Sport bien-être</h3>

                        <div class="space-y-6">
                            <div class="bg-icemint flex items-center p-5 rounded-2xl gap-2 shadow-xl/20">
                                <img src="/icon/pertePoid.svg" alt="" class="w-16 h-16 shrink-0 my-auto">
                                <div class="flex flex-col text-left space-y-2">
                                    <h4 class="font-zalando font-medium text-2xl text-ink leading-tight">Perte de poids</h4>
                                    <p class="font-zalando text-sm md:text-base text-ink/90 leading-relaxed">
                                        Brûle des calories et affine ta silhouette durablement avec un programme adapté.
                                    </p>
                                    <a href="#" class="font-zalando font-semibold text-ink underline hover:text-molten transition-colors w-max text-sm md:text-base">
                                        En savoir plus
                                    </a>
                                </div>
                            </div>

                            <div class="bg-icemint flex items-center p-5 rounded-2xl gap-5 shadow-xl/20">
                                <img src="/icon/heart.svg" alt="" class="w-16 h-16 shrink-0 my-auto">
                                <div class="flex flex-col text-left space-y-2">
                                    <h4 class="font-zalando font-medium text-2xl text-ink leading-tight">Activité physique adaptée (APA)</h4>
                                    <p class="font-zalando text-sm md:text-base text-ink/90 leading-relaxed">
                                        Reprends le sport en douceur et progresse en toute sécurité selon ton profil.
                                    </p>
                                    <a href="#" class="font-zalando font-semibold text-ink underline hover:text-molten transition-colors w-max text-sm md:text-base">
                                        En savoir plus
                                    </a>
                                </div>
                            </div>

                            <div class="bg-icemint flex items-center p-5 rounded-2xl gap-5 shadow-xl/20">
                                <img src="/icon/poids.svg" alt="" class="w-16 h-16 shrink-0 my-auto">
                                <div class="flex flex-col text-left space-y-2">
                                    <h4 class="font-zalando font-medium text-2xl text-ink leading-tight">Renforcement du corps</h4>
                                    <p class="font-zalando text-sm md:text-base text-ink/90 leading-relaxed">
                                        Tonifie tes muscles et gagne en force pour te sentir mieux au quotidien.
                                    </p>
                                    <a href="#" class="font-zalando font-semibold text-ink underline hover:text-molten transition-colors w-max text-sm md:text-base">
                                        En savoir plus
                                    </a>
                                </div>
                            </div>

                            <div class="bg-icemint flex items-center p-5 rounded-2xl gap-5 shadow-xl/20">
                                <img src="/icon/calis.svg" alt="" class="w-16 h-16 shrink-0 my-auto">
                                <div class="flex flex-col text-left space-y-2">
                                    <h4 class="font-zalando font-medium text-2xl text-ink leading-tight">Entraînement callisthénie</h4>
                                    <p class="font-zalando text-sm md:text-base text-ink/90 leading-relaxed">
                                        Développe ton potentiel dans la maîtrise des mouvements au poids du corps à l’aide de méthodes spécifiques.
                                    </p>
                                    <a href="#" class="font-zalando font-semibold text-ink underline hover:text-molten transition-colors w-max text-sm md:text-base">
                                        En savoir plus
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Section Sport Performance -->
                    <div class="flex-1 flex flex-col rounded-2xl shadow-xl/30 py-8 px-3 border-2 border-black/10">
                        <h3 class="font-krona text-2xl mb-8 text-ink text-center">Sport performance</h3>
                        <div class="space-y-6">
                            <div class="bg-icemint flex items-center p-5 rounded-2xl gap-5 shadow-xl/20">
                                <img src="/icon/muscle.svg" alt="" class="w-16 h-16 shrink-0 my-auto">
                                <div class="flex flex-col text-left space-y-2">
                                    <h4 class="font-zalando font-medium text-2xl text-ink leading-tight">Prise de masse</h4>
                                    <p class="font-zalando text-sm md:text-base text-ink/90 leading-relaxed">
                                        Développe ton volume musculaire et gagne en force grâce à un suivi d'entraînement optimisé.
                                    </p>
                                    <a href="#" class="font-zalando font-semibold text-ink underline hover:text-molten transition-colors w-max text-sm md:text-base">
                                        En savoir plus
                                    </a>
                                </div>
                            </div>

                            <div class="bg-icemint flex items-center p-5 rounded-2xl gap-5 shadow-xl/20">
                                <img src="/icon/altero.svg" alt="" class="w-16 h-16 shrink-0 my-auto">
                                <div class="flex flex-col text-left space-y-2">
                                    <h4 class="font-zalando font-medium text-2xl text-ink leading-tight">Préparation physique</h4>
                                    <p class="font-zalando text-sm md:text-base text-ink/90 leading-relaxed">
                                        Maîtrise le poids du corps et les charges lourdes pour maximiser ta force athlétique.
                                    </p>
                                    <a href="#" class="font-zalando font-semibold text-ink underline hover:text-molten transition-colors w-max text-sm md:text-base">
                                        En savoir plus
                                    </a>
                                </div>
                            </div>

                            <div class="bg-icemint flex items-center p-5 rounded-2xl gap-5 shadow-xl/20">
                                <img src="/icon/squat.svg" alt="" class="w-16 h-16 shrink-0 my-auto">
                                <div class="flex flex-col text-left space-y-2">
                                    <h4 class="font-zalando font-medium text-2xl text-ink leading-tight">Préparation physique sport de force</h4>
                                    <p class="font-zalando text-sm md:text-base text-ink/90 leading-relaxed">
                                        Maîtrise les techniques de charges lourdes pour développer une force maximale.
                                    </p>
                                    <a href="#" class="font-zalando font-semibold text-ink underline hover:text-molten transition-colors w-max text-sm md:text-base">
                                        En savoir plus
                                    </a>
                                </div>
                            </div>

                            <div class="bg-icemint flex items-center p-5 rounded-2xl gap-5 shadow-xl/20">
                                <img src="/icon/group.svg" alt="" class="w-16 h-16 shrink-0 my-auto">
                                <div class="flex flex-col text-left space-y-2">
                                    <h4 class="font-zalando font-medium text-2xl text-ink leading-tight">Préparation physique sport collectif</h4>
                                    <p class="font-zalando text-sm md:text-base text-ink/90 leading-relaxed">
                                        Booste ta vitesse, ta force et ton endurance pour exploser tes résultats en club.
                                    </p>
                                    <a href="#" class="font-zalando font-semibold text-ink underline hover:text-molten transition-colors w-max text-sm md:text-base">
                                        En savoir plus
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <FaqAccordeon :items="homeFaq" />

        <div class="flex flex-col lg:flex-row items-center lg:justify-center space-y-8 lg:space-y-0 pb-10 lg:space-x-7">
            <RouterLink to="/Formules"  role="button" aria-label="Voir les formules disponibles"
                class="inline-block bg-molten border-3 border-transparent text-ink font-zalando px-8 py-3 rounded-xl font-medium text-xl shadow-xl/20 md:px-7 md:py-4 md:text-2xl transform hover:scale-110 transition">
                Les formules
            </RouterLink>

            <RouterLink to="/Contact" role="button" aria-label="Me contacter"
                class="inline-block bg-transparent border-3 border-molten text-ink font-zalando px-8 py-3 rounded-xl font-medium text-xl shadow-xl/20 md:px-7 md:py-4 md:text-2xl transform hover:scale-110 transition">
                Me contacter
            </RouterLink>
        </div>

        <div class="px-2 py-5 lg:px-80">
            <div class="py-2 px-1 border-2 border-molten/40 rounded-xl shadow-xl/20">
                <h3 class="font-krona text-xl text-center lg:text-left lg:px-4 lg:text-2xl">Ils me font confiance</h3>
                <div class="embedsocial-hashtag" data-ref="cc620d56d954d48c62c5d59c2e4f1c481ac18555">
                    <a class="feed-powered-by-es feed-powered-by-es-feed-img es-widget-branding"
                        href="https://embedsocial.com/" target="_blank" title="Widget by EmbedSocial">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import FaqAccordeon from '@/components/FaqAccordeon.vue'

onMounted(() => {
    const scriptId = "EmbedSocialHashtagScript"

    if (!document.getElementById(scriptId)) {
        const js = document.createElement("script")
        js.id = scriptId
        js.src = "https://embedsocial.com/cdn/ht.js"
        document.getElementsByTagName("head")[0].appendChild(js)
    } else {
        if (window.EmbedSocialHashtag) {
            window.EmbedSocialHashtag.init()
        } else {
            const existingScript = document.getElementById(scriptId)
            existingScript.remove()

            const js = document.createElement("script")
            js.id = scriptId
            js.src = "https://embedsocial.com/cdn/ht.js"
            document.getElementsByTagName("head")[0].appendChild(js)
        }
    }
})

const homeFaq = [
    {
        question: "Je n'ai pas fait de sport depuis des années, est-ce que je peux quand même commencer ?",
        answer: "Absolument ! Tous mes accompagnements sont adaptés à ton niveau de départ. Nous reprendrons les bases pas à pas et à ton rythme pour progresser en toute sécurité sans te décourager."
    },
    {
        question: "Où se déroulent les séances de coaching en présentiel ?",
        answer: "Les séances en présentiel se déroulent principalement à Nantes et son agglomération, que ce soit à ton domicile, en extérieur ou dans une salle partenaire selon tes préférences."
    },
    {
        question: "Comment fonctionne le coaching 100 % en ligne ?",
        answer: "Tu reçois un accès à ton programme d'entraînement et de suivi personnalisé. Chaque semaine, nous faisons un point complet (bilan, vidéo, ajustements) pour s'assurer de ta progression et garder une motivation maximale."
    },
    {
        question: "Quelle est la fréquence idéale pour voir de vrais résultats ?",
        answer: "Pour obtenir des résultats durables, une régularité de 2 à 3 séances par semaine est idéale. Cela dépend bien sûr de tes objectifs, de ton emploi du temps et de ton niveau de départ, ce que nous définirons ensemble."
    }
]
</script>

<style>
.feed-powered-by-es,
.es-widget-branding,
.es-widget-branding-text {
    display: none !important;
}

div[class*="embedsocial"] a[href*="embedsocial.com"],
.es-branding {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
    pointer-events: none !important;
}
</style>