<template>
  <nav class="nav-bar">
    
    <router-link to="/">Home</router-link>
    <router-link to="/Audi">Audi</router-link>
    <router-link to="/Benz">Benz</router-link>
    <router-link to="/Ford">Ford</router-link>
  </nav>
  <router-view/>

</template>


<script>


export default {
  name: 'App', 
}

</script>

<style>

* {
  box-sizing: border-box;
  margin: 0;
  overflow: none;
}



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background: black; */
  /* width: 100vw; */
  height: 100vh;
}



h1 {
  padding-top: 20px;
}

nav  {
  color: gold !important;
  margin-top: 30px;
}


nav a {
  font-weight: bold;
  color: #2c3e50;
  padding-left: 50px;
  /* margin-right: 80px; */
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
