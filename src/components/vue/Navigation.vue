<template>
  <nav>
    <a
      v-for="(link, index) in links"
      :key="index"
      :href="link.url"
    >
      {{ link.name[lang as 'en' | 'es'] }}
    </a>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import navigation from '../../data/navigation.json'

const links = ref(navigation)
const lang = ref('en')
</script>

<style scoped></style>
