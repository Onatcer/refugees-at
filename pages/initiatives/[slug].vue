<script setup lang="ts">
import {useRoute} from "nuxt3/app";
import {organizations, getOrganizationForInitiative} from "../organizations/useOrganizationStore";
import {CashIcon, ExternalLinkIcon} from '@heroicons/vue/solid/index.js'
// import Markdown from 'vue3-markdown-it';
import { Marked } from '@ts-stack/markdown';
import {
  computed,
  nextTick,
  onMounted,
  ref
} from 'vue'

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
  }, 100)
})


</script>

<template>
<div>


    <div class="relative bg-gray-50">

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative bg-gray-50">
        <div class="sm:flex sm:items-start sm:space-x-5">
          <div class="sm:flex-1 sm:min-w-0 sm:flex sm:justify-end sm:space-x-6 py-8">
            <div class="sm:hidden md:block min-w-0 flex-1 ">
              <h1 class="text-3xl font-bold text-gray-900 truncate">
                {{ initiative.name }}
              </h1>
              <h2 class="test-base text-gray-600 pt-1 max-w-xl">
                {{ initiative.description }}
              </h2>
            </div>
            <div class="flex items-center">
              <a
                  :href="initiative.website"
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
      </div>
      <div
          v-if="contentHtml"
          class="max-w-3xl py-12 mx-auto px-4 sm:px-6 lg:px-8 relative prose lg:prose-lg"
          v-html="contentHtml"></div>


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
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative bg-white py-12 md:flex items-center space-x-6">

    <div class="flex">
      <img class="h-64 w-64 shadow-xl rounded-full ring-4 ring-white sm:h-32 sm:w-32 bg-white object-contain p-4"
           :src="getOrganizationForInitiative(initiative).logo" alt=""/>
    </div>
    <div>
      <h3 class="text-3xl font-bold text-gray-900">Über die Organisation "{{
          getOrganizationForInitiative(initiative).name
        }}"</h3>

      <p class="mt-2">{{
          getOrganizationForInitiative(initiative).description
        }}</p>

      <p class="mt-2">
        <strong>Website: </strong>
        <a class="text-blue-500 hover:text-blue-600 transition font-bold" :href="getOrganizationForInitiative(initiative).website">{{ getOrganizationForInitiative(initiative).website }}</a>
        </p>


    </div>


  </div>

</div>

</template>