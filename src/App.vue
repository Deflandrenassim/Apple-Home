<template>
  <div>
     <nav class="Navbar">
       <i class="fab fa-apple">  </i>
        <router-link to="/" class="choix"> Home  </router-link> 
        <router-link to="/Iphone" class="choix"> IPHONE  </router-link> 
        <router-link to="/Ipad" class="choix"> IPAD </router-link> 
        <router-link to="/Mac" class="choix"> MAC  </router-link> 
        <router-link to="/Map" class="choix"> MAPS </router-link> 
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


</style>


