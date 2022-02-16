<template>
  <div class="stafflist">
    <h1>{{ msg }}</h1>
    <label>JulesBeHere (Administrator)</label><br />
    <label>ScarryGargoyle</label><br />
    <label>PeePee Actual</label><br />
    <h1>Advisors</h1>
   <label>Ross - Network Advisor</label>
   
  </div>
</template>
<script>
export default {
  name: "StaffList",
  props: {
    msg: String,
  },
};
</script>
