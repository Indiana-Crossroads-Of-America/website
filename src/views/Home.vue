/* eslint-disable */
<template>
  <div class="home">
    <h1>
      Welcome to
      <span
        class="typer"
        id="main"
        data-words="Indiana., Diversity., The Digital Era., Inclusiveness."
        data-delay="100"
        data-deleteDelay="1000"
      ></span>
      <span class="cursor" data-owner="main"></span>
    </h1>
    <p>
      We're a community dedicated to bringing awesome and diverse people together, regardless of differences.<font-awesome-icon icon="”hat-wizard”" />
    </p>

    <a href="https://discord.gg/5AUD5g8kgR" class="button button4">Come Join Us.</a> <a href="/about" class="button button4">Learn about our culture.</a> <a href="/opportunities" class="button button4">Code with I:COA.</a>
    <span class="brlarge"></span>
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
    document.title = "I:COA | Home"; // title
  },
};
</script>
<style>
.button {
  background-color: #000000;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;

}

.button4 {border-radius: 12px;}

.brlarge {
  display: block;
  margin-bottom: 1em;
}
</style>