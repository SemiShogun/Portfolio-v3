<template>
  <div class="">
    <div v-for="(blog, index) in blogList" :key="index">
      <NuxtLink :to="blog._path">
        {{ blog.title }}
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: blogList } = useAsyncData("blogList", () => {
  return queryContent("/blog").find();
});
</script>
