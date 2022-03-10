<!-- This example requires Tailwind CSS v2.0+ -->
<template>
      <div>
        <!-- Hero card -->
        <div class="relative">
          <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div class="absolute inset-0">
                <img class="h-full w-full object-cover" src="https://images.pexels.com/photos/5914775/pexels-photo-5914775.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="People working on laptops" />
                <div class="absolute inset-0 bg-yellow-700 mix-blend-multiply" />
              </div>
              <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl pb-5">
                  <span class="block text-white underline underline-offset-8 decoration-yellow-400">Du möchtest helfen?</span>
                </h1>
                <p class="mt-6 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl">Refugees.at bietet eine Übersicht über Organisationen und Initiativen welche sich im Zuge der Flüchtlingshilfe sowie Flüchtlingsbetreuung engagieren.</p>
                <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                    <NuxtLink to="/categories/participate" class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-900 bg-white hover:bg-yellow-50 sm:px-8">Aktiv werden</NuxtLink>
                    <NuxtLink to="/categories/donations"  class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-900 bg-yellow-400 sm:px-8">Spenden</NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gray-100">
          <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <p class="text-center text-xl font-semibold pb-2 text-gray-500 tracking-wide">Kategorien</p>
            <div class="mt-6 grid grid-cols-2 gap-8 lg:grid-cols-4">

              <NuxtLink :to="'/categories/donations'" class="col-span-1 flex flex-wrap justify-center md:col-span-2 lg:col-span-1 bg-white hover:shadow-xl transition px-6 md:px-12 py-6 rounded-lg shadow-lg">
                <CashIcon class="w-12 h-12 text-yellow-400 block w-full"></CashIcon>

                <h3 class="w-full text-center font-semibold text-base md:text-xl tracking-wide pt-1 text-gray-700">Spenden</h3>
              </NuxtLink>
              <NuxtLink :to="'/categories/participate'" class="col-span-1 flex flex-wrap justify-center md:col-span-2 lg:col-span-1 bg-white hover:shadow-xl transition px-6 md:px-12 py-6 rounded-lg shadow-lg">
                <HandIcon class="w-12 h-12 text-yellow-400 block w-full"></HandIcon>

                <h3 class="w-full text-center font-semibold text-base md:text-xl tracking-wide pt-1 text-gray-700">Mitmachen</h3>
              </NuxtLink>
              <NuxtLink :to="'/categories/commodity-contributions'" class="col-span-1 flex flex-wrap justify-center md:col-span-2 lg:col-span-1 bg-white hover:shadow-xl transition ppx-6 md:x-12 py-6 rounded-lg shadow-lg">
                <TruckIcon class="w-12 h-12 text-yellow-400 block w-full"></TruckIcon>
                <h3 class="w-full text-center font-semibold text-base md:text-xl tracking-wide pt-1 text-gray-700">Sachspenden</h3>
              </NuxtLink>
              <NuxtLink :to="'/categories/accommodation'" class="col-span-1 flex flex-wrap justify-center md:col-span-2 lg:col-span-1 bg-white hover:shadow-xl transition px-6 md:px-12 py-6 rounded-lg shadow-lg">
                <HomeIcon class="w-12 h-12 text-yellow-400 block w-full"></HomeIcon>
                <h3 class="w-full text-center font-semibold text-base md:text-xl tracking-wide pt-1 text-gray-700">Unterkunft</h3>
              </NuxtLink>

            </div>
          </div>
        </div>

        <!-- Logo cloud -->
        <div class="bg-gray-100 pb-10">
          <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <p class="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">Überblick über {{ organizationsCount }} Organisationen und {{ initiativesCount }} Initiativen</p>
            <div class="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
              <NuxtLink :to="'/organizations/' + organization.slug" v-for="organization in organizations" class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 bg-white px-12 py-6 rounded-lg shadow-lg">
                <img class="h-12 object-contain" :src="organization.logo" alt="Tuple" />
              </NuxtLink>
            </div>

          </div>



        </div>

      </div>

</template>

<script setup lang="ts">

import {getAllInitiatives, organizations} from "./organizations/useOrganizationStore";
import {CashIcon, TruckIcon,
  HomeIcon,
  HandIcon} from "@heroicons/vue/outline/index.js";
import {useMeta} from "#meta";

definePageMeta({
  layout: "default",
});
import ogImage from '../public/og-image.png';

useMeta({
  'title': 'Refugees.at - Du möchtest helfen?',
  meta: [
    { name: 'description', content: 'Refugees.at bietet eine Übersicht über Organisationen und Initiativen welche sich im Zuge der Flüchtlingshilfe sowie Flüchtlingsbetreuung engagieren.'},
    { name: 'og:image', content: 'https://refugees.at/' + ogImage },
    { name: 'twitter:card', content: 'summary_large_image' }
  ]
});


const organizationsCount = organizations.length
const initiativesCount = getAllInitiatives().length

</script>