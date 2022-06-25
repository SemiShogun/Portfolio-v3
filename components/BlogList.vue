<template>
  <div>
    <div v-for="blog in blogList" :key="blog._path">
      <NuxtLink :to="blog._path">
        {{ blog.title }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { data: blogList } = useAsyncData("blogList", () => {
  return queryContent("/blog").find();
});
</script>
