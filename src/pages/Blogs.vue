<template>
  <div class="w-full min-h-screen flex flex-col justify-start items-center">
    <div class="text-2xl font-semibold mb-5 text-black dark:text-white">
      Recent Blogs
    </div>
    <BlogPost
      v-for="edge in $page.allBlog.edges"
      :key="edge.node.id"
      :blog="edge.node"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import BlogPost from '../components/Blogpost.vue'

export default defineComponent({
  metaInfo: {
    title: 'Blogs'
  },
  components: { BlogPost },
})
</script>

<page-query>
query {
  allBlog {
    totalCount
    edges {
      node {
        id
        title
        image
        description
        categories
        date (format: "D MMMM YYYY")
        path
        }
    }  
  }
}
</page-query>