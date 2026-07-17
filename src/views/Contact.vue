<template>
    <!-- Section Hero -->
    <section
        class="relative w-full min-h-[50vh] flex flex-col justify-center items-center py-12 text-center overflow-hidden mt-20">

        <div class="absolute inset-0 z-0">
            <img src="/hero/hero5.jpg" alt="" class="w-full h-full object-cover" loading="lazy" />
            <div class="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        </div>

        <div class="relative z-10 flex flex-col items-center mx-auto w-full space-y-6">
            <h1 class="font-krona text-4xl md:text-5xl font-medium leading-snug text-icemint">
                Contacter votre futur <span class="text-molten">coach</span>
            </h1>
        </div>
    </section>

    <!-- Section Principale : Infos de contact & Carte -->
    <div class="bg-moon py-12 md:py-20 px-4 md:px-8">
        <div class="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 xl:gap-20">
            
            <!-- Colonne Gauche : Photo du Coach -->
            <div class="shrink-0">
                <img src="/image/lenny1.jpg" alt="Photo du coach Lenny"
                    class="w-64 h-64 md:w-96 md:h-96 lg:w-110 lg:h-110 rounded-full border-4 border-molten shadow-2xl object-cover mx-auto" />
            </div>

            <!-- Colonne Droite : Carte de Contact style Maquette -->
            <div class="w-full max-w-2xl border-2 border-ink/20 rounded-2xl p-6 md:p-8 bg-transparent shadow-xl/30 space-y-6">
                
                <!-- Nom -->
                <div class="flex items-center gap-4 pb-4 border-b border-molten">
                    <img src="/icon/Profile.svg" alt="" class="w-8 h-8 md:w-10 md:h-10 shrink-0" aria-hidden="true" />
                    <span class="font-zalando font-bold text-xl md:text-2xl text-ink">Lenny Briey</span>
                </div>

                <!-- Téléphone -->
                <div class="flex items-center gap-4 pb-4 border-b border-molten">
                    <img src="/icon/Phone.svg" alt="" class="w-8 h-8 md:w-10 md:h-10 shrink-0" aria-hidden="true" />
                    <a href="tel:+33651316024" class="font-zalando font-medium text-lg md:text-xl text-ink hover:text-molten transition-colors">
                        06 51 31 60 24
                    </a>
                </div>

                <!-- Email -->
                <div class="flex items-center gap-4 pb-4 border-b border-molten">
                    <img src="/icon/EmailBlack.svg" alt="" class="w-8 h-8 md:w-10 md:h-10 shrink-0" aria-hidden="true" />
                    <a href="mailto:lennybriey96@gmail.com" class="font-zalando font-medium text-lg md:text-xl text-ink hover:text-molten transition-colors break-all">
                        lennybriey96@gmail.com
                    </a>
                </div>

                <!-- Adresse -->
                <div class="flex items-center gap-4 pb-4 border-b border-molten">
                    <img src="/icon/Address.svg" alt="" class="w-8 h-8 md:w-10 md:h-10 shrink-0" aria-hidden="true" />
                    <address class="font-zalando font-medium text-lg md:text-xl text-ink not-italic leading-tight">
                        15 rue des Bas Moulins, 44800 Saint-Herblain
                    </address>
                </div>

                <!-- Horaires de disponibilités -->
                <div class="flex items-start gap-4 pt-2">
                    <img src="/icon/Clock.svg" alt="" class="w-8 h-8 md:w-10 md:h-10 shrink-0 mt-1" aria-hidden="true" />
                    <div class="w-full">
                        <h4 class="font-zalando font-bold text-lg md:text-xl text-ink underline underline-offset-4 mb-3">
                            Horaires de disponibilités
                        </h4>
                        <ul class="font-zalando text-base md:text-lg text-ink/90 space-y-1.5 max-w-md">
                            <li class="flex justify-between"><span>Lundi :</span> <span class="font-semibold">09:00 - 18:00</span></li>
                            <li class="flex justify-between"><span>Mardi :</span> <span class="font-semibold">09:00 - 18:00</span></li>
                            <li class="flex justify-between"><span>Mercredi :</span> <span class="font-semibold">09:00 - 18:00</span></li>
                            <li class="flex justify-between"><span>Jeudi :</span> <span class="font-semibold">09:00 - 18:00</span></li>
                            <li class="flex justify-between"><span>Vendredi :</span> <span class="font-semibold">09:00 - 18:00</span></li>
                            <li class="flex justify-between"><span>Samedi :</span> <span class="font-semibold">09:00 - 18:00</span></li>
                            <li class="flex justify-between"><span>Dimanche :</span> <span class="font-semibold">09:00 - 14:00</span></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
