<script setup lang="ts">
import {useRoute} from "nuxt3/app";
import {
  organizations,
  getNameForCategory,
  getOrganizationForInitiative,
  getInitiativesForType
} from "../organizations/useOrganizationStore";
import {CashIcon, ExternalLinkIcon, HandIcon,
  TruckIcon,
  HomeIcon,
} from '@heroicons/vue/solid/index.js'
// import Markdown from 'vue3-markdown-it';
import { Marked } from '@ts-stack/markdown';
import {
  computed,
  nextTick,
  onMounted,
  ref
} from 'vue'
import InitiativeCard from "~/components/InitiativeCard.vue";

const route = useRoute()

const initiative = organizations.reduce((array, currentOrganization) => {
  return array.concat(currentOrganization.initiatives)
}, []).find((initiative) => {
  return initiative.slug === route.params.slug
})

const organization = organizations.find((organization) => {
  return organization.initiatives.filter((currentInitiative) => {
    return currentInitiative.slug === initiative.slug
  }).length > 0
})
// const coordinate = ref([ 16.3768922, 48.2096574])
const radius = ref(20)
const strokeWidth = ref(10)
const strokeColor = ref('red')
const fillColor = ref('white')
const zoom = ref(7)

const showMap =
    initiative.hasOwnProperty('position');

var degrees2meters = function(lon,lat) {
  var x = lon * 20037508.34 / 180;
  var y = Math.log(Math.tan((90 + lat) * Math.PI / 360)) / (Math.PI / 180);
  y = y * 20037508.34 / 180;
  return [x, y]
}

let coordinate = null

if(showMap){
  coordinate = ref(degrees2meters(initiative.position.lon, initiative.position.lat))
}

const center = ref(degrees2meters(13.7681591, 47.6607287))

var contentHtml = Marked.parse(initiative.content);

// var contentHtml = md.render(initiative.content);


onMounted(() => {
  // fix loading problem with OpenLayers
  setTimeout(()=> {
    window.dispatchEvent(new Event('resize'));
  }, 300)
})


</script>

