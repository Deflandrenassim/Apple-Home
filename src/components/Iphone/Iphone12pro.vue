<template>
  <div class="flex">
    <!-- IPHONE 1 -->
    <div class="container">
      <div class="container-iphone">
        <img class="iphone12" src="@/assets/imgs/Iphone13pro.jpg" alt="" />
        <img class="color" src="@/assets/icones/color12pro.png" alt="" />
        <span class="nvx"> Nouveau </span>
        <h1>Iphone 13 pro</h1>
        <button class="acheter">Acheter</button>
        
        <img id="icone" src="@/assets/icones/icone12pro.png" />
        <span id="titre"> Système de photo pro</span>
        <span id="sous-titre"
          >Téléobjectif, grand angle et ultra grand-angle</span
        >
        <img id="icone"  src="@/assets/icones/A15.png" />
        <span id="titre"> Puce A15 Bionic </span>
        <span id="sous-titre"> La plus rapide des puce de smartphone</span>
      </div>
    </div>
    <!-- IPHONE 2 -->
    <div class="container">
      <div class="container-iphone">
        <img class="iphone12" src="@/assets/imgs/iphone12pro.jpg" alt="" />
        <img class="color" src="@/assets/icones/color12pro.png" alt="" />
        <span class="nvx"> Nouveau </span>
        <h1>Iphone 12 pro</h1>
        <button class="acheter">Acheter</button>
        
        <img id="icone" src="@/assets/icones/icone12pro.png" />
        <span id="titre"> Système de photo pro</span>
        <span id="sous-titre"
          >Téléobjectif, grand angle et ultra grand-angle</span>
        <img id="icone" src="@/assets/icones/A15.png" />
        <span id="titre"> Puce A15 Bionic </span>
        <span id="sous-titre"> La plus rapide des puce de smartphone</span>
      </div>
    </div>

    <!-- IPHONE 3 -->
    <div class="container">
      <div class="container-iphone">
        <img class="iphone12" src="@/assets/imgs/IphoneSe.jpg" alt="" />
        <img class="color" src="@/assets/icones/color12pro.png" alt="" />
        <span class="nvx"> Nouveau </span>
        <h1>Iphone SE </h1>
        <button class="acheter">Acheter</button>
        
        <img  id="icone" src="@/assets/icones/icone12pro.png" />
        <span id="titre"> Système de photo pro</span>
        <span id="sous-titre"
          >Téléobjectif, grand angle et ultra grand-angle</span
        >
        <img id="icone" src="@/assets/icones/A15.png" />
        <span id="titre"> Puce A15 Bionic </span>
        <span id="sous-titre"> La plus rapide des puce de smartphone</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Iphone12pro",
};
</script>

<style scoped>
.flex {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
 
}
.iphone12 {
  height: 300px;
  width: 185px;
  cursor:pointer;
}

#icone{
    padding-top: 10px;
    height: 45px;
    width: 40px;
}
.container-iphone {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 20px;
  align-items: center;
}

h1{
    padding-top: 10px;;
    padding-bottom: 15px;
}
.color {
  height: 20px;
  width: 100px;
}
#titre {
  font-size: 20px;
  color: black;
  padding-top: 10px;
}
#sous-titre {
  font-size: 15px;
  color: rgb(117, 115, 115);
}
.nvx {
  padding-top: 10px;
  color: #bf4800;
}
.button {
  padding-top: 10px;
  padding-bottom: 17px;
}

.acheter {
  height: 30px;
  width: 70px;
  background-color: #06c;
  border-radius: 50px;
  cursor: pointer;
  color: white;
}
</style>