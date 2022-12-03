<template>
  <div class="relative w-[400px] h-[500px]">
    <img src="./b1.png" class="b1">
    <img src="./b2.png" class="b2">
    <img src="./b3.png" class="b3">
    <img src="./b4.png" class="b4">
    <img src="./b5.png" class="b5">
  </div>
</template>

<script setup></script>

<style scoped>
img {
  @apply inline absolute;
}
.b1 {
  @apply w-[150px] right-0 bottom-0;
}
.b2 {
  @apply w-[280px] right-[135px] bottom-[20px];
}
.b3 {
  @apply w-[260px] right-0 bottom-[194px];
}
.b4 {
  @apply w-[200px] left-[-30px] bottom-[224px];
}
.b5 {
  @apply w-[160px] left-[80px] top-[-30px];
}
</style>
