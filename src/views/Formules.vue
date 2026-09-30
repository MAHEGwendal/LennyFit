<template>
    <section
        class="relative w-full min-h-[50vh] flex flex-col justify-center items-center py-12 text-center overflow-hidden">

        <div class="absolute inset-0 z-0">
            <img src="/hero/hero4.jpg" alt="" class="w-full h-full object-cover" fetchpriority="high"/>
            <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        </div>

        <div class="relative z-10 flex flex-col items-center mx-auto w-full space-y-6">
            <h1 class="font-krona text-2xl md:text-4xl font-medium leading-snug text-icemint">
                Choisissez <span class="text-molten">l'accompagnement</span> qui propulsera vos <span
                    class="text-molten">résultats </span>
            </h1>
        </div>
    </section>

    <div class="max-w-7xl mx-auto px-4 py-12 space-y-16">
        <div v-for="section in prestations" :key="section.id">
            <h2 class="font-krona text-2xl lg:text-4xl text-ink underline decoration-molten decoration-3 underline-offset-8 mb-10 text-left">
                {{ section.title }}
            </h2>
        
            <div 
                :ref="el => { if (el) containers[section.id] = el }"
                class="flex md:grid md:grid-cols-4 gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-none scroll-smooth items-stretch"
            >
                <div 
                    v-for="(card, index) in section.cards" 
                    :key="index"
                    class="min-w-[70%] md:min-w-0 bg-molten/20 border-2 border-molten rounded-2xl p-4 flex flex-col items-center justify-between shadow-xl snap-center shrink-0"
                >
                    <div class="w-full flex flex-col items-center">
                        <h3 class="font-krona text-xl md:text-2xl text-ink tracking-wide text-center">{{ card.title }}</h3>
                        <div class="font-zalando font-bold text-3xl md:text-4xl text-center text-ink my-4">{{ card.subPrice }}</div>
                        
                        <p v-if="card.subPrice" class="font-zalando text-sm md:text-base text-ink/70 -mt-2 mb-4 font-medium italic">
                            {{ card.price }}
                        </p>

                        <p v-if="card.duration" class="font-zalando text-lg font-black underline text-ink/80 mb-4">{{ card.promo }}</p>
                        <p v-if="card.duration" class="font-zalando text-base text-ink/80 mb-8">{{ card.duration }}</p>
                        
                        <ul v-if="card.features" class="w-full text-left font-zalando text-base text-ink/90 space-y-2 mb-8 border-t border-ink/10 pt-4">
                            <li v-for="(feature, fIndex) in card.features" :key="fIndex" class="flex items-start gap-2">
                                <span class="text-molten text-lg leading-none">•</span>
                                <span>{{ feature }}</span>
                            </li>
                        </ul>
                    </div>

                    <a 
                        :href="section.link"
                        target="_blank"
                        class="w-full max-w-50 text-center bg-molten text-ink font-zalando font-semibold py-3 px-6 lg:py-4 lg:px-3 lg:text-xl rounded-xl shadow-md hover:scale-105 transition-transform"
                    >
                        Prendre RDV
                    </a>
                </div>
            </div>
            <div class="flex justify-center items-center gap-4 mt-4 md:hidden space-x-20">
                <button 
                    @click="scroll(section.id, 'prev')" 
                    aria-label="Précédent"
                    class="w-10 h-10 rounded-full bg-molten/50 flex items-center justify-center text-ink hover:bg-molten/70 transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <button 
                    @click="scroll(section.id, 'next')" 
                    aria-label="Suivant"
                    class="w-10 h-10 rounded-full bg-molten/50 flex items-center justify-center text-ink hover:bg-molten/70 transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </div>

    </div>

    <FaqAccordeon :items="homeFaq" />
</template>

<script setup>
import { ref, reactive } from 'vue'
import FaqAccordeon from '@/components/FaqAccordeon.vue'

const containers = reactive({})

const scroll = (id, direction) => {
    const container = containers[id]
    if (!container) return
    
    const cardWidth = container.clientWidth * 0.8 + 24
    container.scrollLeft += direction === 'next' ? cardWidth : -cardWidth
}

