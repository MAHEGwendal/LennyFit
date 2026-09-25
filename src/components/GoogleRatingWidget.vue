<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Voir nos avis Google"
    class="flex items-center gap-4 bg-moon rounded-full px-6 py-3 w-full max-w-[85%] hover:scale-105 transition-transform duration-200"
  >
    <svg class="w-10 h-10 shrink-0" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path fill="#FFC107" d="M43.6 20.5H42V20.4H24v7.2h11.3C33.6 32 29.2 35 24 35c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.1-5.1C33.7 5.8 29.1 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.4-.4-3.5z"/>
      <path fill="#FF3D00" d="M6.3 14.7l5.9 4.3C13.7 15.3 18.5 12 24 12c3.1 0 5.9 1.2 8 3.1l5.1-5.1C33.7 5.8 29.1 4 24 4 16.4 4 9.8 8.3 6.3 14.7z"/>
      <path fill="#4CAF50" d="M24 44c5.1 0 9.7-1.7 13.3-4.6l-6.1-5.2C29.3 35.6 26.8 36.5 24 36.5c-5.2 0-9.6-3-11.3-7.3l-5.9 4.6C10.1 39.6 16.6 44 24 44z"/>
      <path fill="#1976D2" d="M43.6 20.5H42V20.4H24v7.2h11.3c-.8 2.3-2.3 4.2-4.2 5.5l6.1 5.2C40.5 35.4 44 30.2 44 24c0-1.2-.1-2.4-.4-3.5z"/>
    </svg>

    <div class="flex flex-col gap-0.5">
      <span class="font-zalando text-[10px] font-bold tracking-wider text-ink/50 uppercase">
        Avis Google
      </span>

      <div class="flex items-center gap-2">
        <span class="font-zalando text-xl font-extrabold text-ink leading-none">
          {{ rating.toFixed(1) }}
        </span>
        <div class="flex gap-0.5 text-molten">
          <svg
            v-for="(type, i) in starTypes"
            :key="i"
            class="w-4 h-4"
            viewBox="0 0 24 24"
          >
            <defs v-if="type === 'half'">
              <linearGradient :id="`half-star-${i}`" x1="0" x2="1" y1="0" y2="0">
                <stop offset="50%" stop-color="currentColor" />
                <stop offset="50%" stop-color="#E0E0E5" />
              </linearGradient>
            </defs>
            <path
              :fill="type === 'full' ? 'currentColor' : type === 'half' ? `url(#half-star-${i})` : '#E0E0E5'"
              d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.8-6.2 3.8 1.6-7L2 9.2l7.1-.6z"
            />
          </svg>
        </div>
      </div>

      <span class="font-zalando text-xs text-ink/40">
        {{ reviewCount }} avis
      </span>
    </div>
  </a>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  rating: { type: Number, default: 5 },
  reviewCount: { type: Number, default: 1 },
  link: { type: String, default: 'https://www.google.com/maps/place/LennyFit/@47.2383201,-1.6429067,12z/data=!3m1!4b1!4m6!3m5!1s0x2a6ab5f8560c691:0x1f5a6d95a661c95f!8m2!3d47.2382332!4d-1.5603346!16s%2Fg%2F11zxq84_jt?entry=ttu&g_ep=EgoyMDI2MDkyMS4wIKXMDSoASAFQAw%3D%3D' },
})

const starTypes = computed(() => {
  const full = Math.floor(props.rating)
  const remainder = props.rating - full
  const hasHalf = remainder >= 0.25 && remainder < 0.75
  const roundedFull = remainder >= 0.75 ? full + 1 : full

  const arr = []
  for (let i = 0; i < 5; i++) {
    if (i < roundedFull) arr.push('full')
    else if (i === roundedFull && hasHalf) arr.push('half')
    else arr.push('empty')
  }
  return arr
})
</script>
