<template>
  <div>
      <h1> Hello mac </h1>
      <div class="position">

      
        <carousel-3d 
        :autoplay="true"
        :height="350"
        :width="700"
        :border="1"
        >
          <slide :index="0">
            <img src="@/assets/imgs/mac1.png" alt="">
          </slide>
          <slide :index="1">
          <img src="@/assets/imgs/imac1.png" alt="">
          </slide>
          <slide :index="2">
             <img src="@/assets/imgs/mac2.png" alt="">
          </slide>
          <slide :index="3">
             <img src="@/assets/imgs/pucem1.png" alt="">
          </slide>
          <slide :index="4">
             <img src="@/assets/imgs/mac1.png" alt="">
          </slide>
        </carousel-3d>
        </div>
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
img{
  cursor: pointer;
}
.position{
  margin-top: 8%;
}
</style>