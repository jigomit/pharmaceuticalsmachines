<script setup lang="ts">
withDefaults(
    defineProps<{
        speed?: number; // seconds for one full loop
        pauseOnHover?: boolean;
        reverse?: boolean;
    }>(),
    { speed: 40, pauseOnHover: true, reverse: false },
);
</script>

<template>
    <div
        class="marquee-wrap"
        :class="{ 'marquee-pause-hover': pauseOnHover }"
        :style="{ '--marquee-speed': speed + 's', '--marquee-direction': reverse ? 'reverse' : 'normal' }"
    >
        <div class="marquee-track">
            <div class="marquee-group"><slot /></div>
            <div class="marquee-group" aria-hidden="true"><slot /></div>
        </div>
    </div>
</template>

<style scoped>
.marquee-wrap {
    overflow: hidden;
    position: relative;
    -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}
.marquee-track {
    display: flex;
    width: max-content;
    animation: marquee var(--marquee-speed) linear infinite;
    animation-direction: var(--marquee-direction);
}
.marquee-group {
    display: flex;
    flex-shrink: 0;
    gap: 3rem;
    padding-right: 3rem;
    align-items: center;
}
.marquee-pause-hover:hover .marquee-track {
    animation-play-state: paused;
}
@keyframes marquee {
    from { transform: translate3d(0, 0, 0); }
    to { transform: translate3d(-50%, 0, 0); }
}
@media (prefers-reduced-motion: reduce) {
    .marquee-track { animation: none; }
}
</style>
