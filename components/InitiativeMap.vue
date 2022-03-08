
<script setup>

import {Initiative} from "../pages/organizations/useOrganizationStore";

const props = defineProps({
  initiative: Initiative
})

// const coordinate = ref([ 16.3768922, 48.2096574])
import {ref} from "vue";

const radius = ref(20)
const strokeWidth = ref(10)
const strokeColor = ref('red')
const fillColor = ref('white')
const zoom = ref(7)


var degrees2meters = function (lon, lat) {
  var x = lon * 20037508.34 / 180;
  var y = Math.log(Math.tan((90 + lat) * Math.PI / 360)) / (Math.PI / 180);
  y = y * 20037508.34 / 180;
  return [x, y]
}

const coordinate = ref(degrees2meters(props.initiative.position.lon, props.initiative.position.lat))
const center = ref(degrees2meters(13.7681591, 47.6607287))

</script>


<template>
  <div>
    <ol-map style="height:500px; width: 100%;">

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

</template>
