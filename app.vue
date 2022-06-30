<template>
  <div>
    <NavBar />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  title: "NectoJS",
  meta: {
    description: "NectoJS is a simple and fast Vue.js CMS",
    keywords: "NectoJS, Vue.js, CMS",
  },
});
</script>
