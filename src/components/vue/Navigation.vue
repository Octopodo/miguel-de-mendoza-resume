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
      class="fixed h-[100px] lg:h-[140px] opacity-100 lg:opacity-80 z-10 bg-darken w-screen top-0"
      :style="[suportsScrollTimeline ? navBackgroundScrollStyle : '']"
    ></div>
    <div
      class="absolute flex flex-col flex-wrap items-end left-1/2 translate-x-[-50%] z-20"
    >
      <a
        id="home-button"
        href="#"
        :class="`
          whitespace-nowrap
          text-6xl
          lg:text-9xl
          4xl:text-10xl
          font-secondary
          font-bold
          text-secondary
          italic
          mb-2
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
              class="inline-block accordionElement whitespace-wrap text-5xl text-medium text-lighter mb-1 hover:text-secondary"
              :style="[
                `--index: ${index};`,
                suportsScrollTimeline ? accordionElementStyle : ''
              ]"
              >{{ link.name[lang as 'en' | 'es'] }}
              <div
                class="hover-line bg-primary w-[25rem] h-[2px]"
              ></div>
            </a>
          </div>
        </template>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import navigation from '../../data/navigation.json'
import about from '../../data/about.json'
import { useEventListener } from '@vueuse/core'
import { lang } from '../../data/lang'
import { computed, ref, onMounted } from 'vue'
import anime from 'animejs'

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

const largeBreakpoint = computed(() => window.innerWidth > 1024)
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
  suportsScrollTimeline.value = window.CSS.supports(
    'animation-timeline: scroll()'
  )
  if (!suportsScrollTimeline.value) {
    handleScrollBackground()
    handleScrollAccordion()
  }
})
</script>

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

#home-button {
  --stroke-color: theme('colors.primary-accent');
  --stroke-dark: theme('colors.primary-dark');
  text-shadow:
    var(--stroke-dark) 1px 0px 0px,
    var(--stroke-dark) 0.540302px 0.841471px 0px,
    var(--stroke-dark) -0.416147px 0.909297px 0px,
    var(--stroke-dark) -0.989992px 0.14112px 0px,
    var(--stroke-dark) -0.653644px -0.756802px 0px,
    var(--stroke-dark) 0.283662px -0.958924px 0px,
    var(--stroke-dark) 0.96017px -0.279415px 0px,
    var(--stroke-color) 3px 0px 0px,
    var(--stroke-color) 2.83487px 0.981584px 0px,
    var(--stroke-color) 2.35766px 1.85511px 0px,
    var(--stroke-color) 1.62091px 2.52441px 0px,
    var(--stroke-color) 0.705713px 2.91581px 0px,
    var(--stroke-color) -0.287171px 2.98622px 0px,
    var(--stroke-color) -1.24844px 2.72789px 0px,
    var(--stroke-color) -2.07227px 2.16926px 0px,
    var(--stroke-color) -2.66798px 1.37182px 0px,
    var(--stroke-color) -2.96998px 0.42336px 0px,
    var(--stroke-color) -2.94502px -0.571704px 0px,
    var(--stroke-color) -2.59586px -1.50383px 0px,
    var(--stroke-color) -1.96093px -2.27041px 0px,
    var(--stroke-color) -1.11013px -2.78704px 0px,
    var(--stroke-color) -0.137119px -2.99686px 0px,
    var(--stroke-color) 0.850987px -2.87677px 0px,
    var(--stroke-color) 1.74541px -2.43999px 0px,
    var(--stroke-color) 2.44769px -1.73459px 0px,
    var(--stroke-color) 2.88051px -0.838247px 0px,
    var(--stroke-color) -1.11013px -2.78704px 0px,
    var(--stroke-color) -0.137119px -2.99686px 0px,
    var(--stroke-color) 0.850987px -2.87677px 0px,
    var(--stroke-color) 1.74541px -2.43999px 0px,
    var(--stroke-color) 2.44769px -1.73459px 0px,
    var(--stroke-color) 2.88051px -0.838247px 0px;
}
/* #home-button:hover {
  --stroke-color: theme('colors.primary-accent');
  --stroke-dark: theme('colors.primary-lighter');
  text-shadow:
    var(--stroke-dark) 1px 0px 0px,
    var(--stroke-dark) 0.540302px 0.841471px 0px,
    var(--stroke-dark) -0.416147px 0.909297px 0px,
    var(--stroke-dark) -0.989992px 0.14112px 0px,
    var(--stroke-dark) -0.653644px -0.756802px 0px,
    var(--stroke-dark) 0.283662px -0.958924px 0px,
    var(--stroke-dark) 0.96017px -0.279415px 0px,
    var(--stroke-color) 3px 0px 0px,
    var(--stroke-color) 2.83487px 0.981584px 0px,
    var(--stroke-color) 2.35766px 1.85511px 0px,
    var(--stroke-color) 1.62091px 2.52441px 0px,
    var(--stroke-color) 0.705713px 2.91581px 0px,
    var(--stroke-color) -0.287171px 2.98622px 0px,
    var(--stroke-color) -1.24844px 2.72789px 0px,
    var(--stroke-color) -2.07227px 2.16926px 0px,
    var(--stroke-color) -2.66798px 1.37182px 0px,
    var(--stroke-color) -2.96998px 0.42336px 0px,
    var(--stroke-color) -2.94502px -0.571704px 0px,
    var(--stroke-color) -2.59586px -1.50383px 0px,
    var(--stroke-color) -1.96093px -2.27041px 0px,
    var(--stroke-color) -1.11013px -2.78704px 0px,
    var(--stroke-color) -0.137119px -2.99686px 0px,
    var(--stroke-color) 0.850987px -2.87677px 0px,
    var(--stroke-color) 1.74541px -2.43999px 0px,
    var(--stroke-color) 2.44769px -1.73459px 0px,
    var(--stroke-color) 2.88051px -0.838247px 0px,
    var(--stroke-color) -1.11013px -2.78704px 0px,
    var(--stroke-color) -0.137119px -2.99686px 0px,
    var(--stroke-color) 0.850987px -2.87677px 0px,
    var(--stroke-color) 1.74541px -2.43999px 0px,
    var(--stroke-color) 2.44769px -1.73459px 0px,
    var(--stroke-color) 2.88051px -0.838247px 0px;
} */
</style>
