<template>
  <div>
      <div class="titre ">  
        <h1> {{ titre }}   </h1> 
          <img  class="mini" src="@/assets/imgs/mini.jpg" alt="Mini tablette">
      </div>

      <div class="Ipad"> 
          <img id="Ipad-mini" src="@/assets/imgs/IpadMini.jpg" alt="Mini tablette">
      </div>
     

  </div>
</template>

<script>
export default {
    name:'IpadOne',
    data() {
        return {
            titre : "iPad"
        }
    }
}
</script>

<style scoped>
h1{
font-size: 35px;
}
.titre{
    display: flex;
    flex-direction: row;
    position: relative;
    top: 400px; left: 400px;
    
    
}
.mini{
    height: 35px;
    width: 60px;
    padding-left: 10px;
}

</style>