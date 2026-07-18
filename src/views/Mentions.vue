<template>
    <div class="bg-moon min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div
            class="max-w-4xl mx-auto bg-white/50 backdrop-blur-sm rounded-2xl p-6 sm:p-10 shadow-sm border border-black/5">
            <h1 class="font-krona text-3xl sm:text-4xl text-ink mb-4 text-center">
                Mentions Légales
            </h1>
            <p class="font-zalando text-sm text-ink/60 text-center mb-10">
                En vigueur au 18 juillet 2026
            </p>

            <div class="space-y-8 font-zalando text-ink text-base sm:text-lg leading-relaxed">

                <section class="space-y-3">
                    <h2 class="font-krona text-xl sm:text-2xl text-ink border-b border-molten/20 pb-2">
                        1. Éditeur du site
                    </h2>
                    <p>
                        Le présent site internet est édité et exploité par :
                    </p>
                    <ul class="list-disc pl-5 space-y-1">
                        <li><strong>Nom / Prénom</strong> : Lenny Briey</li>
                        <li><strong>Statut juridique</strong> : Entrepreneur Individuel (EI) / Micro-entrepreneur</li>
                        <li><strong>Siège social</strong> : Nantes, France</li>
                        <li><strong>Numéro SIRET</strong> : 10722134300018</li>
                        <li><strong>Adresse e-mail</strong> : <a href="mailto:lennybriey96@gmail.com"
                                class="text-molten underline">lennybriey96@gmail.com</a></li>
                    </ul>
                </section>

                <section class="space-y-3">
                    <h2 class="font-krona text-xl sm:text-2xl text-ink border-b border-molten/20 pb-2">
                        2. Directeur de la publication
                    </h2>
                    <p>
                        Le Directeur de la publication et responsable du contenu du site est **LennyFit**, en sa qualité
                        de représentant légal de l'entreprise.
                    </p>
                </section>

                <section class="space-y-3">
                    <h2 class="font-krona text-xl sm:text-2xl text-ink border-b border-molten/20 pb-2">
                        3. Hébergement du site
                    </h2>
                    <p>
                        Le site internet est hébergé par la société :
                    </p>
                    <p class="bg-black/5 p-3 rounded-xl border border-black/5 text-sm sm:text-base">
                        <strong>HOSTINGER INTERNATIONAL LTD</strong><br />
                        61 Lordou Vironos Street, 6023 Larnaca, Chypre<br />
                        Site web : <a href="https://www.hostinger.fr" target="_blank" rel="noopener noreferrer"
                            class="text-molten underline">https://www.hostinger.fr</a>
                    </p>
                </section>

                <section class="space-y-3">
                    <h2 class="font-krona text-xl sm:text-2xl text-ink border-b border-molten/20 pb-2">
                        4. Propriété intellectuelle
                    </h2>
                    <p>
                        L'ensemble des éléments constituant ce site internet (notamment les logos, graphismes,
                        photographies, vidéos, textes, arborescence, et icônes) est la propriété exclusive de
                        **LennyFit**, sauf mention contraire expresse.
                    </p>
                    <p>
                        Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie
                        des éléments du site, quel que soit le moyen ou le procédé utilisé, est strictement interdite
                        sans l'autorisation écrite préalable de l'auteur. Le non-respect de cette interdiction constitue
                        une contrefaçon pouvant engager la responsabilité civile et pénale du contrefacteur.
                    </p>
                </section>

                <section class="space-y-3">
                    <h2 class="font-krona text-xl sm:text-2xl text-ink border-b border-molten/20 pb-2">
                        5. Limitation de responsabilité
                    </h2>
                    <p>
                        L'éditeur s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce
                        site. Toutefois, il ne saurait être tenu pour responsable des omissions, des inexactitudes ou
                        des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires
                        qui lui fournissent ces informations.
                    </p>
                    <p>
                        Les informations données sur le site le sont à titre indicatif et ne dispensent pas d'un avis
                        médical ou d'un suivi de santé personnalisé en amont de toute pratique sportive intense.
                    </p>
                </section>

            </div>

            <div class="mt-12 flex justify-center">
                <RouterLink to="/"
                    class="inline-block bg-molten text-ink font-zalando px-6 py-2.5 rounded-xl font-medium text-lg shadow-md hover:scale-105 transition-transform">
                    Retour à l'accueil
                </RouterLink>
            </div>

        </div>
    </div>
</template>