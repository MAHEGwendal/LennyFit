<template>
    <div class="bg-moon py-10 px-4">
        <div
            class="max-w-7xl mx-auto bg-moon border border-black/10 rounded-[2.5rem] p-6 md:p-10 lg:p-14 shadow-sm">

            <!-- Titre -->
            <h1 class="font-krona text-4xl md:text-5xl lg:text-6xl text-ink text-center mb-4 tracking-tight">
                FAQ
            </h1>

            <p class="font-zalando text-base md:text-lg text-ink/70 text-center max-w-2xl mx-auto mb-12">
                Les réponses aux questions que vous vous posez avant de commencer votre accompagnement.
            </p>

            <!-- Questions / réponses -->
            <div>
                <div
                    v-for="(item, index) in homeFaq"
                    :key="index"
                    class="py-8 border-b border-black/10 last:border-0"
                >
                    <!-- Question -->
                    <h2 class="font-krona text-lg md:text-xl lg:text-2xl text-ink mb-5 leading-snug">
                        {{ item.question }}
                    </h2>

                    <!-- Réponse -->
                    <div
                        class="font-zalando text-sm md:text-base lg:text-lg text-ink/80 leading-relaxed whitespace-pre-line max-w-4xl"
                    >
                        {{ item.answer }}
                    </div>
                </div>
                <div class="mt-5 text-center">
                    <p class="font-zalando text-base font-medium md:text-lg text-ink/80 mb-4">
                        Vous ne trouvez pas de réponse à votre question ?
                    </p>
                    <RouterLink
                        to="/contact"
                        class="block w-fit mx-auto bg-molten text-ink font-zalando px-3 py-2 rounded-xl font-medium text-lg shadow-xl/20 md:px-4 md:py-3 md:text-xl transform hover:scale-110 transition"
                    >
                        Me contacter
                    </RouterLink>
                </div>
            </div>

            

        </div>
    </div>
</template>

<script setup>

