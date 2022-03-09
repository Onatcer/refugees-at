<template>

  <div class="relative overflow-hidden">
    <div class="absolute top-[200px] top-0 w-full h-full bg-gray-100" />
    <div class="relative max-w-7xl mx-auto sm:px-6 lg:px-8 pb-14">

      <div class="text-3xl font-bold pt-6 pb-12"><span class="text-gray-500">Kategorie: </span>{{ getNameForCategory(route.params.name) }} </div>

      <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-3 sm:gap-5">
        <InitiativeCard v-for="initiative in initiatives" :key="initiative.slug" :initiative="initiative"
                        :organization="getOrganizationForInitiative(initiative)"></InitiativeCard>
      </div>
    </div>

  </div>

</template>

<script setup lang="ts">
import {
  getAllInitiatives, getInitiativesForType,
  getNameForCategory,
  getOrganizationForInitiative,
  organizations
} from "../organizations/useOrganizationStore";
import InitiativeCard from "../../components/InitiativeCard";
import {useRoute} from "nuxt3/app";

const route = useRoute()

const initiatives = getInitiativesForType(route.params.name)

</script>

<style scoped>

</style>