<template>
  <div>
    <home-iphone />
    <iphone12pro />
  </div>
</template>

<script>
import Iphone12pro from '../components/Iphone/Iphone12pro.vue'
import  HomeIphone from '../components/Iphone/HomeIphone.vue'
export default {
    name: 'Iphone', 
    components: {
      HomeIphone,
      Iphone12pro
    }

}
</script>

<style>

</style>

