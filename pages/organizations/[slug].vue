<script setup lang="ts">
import {useRoute} from "nuxt3/app";
import {organizations} from "./useOrganizationStore";
import {CashIcon, ExternalLinkIcon} from '@heroicons/vue/solid/index.js'
import InitiativeCard from "../../components/InitiativeCard";

const route = useRoute()

if (route.params.group === 'admins' && !route.params.id) {
  console.log('Warning! Make sure user is authenticated!')
}

const organization = organizations.find((organization) => {
  return organization.slug === route.params.slug
})

</script>

<template>

  <div class="relative">
    <div class="bg-gray-50 h-[400px] w-full absolute top-0">

    </div>
    <div class="overflow-hidden">
      <img class="h-32 w-full object-cover lg:h-48 blur-sm"
           src="https://images.pexels.com/photos/5914775/pexels-photo-5914775.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
           alt=""/>
    </div>
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div class="-mt-6 sm:flex sm:items-start sm:space-x-5">
        <div class="flex">
          <img class="h-24 w-24 shadow-xl rounded-full ring-4 ring-white sm:h-32 sm:w-32 bg-white object-contain p-4"
               :src="organization.logo" alt=""/>
        </div>
        <div class="mt-2 sm:flex-1 sm:min-w-0 sm:flex sm:justify-end sm:space-x-6 pl-4 pt-10 sm:pb-1">
          <div class="sm:hidden md:block min-w-0 flex-1 ">
            <h1 class="text-3xl font-bold text-gray-900 truncate">
              {{ organization.name }}
            </h1>
            <h2 class="test-base text-gray-600 pt-1 max-w-xl">
              {{ organization.description }}
            </h2>
          </div>
          <div class="flex items-center">
            <a
                :href="organization.website"
                target="_blank"

                class="inline-flex items-center shadow-lg justify-center px-6 py-3 border border-gray-300 shadow-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
              <span>Zur Website</span>
              <ExternalLinkIcon class="ml-3 -mr-1 h-6 w-6 text-gray-400" aria-hidden="true"/>
            </a>
          </div>
        </div>
      </div>
      <div class="hidden sm:block md:hidden mt-6 min-w-0 flex-1">
        <h1 class="text-2xl font-bold text-gray-900 truncate">
          {{ organization.name }}
        </h1>
      </div>
      <div class="grid grid-cols-3 gap-x-6 py-12">
        <div v-for="initiative in organization.initiatives" :key="initiative.slug"
        >
          <InitiativeCard :initiative="initiative" :organization="organization"></InitiativeCard>

        </div>

      </div>

    </div>


  </div>

</template>