<template>
<div>


    <div class="relative bg-gray-50">

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative bg-gray-50">
        <div class="sm:flex sm:items-start sm:space-x-5">
          <div class="sm:flex-1 sm:min-w-0 sm:flex sm:justify-end sm:space-x-6 py-10 md:py-14">
            <div class="sm:hidden md:block min-w-0 flex-1 ">
              <h1 class="font-bold text-gray-900 text-3xl">
                {{ initiative.name }}
              </h1>
              <h2 class="text-lg text-gray-600 pt-3 max-w-xl">
                {{ initiative.description }}
              </h2>


              <div>

                <div class="flex space-x-5 pt-4">
                  <NuxtLink to="/categories/donations" v-if="initiative.type && initiative.type.includes('donations')"
                            class="px-4 py-2 bg-white shadow-md hover:shadow-lg transition rounded-full text-gray-700 font-semibold flex items-center space-x-2">
                    <CashIcon class="w-5 h-5 inline-block text-yellow-400"></CashIcon>
                    <span class="text-sm">Spendenaktion</span>
                  </NuxtLink>
                  <NuxtLink to="/categories/commodity-contributions" v-if="initiative.type && initiative.type.includes('commodity-contributions')"
                            class="px-4 py-2 bg-white shadow-md hover:shadow-lg transition rounded-full text-gray-700 font-semibold flex items-center space-x-2">
                    <TruckIcon class="w-5 h-5 inline-block text-yellow-400"></TruckIcon>
                    <span class="text-sm">Sachspenden</span>
                  </NuxtLink>
                  <NuxtLink to="/categories/accommodation" v-if="initiative.type && initiative.type.includes('accommodation')"
                            class="px-4 py-2 bg-white shadow-md hover:shadow-lg transition rounded-full text-gray-700 font-semibold flex items-center space-x-2">
                    <HomeIcon class="w-5 h-5 inline-block text-yellow-400"></HomeIcon>
                    <span class="text-sm">Unterkunft</span>
                  </NuxtLink>
                  <NuxtLink to="/categories/participate" v-if="initiative.type && initiative.type.includes('participate')"
                            class="px-4 py-2 bg-white shadow-md hover:shadow-lg transition rounded-full text-gray-700 font-semibold flex items-center space-x-2">
                    <HandIcon class="w-5 h-5 inline-block text-yellow-400"></HandIcon>
                    <span class="text-sm">Mithilfe</span>
                  </NuxtLink>
                </div>

              </div>
            </div>
            <div class="flex items-center">
              <div>

              <a
                  :href="initiative.website"
                  target="_blank"
                  class="inline-flex bg-gray-700 mt-6 md:mt-0 shadow-sm transition items-center shadow-lg justify-center px-6 py-3 border border-gray-300 shadow-sm font-medium rounded-md text-white bg-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                <span>Zur Website</span>
                <ExternalLinkIcon class="ml-3 -mr-1 h-6 w-6 text-gray-300" aria-hidden="true"/>
              </a>


              </div>
            </div>

          </div>
        </div>
        <div class="hidden sm:block md:hidden mt-6 min-w-0 flex-1">
          <h1 class="text-2xl font-bold text-gray-900 truncate">
            {{ organization.name }}
          </h1>
        </div>
        <hr class="border-gray-300" v-if="contentHtml">

      </div>
      <div class="max-w-7xl mx-auto">
        <div
            v-if="contentHtml"
            class="max-w-3xl py-12 px-4 sm:px-6 lg:px-8 relative prose lg:prose-lg"
            v-html="contentHtml"></div>

      </div>


      <ol-map v-if="showMap" style="height:500px; width: 100%;">

        <ol-view ref="view" :center="center" :zoom="zoom"/>

        <ol-tile-layer>
          <ol-source-osm/>
        </ol-tile-layer>


        <ol-vector-layer>
          <ol-source-vector>
            <ol-feature>
              <ol-geom-point :coordinates="coordinate"></ol-geom-point>
              <ol-style>
                <ol-style-circle :radius="radius">
                  <ol-style-fill :color="fillColor"></ol-style-fill>
                  <ol-style-stroke :color="strokeColor" :width="strokeWidth"></ol-style-stroke>
                </ol-style-circle>
              </ol-style>
            </ol-feature>

          </ol-source-vector>

        </ol-vector-layer>


      </ol-map>

    </div>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative bg-white py-12 md:flex items-center justify-between gap-x-10">

    <div class="flex flex-shrink-0 mb-4 md:mb-0">
      <img class="h-32 md:h-42 w-32 md:w-42 shadow-xl rounded-full ring-4 ring-white sm:h-32 sm:w-32 bg-white object-contain p-4"
           :src="getOrganizationForInitiative(initiative).logo" alt=""/>
    </div>
    <div class="flex-1">
      <h3 class="text-xl font-bold text-gray-900">Über die Organisation "{{
          getOrganizationForInitiative(initiative).name
        }}"</h3>

      <p class="mt-2 text-base">{{
          getOrganizationForInitiative(initiative).description
        }}</p>

      <p class="mt-2">
        <strong>Website: </strong>
        <a class="text-blue-500 hover:text-blue-600 transition font-bold" :href="getOrganizationForInitiative(initiative).website">{{ getOrganizationForInitiative(initiative).website }}</a>
        </p>
    </div>
    <div class="flex items-center flex-shrink-0 mt-6 md:mt-0">
      <NuxtLink
          :to="'/organizations/' + organization.slug"
          class="inline-flex items-center shadow-lg justify-center px-6 py-3 border border-gray-300 shadow-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
        <span>Alle {{ organization.initiatives.length }} Initiativen anzeigen</span>
      </NuxtLink>
    </div>

  </div>

  <div class=" bg-gray-100">

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative py-12  gap-x-10">

    <div class="w-full mb-12" v-for="type in initiative.type">
      <div class="flex justify-between items-center mb-5">
        <h3 class="text-2xl font-semibold text-gray-400">Mehr Initiativen in der Kategorie <span class="text-gray-700">{{getNameForCategory(type)}}</span></h3>
        <NuxtLink
            :to="'/categories/' + type"
            class="inline-flex items-center shadow-lg justify-center px-4 py-3 border border-gray-300 shadow-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
          <span>Alle Initiativen anzeigen</span>
        </NuxtLink>
      </div>
      <div class="grid md:grid-cols-3 gap-5">
        <InitiativeCard  v-for="initiative in getInitiativesForType(type).slice(0,3)" :organization="getOrganizationForInitiative(initiative)" :initiative="initiative"></InitiativeCard>

      </div>
    </div>
  </div>

  </div>

  </div>

</template>