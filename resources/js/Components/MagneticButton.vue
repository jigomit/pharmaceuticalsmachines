<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

withDefaults(defineProps<{ strength?: number }>(), { strength: 0.25 });

const root = ref<HTMLElement | null>(null);
let rafId: number | null = null;

const onMove = (e: MouseEvent) => {
    if (!root.value) return;
    if (window.matchMedia('(pointer: coarse)').matches) return; // touch devices skip
    const rect = root.value.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
        root.value!.style.transform = `translate3d(${x * 0.25}px, ${y * 0.25}px, 0)`;
    });
};
const reset = () => {
    if (!root.value) return;
    if (rafId) cancelAnimationFrame(rafId);
    root.value.style.transform = '';
};

onMounted(() => {
    root.value?.addEventListener('mousemove', onMove);
    root.value?.addEventListener('mouseleave', reset);
});
onBeforeUnmount(() => {
    root.value?.removeEventListener('mousemove', onMove);
    root.value?.removeEventListener('mouseleave', reset);
    if (rafId) cancelAnimationFrame(rafId);
});
</script>

<template>
    <span ref="root" class="inline-block transition-transform duration-200 ease-out will-change-transform">
        <slot />
    </span>
</template>
