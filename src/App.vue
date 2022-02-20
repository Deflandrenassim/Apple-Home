<template>
  <div>
     <nav class="Navbar">
       <i class=" fab fa-apple ">  </i>
        <router-link to="/" class="choix"> <i class="fa-solid fa-house"></i>  </router-link> 
        <router-link to="/Iphone" class="choix"> <i class="fa-solid fa-mobile-screen-button"></i> </router-link> 
        <router-link to="/Ipad" class="choix"> <i class="fa-solid fa-tablet-screen-button"></i> </router-link> 
        <router-link to="/Mac" class="choix"> <i class="fa-solid fa-desktop"></i> </router-link> 
        <router-link to="/Map" class="choix"> <i class="fa-solid fa-map-location-dot"></i> </router-link> 
        <hr>
        
      </nav>
    <transition name="fade" mode="out-in">
    <router-view/>
    </transition>
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
  flex-wrap: wrap;
  height: 5vh;
  background-color: rgb(250, 250, 255);
  color : white;
}
.Navbar{
  display: flex;
  justify-content: center;
  padding-right: 15PX;
  background-color:rgb(51 51 51);
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
.fa-apple{
  padding-top: 20px;
  padding-right: 20px;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateX(2em)
}
.fade-enter-active, .fade-leave-active{
  transition: all .3s ease;
}
.fa-solid, .fab {
  font-size: 25px;

}


</style>


