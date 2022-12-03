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
@keyframes ani-b1 {
  0% {
    @apply right-0 bottom-[400px] opacity-0;
  }
  80% {
    @apply right-0 bottom-0;
  }
  90% {
    @apply right-0 bottom-[10px];
  }
  95% {
    @apply right-0 bottom-0;
  }
  97% {
    @apply right-0 bottom-[3px];
  }
  100% {
    @apply right-0 bottom-0;
  }
}
@keyframes ani-b2 {
  0% {
    @apply right-[135px] bottom-[400px];
  }
  100% {
    @apply right-[135px] bottom-[20px] opacity-100;
  }
}
@keyframes ani-b3 {
  0% {
    @apply right-[0] bottom-[400px];
  }
  100% {
    @apply right-0 bottom-[194px] opacity-100;
  }
}
@keyframes ani-b4 {
  0% {
    @apply left-[-30px] bottom-[400px];
  }
  100% {
    @apply left-[-30px] bottom-[224px] opacity-100;
  }
}
@keyframes ani-b5 {
  0% {
    @apply left-[80px] top-[-50px];
  }
  100% {
    @apply left-[80px] top-[-30px] opacity-100;
  }
}

img {
  @apply inline absolute;
}
.b1 {
  @apply w-[150px];
  animation: ani-b1 1s ease-in-out forwards;
}
.b2 {
  @apply w-[280px] opacity-0;
  animation: ani-b2 0.75s ease-in forwards;
  animation-delay: 1s;
}
.b3 {
  @apply w-[260px] opacity-0;
  animation: ani-b3 0.5s ease-in-out forwards;
  animation-delay: 1.75s;
}
.b4 {
  @apply w-[200px] opacity-0;
  animation: ani-b4 0.5s ease-in-out forwards;
  animation-delay: 2.5s;
}
.b5 {
  @apply w-[160px] opacity-0;
  animation: ani-b5 0.3s ease-in forwards;
  animation-delay: 2.75s;
}
</style>
