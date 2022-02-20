<template>
  <l-map 
   :zoom="zoom" 
   :center="center">
    <l-tile-layer :url="url" ></l-tile-layer>
  </l-map>
</template>

<script>
import {LMap, LTileLayer,} from 'vue2-leaflet';

export default {
  components: {
    LMap,
    LTileLayer,
    
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      
      zoom: 10,
      center: [51.505, -0.159],
      markerLatLng: [51.504, -0.159]
    };
  }
}
</script>
