<template>
  <div id="wip">
    <h1>Nectoj.me is under construction</h1>
    <img
      id="construction"
      alt="Construction Icon"
      src="../assets/under_construction.png"
    />
    <br />
    <h3>This page is still under construction, please come back later :)</h3>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "WIP",
});
</script>

<style lang="scss">
#construction {
  width: 20%;
}
</style>