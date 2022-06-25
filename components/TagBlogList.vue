<template>
  <div>
    tags page
    SLUG: {{ route.params.slug[0] }}
    <div v-for="blog in taggedBlogs" :key="blog">
      {{ blog.title }}
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
// return all blogs that have the matching tag
const { data: taggedBlogs } = await useAsyncData("taggedBlogs", () => {
  return queryContent("/blog").where({ tags: { $contains: route.params.slug[0] } }).find();
});

refreshNuxtData("taggedBlogs");
</script>
