<script setup lang="ts">
import SeoHead from '@/Components/SeoHead.vue';
import ProductCard from '@/Components/ProductCard.vue';
import ScrollReveal from '@/Components/ScrollReveal.vue';
import { Link } from '@inertiajs/vue3';
import { computed } from 'vue';

const props = defineProps<{ category: any; products: any[]; otherCategories: any[] }>();

const SITE = 'https://pharmaceuticalsmachines.com';

const breadcrumbSchema = computed(() => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE}/products` },
        { '@type': 'ListItem', position: 3, name: props.category.name, item: `${SITE}/products/${props.category.slug}` },
    ],
}));

const itemListSchema = computed(() => ({
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${props.category.name} — Products`,
    numberOfItems: props.products.length,
    itemListElement: props.products.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${SITE}/products/${props.category.slug}/${p.slug}`,
        name: p.name,
    })),
}));

const faqSchema = computed(() => {
    if (!props.category.faqs?.length) return null;
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: props.category.faqs.map((f: any) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
    };
});

const schemas = computed(() => [breadcrumbSchema.value, itemListSchema.value, faqSchema.value].filter(Boolean) as object[]);
</script>

<template>
    <SeoHead
        :title="category.meta_title ?? category.name"
        :description="category.meta_description ?? category.short_description"
        :schema="schemas"
    />

    <nav class="border-b border-slate-100 bg-white py-3 text-xs">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ol class="flex flex-wrap items-center gap-2 text-slate-500">
                <li><Link href="/" class="hover:text-[color:var(--color-brand)]">Home</Link></li>
                <li>/</li>
                <li><Link href="/products" class="hover:text-[color:var(--color-brand)]">Products</Link></li>
                <li>/</li>
                <li class="text-slate-900">{{ category.name }}</li>
            </ol>
        </div>
    </nav>

    <!-- HERO with full-width image -->
    <section class="relative isolate overflow-hidden text-white">
        <div class="absolute inset-0 -z-10">
            <img v-if="category.hero_image" :src="category.hero_image" :alt="category.name" class="size-full object-cover" loading="eager" fetchpriority="high" />
            <div class="absolute inset-0 bg-gradient-to-br from-[color:var(--color-brand)]/95 via-[color:var(--color-brand)]/75 to-[#061433]/90" />
            <div class="mesh-hero-animated absolute inset-0 opacity-40 mix-blend-screen" />
        </div>
        <div class="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
            <p class="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">Category</p>
            <h1 class="mt-3 max-w-4xl font-heading text-balance text-4xl font-semibold leading-tight sm:text-6xl">{{ category.name }}</h1>
            <p class="mt-5 max-w-3xl text-lg leading-8 text-slate-200">{{ category.tagline }}</p>
        </div>
    </section>

    <section class="py-16 sm:py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="grid gap-12 lg:grid-cols-4">
                <aside class="lg:col-span-1">
                    <div class="sticky top-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h3 class="font-heading text-sm font-semibold uppercase tracking-widest text-slate-500">Other Categories</h3>
                        <ul class="mt-4 space-y-1 text-sm">
                            <li v-for="oc in otherCategories" :key="oc.id">
                                <Link :href="`/products/${oc.slug}`" class="block rounded-md px-2 py-1.5 text-slate-700 hover:bg-slate-50 hover:text-[color:var(--color-brand-accent)]">{{ oc.name }}</Link>
                            </li>
                            <li class="pt-2 border-t border-slate-100 mt-2"><Link href="/products" class="block rounded-md px-2 py-1.5 text-sm font-semibold text-[color:var(--color-brand)] hover:bg-slate-50">View all 14 →</Link></li>
                        </ul>
                    </div>
                </aside>

                <div class="lg:col-span-3">
                    <div class="prose prose-slate max-w-none">
                        <p class="text-lg leading-8 text-slate-700">{{ category.description }}</p>
                    </div>

                    <ScrollReveal :stagger="0.08" :y="30" target=".prod" class="mt-12 grid gap-6 sm:grid-cols-2">
                        <div v-for="p in products" :key="p.id" class="prod">
                            <ProductCard :product="{...p, category}" />
                        </div>
                    </ScrollReveal>

                    <div v-if="category.faqs?.length" class="mt-20">
                        <h2 class="font-heading text-3xl font-semibold text-slate-900">Frequently asked</h2>
                        <div class="mt-8 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                            <details v-for="(f, i) in category.faqs" :key="i" class="group p-6">
                                <summary class="flex cursor-pointer items-center justify-between gap-4 font-semibold text-slate-900 list-none">
                                    <span>{{ f.q }}</span>
                                    <svg class="size-5 shrink-0 text-slate-400 transition group-open:rotate-180" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
                                </summary>
                                <p class="mt-3 text-sm leading-6 text-slate-600">{{ f.a }}</p>
                            </details>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
