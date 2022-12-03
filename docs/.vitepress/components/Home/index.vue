<template>
  <div class="mt-32 md:mt-16 md:mx-[10%] flex justify-center items-center">
    <div class="px-8 md:px-20 text-center">
      <div class="text-6xl font-semibold tracking-[10px] text-[#3b2c90] dark:text-green-300">
        <div>欢迎来到我的</div>
        <div class="mt-4">工作思维！</div>
      </div>
      <div class="mt-6 text-[#3b2c90] dark:text-green-300 text-xl font-semibold">售前思维构思</div>
      <img src="./sign.png" class="mt-6 inline w-[100px]">
    </div>
    <Right class="hidden md:block shrink-0" />
  </div>
</template>

<script setup>
import Right from './Right.vue'
</script>
