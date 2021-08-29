<template>
  <div id="introduction" class="w-full flex flex-col" style="margin-top: -64px">
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <div class="h-screen w-full flex flex-col items-center justify-center">
      <div class="text-5xl font-bold text-black dark:text-white">
        Heya! I'm Jamie
      </div>
      <div class="text-5xl text-black dark:text-white">
        I love to
        <ClientOnly>
          <vue-typer
            :text="['Code 💻', 'Game 🎮', 'Blog 📄', 'Jog 🏃‍♂️']"
            :repeat="Infinity"
            :shuffle="false"
            initial-action="typing"
            :pre-type-delay="70"
            :type-delay="70"
            :pre-erase-delay="4500"
            :erase-delay="250"
            erase-style="clear"
            :erase-on-complete="false"
            caret-animation="smooth"
          />
        </ClientOnly>
      </div>
    </div>
    <div id="projects" class="w-full flex flex-col">
      <div class="w-full flex items-center justify-center my-4">
        <div class="text-2xl font-bold text-black dark:text-white">
          Currently Working On...
        </div>
      </div>
      <Project
        v-for="edge in $page.allProject.edges"
        :key="edge.node.id"
        :project="edge.node"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Project from "../components/Project.vue"
import VueTyper from "vue-typer";

export default defineComponent({
  metaInfo: {
    title: "Home",
  },
  components: { Project, VueTyper: () => import('vue-typer').then(m => m.VueTyper).catch() },
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
