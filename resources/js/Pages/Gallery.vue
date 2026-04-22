<script setup lang="ts">
import SeoHead from '@/Components/SeoHead.vue';
import ImageLightbox from '@/Components/ImageLightbox.vue';
import ScrollReveal from '@/Components/ScrollReveal.vue';
import { computed, ref } from 'vue';

const props = defineProps<{ images?: string[] }>();

// Fallback: build from what's passed in, or empty
const items = computed(() => {
    const list = props.images ?? [];
    return list.map((src, i) => ({
        src,
        alt: `Kailash Machine Tools facility — photograph ${i + 1}`,
        caption: ['Pharmaceutical manufacturing line', 'Vial filling operation', 'Cleanroom operation', 'Quality inspection', 'Ampoule sealing', 'Production floor', 'Engineering bay', 'Validation & testing', 'Packaging line', 'Warehouse storage', 'FAT documentation', 'Operator training'][i] ?? 'Kailash facility',
    }));
});

const lightboxOpen = ref(false);
const lightboxIndex = ref(0);
const open = (i: number) => { lightboxIndex.value = i; lightboxOpen.value = true; };
</script>

<template>
    <SeoHead title="Gallery — Pharmaceutical Machinery Photos" description="Photos of our pharmaceutical machinery installations, cleanroom operations, vial filling lines and Ahmedabad manufacturing facility." />

    <section class="relative isolate overflow-hidden text-white">
        <div class="mesh-hero-animated absolute inset-0" />
        <div class="bg-grid-dark grid-pattern-fade absolute inset-0 opacity-30" />
        <div class="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <p class="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">Gallery</p>
            <h1 class="mt-3 font-heading text-balance text-4xl font-semibold sm:text-6xl">Machinery. Manufacturing. Installations.</h1>
            <p class="mt-5 max-w-2xl text-lg leading-8 text-slate-200">A visual tour of our Ahmedabad workshop, pharma production lines, and client installations. Click any image to expand.</p>
        </div>
    </section>

    <section class="py-16 sm:py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal :stagger="0.05" :y="24" target=".gitem" class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                <button
                    v-for="(it, i) in items"
                    :key="i"
                    type="button"
                    class="gitem group relative aspect-square overflow-hidden rounded-2xl bg-slate-100 shadow-sm"
                    @click="open(i)"
                >
                    <img :src="it.src" :alt="it.alt" class="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" width="600" height="600" />
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/0 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <span class="absolute inset-x-4 bottom-4 text-left text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">{{ it.caption }}</span>
                    <span class="absolute right-3 top-3 inline-flex size-8 items-center justify-center rounded-full bg-white/95 opacity-0 transition-opacity group-hover:opacity-100">
                        <svg class="size-4 text-slate-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"/></svg>
                    </span>
                </button>
            </ScrollReveal>

            <div class="mt-16 rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center sm:p-12">
                <h2 class="font-heading text-2xl font-semibold text-slate-900">Videos coming soon</h2>
                <p class="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600">Machine walkthroughs and commissioning footage will appear here. To request a line-in-action video of any specific machine, drop us an enquiry.</p>
            </div>
        </div>
    </section>

    <ImageLightbox :open="lightboxOpen" :images="items" :initial-index="lightboxIndex" @close="lightboxOpen = false" />
</template>
