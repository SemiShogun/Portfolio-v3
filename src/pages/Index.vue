<template>
  <Layout id="index">
    <div
      id="introduction"
      class="w-full flex flex-col"
      style="margin-top: -56px"
    >
      <!-- Learn how to use images here: https://gridsome.org/docs/images -->
      <div class="h-screen w-full flex flex-col items-center justify-center">
        <h1 class="text-5xl font-bold text-black dark:text-white">
          Heya! I'm Jamie
        </h1>
        <div class="text-5xl text-black dark:text-white">
          I love to Code_ 💻
        </div>
      </div>
      <div id="projects" class="w-full flex flex-col">
        <div class="w-full flex items-center justify-center my-4">
          <h1 class="text-2xl font-bold text-black dark:text-white">
            Currently Working On...
          </h1>
        </div>
        <Project
          v-for="edge in $page.allProject.edges"
          :key="edge.node.id"
          :project="edge.node"
        />
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Project from "../components/Project.vue"

export default defineComponent({
  metaInfo: {
    title: "Home",
  },
  components: { Project },
})
</script>

<page-query>
query {
  allProject {
    totalCount
    edges {
      node {
        id
        title
        image
        description
        date (format: "D MMMM YYYY")
        link
        }
    }  
  }
}
</page-query>
