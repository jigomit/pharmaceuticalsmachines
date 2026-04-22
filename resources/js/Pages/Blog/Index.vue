<script setup lang="ts">
import SeoHead from '@/Components/SeoHead.vue';
import { Link } from '@inertiajs/vue3';

defineProps<{ posts: any }>();
</script>

<template>
    <SeoHead title="Blog — Pharmaceutical Machinery Insights" description="Technical articles, buying guides and industry insights on injectable lines, vial filling, washing, capping and cGMP compliance." />

    <section class="mesh-hero relative py-20 text-white">
        <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">Blog</p>
            <h1 class="mt-3 max-w-3xl text-4xl font-semibold sm:text-5xl">Technical insights from our engineers.</h1>
        </div>
    </section>

    <section class="py-16">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="grid gap-6 lg:grid-cols-3">
                <Link v-for="post in posts.data" :key="post.id" :href="`/blog/${post.slug}`" class="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-brand)]">
                    <span class="text-xs font-semibold uppercase tracking-widest text-teal-600">{{ post.category_tag }} · {{ post.reading_minutes }} min read</span>
                    <h2 class="mt-3 font-heading text-lg font-semibold text-slate-900 group-hover:text-[color:var(--color-brand-accent)]">{{ post.title }}</h2>
                    <p class="mt-2 line-clamp-3 text-sm text-slate-600">{{ post.excerpt }}</p>
                </Link>
            </div>
        </div>
    </section>
</template>
