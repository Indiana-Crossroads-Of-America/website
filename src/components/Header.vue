<template>
  <div class="topnav">
  <div class="outer-header">
    <div class="header">
      <div class="header-side">
        |<router-link to="/">Home</router-link>
        <router-link to="/team">The Team</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/events">Events</router-link>
<!--        <router-link to="/opportunities">Opportunities</router-link>|-->
        <a href="https://status.indianacoa.com">Status</a>
<!--         <router-link to="/contact">Contact Us</router-link>-->
      </div>
    </div>
  </div>
  </div>
  <pre>We are a unification of the state of Indiana. </pre>
</template>
<script>
export default {
  name: "Header",
  props: {},
};
</script>

<style>
.outer-header {
  padding: 0px 10px 10px;
  margin: auto; /* This keeps the bar centered */
  width: max-content;
  float: center;
}

.header {
  overflow: hidden;
  background-color: #dc143c;
  padding: 15px 0px;
  border-radius: 25px;
}

.header-side {
  float: center;
}

.header a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 16px;
  border-radius: 25px;
}

.header a.router-link-exact-active {
  /* background-color: #42b983; */
  background-color: #f7de3a;
}

.header a:hover:not(.active) {
  background-color: #ffffff;
}

.active {
  background-color: #04aa6d;
}



</style>
