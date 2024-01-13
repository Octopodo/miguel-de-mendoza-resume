<script setup lang="ts">
import { ref, computed, onMounted, type Ref } from 'vue'
import { breakpoints } from '../../data/styleData'
import baseUrl from '../../data/baseUrl.ts'

const baseIconPath = baseUrl + '/icons/'
const iconExtension = '.svg'
const iconList = ref(['vue', 'extendscript', 'ae', 'harmony'])
const windowWidth = ref(0)
const largeBreakpoint = computed(
  () => window.innerWidth > breakpoints.lg
)

const iconWidth = computed(() => {
  return windowWidth?.value > breakpoints.lg ? 82 : 41
})

onMounted(() => {
  windowWidth.value = window.innerWidth
  new ResizeObserver(() => {
    windowWidth.value = window.innerWidth
  }).observe(document.body)
})
</script>

<template>
  <div
    class="icon-carrousel flex flex-row absolute lg:bottom-64 bottom-16 right-6 lg:right-0"
  >
    <template
      v-for="(icon, index) in iconList"
      :key="index"
    >
      <img
        class="mx-2"
        alt="icon"
        :src="`${baseIconPath}${icon}${iconExtension}`"
        :width="iconWidth"
      />
    </template>
  </div>
</template>

<style scoped>
.icon-carrousel {
  overflow: hidden;
}
</style>
