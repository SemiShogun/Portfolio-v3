<template>
  <div class="blog-list">
    <div v-for="blog in blogList" :key="blog._path">
      <div class="blog-list__item">
        <NuxtLink class="blog-list__head" :to="blog._path">
          <b>{{ blog.title }}</b>
          <br>
          {{ blog.description }}
        </NuxtLink>
        <div class="blog-list__meta">
          <MetaTag :meta="blog.date" :type="'date'" />
          <MetaTag
            v-for="tag in blog.tags"
            :key="tag"
            :meta="tag"
            :type="'tag'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: blogList } = useAsyncData("blogList", () => {
  return queryContent("/blog").find();
});
</script>

<style lang="scss" scoped>
.blog-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;

  > a {
    width: 100%;
  }

  &__item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    padding: 1.5rem 0;
  }

  &__head {
    // max-width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    word-break: break-all;
    flex-basis: 70%;
  }

  &__meta {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    flex-basis: 30%;
  }
}
</style>
