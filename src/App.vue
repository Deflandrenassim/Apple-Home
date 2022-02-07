<template>
  <div>
     <nav class="Navbar">
        <router-link to="/" class="choix"> Home  </router-link> 
        <router-link to="/Iphone" class="choix"> IPHONE  </router-link> 
        <router-link to="/Ipad" class="choix"> IPAD </router-link> 
        <router-link to="/Mac" class="choix"> MAC  </router-link> 
        <router-link to="/Watch" class="choix"> WATCH  </router-link> 
        <router-link to="/Airpods" class="choix"> AIRPODS </router-link> 
      </nav>

    <router-view/>
    </div>
  
</template>

<script>



export default {
  name: 'App',

};
</script>

<style>

.Nav{
  display: flex;
  justify-content: center;
  height: 5vh;
  background-color: rgb(50,50, 51);
  color : white;
}
.Navbar{
  display: flex;
  justify-content: center;
  background-color: black;
  color: white;
  padding-top: 10px;
}
.choix{
  color: rgb(216, 214, 214);
  text-decoration: none;
  padding: 20px;

}
.choix:hover{
  color: aliceblue;
}

</style>


