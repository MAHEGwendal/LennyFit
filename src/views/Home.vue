<template>
    <section
        class="relative w-full min-h-[90vh] flex flex-col justify-center items-center px-4 py-12 text-center overflow-hidden">

        <div class="absolute inset-0 z-0">
            <img src="/hero/hero1.jpg" alt="" class="w-full h-full object-cover" fetchpriority="high" />
            <div class="absolute inset-0 bg-black/60 backdrop-blur-[10px]"></div>
        </div>

        <div class="relative z-10 flex flex-col items-center mx-auto w-full space-y-6">
            <div class="w-auto h-auto mb-2 animate-fade-in">
                <h1 class="w-70 h-auto md:w-100 mb-2">
                    <img src="/logos/Logo_principal_BV.svg" alt="LennyFit - Coach sportif personnel à Nantes"
                        class="w-full h-auto" />
                </h1>
            </div>
            <p class="font-krona text-2xl md:text-4xl font-semibold leading-snug text-icemint animate-fade-in-left">
                Dépassez vos <span class="text-molten">limites</span>, atteignez vos <span
                    class="text-molten">objectifs</span>
            </p>
            <p
                class="font-zalando text-icemint text-base font-medium md:text-2xl leading-relaxed max-w-xl px-2 animate-fade-in-left">
                Un suivi sportif <span class="text-molten font-medium">individuel</span> et <span
                    class="text-molten font-medium">personnalisé</span>,
                en présentiel à Nantes ou 100% en ligne.
            </p>
            <div class="flex flex-row items-center justify-center gap-2 md:gap-8 pt-8 w-full">
                <div
                    class="flex flex-col items-center justify-center w-27 h-27 md:w-40 md:h-40 shrink-0 rounded-full border-3 border-molten bg-molten/15 backdrop-blur-sm shadow-lg animate-fade-in-down">
                    <span class="font-krona text-2xl md:text-3xl font-bold text-icemint">+10</span>
                    <span class="font-zalando text-s md:text-sm text-moon leading-tight font-medium">
                        Champs d'action
                    </span>
                </div>
                <div
                    class="flex flex-col items-center justify-center w-30 h-30 md:w-40 md:h-40 shrink-0 rounded-full border-3 border-molten bg-molten/15 backdrop-blur-sm shadow-lg animate-fade-in-down ">
                    <span class="font-krona text-2xl md:text-3xl font-bold text-icemint">100%</span>
                    <span class="font-zalando text-s md:text-sm text-moon leading-tight font-medium">
                        Personnalisé
                    </span>
                </div>
                <div
                    class="flex flex-col items-center justify-center w-27 h-27 md:w-40 md:h-40 shrink-0 rounded-full border-3 border-molten bg-molten/15 backdrop-blur-sm shadow-lg animate-fade-in-down">
                    <span class="font-krona text-2xl md:text-3xl font-bold text-icemint">100%</span>
                    <span class="font-zalando text-xs md:text-sm text-moon leading-tight font-medium">
                        Accompagné
                    </span>
                </div>

            </div>

        </div>
    </section>

    <div class="bg-moon">
        <div class="py-8 px-4">
            <div
                class="max-w-7xl lg:max-w-[1700px] mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8 md:gap-15">
                <div class="shrink-0">
                    <img src="/image/lenny1.webp" alt="Photo du coach Lenny"
                        class="w-60 h-60 md:w-110 md:h-110 rounded-full mx-auto md:mx-0 border-4 border-molten shadow-xl/30 object-cover" loading="lazy" />
                </div>

                <div class="flex-1 text-center lg:text-left">
                    <h2 class="font-krona text-3xl lg:text-5xl mb-8">Salut, moi c'est Lenny !</h2>

                    <p class="font-zalando text-base md:text-3xl text-ink leading-relaxed mx-auto md:mx-0">
                        J’ai commencé mon parcours dans la callisthénie et les sports de force. Passionné par le
                        mouvement et le dépassement de soi, je suis également tombé amoureux des cours collectifs en
                        salle de fitness. Ce parcours varié me permet aujourd’hui d’avoir une vision globale et
                        personnalisée de l’entraînement, afin de vous accompagner au mieux selon vos objectifs. <br />

                        Si t’es prêt à faire de ta santé une vraie priorité, contacte-moi !
                    </p>

                    <div class="mt-6 flex justify-center">
                        <RouterLink to='/Presentation' role="button" aria-label="À propos de moi"
                            class="inline-block bg-molten text-ink font-zalando px-8 py-3 rounded-xl font-medium text-xl shadow-xl/20 md:px-7 md:py-4 md:text-2xl transform hover:scale-110 transition">
                            À propos de moi
                        </RouterLink>
                    </div>

                    <div class="mt-6 mb-6 flex justify-center gap-8">
                        <a href="https://www.instagram.com/lenny.briey/" target="_blank" aria-label="Instagram"
                            class="transform hover:scale-110 transition">
                            <img src="/icon/instagramMolten.svg" alt="Instagram" class="w-20 h-20 md:w-25 md:h-25" />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" aria-label="Facebook"
                            class="transform hover:scale-110 transition">
                            <img src="/icon/facebookMolten.svg" alt="Facebook" class="w-20 h-20 md:w-25 md:h-25" />
                        </a>
                        <a href="mailto:lennybriey96@gmail.com" aria-label="E-mail"
                            class="transform hover:scale-110 transition">
                            <img src="/icon/emailMolten.svg" alt="E-mail" class="w-20 h-20 md:w-25 md:h-25" />
                        </a>
                    </div>
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
                                    <h4 class="font-zalando font-medium text-2xl text-ink leading-tight">Perte de poids
                                    </h4>
                                    <p class="font-zalando text-sm md:text-base text-ink/90 leading-relaxed">
                                        Brûle des calories et affine ta silhouette durablement avec un programme adapté.
                                    </p>
                                    <RouterLink to="/Propositions"
                                        class="font-zalando font-semibold text-ink underline hover:text-molten transition-colors w-max text-sm md:text-base">
                                        En savoir plus
                                    </RouterLink>
                                </div>
                            </div>

                            <div class="bg-icemint flex items-center p-5 rounded-2xl gap-5 shadow-xl/20">
                                <img src="/icon/heart.svg" alt="" class="w-16 h-16 shrink-0 my-auto">
                                <div class="flex flex-col text-left space-y-2">
                                    <h4 class="font-zalando font-medium text-2xl text-ink leading-tight">Activité
                                        physique adaptée (APA)</h4>
                                    <p class="font-zalando text-sm md:text-base text-ink/90 leading-relaxed">
                                        Reprends le sport en douceur et progresse en toute sécurité selon ton profil.
                                    </p>
                                    <RouterLink to="/Propositions"
                                        class="font-zalando font-semibold text-ink underline hover:text-molten transition-colors w-max text-sm md:text-base">
                                        En savoir plus
                                    </RouterLink>
                                </div>
                            </div>

                            <div class="bg-icemint flex items-center p-5 rounded-2xl gap-5 shadow-xl/20">
                                <img src="/icon/poids.svg" alt="" class="w-16 h-16 shrink-0 my-auto">
                                <div class="flex flex-col text-left space-y-2">
                                    <h4 class="font-zalando font-medium text-2xl text-ink leading-tight">Renforcement du
                                        corps</h4>
                                    <p class="font-zalando text-sm md:text-base text-ink/90 leading-relaxed">
                                        Tonifie tes muscles et gagne en force pour te sentir mieux au quotidien.
                                    </p>
                                    <RouterLink to="/Propositions"
                                        class="font-zalando font-semibold text-ink underline hover:text-molten transition-colors w-max text-sm md:text-base">
                                        En savoir plus
                                    </RouterLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex-1 flex flex-col rounded-2xl shadow-xl/30 py-8 px-3 border-2 border-black/10">
                        <h3 class="font-krona text-2xl mb-8 text-ink text-center">Sport performance</h3>
                        <div class="space-y-6">
                            <div class="bg-icemint flex items-center p-5 rounded-2xl gap-5 shadow-xl/20">
                                <img src="/icon/muscle.svg" alt="" class="w-16 h-16 shrink-0 my-auto">
                                <div class="flex flex-col text-left space-y-2">
                                    <h4 class="font-zalando font-medium text-2xl text-ink leading-tight">Prise de masse
                                    </h4>
                                    <p class="font-zalando text-sm md:text-base text-ink/90 leading-relaxed">
                                        Développe ton volume musculaire et gagne en force grâce à un suivi
                                        d'entraînement optimisé.
                                    </p>
                                    <RouterLink to="/Propositions"
                                        class="font-zalando font-semibold text-ink underline hover:text-molten transition-colors w-max text-sm md:text-base">
                                        En savoir plus
                                    </RouterLink>
                                </div>
                            </div>

                            <div class="bg-icemint flex items-center p-5 rounded-2xl gap-5 shadow-xl/20">
                                <img src="/icon/calis.svg" alt="" class="w-16 h-16 shrink-0 my-auto">
                                <div class="flex flex-col text-left space-y-2">
                                    <h4 class="font-zalando font-medium text-2xl text-ink leading-tight">Entraînement
                                        callisthénie</h4>
                                    <p class="font-zalando text-sm md:text-base text-ink/90 leading-relaxed">
                                        Développe ton potentiel dans la maîtrise des mouvements au poids du corps à
                                        l’aide de méthodes spécifiques.
                                    </p>
                                    <RouterLink to="/Propositions"
                                        class="font-zalando font-semibold text-ink underline hover:text-molten transition-colors w-max text-sm md:text-base">
                                        En savoir plus
                                    </RouterLink>
                                </div>
                            </div>
                            <div class="bg-icemint flex items-center p-5 rounded-2xl gap-5 shadow-xl/20">
                                <img src="/icon/squat.svg" alt="" class="w-16 h-16 shrink-0 my-auto">
                                <div class="flex flex-col text-left space-y-2">
                                    <h4 class="font-zalando font-medium text-2xl text-ink leading-tight">Préparation
                                        physique sport de force</h4>
                                    <p class="font-zalando text-sm md:text-base text-ink/90 leading-relaxed">
                                        Maîtrise les techniques de charges lourdes pour développer une force maximale.
                                    </p>
                                    <RouterLink to="/Propositions"
                                        class="font-zalando font-semibold text-ink underline hover:text-molten transition-colors w-max text-sm md:text-base">
                                        En savoir plus
                                    </RouterLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <FaqAccordeon :items="homeFaq" />

        <div class="flex flex-col lg:flex-row items-center lg:justify-center space-y-8 lg:space-y-0 pb-10 lg:space-x-7">
            <RouterLink to="/Formules" role="button" aria-label="Voir les formules disponibles"
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
        title: "Questions courantes",
        question: "Je n'ai pas fait de sport depuis des années, est-ce que je peux quand même commencer ?",
        answer: "Absolument ! Tous mes accompagnements sont adaptés à ton niveau de départ. Nous reprendrons les bases pas à pas et à ton rythme pour progresser en toute sécurité sans te décourager."
    },
    {
        question: "Où se déroulent les séances de coaching en présentiel ?",
        answer: "Je m’adapte à votre environnement afin de vous proposer des séances de coaching pratiques, efficaces et adaptées à vos objectifs.\n\n📍 À domicile\nVous habitez à Nantes ou dans les alentours ? Je peux me déplacer directement à votre domicile pour votre séance.\n\n🌳 En extérieur\nEnvie de profiter du plein air ? Les séances peuvent également se dérouler dans un parc ou sur un espace sportif adapté.\n\n🏋️ En salle\nJe vous accueille également au club « Ma Salle RDV », situé à Orvault, sur la Route de Vannes. Je suis affiliée à cette salle, qui offre un environnement parfaitement adapté à la pratique du coaching.\n\nLe lieu est donc choisi ensemble, en fonction de votre situation, de vos objectifs et du type de séance prévu."
    },
    {
        question: "Comment fonctionne le coaching distanciel ?",
        answer: "Le coaching à distance fonctionne par cycles de 4 semaines, avec un accompagnement flexible, personnalisé et humain, où que vous soyez.\n\n🎯 Programme personnalisé\nSelon vos objectifs, votre niveau et vos contraintes.\n\n📈 Suivi et adaptation\nChaque semaine pour assurer une progression cohérente et durable.\n\n📹 2 visios par cycle\nUne en début et une en fin de cycle pour faire le point et ajuster la suite.\n\n🧠 Évaluation et progression\nAvec des méthodes expliquées pour vous permettre de comprendre votre entraînement.\n\n💬 Suivi WhatsApp\nQuestions, vidéos et retours directement avec moi, avec une réponse sous 2 jours ouvrés."
    },
    {
        question: "Le coaching comprend-il des conseils alimentaires ?",
        answer: "Oui ! Je peux vous accompagner avec des conseils et recommandations générales autour de l’alimentation, en lien avec vos objectifs sportifs et votre progression. En revanche, je ne propose pas de programme diététique personnalisé. Pour un accompagnement nutritionnel spécifique, je vous recommande de faire appel à un professionnel de l’alimentation, comme un diététicien-nutritionniste.\n\nL’objectif est de vous aider à adopter de bonnes habitudes alimentaires, sans sortir du cadre de mon accompagnement sportif."
    },
    {
        question: "Peut-on mixer séances en présentiel et en distanciel ?",
        answer: "Oui, bien sûr !  L’accompagnement peut combiner séances en présentiel et suivi à distance, selon vos besoins, vos objectifs et votre organisation. Cela permet de profiter de la correction et de l’accompagnement en direct, tout en conservant la flexibilité du coaching à distance entre les séances."
    },
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