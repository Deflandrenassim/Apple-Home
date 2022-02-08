<template>
<div>
  <Accueil />
  <Cadeau />
</div>
</template>

<script>
import Accueil from '../components/Home/Accueil.vue'
import Cadeau from '../components/Home/Cadeau.vue'

  export default {
    name: 'Home',

    components: {
     Accueil,
     Cadeau 
   }
  }
</script>
