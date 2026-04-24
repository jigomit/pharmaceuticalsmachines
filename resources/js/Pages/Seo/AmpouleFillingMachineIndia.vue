<script setup lang="ts">
import SeoHead from '@/Components/SeoHead.vue';
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <SeoHead
        title="Ampoule Filling and Sealing Machine Manufacturer in India"
        description="Kailash Machine Tools manufactures ampoule filling and sealing machines in India for sterile liquid lines with cGMP design and validation documentation."
        keywords="ampoule filling machine manufacturer india, ampoule sealing machine, sterile ampoule line"
    />

    <section class="mesh-hero relative py-20 text-white">
        <div class="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p class="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">Sterile Injectable Lines</p>
            <h1 class="mt-3 text-balance text-4xl font-semibold sm:text-5xl">Ampoule filling and sealing machine manufacturer in India.</h1>
            <p class="mt-5 max-w-3xl text-lg leading-8 text-slate-200">From washing to filling and sealing, we build complete ampoule lines for Indian and export pharmaceutical plants.</p>
        </div>
    </section>

    <section class="py-16">
        <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div class="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h2 class="text-2xl font-semibold text-slate-900">Built for audited production</h2>
                <ul class="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                    <li>Compatible with 1 ml to larger ampoule formats and change-part kits.</li>
                    <li>Integrated line logic for no-ampoule no-fill and process safety.</li>
                    <li>FAT/SAT plus IQ/OQ/PQ documentation for inspection readiness.</li>
                </ul>
                <div class="mt-6 flex flex-wrap gap-3">
                    <Link href="/products/injectable-liquid-filling/ampoule-filling-sealing-machine" class="rounded-full bg-[color:var(--color-brand)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[color:var(--color-brand-accent)]">View Ampoule Filling & Sealing Machine</Link>
                    <Link href="/products/washing-machines/linear-ampoule-washing-machine" class="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-[color:var(--color-brand-accent)] hover:text-[color:var(--color-brand-accent)]">View Linear Ampoule Washing Machine</Link>
                </div>
            </div>
        </div>
    </section>
</template>
