<template>
  <div class="layout">
    <Navbar />
    <div class="slot">
      <slot />
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
.layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.slot {
}
</style>
