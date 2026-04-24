<script setup lang="ts">
import SeoHead from '@/Components/SeoHead.vue';
import ScrollReveal from '@/Components/ScrollReveal.vue';
import AnimatedCounter from '@/Components/AnimatedCounter.vue';
import { Link } from '@inertiajs/vue3';

defineProps<{
    categoriesCount: number;
    aboutImages?: { factory: string; team: string; heritage: string };
}>();

const timeline = [
    { year: '1991', title: 'Kailash Machine Tools founded', body: 'Mr. Hitesh Mevada opens a precision workshop in Ahmedabad focused on pharmaceutical tooling.' },
    { year: '2002', title: 'Expansion into injectable lines', body: 'First ampoule filling & sealing machines delivered to mid-tier Indian pharma manufacturers.' },
    { year: '2010', title: 'Export markets opened', body: 'Installations in Middle East, Southeast Asia and East Africa begin.' },
    { year: '2016', title: 'Shree Ganesh Pharmatech era', body: 'Re-branded as Shree Ganesh Pharmatech; product range expanded to complete turnkey lines.' },
    { year: '2026', title: 'Back as Kailash Machine Tools', body: 'Honouring the founding identity with a next-generation brand, modernised servo machinery, and a digital-first customer experience.' },
];
</script>

<template>
    <SeoHead
        title="About Us — Pharmaceutical Machinery Since 1991"
        description="Kailash Machine Tools (formerly Shree Ganesh Pharmatech / Ganesh Machine Tools) — Ahmedabad, India manufacturer of injectable & packaging line machinery since 1991."
    />

    <!-- HERO with image -->
    <section class="relative isolate overflow-hidden text-white">
        <div class="absolute inset-0 -z-10">
            <img v-if="aboutImages" :src="aboutImages.factory" alt="Kailash Machine Tools factory floor Ahmedabad" class="size-full object-cover ken-burns" loading="eager" fetchpriority="high" />
            <div class="absolute inset-0 bg-gradient-to-br from-[color:var(--color-brand)]/95 via-[color:var(--color-brand)]/80 to-[#061433]/95" />
            <div class="mesh-hero-animated absolute inset-0 opacity-50 mix-blend-screen" />
        </div>
        <div class="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
            <p class="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">About Us</p>
            <h1 class="mt-3 max-w-4xl font-heading text-balance text-4xl font-semibold leading-tight sm:text-6xl">
                Three decades of precision engineering, <span class="text-gradient-brand">now a brand built for the next decade.</span>
            </h1>
            <p class="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
                Kailash Machine Tools is a pharmaceutical machinery manufacturer from Ahmedabad, Gujarat — founded in 1991, previously known as Shree Ganesh Pharmatech, and known across the industry as Ganesh Machine Tools. Today, we combine 34 years of workshop heritage with modern servo automation to deliver cGMP-ready injectable and packaging lines to pharma manufacturers worldwide.
            </p>
        </div>
    </section>

    <!-- Stats -->
    <section class="relative -mt-16 px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-6xl">
            <ScrollReveal :stagger="0.1" :y="20" target=".stat">
                <div class="grid divide-y divide-slate-200 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl md:grid-cols-4 md:divide-x md:divide-y-0">
                    <div class="stat p-8 text-center">
                        <div class="font-heading text-4xl font-semibold text-[color:var(--color-brand)] sm:text-5xl"><AnimatedCounter :to="34" suffix="+" /></div>
                        <div class="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Years</div>
                    </div>
                    <div class="stat p-8 text-center">
                        <div class="font-heading text-4xl font-semibold text-[color:var(--color-brand)] sm:text-5xl"><AnimatedCounter :to="2500" suffix="+" /></div>
                        <div class="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Machines</div>
                    </div>
                    <div class="stat p-8 text-center">
                        <div class="font-heading text-4xl font-semibold text-[color:var(--color-brand)] sm:text-5xl"><AnimatedCounter :to="25" suffix="+" /></div>
                        <div class="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Countries</div>
                    </div>
                    <div class="stat p-8 text-center">
                        <div class="font-heading text-4xl font-semibold text-[color:var(--color-brand)] sm:text-5xl"><AnimatedCounter :to="450" suffix="+" /></div>
                        <div class="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Clients</div>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    </section>

    <!-- Mission + Vision -->
    <section class="py-24 sm:py-28">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="grid items-start gap-16 lg:grid-cols-2">
                <ScrollReveal :y="30">
                    <div class="overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
                        <img v-if="aboutImages" :src="aboutImages.heritage" alt="Pharmaceutical production — Kailash Machine Tools heritage" class="aspect-[4/5] w-full object-cover" loading="lazy" width="800" height="1000" />
                    </div>
                </ScrollReveal>
                <ScrollReveal :stagger="0.1" :y="20" target=".rev">
                    <div class="rev">
                        <p class="text-xs font-semibold uppercase tracking-[0.22em] text-teal-600">Our Mission</p>
                    </div>
                    <h2 class="rev mt-3 font-heading text-balance text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                        Engineer machinery that <span class="text-gradient-brand">hits purity, throughput and compliance</span> targets on day one.
                    </h2>
                    <p class="rev mt-6 text-base leading-8 text-slate-600">
                        Every machine we ship is built to be measurable, serviceable and validatable for two decades after commissioning. We don't just deliver equipment — we deliver regulatory peace of mind.
                    </p>
                    <p class="rev mt-4 text-sm leading-7 text-slate-600">
                        Explore our core lines for
                        <Link href="/products/injectable-liquid-filling" class="font-semibold text-[color:var(--color-brand)] hover:text-[color:var(--color-brand-accent)]">vial and ampoule filling machines</Link>,
                        <Link href="/products/washing-machines" class="font-semibold text-[color:var(--color-brand)] hover:text-[color:var(--color-brand-accent)]">pharmaceutical washing machines</Link>,
                        and
                        <Link href="/products/capping-sealing" class="font-semibold text-[color:var(--color-brand)] hover:text-[color:var(--color-brand-accent)]">capping and sealing machines</Link>.
                    </p>
                    <div class="rev mt-10">
                        <h3 class="font-heading text-xl font-semibold text-slate-900">What we stand for</h3>
                        <ul class="mt-4 space-y-4 text-sm leading-6 text-slate-700">
                            <li class="flex gap-3"><span class="mt-1 size-2 shrink-0 rounded-full bg-[color:var(--color-brand-accent)]"></span><div><strong class="block text-slate-900">Precision, always</strong>±0.5 % fill accuracy, ±0.5 mm label registration, µm-level surface finish on contact parts.</div></li>
                            <li class="flex gap-3"><span class="mt-1 size-2 shrink-0 rounded-full bg-[color:var(--color-brand-accent)]"></span><div><strong class="block text-slate-900">cGMP by design</strong>SS 316L, documented material traceability, FAT/SAT, IQ/OQ/PQ on every build.</div></li>
                            <li class="flex gap-3"><span class="mt-1 size-2 shrink-0 rounded-full bg-[color:var(--color-brand-accent)]"></span><div><strong class="block text-slate-900">Responsive support</strong>Spare parts stocked regionally; remote diagnostics; on-site service within 72 hours.</div></li>
                            <li class="flex gap-3"><span class="mt-1 size-2 shrink-0 rounded-full bg-[color:var(--color-brand-accent)]"></span><div><strong class="block text-slate-900">Honest pricing</strong>Transparent scope, no hidden validation or change-part surcharges.</div></li>
                        </ul>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    </section>

    <!-- Timeline -->
    <section class="bg-slate-50 py-24 sm:py-28">
        <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal :y="20">
                <p class="text-center text-xs font-semibold uppercase tracking-[0.22em] text-teal-600">Our Journey</p>
                <h2 class="mt-3 text-center font-heading text-balance text-4xl font-semibold text-slate-900 sm:text-5xl">From Kailash to Shree Ganesh &mdash; and back again.</h2>
            </ScrollReveal>
            <div class="relative mt-16">
                <div class="absolute inset-y-0 left-5 w-px bg-gradient-to-b from-teal-400 via-slate-300 to-transparent sm:left-1/2" />
                <ScrollReveal :stagger="0.12" :y="30" target=".tline">
                    <ul class="space-y-10">
                        <li v-for="(t, i) in timeline" :key="i" class="tline relative grid gap-4 sm:grid-cols-2">
                            <div :class="i % 2 === 0 ? 'sm:pr-10 sm:text-right' : 'sm:col-start-2 sm:pl-10'">
                                <span class="font-heading text-sm font-semibold uppercase tracking-widest text-[color:var(--color-brand-accent)]">{{ t.year }}</span>
                                <h3 class="mt-1 font-heading text-xl font-semibold text-slate-900">{{ t.title }}</h3>
                                <p class="mt-2 text-sm leading-6 text-slate-600">{{ t.body }}</p>
                            </div>
                            <div class="absolute left-5 top-1 size-4 -translate-x-1/2 rounded-full border-4 border-white bg-[color:var(--color-brand-accent)] shadow-lg sm:left-1/2" />
                        </li>
                    </ul>
                </ScrollReveal>
            </div>
        </div>
    </section>

    <section class="py-24">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 sm:p-12 lg:flex lg:items-center lg:justify-between">
                <div class="max-w-xl">
                    <h2 class="font-heading text-balance text-3xl font-semibold text-slate-900">Ready to specify your next line?</h2>
                    <p class="mt-3 text-sm leading-6 text-slate-600">Our application engineers will help you size the right machines for your product, batch size and target throughput — in 48 hours.</p>
                </div>
                <div class="mt-6 flex gap-3 lg:mt-0">
                    <Link href="/products" class="inline-flex items-center rounded-full bg-[color:var(--color-brand)] px-6 py-3 text-sm font-semibold text-white hover:bg-[color:var(--color-brand-accent)]">Browse {{ categoriesCount }} Categories</Link>
                    <Link href="/contact" class="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:border-[color:var(--color-brand-accent)] hover:text-[color:var(--color-brand-accent)]">Contact Us</Link>
                </div>
            </div>
        </div>
    </section>
</template>
