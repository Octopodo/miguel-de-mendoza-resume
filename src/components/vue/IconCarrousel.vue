<template>
  <div class="icon-carrousel flex flex-row absolute bottom-64 right-0">
    <template
      v-for="(icon, index) in iconList"
      :key="index"
    >
      <component
        :is="icon"
        class="mx-2"
        v-bind="{ size: 82 }"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import {
  IconKeyboard,
  IconBrandVue,
  IconBrandAdobe,
  IconMickey,
  IconBrain,
  IconScribble
} from '@tabler/icons-vue'

import { ref } from 'vue'
const iconList = ref([
  IconKeyboard,
  IconBrandVue,
  IconBrandAdobe,
  IconMickey,
  IconBrain,
  IconScribble
])
</script>

<style scoped>
.icon-carrousel {
  overflow: hidden;
}
</style>
