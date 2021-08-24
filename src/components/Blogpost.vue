<template>
  <g-link
    :to="blog.path"
    class="
      w-full
      flex flex-row
      justify-center
      items-center
      shadow-md
      my-2
      rounded-2xl
      overflow-hidden
    "
  >
    <div class="flex flex-row w-1/6 my-2 mx-2">
      <g-image :src="blog.image" alt="blogpost_placeholder" fit="contain" />
    </div>
    <div class="w-5/6 my-2 mx-2">
      <!-- <p v-html="blog.date" /> -->
      <h1 v-html="blog.title" class="mb-3 font-bold" />
      <p v-html="blog.description" class="mb-3" />
      <!-- <p v-html="blog.categories" /> -->
      <g-link :to="blog.path" class="text-blue-400 hover:text-blue-600"
        >Read More...</g-link
      >
    </div>
  </g-link>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: ["blog"],
})
</script>
