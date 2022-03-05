<script setup>
import {useRoute} from "nuxt3/app";
import {organizations} from "./useOrganizationStore";
import {CashIcon, ExternalLinkIcon} from '@heroicons/vue/solid'

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
      <div class="grid grid-cols-3 space-x-6 py-12">
        <div v-for="initiative in organization.initiatives" :key="initiative.slug"
        >
          <NuxtLink :to="'/initiatives/' + initiative.slug"
                    class="rounded-lg hover:shadow-xl transition shadow-lg overflow-hidden flex h-full flex-col">
            <div class="flex-shrink-0">
              <img v-if="initiative.logo" class="h-48 w-full object-cover" :src="initiative.logo" alt=""/>
              <div v-else
                   class="bg-gradient-to-br to-yellow-600 from-yellow-300 h-48 w-full p-12 space-y-4 flex flex-wrap items-center">
                <p class="w-full text-2xl tracking-wide text-white text-center font-bold text-gray-900" style="
                  text-shadow: 0 4px 8px rgba(0,0,0,0.62), 0 0 12px rgba(0,0,0,0.28);">
                  {{ initiative.name }}
                </p>
                <div v-if="initiative.type && initiative.type.includes('donations')"
                     class="px-4 mx-auto py-1 bg-white rounded-full shadow-lg text-gray-700 font-semibold flex items-center space-x-2">
                  <CashIcon class="w-5 h-5 inline-block"></CashIcon>
                  <span class="text-sm">Spendenaktion</span>
                </div>
              </div>
            </div>

            <div class="flex-1 bg-white px-6 pb-6 pt-4 flex flex-col justify-between">
              <div class="flex-1">
                <p class="text-sm font-medium text-indigo-600">
<!--                              <a :href="post.category.href" class="hover:underline">-->
<!--                                {{ initiative.title }}-->
<!--                              </a>-->
                </p>

                <p class="mt-3 text-base text-gray-500">
                  {{ initiative.description }}
                </p>


              </div>

              <div class="mt-6 flex items-center border-t border-gray-300 pt-4">
                <div class="flex-shrink-0">
                  <NuxtLink :to="'/organizations/' + organization.slug">
                    <span class="sr-only">{{ organization.name }}</span>
                    <img class="h-12 w-12 rounded-full border border-gray-300 p-1" :src="organization.logo" alt=""/>
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
          </NuxtLink>

        </div>

      </div>

    </div>


  </div>

</template>