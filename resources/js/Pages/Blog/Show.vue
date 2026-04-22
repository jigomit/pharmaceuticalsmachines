<script setup lang="ts">
import SeoHead from '@/Components/SeoHead.vue';
import { Link } from '@inertiajs/vue3';
import { computed } from 'vue';

const props = defineProps<{ post: any; related: any[] }>();

const articleSchema = computed(() => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: props.post.title,
    description: props.post.excerpt,
    author: { '@type': 'Organization', name: props.post.author_name },
    publisher: { '@type': 'Organization', name: 'Kailash Machine Tools', logo: { '@type': 'ImageObject', url: 'https://pharmaceuticalsmachines.com/og-default.jpg' } },
    datePublished: props.post.published_at,
    mainEntityOfPage: `https://pharmaceuticalsmachines.com/blog/${props.post.slug}`,
}));

const formattedBody = computed(() => {
    if (!props.post.body) return '';
    return props.post.body
        .replace(/^### (.+)$/gm, '<h3 class="mt-8 font-heading text-xl font-semibold text-slate-900">$1</h3>')
        .replace(/^## (.+)$/gm, '<h2 class="mt-10 font-heading text-2xl font-semibold text-slate-900">$1</h2>')
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n\n/g, '</p><p class="mt-4 text-base leading-7 text-slate-700">')
        .replace(/^/, '<p class="mt-4 text-base leading-7 text-slate-700">')
        .concat('</p>');
});
</script>

<template>
    <SeoHead :title="post.meta_title ?? post.title" :description="post.meta_description ?? post.excerpt" type="article" :schema="articleSchema" />

    <section class="mesh-hero relative py-20 text-white">
        <div class="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">{{ post.category_tag }} · {{ post.reading_minutes }} min read</p>
            <h1 class="mt-3 font-heading text-3xl font-semibold leading-tight sm:text-5xl">{{ post.title }}</h1>
            <p class="mt-4 text-lg leading-8 text-slate-200">{{ post.excerpt }}</p>
        </div>
    </section>

    <article class="py-16">
        <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div v-html="formattedBody" />
        </div>
    </article>

    <section v-if="related?.length" class="border-t border-slate-100 bg-slate-50 py-16">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 class="font-heading text-2xl font-semibold text-slate-900">Related articles</h2>
            <div class="mt-8 grid gap-6 lg:grid-cols-3">
                <Link v-for="r in related" :key="r.id" :href="`/blog/${r.slug}`" class="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-brand)]">
                    <span class="text-xs font-semibold uppercase tracking-widest text-teal-600">{{ r.category_tag }}</span>
                    <h3 class="mt-2 font-heading text-base font-semibold text-slate-900 group-hover:text-[color:var(--color-brand-accent)]">{{ r.title }}</h3>
                    <p class="mt-2 line-clamp-2 text-sm text-slate-600">{{ r.excerpt }}</p>
                </Link>
            </div>
        </div>
    </section>
</template>
