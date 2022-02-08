<template>
  <div>
    <h1> {{ titre }} </h1>
        <div class="container">
            <span> {{ iphone }}</span>
            <span> </span>
           <img src="@/assets/imgs/IphoneAccueil.jpg" alt="Iphone Pro max " >
           <button type="button" > Acheter</button>
        </div>


  </div>
</template>

<script>
export default {
    name: "Accueil",
    data() {
        return {
            titre : "Les nouveautés APPLE ",
            iphone : " Iphone 13 Pro Max"
        }
    }
}
</script>

<style>
h1{
    padding-top: 18px;
    display: flex;
    justify-content: center;
    text-transform: uppercase;
}
</style>