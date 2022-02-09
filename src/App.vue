<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/staff">Staff List</router-link> |
    <router-link to="/about">About</router-link> -->
    <Header></Header>
  </div>
  <router-view />
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header,
  },
};
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

.outer-header {
  padding: 0px 10px 10px;
}

.header {
  overflow: hidden;
  background-color: #dc143c;
  padding: 15px;
}

.header-side {
  float: left;
}

.header a {
  font-weight: bold;
  color: #2c3e50;
}

.header a.router-link-exact-active {
  color: #42b983;
}
</style>
