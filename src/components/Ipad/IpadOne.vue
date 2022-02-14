<template>
  <div>
      <div class="Ipad"> 
      <h1 class="animate__animated animate__bounce"> Nouveau {{ titre }} </h1>
        <h3> {{ nouveau }}</h3>
          <img id="Ipad-mini" src="@/assets/imgs/IpadMini.jpg" alt="Mini tablette">
      </div>

     

  </div>
</template>

<script>
export default {
    name:'IpadOne',
    data() {
        return {
            titre : "iPad Mini",
            nouveau : "Nouveau est robuste"

        }
    }
}
</script>

<style scoped>

h1{
    display: flex;
    flex-direction: center;
    font-size: 35px;
    letter-spacing: 4px;
    position: absolute;
    top: 10%; left: 37%;
}
h3{
    font-size: 25px;
    position: absolute;
    top: 19%; left: 42%;
    
}


#Ipad-mini{
    height: 30%;
    Width: 100%;
}

</style>