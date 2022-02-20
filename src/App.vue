<template>
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
    crossorigin="anonymous"
  />

  <!-- <div class="alert">
    <strong>Notice:</strong>
  </div> -->

  <!-- Begin Navbar -->
  <div id="header">
    <Header></Header>
  </div>

  <router-view />
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "app",
  components: {
    Header,
  },
  created() {
    document.title = "Indiana Crossroads - Home";
    console.log(
      "I:COA Community Site Project \n over 300 lines of code and counting. \n ------------------------------ \n Hey You! Yea you! We have Developer Volunteer Opportunities! \n We are seeking DevOP roles for CSS Designers, HTML Developers, and JavaScript (VUEJS) Developers! Have what it takes? See https://indianacoa.com/opportunities and work with some great people."
    );
  },
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
</style>