const prestations = [
    {
        id: 'distanciel',
        title: "Prestation en distanciel",
        link: "https://lennyfit.fillout.com/rencontre-avec-le-coach-lenny-distanciel",
        cards: [
            { 
                title: '4 SEMAINES', 
                subPrice: '60 €', 
                features: ['Programme personnalisé'] 
            },
            { 
                title: '12 SEMAINES', 
                price: 'soit 168 €', 
                subPrice: '56 € / 4 semaines',
                features: ['Accompagnement sur 3 cycles', 'Ajustements réguliers', 'Suivi progressif'] 
            },
            { 
                title: '24 SEMAINES', 
                price: 'soit 318 €', 
                subPrice: '53 € / 4 semaines',
                features: ['Accompagnement longue durée', 'Progression durable', ' Ajustements réguliers', 'Optimisation des résultats'] 
            },
            { 
                title: '48 SEMAINES', 
                price: 'soit 600 €', 
                subPrice: '50 € / 4 semaines',
                features: ['Accompagnement longue durée', 'Progression durable', ' Ajustements réguliers', 'Optimisation des résultats'] 
            }
        ]
    },
    {
        id: 'presentiel',
        title: 'Prestation en présentiel',
        link:"https://lennyfit.fillout.com/rencontre-avec-lenny-presentiel",
        cards: [
            { title: 'LA SÉANCE', subPrice: '50 €', duration: '1H / séance' },
            { title: '4 SÉANCES', subPrice: '180 €', promo:'-10%', duration: '1H / séance' },
            { title: '8 SÉANCES', subPrice: '350 €', promo:'Une séance offerte !', duration: '1H / séance' }
        ]
    }
]

const homeFaq = [
    {
        title: "Questions courantes",
        question: "Que comprends le coaching en distanciel ?",
        answer: "1.Un programme personnalisé selon tes objectifs\n\n 2.Une adaptation et un suivi chaque semaine \n\n 3.Une visio et un bilan à la fin de chaque cycle de 4 semaines\n\n 4.Une progression mesurée grâce à un système d'évaluation\n\n 5.Des explications des méthodes et exercices proposés"
    },
    {
        question: "Comment choisir la durée de mon accompagnement à distance (4, 12, 24 ou 48 semaines) ?",
        answer: "Tout dépend de votre objectif et de votre autonomie. La formule 4 semaines est idéale pour tester la méthode ou relancer une dynamique. Les formules 12 et 24 semaines sont conçues pour des transformations durables (prise de masse, progression en Street Lifting). Plus vous vous engagez sur la durée, plus le tarif est avantageux (jusqu'à un cycle complet offert sur la formule 24 semaines)."
    },
    {
        question: "À quoi sert la prise de rendez-vous ?",
        answer: "Le premier rendez-vous permet de faire connaissance, comprendre vos objectifs et construire un accompagnement adapté à votre profil.\n\nNous faisons le point sur votre niveau, vos habitudes, vos contraintes et vos attentes afin de définir une stratégie claire et personnalisée pour vous permettre de progresser efficacement.\n\nC’est aussi l’occasion de répondre à vos questions et de vous expliquer comment se déroule votre accompagnement."
    },
    {
        question: "Comment fonctionne l'analyse vidéo et le suivi WhatsApp en distanciel ?",
        answer: "C'est le cœur de votre progression. Lors de vos entraînements, vous vous filmez sur vos mouvements clés (Tractions, Dips, Soulevé de terre, etc.). Vous m'envoyez les vidéos directement sur WhatsApp. Sous 2 jours ouvrés, je décortique votre technique, corrige votre posture et ajuste les charges de votre programme pour la semaine suivante."
    },
    {
        question: "Les carnets de séances en présentiel peuvent-ils être partagés ?",
        answer: "Oui ! Il est tout à fait possible de consommer vos séances en formule Duo à domicile. La seule condition est que votre partenaire d'entraînement et vous-même partagiez le même objectif sportif, afin que la programmation reste cohérente et efficace pour vous deux."
    },
    {
        question: "Qu'est-ce qui est inclus en plus de l'heure de coaching en présentiel ?",
        answer: "Chaque séance d'une heure comprend un carnet de suivi complet. Entre deux rendez-vous physiques, vous bénéficiez également d'une programmation sur-mesure et d'un suivi à distance pour vos séances en autonomie afin de garantir une progression constante."
    }
]
</script>