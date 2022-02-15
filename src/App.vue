<template>
  <div id="nav">
     <router-link to="/">Home</router-link> |
    <router-link to="/staff">Staff List</router-link> |
    <router-link to="/about">About</router-link> 
  </div>
  <router-view />
</template>

// Defines title (Global) 
<script>
    export default {
        name: 'app',
        created () {
            document.title = "I:COA - Community Site";
        }
    }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background-color: #5bbbcb;
}

/* #nav { 
 padding: 30px; 
} */

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
