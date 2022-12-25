<template>
  <div class="mt-32 md:mt-16 md:mx-[10%] flex justify-center items-center">
    <div class="px-8 md:px-20">
      <div ref="el" class="slogan text-4xl md:text-5xl !leading-[1.5] font-semibold tracking-wider md:tracking-[10px]">
        <div>我和你说，</div>
        <div>
          虽然今天是周一，
        </div>
        <div>
          但是还有5天就周六了
        </div>
        <!-- <div class="mt-4">工作思维！</div> -->
      </div>
      <div class="text-left">
        <!-- <div class="mt-12 text-[#3b2c90] dark:text-green-300 text-xl font-semibold">售前思维构思</div> -->
        <img src="./sign.png" class="mt-6 inline w-[100px]">
      </div>
    </div>
    <Right class="hidden md:block shrink-0" />
  </div>

  <!-- 左上角 -->
  <div class="fixed w-[200px] h-[200px] rounded-full bg-blue-800 opacity-30 left-[-80px] top-[-70px] z-[100]"></div>

  <!-- 左下角 -->
  <div class="fixed w-[400px] h-[400px] rounded-full bg-pink-800 opacity-10 left-[-250px] bottom-[-250px] z-[100]"></div>

  <!-- 右下角 -->
  <div class="fixed w-[200px] md:w-[500px] h-[200px] md:h-[500px] bg-green-800 opacity-30 right-0 bottom-0 rotate-45 translate-x-[100px] md:translate-x-[300px] translate-y-[150px] md:translate-y-[300px]"></div>
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
//       // 'Hello, 我是晓平。',
//       // '很高兴与你相遇，一同学习知识。',
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

<style scope>
.slogan {
  background: linear-gradient(to right, #3b2c90, green);
  -webkit-background-clip: text;
  color: transparent;
}
</style>