<script setup lang="ts">
import SeoHead from '@/Components/SeoHead.vue';
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <SeoHead title="Page not found (404)" description="The page you requested could not be found." noindex />
    <section class="mesh-hero relative flex min-h-[70vh] items-center py-20 text-white">
        <div class="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <p class="font-mono text-sm font-semibold uppercase tracking-[0.3em] text-teal-300">404</p>
            <h1 class="mt-4 text-4xl font-semibold sm:text-5xl">We couldn't find that page.</h1>
            <p class="mt-4 text-lg text-slate-200">It may have moved under our rebrand. Try the links below or drop us a line.</p>
            <div class="mt-8 flex flex-wrap justify-center gap-3">
                <Link href="/" class="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[color:var(--color-brand)] hover:bg-teal-300">Home</Link>
                <Link href="/products" class="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:border-teal-300 hover:text-teal-300">Browse Products</Link>
                <Link href="/contact" class="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:border-teal-300 hover:text-teal-300">Contact Us</Link>
            </div>
        </div>
    </section>
</template>
