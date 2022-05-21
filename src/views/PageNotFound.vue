<template>
  <title>test</title>
  <p class="p1"><b>404 (Resource not found)</b></p>

  <p class="p1">This is odd, we couldn't load the resource you requested.</p>
  <i>Please reach out if you believe this was a mistake. <br><a href="/?404-express-home">Go home</a>.</i>
<hr>

  <p class="p1" id="url"></p>


</template>

<script>
export default {
  name: "404",
  mounted() {
    let Script = document.createElement("script");
    Script.setAttribute(
      "src",
      "https://ross.indianacoa.com/devops/js/url.js"
    );
    document.head.appendChild(Script);
    document.title = "I:COA - 404";
  },
};

</script>

<!--- 404, pulls from ext script using mounted()-->
<style>
.p1 {
  font-family: "Calibri", Times, serif;
}

</style>

