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
                    <a href="#" class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-900 bg-white hover:bg-yellow-50 sm:px-8">Aktiv werden</a>
                    <a href="#" class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-900 bg-yellow-400 sm:px-8">Spenden</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Logo cloud -->
        <div class="bg-gray-100">
          <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <p class="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">Überblick über X Organisationen und Y Initiativen</p>
            <div class="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">

              <NuxtLink :to="'/organizations/' + organization.slug" v-for="organization in organizations" class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 bg-white px-12 py-6 rounded-lg shadow-lg">
                <img class="h-12 object-contain" :src="organization.logo" alt="Tuple" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

</template>

<script setup>

import {organizations} from "./organizations/useOrganizationStore";

definePageMeta({
  layout: "default",
});
</script>