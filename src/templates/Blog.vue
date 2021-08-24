<template>
  <Layout id="blog">
    <div class="md:mx-20 mx-4">
      <div class="w-full flex flex-col justify-start items-start">
        <h1 class="w-full flex justify-center mt-4 text-xl font-bold">
          {{ $page.blog.title }}
        </h1>
        <p
          v-html="$page.blog.date"
          class="w-full flex flex-row justify-center items-center mb-8 text-sm"
        ></p>
        <p v-html="$page.blog.content" class="w-full my-4 text-md" />
        <g-link to="/blogs" class="text-blue-400 hover:text-blue-600">
          &larr; Go Back</g-link
        >
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
})
</script>

<page-query>
query Blog ($path: String!) {
    blog: blog (path: $path) {
        id
        title
        image
        content
        date (format: "D MMMM YYYY")
        categories
    }
}
</page-query>

<style>
</style>