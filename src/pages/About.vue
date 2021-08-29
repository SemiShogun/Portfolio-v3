<template>
  <div class="w-full min-h-screen flex flex-col justify-start items-center">
    <div class="text-2xl font-semibold mb-5">About</div>
    <div class="text-md">
      I'm Jamie, a 4th year software engineer apprentice from the luscious
      countryside of Zürich, Switzerland. During my freetime, I love to tinker
      around with various Javascript/Typescript technologies. So expect to find
      a lot of random Typescript repositories in my profile. 😉
    </div>
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
