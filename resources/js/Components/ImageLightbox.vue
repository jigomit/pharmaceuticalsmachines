<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount, computed } from 'vue';

const props = defineProps<{
    images: { src: string; alt?: string; caption?: string }[];
    open: boolean;
    initialIndex?: number;
}>();

const emit = defineEmits<{ (e: 'close'): void }>();

const index = ref(props.initialIndex ?? 0);

watch(() => props.open, (o) => {
    if (o) {
        index.value = props.initialIndex ?? 0;
        document.documentElement.style.overflow = 'hidden';
    } else {
        document.documentElement.style.overflow = '';
    }
});

const next = () => { index.value = (index.value + 1) % props.images.length; };
const prev = () => { index.value = (index.value - 1 + props.images.length) % props.images.length; };

const onKey = (e: KeyboardEvent) => {
    if (!props.open) return;
    if (e.key === 'Escape') emit('close');
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
};

onMounted(() => window.addEventListener('keydown', onKey));
onBeforeUnmount(() => {
    window.removeEventListener('keydown', onKey);
    document.documentElement.style.overflow = '';
});

const current = computed(() => props.images[index.value]);
</script>

<template>
    <Teleport to="body">
        <Transition name="fade">
            <div v-if="open" class="lightbox" @click.self="emit('close')">
                <button type="button" class="lightbox-close" aria-label="Close" @click="emit('close')">
                    <svg class="size-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
                <button v-if="images.length > 1" type="button" class="lightbox-nav lightbox-prev" aria-label="Previous image" @click="prev">
                    <svg class="size-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
                </button>
                <button v-if="images.length > 1" type="button" class="lightbox-nav lightbox-next" aria-label="Next image" @click="next">
                    <svg class="size-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
                </button>
                <figure class="lightbox-figure">
                    <img :src="current.src" :alt="current.alt ?? ''" class="lightbox-img" />
                    <figcaption v-if="current.caption" class="lightbox-caption">{{ current.caption }}</figcaption>
                    <span v-if="images.length > 1" class="lightbox-counter">{{ index + 1 }} / {{ images.length }}</span>
                </figure>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>
.lightbox {
    position: fixed; inset: 0; z-index: 100;
    background: rgba(3, 10, 29, 0.92);
    backdrop-filter: blur(14px);
    display: flex; align-items: center; justify-content: center;
    padding: 4vh 5vw;
}
.lightbox-close, .lightbox-nav {
    position: absolute; display: inline-flex; align-items: center; justify-content: center;
    width: 44px; height: 44px; border-radius: 9999px;
    background: rgba(255,255,255,0.1); color: #fff; border: 1px solid rgba(255,255,255,0.15);
    cursor: pointer; transition: background 0.2s;
}
.lightbox-close:hover, .lightbox-nav:hover { background: rgba(255,255,255,0.2); }
.lightbox-close { top: 1.5rem; right: 1.5rem; }
.lightbox-prev { left: 1.5rem; top: 50%; transform: translateY(-50%); }
.lightbox-next { right: 1.5rem; top: 50%; transform: translateY(-50%); }
.lightbox-figure { max-width: 100%; max-height: 100%; display: flex; flex-direction: column; align-items: center; }
.lightbox-img { max-width: 100%; max-height: 85vh; object-fit: contain; border-radius: 12px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); }
.lightbox-caption { margin-top: 1rem; color: #cbd5e1; font-size: 0.875rem; text-align: center; }
.lightbox-counter { margin-top: 0.5rem; color: #64748b; font-size: 0.75rem; font-family: ui-monospace, monospace; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.25s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
