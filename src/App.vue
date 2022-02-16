<template>
  <!-- <div class="alert">
    <strong>Notice:</strong> Our website is actively being developed. Should you
    see broke code visit our
    <a href="#"><font-awesome-icon icon="fa-brands fa-github" /> Github</a>
  </div> -->

  <!-- Begin Navbar -->
  <div id="header">
    <Header></Header>
  </div>

  <!-- <div class="footer">
    <a href="https://github.com/Indiana-Crossroads-Of-America/website"
      >I:COA Community</a
    >
  </div> -->
  <router-view />
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "app",
  components: {
    Header,
  },
  // created() {
  //   document.title = "I:COA - Community Site";
  //   console.log(
  //     "I:COA NGINX \n Channel: Public (Served via http://indianacrossroadsofamerica.com/dist) \n Developed by: Julian & Ross https://rlmtech.xyz"
  //   );
  // },
};
</script>

<!-- ALERT CSS -->
<style>
.alert {
  padding: 10px;
  background-color: #f44336;
  color: white;
}

.closebtn {
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
}

.closebtn:hover {
  color: black;
}

footer {
  text-align: center;
  padding: 3px;
  background-color: white;
  color: white;
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: black;
  text-align: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background-color: white;
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
