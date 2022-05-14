<template>
  <title>test</title>
  <h3>404 - RNF (Resc. not found)</h3>
  <p>This is odd, we couldn't load the resource you requested.</p>
  <i>Please reach out if you believe this was a mistake. Otherwise, <a href="/"> go home</a>.</i>
<hr>
  <p id="url"></p>


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
    document.title = "RNF - 404";
  },
};

</script>



