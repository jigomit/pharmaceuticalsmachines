<script setup lang="ts">
import SeoHead from '@/Components/SeoHead.vue';
import { Link } from '@inertiajs/vue3';
import { computed } from 'vue';

const faqs = [
    { q: 'What is Kailash Machine Tools?', a: 'Kailash Machine Tools is a pharmaceutical machinery manufacturer in Ahmedabad, Gujarat, India — founded in 1991 and previously known as Shree Ganesh Pharmatech.' },
    { q: 'Are your machines cGMP compliant?', a: 'Yes. All our machines are designed and built to current Good Manufacturing Practice, with SS 316L contact parts, documented FAT/SAT, and IQ/OQ/PQ validation support included.' },
    { q: 'Which countries do you export to?', a: 'We export across India, the Middle East (UAE, Saudi Arabia, Egypt), Southeast Asia (Vietnam, Philippines, Indonesia), Africa (Kenya, Nigeria, Tanzania), and select European markets.' },
    { q: 'Do you provide installation and commissioning?', a: 'Yes, our service engineers travel on-site for installation, commissioning, and operator training. Remote support and spare-parts stocking are available globally.' },
    { q: 'What is the typical lead time?', a: 'Standard machines: 6 – 10 weeks from PO. Customised / turnkey lines: 12 – 18 weeks depending on scope.' },
    { q: 'Can you customise a machine to our product?', a: 'Absolutely. Over 60% of our builds include some level of customisation — from contact-part geometry to special control logic. Share a URS and we will respond within 48 hours.' },
    { q: 'Do you sell change parts for size variants?', a: 'Yes. Change-part kits for alternate container sizes are available for every machine we build.' },
    { q: 'How do I request a quotation?', a: 'Use the contact form, WhatsApp (+91 98250 18210) or email info@pharmaceuticalsmachines.com. Share your product, batch size and target output for the fastest response.' },
];

const faqSchema = computed(() => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}));
</script>

<template>
    <SeoHead title="FAQ — Pharmaceutical Machinery Buying Guide" description="Common questions about pharmaceutical machinery — cGMP compliance, lead times, customisation, installation, export markets and after-sales support." :schema="faqSchema" />

    <section class="mesh-hero relative py-20 text-white">
        <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">FAQ</p>
            <h1 class="mt-3 max-w-3xl text-4xl font-semibold sm:text-5xl">Straight answers to the questions we hear most.</h1>
        </div>
    </section>

    <section class="py-16">
        <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div class="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
                <details v-for="(f, i) in faqs" :key="i" class="group p-6">
                    <summary class="flex cursor-pointer items-center justify-between gap-4 font-semibold text-slate-900">
                        {{ f.q }}
                        <svg class="size-5 shrink-0 transition group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                    </summary>
                    <p class="mt-3 text-sm leading-6 text-slate-600">{{ f.a }}</p>
                </details>
            </div>
            <div class="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Popular machine pages</p>
                <div class="mt-3 flex flex-wrap gap-2">
                    <Link href="/products/injectable-liquid-filling/automatic-vial-filling-machine" class="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-[color:var(--color-brand-accent)] hover:text-[color:var(--color-brand-accent)]">Vial Filling Machine</Link>
                    <Link href="/products/injectable-liquid-filling/ampoule-filling-sealing-machine" class="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-[color:var(--color-brand-accent)] hover:text-[color:var(--color-brand-accent)]">Ampoule Filling Machine</Link>
                    <Link href="/products/washing-machines" class="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-[color:var(--color-brand-accent)] hover:text-[color:var(--color-brand-accent)]">Pharma Washing Machines</Link>
                </div>
            </div>
        </div>
    </section>
</template>
