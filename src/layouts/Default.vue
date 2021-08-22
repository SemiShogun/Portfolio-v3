<template>
  <div class="h-screen default">
    <div class="sm:mx-20 mx-5">
      <Navbar />
      <div class="flex flex-grow px-2 max-w-7xl mx-auto">
        <slot class="slot" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';

export default defineComponent({
  components: { Navbar, Footer },
})
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss" scoped>
</style>
