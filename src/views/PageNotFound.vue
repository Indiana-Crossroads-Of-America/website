<template>
  <h3> 404 NOT FOUND</h3>
  <p>The server <b>could not</b> find what you were looking for.</p>
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
  },
};

</script>



