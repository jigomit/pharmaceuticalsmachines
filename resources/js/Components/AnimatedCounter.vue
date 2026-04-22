<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const props = withDefaults(
    defineProps<{
        to: number;
        duration?: number;
        prefix?: string;
        suffix?: string;
        format?: (n: number) => string;
    }>(),
    { duration: 1800, prefix: '', suffix: '' },
);

const current = ref(0);
const el = ref<HTMLElement | null>(null);
let rafId: number | null = null;
let started = false;
let observer: IntersectionObserver | null = null;

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const run = () => {
    if (started) return;
    started = true;
    const start = performance.now();

    const tick = (now: number) => {
        const elapsed = now - start;
        const p = Math.min(elapsed / props.duration, 1);
        current.value = Math.round(easeOutCubic(p) * props.to);
        if (p < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
};

onMounted(() => {
    if (typeof window === 'undefined' || !el.value) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
        current.value = props.to;
        return;
    }

    observer = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && run()),
        { threshold: 0.4 },
    );
    observer.observe(el.value);
});

onBeforeUnmount(() => {
    if (rafId) cancelAnimationFrame(rafId);
    observer?.disconnect();
});

const formatted = () =>
    props.format ? props.format(current.value) : current.value.toLocaleString();
</script>

<template>
    <span ref="el">{{ prefix }}{{ formatted() }}{{ suffix }}</span>
</template>
