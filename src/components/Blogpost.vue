<template>
  <g-link
    :to="blog.path"
    class="
      bg-white
      dark:bg-really-dark-gray
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
      <g-image
        :src="blog.image"
        alt="blogpost_placeholder"
        fit="contain"
        class="rounded border-solid border-2 border-black dark:border-white"
      />
    </div>
    <div class="w-5/6 my-2 mx-2">
      <div
        v-html="blog.title"
        class="mb-3 font-bold text-black dark:text-white"
      />
      <div v-html="blog.description" class="mb-3 text-black dark:text-white" />
      <div
        class="
          text-blue-400
          hover:text-blue-600
          dark:text-blue-200
          dark:hover:text-blue-400
        "
      >
        Read More...
      </div>
    </div>
  </g-link>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: ["blog"],
})
</script>
