<template>
  <div class="map">
      <l-map> 
        <l-tileLayer>
        
        </l-tileLayer>
      </l-map>
  </div>
</template>

<script>

import { LMap, LTileLayer, } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
export default {
    name:'LeafLet',
    components:{
        LMap,
        LTileLayer,
        
    }
}
</script>

<style>
.map{
  height: 100%;
  width: 100%;
}
</style>