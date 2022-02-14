<template>
  <div>
        <h1 class=" animate__animated animate__slideInRight"> {{ titre }}</h1>
  </div>
</template>

<script>
export default {
    name: 'HomeIphone',
    data() {
        return {
            titre: ' Selection des derniers Iphone'
        }
    }
}
</script>

<style>
h1{
    padding-top: 20px;
}
</style>