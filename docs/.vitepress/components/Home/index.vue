<template>
  <div class="mt-32 md:mt-16 md:mx-[10%] flex justify-center items-center">
    <div class="px-8 md:px-20 text-center">
      <div ref="el" class="text-4xl md:text-6xl font-semibold tracking-wider md:tracking-[10px] text-[#3b2c90] dark:text-green-300">
        <div>欢迎来到我的</div>
        <div class="mt-4">工作思维！</div>
      </div>
      <div class="mt-12 text-[#3b2c90] dark:text-green-300 text-xl font-semibold">售前思维构思</div>
      <img src="./sign.png" class="mt-6 inline w-[100px]">
    </div>
    <Right class="hidden md:block shrink-0" />
  </div>
</template>

<script setup lang="ts">
import Right from './Right.vue'
import TypeIt from 'typeit'
import { onMounted, ref } from 'vue'

// const el = ref()

// onMounted(() => {
//   const instance = new TypeIt(el.value, {
//     breakLines: true,
//     html: true,
//     strings: [
//       'Hello, 我是晓平。',
//       '很高兴与你相遇，一同学习知识。',
//       // '',
//       // '人生到处知何似，应似飞鸿踏雪泥',
//       // '泥上偶然留指爪，鸿飞哪复计东西',
//     ],
//     speed: 50,
//     // loop: true,
//     // loopDelay: 15000,
//   })
//   instance.go()
// })

</script>
