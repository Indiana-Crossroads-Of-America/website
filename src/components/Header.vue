<template>
  <div class="outer-header">
    <div class="header">
      <div class="header-side">
        <router-link to="/">Home</router-link> |
        <router-link to="/staff">Staff List</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/events">Events</router-link> |
        <router-link to="/contact">Contact Us</router-link>
      </div>
    </div>
  </div>
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
}

.header {
  overflow: hidden;
  background-color: #dc143c;
  padding: 15px;
}

.header-side {
  float: center;
}

.header a {
  font-weight: bold;
  color: #2c3e50;
}

.header a.router-link-exact-active {
  color: #42b983;
}
</style>
