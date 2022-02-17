<template>
  <div>
      <h1> Hello mac </h1>
        <carousel-3d 
        :autoplayTimeOut="5000"
        :height="350"
        :width="700"
        >
          <slide :index="0">
            <img src="@/assets/imgs/mac1.png" alt="">
          </slide>
          <slide :index="1">
          <img src="@/assets/imgs/mac1.png" alt="">
          </slide>
          <slide :index="2">
             <img src="@/assets/imgs/mac1.png" alt="">
          </slide>
          <slide :index="3">
             <img src="@/assets/imgs/mac1.png" alt="">
          </slide>
          <slide :index="4">
             <img src="@/assets/imgs/mac1.png" alt="">
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
img {
	height: 100%;
  width: 100%;
  display:block;
}
</style>