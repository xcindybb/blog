<template>
  <div style="perspective: 5000px;">

    <img ref="dartsEl" src="./assets/darts.png" class="fixed z-10 top-[345px] w-[300px] right-[80%]">

    <img ref="targetEl" src="./assets/target.png" class="fixed right-0 top-[30px] w-[700px] h-[700px] object-cover rounded-full">
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import anime from 'animejs/lib/anime.es'

const targetEl = ref()
const dartsEl = ref()

function animation() {
  anime({
    targets: targetEl.value,
    // translateX: -500,
    duration: 500,
    // easing: 'easeInOutElastic(1, .6)',
    rotateY: -60,
    // rotateZ: 180,
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
            easing: 'easeOutQuad',
          })
        }
      })
    }
  })
}

onMounted(() => {
  animation()
})
</script>
