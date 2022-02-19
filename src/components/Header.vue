<template>
  <div class="outer-header">
    <div class="header">
      <div class="header-side">
        <router-link to="/" class="test">Home</router-link>
        <router-link to="/staff">Staff List</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/events">Events</router-link>
        <router-link to="/opportunities">Opportunities</router-link>
        <!-- <router-link to="/contact">Contact Us</router-link> -->
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
.test {
  background-color: #14dc57;
}
.outer-header {
  padding: 0px 10px 10px;
  margin: auto; /* This keeps the bar centered */
  width: max-content;
}

.header {
  overflow: hidden;
  background-color: #dc143c;
  padding: 15px;
  border-radius: 25px;
}

.header-side {
  float: center;
}

.header a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 15px;
  border-radius: 25px;
}

/* .header a.router-link-exact-active {
  color: #42b983;
} */

.header a:hover:not(.active) {
  background-color: #ffffff;
}

.active {
  background-color: #04aa6d;
}
</style>
