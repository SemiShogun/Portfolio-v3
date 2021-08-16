<template>
  <WIP />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WIP from "./components/WIP.vue";

export default defineComponent({
  name: "App",
  components: {
    WIP,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
