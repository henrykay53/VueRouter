<template>
  <nav class="nav-bar">
    <!-- <Audi />
    <Benz />
    <Ford /> -->
    <router-link to="/">Audi</router-link>
    <router-link to="/Benz">Benz</router-link>
    <router-link to="/Ford">Ford</router-link>
  </nav>
  <router-view/>

<div class="welcome-message">
  <p class="welcome-para">Welcome to the home of my favourite cars</p>
</div>
 
  <!-- <img src="@/assets/cars/audi.jpg"> -->

</template>


<script>
// import Audi from './components/Audi.vue'
// import Benz from './components/Benz.vue'
// import Ford from './components/Ford.vue'

export default {
  name: 'App',
  // components: {
  //   Audi,
  //   Benz,
  //   Ford
  // }
  
}
</script>

<style>

* {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: black;
  width: 100vw;
  height: 100vh;
}

.welcome-para {
  color: white;
  font-size: 200px;
  
}

h1 {
  padding-top: 20px;
}



nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
