<template>
  <div>
    <div class="container">
     <nav class="Navbar">
       <i class="fab fa-apple"></i>
        <router-link to="/" class="choix"> Home  </router-link> 
        <router-link to="/Iphone" class="choix"> IPHONE  </router-link> 
        <router-link to="/Ipad" class="choix"> IPAD </router-link> 
        <router-link to="/Mac" class="choix"> MAC  </router-link> 
        <router-link to="/Watch" class="choix"> WATCH  </router-link> 
        <router-link to="/Airpods" class="choix"> AIRPODS </router-link> 
      </nav>

    <router-view/>
    </div>
  </div>
</template>

<script>



export default {
  name: 'App',
  components:  'Home'

};
</script>

<style>

.container{
  display: flex;
  justify-content: center;
  height: 4vh;
  background-color: rgba(92, 91, 91, 0.795);
  color : white;
}
.choix{
  
  padding: 20px;
}

</style>


