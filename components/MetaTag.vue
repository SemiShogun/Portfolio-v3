<template>
  <div class="meta-tag">
    <div v-if="props.type === 'date'" class="meta-tag__date">
      {{ props.meta }}
    </div>
    <NuxtLink v-else-if="props.type === 'tag'" class="meta-tag__tag" :to="`/blog/tags/${props.meta}`">
      <!-- <div v-else-if="props.type === 'tag'" class="meta-tag__tag"> -->
      {{ props.meta }}
    <!-- </div> -->
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
interface MetaProps {
    meta: string;
    type: string;
}

const props = defineProps<MetaProps>();
</script>

<style lang="scss" scoped>
.meta-tag {
    display: flex;
    font-size: 0.75rem;
    margin: 0.25rem 0 0.25rem 0.25rem;

    > div, a {
        border-radius: 5px;
        padding: 0.25rem;
    }

    &__date {
        background-color: blueviolet;
        border: 1px solid black;
    }

    &__tag {
        background-color: blue;
        border: 1px solid black;
    }

}
</style>
