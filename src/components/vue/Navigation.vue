<script setup lang="ts">
import navigation from '../../data/navigation.json'
import about from '../../data/about.json'
import { useEventListener } from '@vueuse/core'
import { lang } from '../../data/lang'
import { computed, ref, onMounted, onBeforeMount } from 'vue'
import anime from 'animejs'
import { breakpoints } from '../../data/styleData'

onBeforeMount(() => {
  console.log('BEFORE MOUNT')
})

defineProps({
  className: {
    type: String,
    default: ''
  }
})

const scrollBreakpoint = ref(350)
const staggerPixels = ref(130)
const collapseDuration = ref(200)
const navigationTime = ref(500)
const suportsScrollTimeline = ref(false)

const largeBreakpoint = computed(() => {
  console.log('BREAKPOINT', window.innerWidth)
  return window.innerWidth > breakpoints.lg
})
const scrollBreakpointCSS = computed(
  () => `${scrollBreakpoint.value}px`
)
const rangeStart = computed(() =>
  largeBreakpoint.value ? `100px` : `0px`
)
const staggerPixelsCSS = computed(() => `${staggerPixels.value}px`)
const outRange = computed(() =>
  largeBreakpoint.value
    ? `calc(${scrollBreakpointCSS.value} + calc(var(--index) * ${staggerPixelsCSS.value}))`
    : '200px'
)

const navBackgroundScrollStyle = computed(() => {
  return {
    animation: 'expand linear both',
    animationTimeline: 'scroll()',
    animationRange: `${rangeStart.value} ${scrollBreakpointCSS.value}`
  }
})

const accordionElementStyle = computed(() => {
  return {
    animation: 'collapse linear both',
    animationTimeline: 'scroll()',
    animationRange: `${rangeStart.value} ${outRange.value}`
  }
})

function handleScrollBackground() {
  const backgroundAnimation = anime({
    targets: '#nav-background',
    scaleY: [0, 1],
    autoplay: false,
    easing: 'linear',
    duration: navigationTime.value
  })
  useEventListener(window, 'scroll', () => {
    backgroundAnimation.seek(
      (window.scrollY * backgroundAnimation.duration) /
        scrollBreakpoint.value
    )
  })
}

function handleScrollAccordion() {
  const backgroundAnimation = anime({
    targets: '.accordionElement',
    scaleY: [1, 0],
    autoplay: false,
    easing: 'linear',
    duration: navigationTime.value,
    delay: anime.stagger(staggerPixels.value)
  })

  useEventListener(window, 'scroll', () => {
    console.log('SCROLL', window.scrollY)
    backgroundAnimation.seek(
      (window.scrollY * backgroundAnimation.duration) /
        scrollBreakpoint.value
    )
  })
}

onMounted(() => {
  console.log('MOUNTED')
  suportsScrollTimeline.value = window.CSS.supports(
    'animation-timeline: scroll()'
  )
  if (!suportsScrollTimeline.value) {
    handleScrollBackground()
    handleScrollAccordion()
  }
})
</script>

<template>
  <nav
    id="navigation"
    :class="`
  text-right
  z-40
  ${className}
`"
  >
    <div
      id="nav-background"
      class="fixed h-[65px] md:h-[100px] lg:h-[140px] opacity-100 lg:opacity-80 z-10 bg-darken w-screen top-0"
      :style="[suportsScrollTimeline ? navBackgroundScrollStyle : '']"
    ></div>
    <div
      class="absolute flex flex-col flex-wrap items-end right-6 sm:right-12 lg:right-auto lg:left-1/2 lg:translate-x-[-50%] z-20"
    >
      <a
        id="home-button"
        href="#"
        :class="`
          my-name-title
          whitespace-nowrap
          text-4xl
          sm:text-6xl
          lg:text-9xl
          4xl:text-10xl
          font-secondary
          font-bold
          text-secondary
          italic
          mb-2
          pb-6
          pr-4
          text-wide
          mt-4
          lg:mt-0

        `"
        v-html="about.name[lang]"
      ></a>
      <div class="navigator">
        <template
          v-for="(link, index) in navigation"
          :key="index"
        >
          <div>
            <a
              :href="link.url"
              :class="`
                inline-block 
                accordionElement 
                whitespace-wrap 
                text-3xl
                sm:text-5xl 
                text-medium 
                text-lighter 
                mb-1 
                hover:text-secondary-lighter
              `"
              :style="[
                `--index: ${index};`,
                suportsScrollTimeline ? accordionElementStyle : ''
              ]"
              >{{ link.name[lang as 'en' | 'es'] }}
              <div
                class="` hover-line bg-secondary w-[25rem] h-[2px] `"
              ></div>
            </a>
          </div>
        </template>
      </div>
    </div>
  </nav>
</template>

<style>
#navigation #nav-background {
  box-shadow: 0px 8px 5px -8px rgba(0, 0, 0, 0.75);
  transform: scaleY(0);
  transform-origin: top;
}

#navigation .hover-line {
  width: 100%;
  opacity: 0;
  transform: scaleX(0);
  transform-origin: right;
  transition:
    transform 0.25s ease-in-out,
    opacity 0.15s ease-in-out;
}

#navigation .accordionElement:hover .hover-line {
  transform: scaleX(1);
  opacity: 100%;
}

#navigation .accordionElement {
  transform: scaleY(1);
  transform-origin: top;
}

@keyframes collapse {
  to {
    transform: scaleY(0);
  }
}

@keyframes expand {
  to {
    transform: scaleY(1);
  }
}

@media (hover: hover) {
  #home-button:hover {
    background: linear-gradient(
      to right,
      theme('colors.secondary-light') 50%,
      theme('colors.secondary')
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
#home-button {
  background: linear-gradient(
    to left,
    theme('colors.primary'),
    theme('colors.primary-light')
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
