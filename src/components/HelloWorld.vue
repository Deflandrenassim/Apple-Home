<template>
  <div>
    <carousel>
      <slide>
        <img class="images" src="@/assets/imgs/ipadPro.png" alt="ipad pro " >
      </slide>
      <slide>
        <img src="@/assets/imgs/iphone13pro.png" alt="ipad pro " >
      </slide>
      <slide>
        <img src="@/assets/imgs/macbookproM1.png" alt="ipad pro " >
      </slide>
      <slide>
        <img src="@/assets/imgs/watch7.png" alt="ipad pro " >
      </slide>
    </carousel>
    
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
<style>
.img{
  height: 40px;
  width: 40px;
}
</style>
