<script setup lang="ts">
import SeoHead from '@/Components/SeoHead.vue';
import CategoryIcon from '@/Components/CategoryIcon.vue';
import ScrollReveal from '@/Components/ScrollReveal.vue';
import { Link } from '@inertiajs/vue3';
import { computed } from 'vue';

const props = defineProps<{ categories: any[] }>();

const SITE = 'https://pharmaceuticalsmachines.com';

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE}/products` },
    ],
};

const itemListSchema = computed(() => ({
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Pharmaceutical Machinery Categories',
    numberOfItems: props.categories.length,
    itemListElement: props.categories.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${SITE}/products/${c.slug}`,
        name: c.name,
    })),
}));
</script>

<template>
    <SeoHead
        title="Pharmaceutical Machinery Products — 14 Categories"
        description="Ampoule & vial washing, injectable filling, capping, labelling, inspection, tablet presses, ointment & syrup plants. cGMP-built in Ahmedabad, India."
        :schema="[breadcrumbSchema, itemListSchema]"
    />

    <section class="relative isolate overflow-hidden text-white">
        <div class="mesh-hero-animated absolute inset-0" />
        <div class="bg-grid-dark grid-pattern-fade absolute inset-0 opacity-30" />
        <div class="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <p class="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">Our Machinery</p>
            <h1 class="mt-3 max-w-4xl font-heading text-balance text-4xl font-semibold sm:text-6xl">Every machine a pharma line needs — engineered in-house.</h1>
            <p class="mt-6 max-w-3xl text-lg leading-8 text-slate-200">Browse 14 categories spanning washing, filling, sealing, labelling, inspection, solid dosage and turnkey plants. Every product is cGMP-ready with SS 316L build, servo automation, and IQ/OQ/PQ documentation.</p>
        </div>
    </section>

    <section class="py-20 sm:py-24">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal :stagger="0.08" :y="30" target=".cat-card" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Link
                    v-for="c in categories"
                    :key="c.id"
                    :href="`/products/${c.slug}`"
                    class="cat-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-[color:var(--color-brand-accent)]/50 hover:shadow-[var(--shadow-brand)]"
                >
                    <div class="relative aspect-[16/10] overflow-hidden bg-slate-100">
                        <img v-if="c.hero_image" :src="c.hero_image" :alt="c.name + ' — Kailash Machine Tools'" class="size-full object-contain transition-transform duration-700 group-hover:scale-105" loading="lazy" width="800" height="500" />
                        <div class="absolute inset-0 bg-gradient-to-t from-[color:var(--color-brand)]/80 via-[color:var(--color-brand)]/20 to-transparent" />
                        <div class="absolute left-5 top-5 inline-flex size-11 items-center justify-center rounded-xl bg-white/95 text-[color:var(--color-brand)] backdrop-blur">
                            <CategoryIcon :name="c.icon" class="size-5" />
                        </div>
                        <span class="absolute bottom-5 left-5 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-[color:var(--color-brand)]">{{ c.products_count }} machines</span>
                    </div>
                    <div class="flex flex-1 flex-col p-6">
                        <h2 class="font-heading text-xl font-semibold text-slate-900 group-hover:text-[color:var(--color-brand-accent)]">{{ c.name }}</h2>
                        <p class="mt-1 text-sm text-teal-600">{{ c.tagline }}</p>
                        <p class="mt-3 flex-1 text-sm leading-6 text-slate-600">{{ c.short_description }}</p>
                        <p class="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--color-brand)]">Explore category <span class="transition group-hover:translate-x-1">→</span></p>
                    </div>
                </Link>
            </ScrollReveal>
        </div>
    </section>
</template>
