<template>
  <!-- SECTION HERO -->
  <section class="relative w-full min-h-[50vh] flex flex-col justify-center items-center py-12 text-center overflow-hidden mt-20">
    <div class="absolute inset-0 z-0">
      <img src="/hero/hero3.jpg" alt="" class="w-full h-full object-cover" loading="lazy" />
      <div class="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
    </div>

    <div class="relative z-10 flex flex-col items-center mx-auto w-full space-y-6">
      <h1 class="font-krona text-3xl md:text-4xl font-medium leading-snug text-icemint">
        Un coaching adapté à vos <span class="text-molten">besoins réels</span>, votre <span class="text-molten">santé</span> et vos <span class="text-molten">capacités</span>
      </h1>
    </div>
  </section>

  <!-- SECTIONS SPORT BIEN-ÊTRE & PERFORMANCE -->
  <div class="max-w-7xl mx-auto mt-10 mb-10 px-4">
    <div class="flex flex-col items-stretch gap-8 lg:gap-20">
      
      <div v-for="categorie in categories" :key="categorie.title" class="flex-1 flex flex-col rounded-2xl shadow-xl/30 py-8 px-4 border-2 border-black/10">
        <h3 class="font-krona text-2xl lg:text-4xl mb-5 text-ink text-center">{{ categorie.title }}</h3>
        <p class="font-zalando text-md mb-8 lg:px-30 text-ink text-center">{{ categorie.description }}</p>

        <div class="space-y-6">
          <!-- BOUCLE DYNAMIQUE AVEC ALTERNANCE GAUCHE/DROITE AUTOMATIQUE -->
          <div 
            v-for="(service, index) in categorie.services" 
            :key="service.title"
            class="bg-icemint flex items-stretch rounded-2xl shadow-xl/20 overflow-hidden"
            :class="{ 'flex-row-reverse': index % 2 !== 0 }"
          >
            <div class="flex-1 flex flex-col text-left space-y-2 p-5 min-w-0">
              <h4 class="font-zalando font-medium text-lg lg:text-3xl text-ink leading-tight">{{ service.title }}</h4>
              <p class="font-zalando text-sm lg:text-lg text-ink/90 leading-relaxed">{{ service.description }}</p>
            </div>
            
            <div 
              class="w-24 sm:w-32 md:w-60 shrink-0"
              :class="index % 2 === 0 ? 'border-l-2 border-molten' : 'border-r-2 border-molten'"
            >
              <img :src="service.image" alt="" class="w-full h-full object-cover">
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>

  <div class="px-4 py-8 md:py-12 max-w-4xl mx-auto w-full">
    <div class="py-8 px-4 md:py-12 md:px-8 rounded-xl shadow-xl/30 bg-transparent">
      <h4 class="font-zalando font-bold text-2xl md:text-3xl text-center mb-8 text-ink">Lenny est là pour vous accompagner dans votre parcours !</h4>
      <p class="font-zalando text-md md:text-3xl text-center mb-8 text-ink">Prêt à passer au niveau supérieur ? À chaque profil correspond une méthode et un rythme. Découvrez mes différentes offres pour trouver l'accompagnement idéal et adapté à vos objectifs.</p>

      <div class="flex justify-center">
        <RouterLink to="/Formules" role="button" aria-label="Les formules" class="inline-block bg-molten border-3 border-transparent text-ink font-zalando px-8 py-5 rounded-xl font-medium text-2xl shadow-xl/20 md:px-7 md:py-4 md:text-2xl transform hover:scale-110 transition">
          Les formules
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const categories = [
  {
    title: "Sport bien-être",
    description: "Utiliser l'activité physique comme un moyen d'améliorer durablement la santé, l'équilibre de vie et le bien-être physique et mental, à travers une pratique adaptée, progressive et accessible à chacun.",
    services: [
      {
        title: "Perte de poids",
        description: "Améliorer sa santé, son énergie et son bien-être en réduisant progressivement l'excès de poids de façon saine et durable.",
        image: "/image/squat2.jpg"
      },
      {
        title: "Activité physique adaptée (APA)",
        description: "Utiliser le mouvement comme outil de prévention, de rééducation, de maintien de l'autonomie et d'amélioration du bien-être, grâce à des exercices spécifiquement adaptés à chaque individu.",
        image: "/image/etirement.jpg"
      },
      {
        title: "Renforcement du corps",
        description: "Développer et entretenir l'activité musculaire afin d'améliorer la silhouette, la posture, la stabilité et les capacités fonctionnelles au quotidien.",
        image: "/image/sportif.jpg"
      },
      {
        title: "Entraînement callisthénie",
        description: "Prends le contrôle de ton corps et découvre tout ce dont tu es capable avec l’entraînement au poids du corps. Que tu sois débutant ou déjà avancé, je suis là pour te guider pas à pas, avec des méthodes qui évoluent à ton rythme. On va travailler ta force, ta souplesse, ta coordination et ta confiance, le tout sans te blesser.",
        image: "/image/traction.jpg"
      }
    ]
  },
  {
    title: "Sport performance",
    description: "Développer durablement les capacités physiques et mentales grâce à un entraînement personnalisé, afin d'atteindre des objectifs sportifs précis et mesurables.",
    services: [
      {
        title: "Prise de masse",
        description: "Accompagner le développement musculaire en optimisant les méthodes d'entraînement, la progression des charges de travail et les habitudes favorisant la croissance musculaire.",
        image: "/image/grosMuscle.jpg"
      },
      {
        title: "Préparation physique",
        description: "Street workout, power lifting, street lifting : Mettre en place un entraînement structuré et personnalisé visant à améliorer les qualités de force, de résistance et de coordination tout en réduisant le risque de blessure.",
        image: "/image/sportGroup2.jpg"
      },
      {
        title: "Préparation physique sport de force",
        description: "Accompagner les sportifs dans le développement de leurs qualités physiques afin d'améliorer leurs performances, leur récupération et leur résistance aux contraintes du sport pratiqué.",
        image: "/image/squat3.jpg"
      },
      {
        title: "Préparation physique sport collectif",
        description: "Fais évoluer ta force avec un plan d’entraînement sur mesure, adapté à ton sport et à tes objectifs. Que tu sois fan de powerlifting, de street lifting, d’haltérophilie ou de musculation, chaque programme est conçu pour booster tes résultats tout en limitant les risques de blessure.",
        image: "/image/sportGroup.jpg"
      }
    ]
  }
]
</script>