import { ref } from 'vue'

const KEY = 'cookie-consent'
const MAX_AGE = 60 * 60 * 24 * 182 // ~6 mois, durée recommandée par la CNIL
const consent = ref(null) // null | 'accepted' | 'refused'

function read() {
    const match = document.cookie.match(new RegExp('(?:^|; )' + KEY + '=([^;]*)'))
    const value = match ? decodeURIComponent(match[1]) : null
    return value === 'accepted' || value === 'refused' ? value : null
}

function write(value) {
    const secure = location.protocol === 'https:' ? '; Secure' : ''
    document.cookie = `${KEY}=${value}; max-age=${MAX_AGE}; path=/; SameSite=Lax${secure}`
}

function remove() {
    document.cookie = `${KEY}=; max-age=0; path=/`
}

export function useCookieConsent() {
    const load = () => {
        consent.value = read()
    }
    const set = (value) => {
        consent.value = value
        write(value)
    }

    return {
        consent,
        load,
        accept: () => set('accepted'),
        refuse: () => set('refused'),
        reset: () => {
            consent.value = null
            remove()
        },
    }
}