<template>
  <div>
      <h1 class="animate__animated animate__flipInX" > {{ titre }}</h1>
      <div class="position">

      
        <carousel-3d 
        :autoplay="true"
        :height="350"
        :width="700"
        :border="1"
        >
          <slide :index="0">
            <img src="@/assets/imgs/mac1.png" alt="Mac book m1 ">
          </slide>
          <slide :index="1">
          <img src="@/assets/imgs/imac1.png" alt=" I mac ">
          </slide>
          <slide :index="2">
             <img src="@/assets/imgs/mac2.png" alt=" Macbook ">
          </slide>
          <slide :index="3">
             <img src="@/assets/imgs/puceM1.png" alt=" Puce M1 APPLE ">
          </slide>
          <slide :index="4">
             <img src="@/assets/imgs/apple.png" alt="">
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
  },
  data() {
    return {
        titre : 'Voici notre GAMME Macbook'
    }
  }

}
</script>

<style>
h1{
  color : grey;
}
img{
  cursor: pointer;
}
.position{
  margin-top: 8%;
}
</style>