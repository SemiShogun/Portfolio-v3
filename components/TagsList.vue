<template>
  <div class="TagsList">
    <div v-for="(tag, index) in tagsList" :key="index">
      <NuxtLink :to="{ path: `/blog/tags/${tag}` }">
        {{ tag }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
/**
 * Retrieves all the unique tags from the different blog posts.
 */
const { data: tagsList } = useAsyncData("tagsList", () => {
  return queryContent("/blog").find().then((blogs) => {
    const tags = blogs.reduce((acc, blog) => {
      blog.tags.forEach((tag) => {
        if (!acc.includes(tag)) {
          acc.push(tag);
        }
      });
      return acc;
    }, []);
    return tags;
  });
});
</script>
