<template>
  <div class="alert">
    <strong>Notice:</strong> We have <b> no scheduled </b> events.  <br />
    <a href="https://discord.gg/cx9AnN6A" font color="black">Reach out</a> if you'd like to share a INDIANA event.

  </div>
</template>


<script>
export default {
  mounted() {
    let Script = document.createElement("script");
    Script.setAttribute(
      "src",
      "https://ross.indianacoa.com/devops/js/date.js"
    );
    document.head.appendChild(Script);
    document.title = "I:COA | Home"; // title
  },
};
</script>

<style>
.alert {
  padding: 10px;
  background-color: #ffea00;
  background-color: #ff0000;
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


.alert {border-radius: 2px;}
</style>