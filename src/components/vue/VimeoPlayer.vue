<template>
  <div
    ref="playerContainer"
    class="bottom-96 right-0"
  ></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Player from '@vimeo/player'

const playerContainer = ref(null)
const yourPrivateVideoId = '749369651'
let player: Player | null = null

onMounted(() => {
  player = new Player(playerContainer.value, {
    id: yourPrivateVideoId,
    autoplay: true,
    muted: true,
    width: 850
  })
})

onUnmounted(() => {
  player?.destroy()
  player = null
})
</script>
