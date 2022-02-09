<template>
  <div>

      <div class="background">
          <h1> {{cadeau }}</h1>
        <div class="my-cadeau">
            <img
          class="my-image"
          src="@/assets/imgs/cadeau.png"
          alt="Iphone Pro max "
        />
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'Cadeau',
    data() {
        return {
            cadeau : "cadeau de dernière minute, Vous êtes piles a l heure"
        }
    }

}
</script>

<style scoped>
.background{
    height: 350px;
    width: 100%;
    background: #34283c;
}
h1{
    color: white;
    font-size: 40;
}
.my-cadeau{
    display:flex;
    justify-content: center;
}
.my-image{
   
    height: 275px;
    width: 355px;
    color: white; 

}
</style>