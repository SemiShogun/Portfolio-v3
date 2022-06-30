<template>
  <div class="blog">
    <!-- Sidenav for navigating through blogs -->
    <div class="blog__side-nav">
      <h1>Blogs</h1>
    </div>
    <div class="blog__content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.blog {
  display: flex;
  height: 100%;
  flex-direction: row;

  &__side-nav {
    flex-basis: 25%;
  }

  &__content {
    flex-basis: 75%;
  }
}
</style>
