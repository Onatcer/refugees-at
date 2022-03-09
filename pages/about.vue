<!-- This example requires Tailwind CSS v2.0+ -->
<template>

  <div class="relative bg-gray-50">

    <div
        class="max-w-3xl py-12 mx-auto px-4 sm:px-6 lg:px-8 relative prose lg:prose-lg"
        >


      <h2>About</h2>
      <p>refugees.at wurde im Sommer 2015 ins Leben gerufen um den aktuellen Bedarf an diversen Artikeln an den Bahnhöfen in Wien
      etwas übersichtlicher darzustellen. 2022 wurde die Website wiederbelebt um eine Übersicht über Initiativen zu geben welche sich im
        Bereich der Flüchtlingshilfe sowie Flüchtlingsbetreuung engagieren.
      </p>


      <h2>Impressum</h2>

      <p>
        Gregor Vostrak <br>

        Unternehmensgegenstand: Dienstleistungen in der automatischen Datenverarbeitung und Informationstechnik<br>

        UID-Nr.: ATU73800728<br>

        Sitz: Türkenstraße 19/1B, 1090 Wien, Österreich<br>

        Mail: gregor /at/ vostrak /dot/ at<br>

        Telefonnummer: /plus/ 436801111642<br>

      </p>
    </div>

  </div>

</template>

<script setup lang="ts">

import {getAllInitiatives, organizations} from "./organizations/useOrganizationStore";
import {CashIcon, TruckIcon,
  HomeIcon,
  HandIcon} from "@heroicons/vue/outline/index.js";

definePageMeta({
  layout: "default",
});


const organizationsCount = organizations.length
const initiativesCount = getAllInitiatives().length

</script>