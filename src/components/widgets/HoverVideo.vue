<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useEventListener } from '@vueuse/core'
defineProps({
  src: String
})

const video = ref<HTMLVideoElement | null>(null)

const playVideo = () => {
  console.log('play')
  video.value?.play()
}
const pauseVideo = () => {
  console.log('stop')
  video.value?.pause()
}

onMounted(() => {
  video.value?.play()
})

useEventListener(video, 'mouseout', (e) => {
  const video = e.target as HTMLVideoElement
  video.pause()
})
</script>

<template>
  <video
    ref="video"
    :src="src"
    loop
    muted
  ></video>
</template>

<style scoped></style>
