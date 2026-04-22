<script setup lang="ts">
import { Link } from '@inertiajs/vue3';

defineProps<{
    product: {
        id: number;
        name: string;
        slug: string;
        short_description?: string;
        model_code?: string | null;
        hero_image?: string | null;
        is_featured?: boolean;
        category?: { slug: string; name: string } | null;
    };
    href?: string;
    /** Force an eager-loaded image (for above-the-fold cards). */
    eager?: boolean;
}>();
</script>

<template>
    <Link
        :href="href ?? `/products/${product.category?.slug}/${product.slug}`"
        class="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-[color:var(--color-brand-accent)]/40 hover:shadow-[var(--shadow-brand)]"
    >
        <div class="relative aspect-[4/3] overflow-hidden bg-slate-100">
            <img
                v-if="product.hero_image"
                :src="product.hero_image"
                :alt="product.name + ' manufacturer — Kailash Machine Tools Ahmedabad'"
                :loading="eager ? 'eager' : 'lazy'"
                :fetchpriority="eager ? 'high' : 'auto'"
                width="800"
                height="600"
                class="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div v-else class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
                <svg class="size-16 text-slate-300" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10h6m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"/></svg>
            </div>

            <!-- gradient overlay -->
            <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[color:var(--color-brand)]/70 via-[color:var(--color-brand)]/15 to-transparent" />

            <!-- badges -->
            <span v-if="product.is_featured" class="absolute left-4 top-4 rounded-full bg-teal-500 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow">Featured</span>
            <span v-if="product.model_code" class="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1 font-mono text-xs text-[color:var(--color-brand)] shadow">{{ product.model_code }}</span>

            <!-- category chip -->
            <span v-if="product.category" class="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-[color:var(--color-brand)] shadow">
                <span class="size-1.5 rounded-full bg-[color:var(--color-brand-accent)]"></span>
                {{ product.category.name }}
            </span>
        </div>

        <div class="flex flex-1 flex-col p-5">
            <h3 class="font-heading text-lg font-semibold leading-snug text-slate-900 transition-colors group-hover:text-[color:var(--color-brand-accent)]">
                {{ product.name }}
            </h3>
            <p v-if="product.short_description" class="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
                {{ product.short_description }}
            </p>
            <div class="mt-4 flex items-center justify-between">
                <span class="inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--color-brand)]">
                    View details
                    <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
            </div>
        </div>
    </Link>
</template>
