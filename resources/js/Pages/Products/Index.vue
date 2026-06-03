<script setup lang="ts">
import SeoHead from '@/Components/SeoHead.vue';
import CategoryIcon from '@/Components/CategoryIcon.vue';
import ProductCard from '@/Components/ProductCard.vue';
import ScrollReveal from '@/Components/ScrollReveal.vue';
import { useSiteUrl } from '@/composables/useSiteUrl';
import { Link, router } from '@inertiajs/vue3';
import { computed, ref, watch } from 'vue';

const props = defineProps<{
    categories: any[];
    searchQuery?: string;
    searchResults?: any[];
}>();

const site = useSiteUrl();
const searchInput = ref(props.searchQuery ?? '');

watch(() => props.searchQuery, (q) => {
    searchInput.value = q ?? '';
});

const breadcrumbSchema = computed(() => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${site.value}/` },
        { '@type': 'ListItem', position: 2, name: 'Products', item: `${site.value}/products` },
    ],
}));

const itemListSchema = computed(() => ({
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Pharmaceutical Machinery Categories',
    numberOfItems: props.categories.length,
    itemListElement: props.categories.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${site.value}/products/${c.slug}`,
        name: c.name,
    })),
}));

const isSearching = computed(() => (props.searchQuery ?? '').length > 0);
const results = computed(() => props.searchResults ?? []);

function submitSearch() {
    const q = searchInput.value.trim();
    router.get('/products', q ? { q } : {}, { preserveState: true, replace: true });
}
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
            <p class="mt-6 max-w-3xl text-lg leading-8 text-slate-200">Browse 14 categories spanning washing, filling, sealing, labelling, inspection, solid dosage and turnkey plants. Every product is cGMP-ready with SS 316L build, servo automation, and IQ/OQ documentation.</p>
            <form class="mt-8 max-w-xl" role="search" @submit.prevent="submitSearch">
                <label for="product-search" class="sr-only">Search pharmaceutical machinery</label>
                <div class="flex gap-2">
                    <input
                        id="product-search"
                        v-model="searchInput"
                        type="search"
                        name="q"
                        autocomplete="off"
                        placeholder="Search machines by name or model…"
                        class="min-w-0 flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-slate-300 backdrop-blur focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-400/40"
                    />
                    <button type="submit" class="shrink-0 rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-400">Search</button>
                </div>
            </form>
        </div>
    </section>

    <section v-if="isSearching" class="border-b border-slate-100 bg-slate-50 py-12">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 class="font-heading text-2xl font-semibold text-slate-900">
                Search results for “{{ searchQuery }}”
            </h2>
            <p v-if="results.length === 0" class="mt-4 text-slate-600">No machines matched your search. Try another keyword or browse categories below.</p>
            <div v-else class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <ProductCard v-for="p in results" :key="p.id" :product="p" />
            </div>
            <p class="mt-6">
                <button type="button" class="text-sm font-semibold text-[color:var(--color-brand-accent)] hover:underline" @click="searchInput = ''; submitSearch()">Clear search</button>
            </p>
        </div>
    </section>

    <section class="py-20 sm:py-24">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 v-if="isSearching" class="mb-8 font-heading text-xl font-semibold text-slate-900">Browse by category</h2>
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
