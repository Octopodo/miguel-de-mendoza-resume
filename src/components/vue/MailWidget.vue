<template>
  <div
    class="cursor-pointer inline"
    :class="class"
  >
    <IconMail :className="className" />
    <h3 class="inline">Contact</h3>
  </div>
</template>

<script setup lang="ts">
import IconMail from './icons/IconMail.vue'

defineProps({
  className: {
    type: String,
    default: ''
  },
  class: {
    type: String,
    default: ''
  }
})
</script>

<style scoped></style>
