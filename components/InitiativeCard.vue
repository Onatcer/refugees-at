<template>
  <div>

    <div class="rounded-lg hover:shadow-xl transition shadow-lg overflow-hidden flex h-full flex-col">
      <NuxtLink as="div" :to="'/initiatives/' + initiative.slug">

        <div class="flex-shrink-0">
          <img v-if="initiative.logo" class="h-48 w-full object-cover" :src="initiative.logo" alt=""/>
          <div v-else
               class="bg-gradient-to-br to-yellow-600 from-yellow-300 h-48 w-full px-12 flex flex-wrap relative content-center space-y-4">
            <p class="w-full text-2xl tracking-wide text-white text-center font-bold" style="
                  text-shadow: 0 4px 8px rgba(0,0,0,0.62), 0 0 12px rgba(0,0,0,0.28);">
              {{ initiative.name }}
            </p>
            <div class="w-full flex flex-wrap gap-y-4 justify-center items-center">
              <div v-if="initiative.type && initiative.type.includes('donations')"
                   class="px-4 mx-auto py-1 bg-white rounded-full shadow-lg text-gray-700 font-semibold flex items-center space-x-2">
                <CashIcon class="w-5 h-5 inline-block"></CashIcon>
                <span class="text-sm">Spendenaktion</span>
              </div>
              <div v-if="initiative.type && initiative.type.includes('commodity-contributions')"
                   class="px-4 mx-auto py-1 bg-white rounded-full shadow-lg text-gray-700 font-semibold flex items-center space-x-2">
                <TruckIcon class="w-5 h-5 inline-block"></TruckIcon>
                <span class="text-sm">Sachspenden</span>
              </div>
              <div v-if="initiative.type && initiative.type.includes('accommodation')"
                   class="px-4 mx-auto py-1 bg-white rounded-full shadow-lg text-gray-700 font-semibold flex items-center space-x-2">
                <HomeIcon class="w-5 h-5 inline-block"></HomeIcon>
                <span class="text-sm">Unterkunft</span>
              </div>
              <div v-if="initiative.type && initiative.type.includes('participate')"
                   class="px-4 mx-auto py-1 bg-white rounded-full shadow-lg text-gray-700 font-semibold flex items-center space-x-2">
                <HandIcon class="w-5 h-5 inline-block"></HandIcon>
                <span class="text-sm">Mithilfe</span>
              </div>

            </div>

          </div>
        </div>
      </NuxtLink>

      <div class="flex-1 bg-white px-6 pb-6 pt-4 flex flex-col justify-between">
        <div class="flex-1">
          <p class="mt-3 text-base text-gray-500">
            {{ initiative.description }}
          </p>


        </div>

        <div class="mt-6 flex items-center border-t border-gray-300 pt-4">
          <div class="flex-shrink-0">
            <NuxtLink :to="'/organizations/' + organization.slug">
              <span class="sr-only">{{ organization.name }}</span>
              <img class="h-12 w-12 rounded-full border border-gray-300 p-1 object-contain" :src="organization.logo"
                   alt=""/>
            </NuxtLink>
          </div>
          <div class="ml-4">
            <p class="text-base font-medium text-gray-500 leading-snug">
              <NuxtLink :to="'/organizations/' + organization.slug" class="hover:underline">
                {{ organization.name }}
              </NuxtLink>
            </p>
            <p class="text-base text-gray-400  leading-snug">
              {{ organization.initiatives.length }} Initiativen
            </p>

            <div class="flex space-x-1 text-sm text-gray-500">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--    </NuxtLink>-->
  </div>

</template>

<script setup>
import {CashIcon, CubeIcon, HomeIcon, TruckIcon, HandIcon} from '@heroicons/vue/solid/index.js'

import {defineProps} from "vue";
import {Initiative} from "../pages/organizations/useOrganizationStore";
import {Organization} from "../pages/organizations/useOrganizationStore";

const props = defineProps({
  initiative: Initiative,
  organization: Organization
})

</script>
