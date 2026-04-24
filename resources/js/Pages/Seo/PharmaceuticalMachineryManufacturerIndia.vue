<script setup lang="ts">
import SeoHead from '@/Components/SeoHead.vue';
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <SeoHead
        title="Pharmaceutical Machinery Manufacturer in Ahmedabad, India"
        description="Kailash Machine Tools is a pharmaceutical machinery manufacturer in Ahmedabad, India, supplying washing, filling, capping, labelling and turnkey pharma lines."
        keywords="pharmaceutical machinery manufacturer ahmedabad, pharma machinery india, kailash machine tools"
    />

    <section class="mesh-hero relative py-20 text-white">
        <div class="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p class="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">Kailash Machine Tools</p>
            <h1 class="mt-3 text-balance text-4xl font-semibold sm:text-5xl">Pharmaceutical machinery manufacturer in Ahmedabad, India.</h1>
            <p class="mt-5 max-w-3xl text-lg leading-8 text-slate-200">Since 1991, we have built cGMP-focused machinery for injectable and packaging lines, serving Indian and international pharmaceutical manufacturers.</p>
        </div>
    </section>

    <section class="py-16">
        <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div class="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h2 class="text-2xl font-semibold text-slate-900">Core machine segments</h2>
                <div class="mt-5 grid gap-3 sm:grid-cols-2">
                    <Link href="/products/washing-machines" class="rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 hover:border-[color:var(--color-brand-accent)] hover:text-[color:var(--color-brand-accent)]">Pharmaceutical Washing Machines</Link>
                    <Link href="/products/injectable-liquid-filling" class="rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 hover:border-[color:var(--color-brand-accent)] hover:text-[color:var(--color-brand-accent)]">Injectable Liquid Filling</Link>
                    <Link href="/products/capping-sealing" class="rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 hover:border-[color:var(--color-brand-accent)] hover:text-[color:var(--color-brand-accent)]">Capping and Sealing</Link>
                    <Link href="/products/labelling" class="rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 hover:border-[color:var(--color-brand-accent)] hover:text-[color:var(--color-brand-accent)]">Labelling Machines</Link>
                </div>
                <div class="mt-6">
                    <Link href="/contact" class="inline-flex rounded-full bg-[color:var(--color-brand)] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[color:var(--color-brand-accent)]">Talk to application engineering</Link>
                </div>
            </div>
        </div>
    </section>
</template>
