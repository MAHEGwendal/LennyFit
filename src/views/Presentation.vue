<template>
    <!-- Section Hero -->
    <section
        class="relative w-full min-h-[50vh] flex flex-col justify-center items-center py-12 text-center overflow-hidden mt-20">

        <div class="absolute inset-0 z-0">
            <img src="/hero/hero2.jpg" alt="" class="w-full h-full object-cover" loading="lazy" />
            <div class="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        </div>

        <div class="relative z-10 flex flex-col items-center mx-auto w-full space-y-6">
            <h1 class="font-krona text-3xl md:text-4xl font-medium leading-snug text-icemint">
                Lenny, votre futur <span class="text-molten">coach</span> sportif à <span
                    class="text-molten">Nantes</span>
            </h1>
            <p class="font-krona text-xl md:text-2xl font-semibold leading-snug text-icemint">
                &ldquo;Votre <span class="text-molten">progrès</span>, mon <span
                    class="text-molten">épanouissement</span>&rdquo;
            </p>
        </div>
    </section>

    <div class="bg-moon">
        <div class="py-12 md:py-20 px-6 lg:px-12">
            <div
                class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-12 xl:gap-20">
                <h2 class="font-krona text-3xl md:text-4xl text-ink text-center lg:hidden w-full mb-2">
                    Qui suis-je ?
                </h2>

                <div class="shrink-0 z-10">
                    <img src="/image/lenny1.jpg" alt="Photo du coach Lenny"
                        class="w-64 h-64 md:w-80 md:h-80 lg:w-120 lg:h-120 rounded-full border-4 border-molten shadow-2xl object-cover mx-auto" />
                </div>

                <div class="grow text-center lg:text-left space-y-6 flex flex-col">
                    <h2 class="hidden lg:block font-krona text-4xl lg:text-5xl text-ink">
                        Qui suis-je ?
                    </h2>
                    <div
                        class="font-zalando text-base md:text-xl lg:text-2xl text-ink leading-relaxed space-y-4 max-w-3xl">
                        <p>
                            Je m'appelle Lenny Briey ! J'ai commencé par les sports de combat avant de plonger dans la
                            force athlétique, et ce parcours m'a donné une vraie vision globale de l'accompagnement.
                        </p>
                        <p>
                            Aujourd'hui, je suis spécialisé en préparation physique et en coaching santé. J'aide les
                            sportifs, quel que soit leur niveau, à atteindre leurs objectifs : gagner en force, perdre
                            du poids ou performer dans leur discipline.
                        </p>
                        <p>
                            Avec mes deux BPJEPS Activités de la Forme, je te construis un programme sur-mesure, pour
                            que tu progresses intelligemment, durablement et sans prendre de risques.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Section Qualités -->
    <div class="bg-moon pb-20 px-6 lg:px-12">
        <div class="max-w-7xl mx-auto">
            <div
                class="grid grid-rows-1 justify-center mx-auto md:grid-flow-col md:grid-rows-2 gap-6 md:gap-12 lg:items-center">

                <div v-for="qual in qualite" :key="qual.name"
                    class="relative flex flex-col justify-start p-6 max-w-110 min-h-45 lg:min-h-70 lg:max-w-250 rounded-2xl overflow-hidden shadow-xl/30 group hover:scale-[1.02] transition-transform duration-300">
                    <div class="absolute inset-0 z-0">
                        <img :src="qual.img" :alt="qual.name"
                            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            loading="lazy">
                        <div class="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>
                    </div>
                    <div class="relative z-10 text-center space-y-2 lg:space-y-10">
                        <h3 class="font-zalando text-3xl font-medium lg:text-5xl text-icemint">
                            {{ qual.name }}
                        </h3>
                        <p class="font-zalando text-m lg:text-xl lg:font-medium text-gray-200 leading-relaxed">
                            {{ qual.texte }}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <!-- Section Diplômes -->
    <div class="px-4 py-8 md:py-12 max-w-4xl mx-auto w-full">
        <div class="py-8 px-4 md:py-12 md:px-8 border-2 border-molten rounded-xl shadow-xl/20 bg-transparent">
            <h4 class="font-zalando font-bold text-2xl md:text-2xl text-center mb-8 text-ink">Mes diplômes</h4>

            <div class="flex flex-col space-y-6 max-w-3xl mx-auto">
                <!-- Diplôme 1 -->
                <div class="flex items-center gap-4">
                    <div
                        class="flex items-center justify-center w-10 h-10 rounded-full border-2 border-molten bg-orange-300/50 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                            stroke="currentColor" class="w-5 h-5 text-ink" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                    <span class="font-zalando text-lg font-bold md:text-xl text-ink leading-snug">
                        BPJEPS Activités de la Forme (Haltérophilie-Musculation)
                    </span>
                </div>

                <!-- Diplôme 2 -->
                <div class="flex items-center gap-4">
                    <div
                        class="flex items-center justify-center w-10 h-10 rounded-full border-2 border-molten bg-orange-300/50 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                            stroke="currentColor" class="w-5 h-5 text-ink" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                    <span class="font-zalando text-lg font-bold md:text-xl text-ink leading-snug">
                        BPJEPS Activités de la Forme (Cours Collectifs)
                    </span>
                </div>
            </div>
        </div>
    </div>

    <!-- Actions & Liens -->
    <div
        class="flex flex-col lg:flex-row items-center mt-8 lg:justify-center space-y-8 lg:space-y-0 pb-10 lg:space-x-7">
        <RouterLink to="/Formules" role="button" aria-label="Consulter les formules de coaching"
            class="inline-block bg-molten border-3 border-transparent text-ink font-zalando px-8 py-3 rounded-xl font-medium text-xl shadow-xl/20 md:px-7 md:py-4 md:text-2xl transform hover:scale-110 transition">
            Les formules
        </RouterLink>

        <RouterLink to="Contact" role="button" aria-label="Accéder au formulaire de contact"
            class="inline-block bg-transparent border-3 border-molten text-ink font-zalando px-8 py-3 rounded-xl font-medium text-xl shadow-xl/20 md:px-7 md:py-4 md:text-2xl transform hover:scale-110 transition">
            Me contacter
        </RouterLink>
    </div>

    <div class="mt-2 mb-10 flex justify-center gap-8">
        <a href="https://www.instagram.com/sparagwen/" target="_blank" aria-label="Instagram (Nouvelle fenêtre)"
            class="transform hover:scale-110 transition">
            <img src="/icon/instagramMolten.svg" alt="Instagram" class="w-20 h-20 md:w-25 md:h-25" />
        </a>
        <a href="https://www.facebook.com" target="_blank" aria-label="Facebook (Nouvelle fenêtre)"
            class="transform hover:scale-110 transition">
            <img src="/icon/facebookMolten.svg" alt="Facebook" class="w-20 h-20 md:w-25 md:h-25" />
        </a>
        <a href="mailto:sparagwen@gmail.com" aria-label="Envoyer un e-mail" class="transform hover:scale-110 transition">
            <img src="/icon/emailMolten.svg" alt="E-mail" class="w-20 h-20 md:w-25 md:h-25" />
        </a>
    </div>
</template>

<script setup>
const qualite = [
    { 
        name: "Impliqué", 
        texte: "Être présent à chaque étape pour guider, soutenir et vous faire progresser vers vos objectifs.", 
        img: "/image/barrePoids.jpg" 
    },
    { 
        name: "À l’écoute", 
        texte: "Une relation humaine basée sur le respect mutuel et la transparence pour avancer ensemble en toute sérénité.", 
        img: "/image/squat1.jpg" 
    },
    { 
        name: "Motivant", 
        texte: "Entretenir l'envie d'avancer et de persévérer grâce à un soutien constant et des objectifs adaptés à chacun.", 
        img: "/image/poids.jpg" 
    },
    { 
        name: "Pédagogue", 
        texte: "Transmettre les clés de chaque mouvement pour t'aider à comprendre ton entraînement et progresser en toute autonomie.", 
        img: "/image/dc.jpg" 
    }
]
</script>