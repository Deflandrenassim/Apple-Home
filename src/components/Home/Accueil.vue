<template>
  <div>
    <h1> {{ titre }} </h1>
        <div class="container">
           <img src="@/assets/imgs/ipadPro.png" alt="Iphone Pro max " >
        </div>


  </div>
</template>

<script>
export default {
    name: "Accueil",
    data() {
        return {
            titre : "Les nouveautés APPLE "
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