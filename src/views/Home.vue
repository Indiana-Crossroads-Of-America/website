/* eslint-disable */
<template>
  <div class="home">
    <h1>
      Welcome to
      <span
        class="typer"
        id="main"
        data-words="Greatness.,Diversity., Your New Home., Indiana."
        data-delay="100"
        data-deleteDelay="1000"
      ></span>
      <span class="cursor" data-owner="main"></span>
    </h1>
    <p>
      We're a community dedicated to bring people together regardless of
      differences.<font-awesome-icon icon="”hat-wizard”" />
    </p>

    <p>Join our community: <a href="https://discord.gg/5AUD5g8kgR">here</a>.</p>
    <pre><b>We need volunteers</b>, see our current <router-link to="/opportunities">opportunities</router-link>.</pre>
    <br />
    <video width="800" height="650" controls>
      <source
        src="https://icoa.s3.us-west-2.amazonaws.com/videos/disc_guide.mp4"
        type="video/mp4"
      />
    </video>
  </div>
</template>

<script>
export default {
  mounted() {
    let Script = document.createElement("script");
    Script.setAttribute(
      "src",
      "https://ross.indianacoa.com/devops/js/typer.js"
    );
    document.head.appendChild(Script);
  },
};
</script>
