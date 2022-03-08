<template>

  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
    <div class="text-3xl font-bold pt-6 pb-12"><span class="text-gray-500">Kategorie: </span>{{ route.params.name}} </div>

    <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-3 sm:gap-5">
      <div v-for="initiative in initiatives" :key="initiative.slug"
      >
        <InitiativeCard :initiative="initiative"
                        :organization="getOrganizationForInitiative(initiative)"></InitiativeCard>
      </div>

    </div>
  </div>

</template>

<script setup lang="ts">
import {getAllInitiatives, getOrganizationForInitiative, organizations} from "../organizations/useOrganizationStore";
import InitiativeCard from "../../components/InitiativeCard";
import {useRoute} from "nuxt3/app";

const route = useRoute()

const initiatives = getAllInitiatives().filter((initiative) => {
  return initiative.type?.includes(route.params.name)
})
</script>

<style scoped>

</style>