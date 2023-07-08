<template>
  <div ref="el" class="fixed left-[300px] top-[150px] text-2xl leading-loose tracking-[0.5em] text-gray-800 dark:text-gray-200"></div>
  
  <div style="perspective: 5000px;">
    <img ref="dartsEl" src="./assets/darts.png" class="fixed z-10 top-[345px] w-[300px] right-[80%]">
    <img ref="targetEl" src="./assets/target.png" class="fixed right-0 top-[30px] w-[700px] h-[700px] object-cover rounded-full">
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import anime from 'animejs'
import TypeIt from 'typeit'

const el = ref()
const targetEl = ref()
const dartsEl = ref()

function animation() {
  anime({
    targets: targetEl.value,
    duration: 500,
    rotateY: -60,
    endDelay: 0,
    easing: 'easeOutQuad',
    boxShadow: '30px 30px 50px 20px rgba(0, 0, 0, .2)',
    complete: (anim) => {
      anime({
        targets: dartsEl.value,
        right: 350,
        easing: 'easeInElastic(0, 1)',
        duration: 200,
        endDelay: 1000,
        complete: () => {
          anime({
            targets: dartsEl.value,
            right: 'auto',
            left: 0,
            rotate: -90,
            opacity: 0.4,
            width: 120,
            top: 700,
          })
          anime({
            targets: targetEl.value,
            rotateY: 0,
            scale: 2,
            opacity: 0.05,
            duration: 500,
            endDelay: 1000,
            easing: 'easeOutQuad',
            complete: () => {
              type()
            }
          })
        }
      })
    }
  })
}

const words = `
黄河远上白云间，
一片孤城万仞山。
羌笛何须怨杨柳，
春风不度玉门关。
`

function type() {
  const instance = new TypeIt(el.value, {
    breakLines: true,
    html: true,
    strings: words.split(/\r?\n/g),
    speed: 100,
    // loop: true,
    // loopDelay: 15000,
    afterComplete: () => {
    }
  })
  instance.go()
}

onMounted(() => {
  animation()
})
</script>
