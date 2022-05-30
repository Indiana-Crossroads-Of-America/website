<template>
  <div class="staff"></div>
  <StaffList msg="Staff List" />
</template>
<script>
import StaffList from "@/components/StaffList.vue";

export default {
  name: "Staff",
  components: {
    StaffList,

  },
};

document.title = "I:COA | Team";

</script>
