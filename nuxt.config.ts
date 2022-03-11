import {defineNuxtConfig} from 'nuxt3'
import {getAllInitiatives, organizations} from "./pages/organizations/useOrganizationStore";


const organizationRoutes = organizations.map((organization) => '/organizations/' + organization.slug)
const initiativesRoutes = getAllInitiatives().map((initiative) => '/initiatives/' + initiative.slug)
const categoryRoutes = ['donations', 'participate', 'commodity-contributions', 'accommodation'].map((category) => {
    return '/categories/' + category
})

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    modules: [
        // Using package name (recommanded usage)
        '@nuxtjs/sitemap',
        ['@nuxtjs/tailwindcss', {
            configPath: './tailwind.config.js',
        }
        ],
    ],
    generate: {
        routes: organizationRoutes.concat(initiativesRoutes).concat(categoryRoutes)
    }
    //
    // sitemap: {
    //     routes: organizationRoutes
    // }
    // Defaults options
})
