import {defineNuxtConfig} from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    modules: [
        // Using package name (recommanded usage)

        ['@nuxtjs/tailwindcss', {
            configPath: './tailwind.config.js',
        }
        ],
    ],
    // Defaults options
})
