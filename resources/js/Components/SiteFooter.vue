<script setup lang="ts">
import { Link, usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
import KmtLogo from './KmtLogo.vue';

const page = usePage();
const company = computed(() => (page.props as any).company);
const year = new Date().getFullYear();

const cols = [
    {
        title: 'Injectable Line',
        links: [
            { label: 'Washing Machines', href: '/products/washing-machines' },
            { label: 'Liquid Filling', href: '/products/injectable-liquid-filling' },
            { label: 'Powder Filling', href: '/products/injectable-powder-filling' },
            { label: 'Capping & Sealing', href: '/products/capping-sealing' },
            { label: 'Labelling Machines', href: '/products/labelling' },
            { label: 'Inspection Machines', href: '/products/inspection' },
        ],
    },
    {
        title: 'Plants & Solids',
        links: [
            { label: 'Tablet Section', href: '/products/tablet-section' },
            { label: 'Ointment / Cream Plants', href: '/products/ointment-cream-plants' },
            { label: 'Liquid Syrup Plants', href: '/products/liquid-syrup-plants' },
            { label: 'Packing Conveyors', href: '/products/packing-conveyors' },
            { label: 'Tray Dryers & Storage', href: '/products/tray-dryers-storage' },
            { label: 'Other Machinery', href: '/products/other-machinery' },
        ],
    },
    {
        title: 'Support',
        links: [
            { label: 'Change Parts', href: '/products/change-parts' },
            { label: 'Pharma Furniture', href: '/products/pharma-furniture' },
            { label: 'Quality & Compliance', href: '/quality-compliance' },
            { label: 'Industries', href: '/industries' },
            { label: 'FAQ', href: '/faq' },
            { label: 'Blog', href: '/blog' },
        ],
    },
    {
        title: 'Company',
        links: [
            { label: 'About Us', href: '/about' },
            { label: 'Clients', href: '/clients' },
            { label: 'Gallery', href: '/gallery' },
            { label: 'Contact', href: '/contact' },
            { label: 'Privacy', href: '/privacy' },
            { label: 'Terms', href: '/terms' },
        ],
    },
];
</script>

<template>
    <footer class="relative mt-24 overflow-hidden bg-[color:var(--color-brand)] text-slate-200">
        <div class="absolute inset-0 bg-grid-dark opacity-40" />
        <div class="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="grid gap-12 lg:grid-cols-6">
                <div class="lg:col-span-2">
                    <KmtLogo light />
                    <p class="mt-4 text-sm leading-6 text-slate-300">
                        {{ company?.tagline }}. Leading manufacturer and exporter of injectable &amp; packaging line pharmaceutical machinery from Ahmedabad, India — trusted since 1991.
                    </p>
                    <p class="mt-4 text-xs uppercase tracking-widest text-teal-300">
                        Formerly Shree Ganesh Pharmatech
                    </p>
                </div>

                <div v-for="col in cols" :key="col.title">
                    <h3 class="font-heading text-sm font-semibold uppercase tracking-widest text-white">{{ col.title }}</h3>
                    <ul class="mt-4 space-y-2 text-sm">
                        <li v-for="link in col.links" :key="link.href">
                            <Link :href="link.href" class="text-slate-300 transition hover:text-teal-300">{{ link.label }}</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="mt-12 grid gap-8 rounded-2xl border border-white/10 bg-white/5 p-6 sm:grid-cols-3">
                <div>
                    <h3 class="font-heading text-sm font-semibold uppercase tracking-widest text-white">Factory Address</h3>
                    <address class="mt-3 text-sm not-italic leading-6 text-slate-300">
                        {{ company?.address?.street }}<br>
                        {{ company?.address?.locality }}<br>
                        {{ company?.address?.city }} {{ company?.address?.postal_code }}, {{ company?.address?.region }}<br>
                        {{ company?.address?.country_name }}
                    </address>
                </div>
                <div>
                    <h3 class="font-heading text-sm font-semibold uppercase tracking-widest text-white">Phone &amp; WhatsApp</h3>
                    <div class="mt-3 space-y-1.5 text-sm">
                        <a :href="`tel:${company?.phone?.replace(/\s/g, '')}`" class="block font-semibold text-teal-300 hover:text-white">{{ company?.phone }}</a>
                        <a :href="`https://wa.me/${company?.whatsapp}`" target="_blank" rel="noopener" class="block text-slate-300 hover:text-white">WhatsApp · Mon–Sat 10–7 IST</a>
                    </div>
                </div>
                <div>
                    <h3 class="font-heading text-sm font-semibold uppercase tracking-widest text-white">Email</h3>
                    <div class="mt-3 space-y-1.5 text-sm">
                        <a :href="`mailto:${company?.email}`" class="block text-slate-300 hover:text-white">{{ company?.email }}</a>
                        <p class="text-xs text-slate-400">Responses within 24 business hours</p>
                    </div>
                </div>
            </div>

            <div class="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center">
                <p>&copy; {{ year }} {{ company?.name }}. All rights reserved.</p>
                <div class="flex gap-4">
                    <Link href="/privacy" class="hover:text-white">Privacy</Link>
                    <Link href="/terms" class="hover:text-white">Terms</Link>
                    <Link href="/sitemap.xml" class="hover:text-white">Sitemap</Link>
                </div>
            </div>
        </div>
    </footer>
</template>
