<template>
  <div>
    <div v-for="job in WorkedPlaces" :key="job._path" class="worked-places">
      <div class="worked-places__tabs">
        <b>{{ job.company }}</b>
      </div>

      <div class="worked-places__panel">
        <b>{{ job.position }}</b>
        <b>{{ job.duration }}</b>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: WorkedPlaces } = useAsyncData("jobs", () => {
  return queryContent("/jobs").find();
});
</script>

<style lang="scss" scoped>
.worked-places {
  display: flex;

  &__tabs {
    display: inline-flex;
    flex-basis: 20%;
  }

  &__panel {
    display: inline-flex;
    flex-basis: 80%;
    transition: all 0.2 ease 0s;
  }
}
</style>