const homeFaq = [
    {
        question: "Que comprend le coaching en distanciel ?",
        answer: "1. Un programme personnalisé selon tes objectifs.\n\n2. Une adaptation et un suivi chaque semaine.\n\n3. Une visio et un bilan à la fin de chaque cycle de 4 semaines.\n\n4. Une progression mesurée grâce à un système d'évaluation.\n\n5. Des explications des méthodes et exercices proposés."
    },
    {
        question: "Je n'ai pas fait de sport depuis des années, est-ce que je peux quand même commencer ?",
        answer: "Absolument ! Tous mes accompagnements sont adaptés à ton niveau de départ. Nous reprendrons les bases pas à pas et à ton rythme pour progresser en toute sécurité sans te décourager."
    },

    {
        question: "À quoi sert la prise de rendez-vous ?",
        answer: "Le premier rendez-vous permet de faire connaissance, comprendre vos objectifs et construire un accompagnement adapté à votre profil.\n\nNous faisons le point sur votre niveau, vos habitudes, vos contraintes et vos attentes afin de définir une stratégie claire et personnalisée pour vous permettre de progresser efficacement.\n\nC’est aussi l’occasion de répondre à vos questions et de vous expliquer comment se déroule votre accompagnement."
    },

    {
        question: "Où se déroulent les séances de coaching en présentiel ?",
        answer: "Je m’adapte à votre environnement afin de vous proposer des séances de coaching pratiques, efficaces et adaptées à vos objectifs.\n\n📍 À domicile\nVous habitez à Nantes ou dans les alentours ? Je peux me déplacer directement à votre domicile pour votre séance.\n\n🌳 En extérieur\nEnvie de profiter du plein air ? Les séances peuvent également se dérouler dans un parc ou sur un espace sportif adapté.\n\n🏋️ En salle\nJe vous accueille également au club « Ma Salle RDV », situé à Orvault, sur la Route de Vannes. Je suis affiliée à cette salle, qui offre un environnement parfaitement adapté à la pratique du coaching.\n\nLe lieu est donc choisi ensemble, en fonction de votre situation, de vos objectifs et du type de séance prévu."
    },

    {
        question: "Le coaching comprend-il des conseils alimentaires ?",
        answer: "Oui ! Je peux vous accompagner avec des conseils et recommandations générales autour de l’alimentation, en lien avec vos objectifs sportifs et votre progression. En revanche, je ne propose pas de programme diététique personnalisé. Pour un accompagnement nutritionnel spécifique, je vous recommande de faire appel à un professionnel de l’alimentation, comme un diététicien-nutritionniste.\n\nL’objectif est de vous aider à adopter de bonnes habitudes alimentaires, sans sortir du cadre de mon accompagnement sportif."
    },

    {
        question: "Les séances en présentiel peuvent-elles se faire en duo ?",
        answer: "Oui, tout à fait ! Les séances peuvent être réalisées en duo, la seule condition est que votre partenaire d'entraînement et vous-même ayez des objectifs similaires.\n\nCela permet de s’entraîner à deux, se motiver et progresser ensemble, tout en bénéficiant d’un encadrement personnalisé."
    },

    {
        question: "Qu'est-ce qui est inclus en plus de l'heure de coaching en présentiel ?",
        answer: "Chaque séance d'une heure comprend un carnet de suivi complet. Entre deux rendez-vous physiques, vous bénéficiez également d'une programmation sur-mesure et d'un suivi à distance pour vos séances en autonomie afin de garantir une progression constante."
    },

    {
        question: "Peut-on mixer séances en présentiel et en distanciel ?",
        answer: "Oui, bien sûr ! L’accompagnement peut combiner séances en présentiel et suivi à distance, selon vos besoins, vos objectifs et votre organisation. Cela permet de profiter de la correction et de l’accompagnement en direct, tout en conservant la flexibilité du coaching à distance entre les séances."
    },

    {
        question: "Comment fonctionne le coaching distanciel ?",
        answer: "Le coaching à distance fonctionne par cycles de 4 semaines, avec un accompagnement flexible, personnalisé et humain, où que vous soyez.\n\n🎯 Programme personnalisé\nSelon vos objectifs, votre niveau et vos contraintes.\n\n📈 Suivi et adaptation\nChaque semaine pour assurer une progression cohérente et durable.\n\n📹 2 visios par cycle\nUne en début et une en fin de cycle pour faire le point et ajuster la suite.\n\n🧠 Évaluation et progression\nAvec des méthodes expliquées pour vous permettre de comprendre votre entraînement.\n\n💬 Suivi WhatsApp\nQuestions, vidéos et retours directement avec moi, avec une réponse sous 2 jours ouvrés."
    },

    {
        question: "Comment fonctionne l'analyse vidéo et le suivi WhatsApp en distanciel ?",
        answer: "C'est le cœur de votre progression. Lors de vos entraînements, vous vous filmez sur vos mouvements clés (tractions, dips, soulevé de terre, etc.). Vous m'envoyez les vidéos directement sur WhatsApp. Sous 2 jours ouvrés, je décortique votre technique, corrige votre posture et ajuste les charges de votre programme pour la semaine suivante."
    },

    {
        question: "Comment choisir la durée de mon accompagnement à distance (4, 12, 24 ou 48 semaines) ?",
        answer: "Tout dépend de votre objectif et de votre autonomie. La formule 4 semaines est idéale pour tester la méthode ou relancer une dynamique. Les formules 12 et 24 semaines sont conçues pour des transformations durables (prise de masse, progression en Street Lifting). Plus vous vous engagez sur la durée, plus le tarif est avantageux (jusqu'à un cycle complet offert sur la formule 24 semaines)."
    },

    {
        question: "Quelle est la fréquence idéale pour voir de vrais résultats ?",
        answer: "Pour obtenir des résultats durables, une régularité de 2 à 3 séances par semaine est idéale. Cela dépend bien sûr de tes objectifs, de ton emploi du temps et de ton niveau de départ, ce que nous définirons ensemble."
    },

    {
        question: "Peut-on mixer les objectifs de travail ?",
        answer: "Oui, tout à fait ! Il est possible de travailler plusieurs objectifs en parallèle : perte de poids, prise de muscle, amélioration des performances… L’idée est de construire la programmation autour de vos priorités, en combinant les différents axes de travail de manière cohérente et progressive."
    },

    {
        question: "Que se passe-t-il si mes objectifs évoluent en cours de route ?",
        answer: "Aucun problème ! Le coaching s’adapte à votre évolution et vos envies. Vos objectifs peuvent changer au fil du temps, et votre programme évoluera avec eux.\n\nNous faisons régulièrement le point pour réajuster les priorités et adapter les séances. Le tout pour continuer de progresser efficacement vers un programme qui vous correspond."
    },

    {
        question: "Est-il possible d’être suivi pour préparer une compétition ou un concours ?",
        answer: "Oui, tout à fait ! Le coaching peut être adapté à la préparation d’une compétition, d’un concours ou d’un examen physique. Nous définissons ensemble les exigences de votre objectif afin de construire une préparation physique progressive et personnalisée, avec un travail ciblé sur les qualités physiques nécessaires : force, endurance, vitesse, explosivité, mobilité, etc.\n\n📈 Le suivi permet ensuite d’évaluer vos progrès et d’adapter la programmation au fur et à mesure pour vous amener dans les meilleures conditions le jour J."
    },
]

</script>