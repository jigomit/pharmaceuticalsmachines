<script setup lang="ts">
import SeoHead from '@/Components/SeoHead.vue';
import ScrollReveal from '@/Components/ScrollReveal.vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps<{ industries: any[] }>();
const list = props.industries;
</script>

<template>
    <SeoHead title="Industries — Pharma, Biotech, Nutraceutical, Cosmetics" description="Pharmaceutical, biotech, nutraceutical, cosmetic, veterinary and Ayurvedic manufacturers we serve — since 1991, from Ahmedabad India." />

    <section class="relative isolate overflow-hidden text-white">
        <div class="mesh-hero-animated absolute inset-0" />
        <div class="bg-grid-dark grid-pattern-fade absolute inset-0 opacity-30" />
        <div class="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <p class="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">Industries Served</p>
            <h1 class="mt-3 font-heading text-balance text-4xl font-semibold sm:text-6xl">Engineered for every regulated manufacturing environment.</h1>
        </div>
    </section>

    <section class="py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal :stagger="0.1" :y="30" target=".ind" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div v-for="i in list" :key="i.slug" class="ind group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-[color:var(--color-brand-accent)]/50 hover:shadow-[var(--shadow-brand)]">
                    <div class="relative aspect-[16/10] overflow-hidden bg-slate-100">
                        <img :src="i.image" :alt="i.name + ' industry served by Kailash Machine Tools'" class="size-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" width="800" height="500" />
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                    </div>
                    <div class="p-6">
                        <h2 class="font-heading text-xl font-semibold text-slate-900 group-hover:text-[color:var(--color-brand-accent)]">{{ i.name }}</h2>
                        <p class="mt-3 text-sm leading-6 text-slate-600">{{ i.body }}</p>
                    </div>
                </div>
            </ScrollReveal>
            <div class="mt-14 text-center">
                <Link href="/contact" class="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-brand)] px-7 py-3 text-sm font-semibold text-white hover:bg-[color:var(--color-brand-accent)]">
                    Discuss your project
                    <svg class="size-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </Link>
            </div>
        </div>
    </section>
</template>
