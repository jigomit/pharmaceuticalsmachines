<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { useGsap } from '@/composables/useGsap';

const props = withDefaults(
    defineProps<{
        as?: string;
        y?: number;
        x?: number;
        scale?: number;
        duration?: number;
        delay?: number;
        stagger?: number;
        start?: string;
        once?: boolean;
        /** CSS selector within the root to target. Defaults to direct children. */
        target?: string;
    }>(),
    {
        as: 'div',
        y: 30,
        x: 0,
        scale: 1,
        duration: 0.9,
        delay: 0,
        stagger: 0.08,
        start: 'top 80%',
        once: true,
        target: '> *',
    },
);

const root = ref<HTMLElement | null>(null);
const { gsap, ScrollTrigger, ready, reducedMotion } = useGsap();

const play = () => {
    if (!root.value || !gsap.value || !ScrollTrigger.value) return;

    const targets = root.value.querySelectorAll(props.target);
    if (!targets.length) return;

    gsap.value.set(targets, { opacity: 0, y: props.y, x: props.x, scale: props.scale });

    gsap.value.to(targets, {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        duration: props.duration,
        delay: props.delay,
        stagger: props.stagger,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: root.value,
            start: props.start,
            toggleActions: props.once ? 'play none none none' : 'play none none reverse',
        },
    });
};

watch(ready, (v) => { if (v) play(); });
onMounted(() => { if (ready.value) play(); });
</script>

<template>
    <component :is="as" ref="root" :class="reducedMotion ? '' : 'scroll-reveal-root'">
        <slot />
    </component>
</template>

<style>
/* Pre-hide children in non-JS / SSR state ONLY if JS ready — otherwise visible */
.scroll-reveal-root > * { will-change: transform, opacity; }
@media (prefers-reduced-motion: reduce) {
    .scroll-reveal-root > * { will-change: auto; }
}
</style>
