<template>
  <div>
      <h1> Hello mac </h1>
        <carousel-3d>
          <slide :index="0">
            <img src="@/assets/imgs/iphone12pro.jpg" alt="">
          </slide>
          <slide :index="1">
          <img src="@/assets/imgs/iphone12pro.jpg" alt="">
          </slide>
          <slide :index="2">
             <img src="@/assets/imgs/cadeau.png" alt="">
          </slide>
        </carousel-3d>
  </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'
export default {
    name: 'Macbook',
    components: {
    Carousel3d,
    Slide
  }

}
</script>

<style>

</style>