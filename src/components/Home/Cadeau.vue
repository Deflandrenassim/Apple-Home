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
            cadeau : "n cadeau de dernière minute, Vous êtes piles a l heure"
        }
    }

}
</script>

<style scoped>
.background{
  
    width: 100%;
    background: #34283c;
}
.my-image{
    height: 375px;
    width: 255px;
    filter : blur();

}
</style>