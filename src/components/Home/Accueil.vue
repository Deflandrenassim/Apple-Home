<template>
  <div>
    <h1>{{ titre }}</h1>
    <div class="container">
      <div class="title">{{ iphone }}</div>
      <div class="price">{{ prix }}</div>
      <div class="btn"> <button type="submit">Acheter</button></div>
     
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
      iphone: " Iphone 13 Pro Max",
      prix: "A partir de 1109 euros ",
    };
  },
};
</script>

<style>
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1{
  padding-top: 10px;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
}
.title{
    font-size: 35px;
}
.price{
    font-size:30px;
}
.my-image {
  height: 160px;
  width: 250px;
}
.btn{
    height: 55px;
    width: 70px;
    background-color: #06c;
    color: white;
   
}


</style>