<template>
  <div>
    <h1>{{ titre }}</h1>
    <div class="container">
      <div class="title">{{ iphone }}</div>
      <div class="price">{{ prix }}</div>
      <div class="btn animate__animated animate__shakeX" > <button type="submit">Acheter</button></div>
     
      <div>
        <img
          class="my-image"
          src="@/assets/imgs/IphoneAccueil.jpg"
          alt="Iphone Pro max "
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Accueil",
  data() {
    return {
      titre: "La nouveauté APPLE ",
      iphone: " iPhone 13 Pro Max",
      prix: "A partir de 1109 euros ",
      info: "L'infiniment Pro."
    };
  },
};
</script>

<style>
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 19px; 
}
h1{
  padding-top: 1Opx;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
}
.title{
    font-size: 35px;
}
.price{
    font-size:25px;
    padding: 10px;
}

.my-image {
  height: 80vh;
  width: 80vh;
}

.btn{
    display: flex;
    justify-content: center;
    align-content: center;
    height: 40px;
    width: 70px;
    border-radius: 30px 30px ;
    background-color: #06c;
    color: white;
    
}
.btn:hover{
    background-color: rgb(4, 90, 177);
}


</style>