<template>
  <div class="md:mx-20 mx-4">
    <div class="w-full flex flex-col justify-start items-start">
      <div
        class="
          w-full
          flex
          justify-center
          mt-4
          text-2xl
          font-bold
          text-black
          dark:text-white
        "
      >
        {{ $page.blog.title }}
      </div>
      <div
        v-html="$page.blog.date"
        class="
          w-full
          flex flex-row
          justify-center
          items-center
          mb-8
          text-sm text-black
          dark:text-white
        "
      />
      <div
        v-html="$page.blog.content"
        class="w-full my-4 text-md text-black dark:text-white"
      />
      <g-link to="/blogs" class="text-blue-400 hover:text-blue-600">
        &larr; Go Back</g-link
      >
      <div id="remark42"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { Remark } from '../types/Remark';


export default defineComponent({
  metaInfo() {
    return {
      title: 'Blog',
    }
  },
  data() {
    return {
      remark42Instance: null as any
    }
  },
  watch: {
    '$route.path'() {
      this.initRemark42()
    },
  },
  mounted() {
    if ((window as any).REMARK42) {
      this.initRemark42()
    } else {
      window.addEventListener('REMARK42::ready', () => {
        this.initRemark42()
      })
    }
  },
  methods: {
    initRemark42(): void {

      if ((window as any).REMARK42) {
        if (this.remark42Instance) {
          (this.remark42Instance as any).destroy()
        }

        this.remark42Instance = (window as any).REMARK42.createInstance({
          node: this.$refs.remark42 as HTMLElement,
          site_id: process.env.REMARK42_SITE_ID
        })
      }
    },
  },
  beforeRouteLeave() {
    if (this.remark42Instance) {
      (this.remark42Instance as any).destroy()
    }
  },
})
</script>

<page-query>
query Blog ($path: String!) {
    blog: blog (path: $path) {
        id
        title
        image
        content
        date (format: "D MMMM YYYY")
        categories
    }
}
</page-query>

<style lang="scss" scoped>
</style>