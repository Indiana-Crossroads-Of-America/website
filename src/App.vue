
<!-- Begin VUE -->
<meta name="viewport" content="width=device-width, initial-scale=1">
<template>
  <div class="alert">
  <strong>Notice:</strong> Our website is actively being developed. Should you see broke code visit our <a href="#"><font-awesome-icon icon="fa-brands fa-github" /> Github</a></div>


<!-- Begin Navbar -->
  <div id="nav">
     <router-link to="/">Home</router-link> |
    <router-link to="/staff">Staff List</router-link> |
    <router-link to="/about">About</router-link>  |
     <router-link to="/weather">Weather Callback Test</router-link>
     
  </div>

<div class="footer">
  <p>I:COA Community | <a href="https://github.com/Indiana-Crossroads-Of-America/website">We're <u>Open Source</u></a></p>
</div>
  <router-view />
    </template>

<script>
    export default {
        name: 'app',
        created () {
            document.title = "I:COA - Community Site";
            console.log("I:COA NGINX \n Channel: Public (Served via http://indianacrossroadsofamerica.com/dist) \n Developed by: Julian & Ross https://rlmtech.xyz")
        }
    }


    
</script>

<!--  -->

<!-- ALERT CSS -->
<style scoped>
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
    background-color: #white;
    color: white;
  }
</style>

<!-- Footer Styling -->
<style>
.footer {
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   color: black;
   text-align: center;
}
</style>


<!-- Misc Styling, Julian???-->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background-color: #white;
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
