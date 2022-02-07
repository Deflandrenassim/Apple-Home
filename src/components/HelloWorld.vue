<template>
  <div class="container">
    <carousel
    :autoplay="true"
    :autoplayTimeout="3000"
    :mouse-drage="true"
    >
      <slide>
        <img class="images" src="@/assets/imgs/ipadPro.png" alt="ipad pro ">
      </slide>
      <slide>
        <img class="images" src="@/assets/imgs/iphone13pro.png" alt="ipad pro " >
      </slide>
      <slide>
        <img  class="images" src="@/assets/imgs/macbookproM1.png" alt="ipad pro " >
      </slide>
      <slide
      :autoplay="false"
      >
        <img class="images" src="@/assets/imgs/watch7.png" alt="ipad pro " >
      </slide>
    </carousel
   
    >
    
    <h1> {{ titre }}</h1>

  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
  export default {
    name: 'HelloWorld',
    components : {
      Carousel,
      Slide
    },
    data: () =>{
        return{
          titre: 'Hello World Welcome to APPLE'
        }
    }

  }
</script>
<style scoped>

.images{
  display: flex;
  justify-content: center;
  justify-content: space-around;
  height: 60px;
  cursor:pointer;
  width: 70px;
}
</style>
