<template>
  <!-- <div class="status-line">
    <span class="status-line__text">
      {{ props.title }}
    </span>
  </div> -->
  <svg
    style="height: 150px; width: 150px; color: rgb(0, 0, 255);"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  > <path fill-rule="evenodd" clip-rule="evenodd" d="M8 12L6 7H16L18 12L16 17H6L8 12ZM8.95407 15L10.1541 12L8.95407 9H14.6459L15.8459 12L14.6459 15H8.95407Z" :fill="`${props.color}`" />
    <text
      x="50%"
      y="50%"
      text-anchor="middle"
      fill="white"
      font-size="4px"
      font-family="Arial"
      dy=".3em"
    >{{ props.title }}</text>
  </svg>
</template>

<script lang="ts" setup>
interface MetaProps {
    title: string;
    color: string;
}

const props = defineProps<MetaProps>();
</script>

<style lang="scss" scoped>

// .status-line {
//     position: relative;
//     width: 200px;
//     height: 200px;
//     padding: 0.25rem 1rem;

//     &:before {
//         content: '';
//         position: absolute;
//         top: 0;
//         left: 100%;
//         border-top: 100px solid transparent;
//         border-bottom: 100px solid transparent;
//         border-left: 50px solid green;
//     }

//     &__text {
//         font-weight: bold;
//     }
// }
</style>
