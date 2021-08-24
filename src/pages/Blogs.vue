<template>
  <Layout id="blogs">
    <div class="w-full min-h-screen flex flex-col justify-start items-center">
      <h1 class="text-2xl font-semibold mb-5">Recent Blogs</h1>
      <BlogPost
        v-for="edge in $page.allBlog.edges"
        :key="edge.node.id"
        :blog="edge.node"
      />
    </div>
  </Layout>
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