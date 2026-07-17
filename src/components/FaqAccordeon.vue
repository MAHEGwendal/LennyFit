<template>
    <div class="bg-moon py-10 px-4">
        <div class="max-w-7xl mx-auto bg-moon border border-black/10 rounded-[2.5rem] p-6 md:p-10 shadow-sm">
            <h2 class="font-krona text-4xl md:text-5xl text-ink text-center mb-10 tracking-tight">
                FAQ
            </h2>
            <div class="space-y-1">
                <div v-for="(item, index) in items" :key="index" class="border-b border-black/5 last:border-0">
                    <button @click="toggleItem(index)"
                        class="w-full flex items-center justify-between text-left py-6 px-4 md:px-6 bg-molten/10 hover:bg-molten/20 transition-all duration-300 cursor-pointer"
                        :class="activeIndex === index ? 'rounded-t-xl' : 'rounded-xl'"
                        :aria-expanded="activeIndex === index" :aria-controls="`faq-panel-${index}`"
                        :id="`faq-button-${index}`">
                        <span class="font-zalando font-medium text-base md:text-xl text-ink pr-4 leading-snug">
                            {{ item.question }}
                        </span>
                        <svg class="w-6 h-6 md:w-8 md:h-8 text-ink shrink-0 transform transition-transform duration-300 ease-in-out"
                            :class="{ 'rotate-180': activeIndex === index }" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7">
                            </path>
                        </svg>
                    </button>
                    <div class="grid transition-all duration-300 ease-in-out"
                        :class="[activeIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0']">
                        <div class="overflow-hidden">
                            <div
                                class="font-zalando text-sm md:text-base text-ink/80 px-6 pb-6 pt-2 leading-relaxed bg-molten/10 rounded-b-xl">
                                {{ item.answer }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
    items: {
        type: Array,
        required: true
    }
})

const activeIndex = ref(null)

const toggleItem = (index) => {
    activeIndex.value = activeIndex.value === index ? null : index
}
</script>