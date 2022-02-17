<template>
  <div class="outer-header">
    <div class="header">
      <div class="header-side">
        <ul>
          <li><router-link to="/" class="test">Home</router-link></li>
          |
          <li><router-link to="/staff">Staff List</router-link></li>
          |
          <li><router-link to="/about">About</router-link></li>
          |
          <router-link to="/events">Events</router-link>
          |
          <router-link to="/contact">Contact Us</router-link>
        </ul>
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
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #dc143c;
}
.test {
  background-color: #14dc57;
}
.outer-header {
  padding: 0px 10px 10px;
  margin: auto;
  width: max-content;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  /* border-radius: 25px; */
}

li a:hover:not(.active) {
  background-color: #8b0000;
}

.header {
  overflow: hidden;
  /* background-color: #dc143c; */
  padding: 15px;
  border-radius: 25px;
}

.header-side {
  float: center;
}

.header a {
  font-weight: bold;
  color: #2c3e50;
}

.header a.router-link-exact-active {
  /* color: #42b983; */
  color: #ffffff;
}
</style>
