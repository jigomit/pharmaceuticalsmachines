<script setup lang="ts">
import SeoHead from '@/Components/SeoHead.vue';

defineProps<{ clients: any[] }>();
</script>

<template>
    <SeoHead title="Our Clients — 450+ Pharmaceutical Manufacturers" description="Pharmaceutical manufacturers worldwide who trust us (formerly Shree Ganesh Pharmatech) for their injectable and packaging machinery." />

    <section class="mesh-hero relative py-20 text-white">
        <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">Clients</p>
            <h1 class="mt-3 max-w-3xl text-4xl font-semibold sm:text-5xl">Trusted by pharma manufacturers across the world.</h1>
        </div>
    </section>

    <section class="py-16">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                <div v-for="c in clients" :key="c.id" class="flex h-28 items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 text-center text-sm font-semibold text-slate-700 shadow-sm">
                    {{ c.name }}
                </div>
            </div>
        </div>
    </section>
</template>
