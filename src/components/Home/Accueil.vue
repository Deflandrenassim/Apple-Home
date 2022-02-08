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
  padding-top: 10px; 
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
    font-size:25px;
}

.my-image {
  height: 75vh;
  width: 80vh;
}
.btn{
    display: flex;
    justify-content: center;
    align-content: center;
    height: 45px;
    width: 70px;
    border-radius: 30px 30px ;
    background-color: #06c;
    color: white;
   
}
.btn:hover{
    background-color: rgb(4, 90, 177);
}


</style>