<template>
  <div>
      <div class="container">
        <div class=container-iphone>
         <img class="iphone12" src="@/assets/imgs/Iphone13pro.jpg" alt="">
         <img class="color" src="@/assets/icones/color12pro.png" alt="">
         <span class="nvx"> Nouveau </span>
         <h1> Iphone12pro </h1>
         <button class="acheter"> Acheter </button>
         <img src="@/assets/icones/icone12pro.png">
         <span> Système de photo pro</span>
         <span>Téléobjectif, grand angle et ultra grand-angle</span>
         <img src="@/assets/icones/A15.png">
        </div>

       

      </div>
  </div>
</template>

<script>
export default {
    name:'Iphone12pro'
}
</script>

<style scoped >
.iphone12{
    height: 300px;
    width: 185px;
}
.container-iphone{
    display:flex;
    justify-content: center;
    flex-direction: column;
    padding-top: 70px;
    align-items: center;
}
.color{
    height: 20px;
    width: 100px;
}
.nvx{
    color: #bf4800;
}
.acheter{
    height: 30px;
    width: 70px;
    background-color: #06c;
    border-radius: 50px;
    cursor: pointer;
    color: white;
}

</style>