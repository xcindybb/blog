<template>
  <Layout>
    <template #layout-top>
      <el-backtop>
        <svg-icon name="huojian" class="text-2xl" />
      </el-backtop>
    </template>
    <template #doc-before>
      <DocBefore />
    </template>
  </Layout>
</template>

<script lang="ts">
export const injectKey = Symbol('Layout')
</script>

<script setup lang="ts">
// 具体使用参见：https://vitepress.vuejs.org/guide/theme-introduction#extending-the-default-theme
import Theme from 'vitepress/theme'
import mediumZoom, { Zoom } from 'medium-zoom'
import { onBeforeMount, watch } from 'vue'
import { onContentUpdated } from 'vitepress'

const { Layout } = Theme
let zoom: Zoom

onBeforeMount(() => {
  zoom = mediumZoom(undefined, {
    background: 'rgba(0, 0, 0, .75)',
  })
})

onContentUpdated(() => {
  if (!zoom) return
  zoom.detach('.VPDoc img')
  zoom.attach('.VPDoc img')
})

</script>

<style>
.medium-zoom-overlay {
  @apply z-[10000];
}
.medium-zoom-image {
  @apply z-[10001];
}
</style>