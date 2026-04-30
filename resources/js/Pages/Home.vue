<script setup lang="ts">
import SeoHead from '@/Components/SeoHead.vue';
import ProductCard from '@/Components/ProductCard.vue';
import ScrollReveal from '@/Components/ScrollReveal.vue';
import AnimatedCounter from '@/Components/AnimatedCounter.vue';
import InfiniteMarquee from '@/Components/InfiniteMarquee.vue';
import MagneticButton from '@/Components/MagneticButton.vue';
import CategoryIcon from '@/Components/CategoryIcon.vue';
import { Link, usePage, Head } from '@inertiajs/vue3';
import { computed } from 'vue';

const props = defineProps<{
    featured: any[];
    categories: any[];
    clients: any[];
    latestPosts: any[];
    heroImages: { primary: string; secondary: string; tertiary: string };
    aboutImages: { factory: string; team: string; heritage: string };
    qualityImage: string;
}>();

const page = usePage();
const company = computed(() => (page.props as any).company);

const stats = [
    { label: 'Years of Precision', to: 34, suffix: '+' },
    { label: 'Machines Delivered', to: 2500, suffix: '+' },
    { label: 'Countries Served', to: 25, suffix: '+' },
    { label: 'Pharma Clients', to: 450, suffix: '+' },
];

const pillars = [
    { title: 'cGMP by design', body: 'SS 316L, documented traceability, FAT/SAT, IQ/OQ/PQ on every build.' },
    { title: 'Injectable specialists', body: 'Complete ampoule & vial lines — washing, filling, sealing, inspection.' },
    { title: 'In-house engineering', body: '34-year Ahmedabad workshop. Mechanical, servo and controls under one roof.' },
    { title: 'Global after-sales', body: 'Spare-parts stocked regionally. On-site service in 72 hours.' },
];

const process = [
    { step: '01', title: 'Consult', body: 'Share URS, product, container, batch size — we come back with a specification in 48 hours.' },
    { step: '02', title: 'Design', body: 'Engineering drawings, DQ documentation, 3D layouts and material plans for approval.' },
    { step: '03', title: 'Build', body: 'In-house machining, assembly, servo integration, PLC programming and run-in testing.' },
    { step: '04', title: 'Validate', body: 'FAT at our Ahmedabad floor with your team + full protocol sign-off before ship.' },
    { step: '05', title: 'Commission', body: 'On-site SAT, operator training, IQ/OQ/PQ execution, documentation handover.' },
    { step: '06', title: 'Support', body: '24-month warranty, regional spare stocking, remote diagnostics, life-of-machine updates.' },
];

const industries = [
    { name: 'Pharmaceutical', slug: 'pharmaceutical', body: 'Small-volume parenterals, LVP, tablets, oral liquids.' },
    { name: 'Biotech & Biosimilars', slug: 'biotech', body: 'Sterile vial filling with nitrogen purge, cold-chain ready.' },
    { name: 'Nutraceutical', slug: 'nutraceutical', body: 'Liquid and powder filling for wellness brands.' },
    { name: 'Cosmetics', slug: 'cosmetics', body: 'Cream, ointment, gel vacuum manufacturing.' },
    { name: 'Ayurvedic / Herbal', slug: 'ayurvedic', body: 'Syrups, tablets, labelling tailored for herbal production.' },
    { name: 'Veterinary', slug: 'veterinary', body: 'Scaled filling for veterinary injectables and oral dosing.' },
];

// Bento grid layout — 6 primary categories with varying sizes
const bento = computed(() => {
    const cats = props.categories ?? [];
    return [
        { ...cats[0], span: 'lg:col-span-2 lg:row-span-2', tall: true },
        { ...cats[1], span: 'lg:col-span-2' },
        { ...cats[2], span: 'lg:col-span-2' },
        { ...cats[3], span: 'lg:col-span-2' },
        { ...cats[4], span: 'lg:col-span-2' },
        { ...cats[5], span: 'lg:col-span-2' },
    ].filter((c) => c.id);
});
</script>

<template>
    <SeoHead
        title="Kailash Machine Tools - Pharmaceutical Machinery Manufacturer in India"
        description="Kailash Machine Tools is a pharmaceutical machinery manufacturer in Ahmedabad, India. Explore vial filling, ampoule filling, washing, capping, labelling and turnkey pharma lines."
        keywords="kailash machine tools, pharmaceutical machinery manufacturer india, vial filling machine manufacturer, ampoule filling machine, pharma industry machines"
    />

    <Head>
        <link
            rel="preload"
            as="image"
            :href="heroImages.primary"
            :imagesrcset="heroImages.primary"
            imagesizes="100vw"
        />
    </Head>

    <!-- CINEMATIC HERO ============================================== -->
    <section class="relative isolate overflow-hidden text-white">
        <!-- Background image + Ken Burns zoom (responsive srcset) -->
        <div class="absolute inset-0 -z-20">
            <img
                :src="heroImages.primary"
                alt="Pharmaceutical machinery manufacturer Kailash Machine Tools — vial filling line at Ahmedabad factory"
                class="size-full object-cover ken-burns"
                fetchpriority="high"
                loading="eager"
                decoding="async"
                width="1800" height="1200"
                sizes="100vw"
            />
        </div>
        <!-- Dark navy overlay -->
        <div class="absolute inset-0 -z-10 bg-gradient-to-br from-[color:var(--color-brand)]/95 via-[color:var(--color-brand)]/80 to-[#061433]/95" />
        <!-- Animated mesh -->
        <div class="mesh-hero-animated absolute inset-0 -z-10 opacity-60 mix-blend-screen" />
        <!-- Grid pattern -->
        <div class="bg-grid-dark grid-pattern-fade absolute inset-0 -z-10 opacity-30" />
        <!-- Noise grain -->
        <div class="noise-overlay absolute inset-0 -z-10" />

        <div class="mx-auto grid max-w-7xl gap-12 px-4 pt-24 pb-32 sm:px-6 lg:grid-cols-12 lg:px-8 lg:pt-36 lg:pb-40">
            <div class="lg:col-span-7">
                <span v-motion :initial="{ opacity: 0, y: 12 }" :enter="{ opacity: 1, y: 0, transition: { duration: 700 } }" class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-teal-200 backdrop-blur">
                    <span class="relative flex size-2">
                        <span class="absolute inline-flex size-full animate-ping rounded-full bg-teal-300 opacity-75"></span>
                        <span class="relative inline-flex size-2 rounded-full bg-teal-300"></span>
                    </span>
                    Engineering since 1991 · Formerly Shree Ganesh Pharmatech
                </span>
                <h1 v-motion :initial="{ opacity: 0, y: 24 }" :enter="{ opacity: 1, y: 0, transition: { duration: 900, delay: 100 } }" class="mt-7 font-heading text-balance text-[2.75rem] leading-[0.95] sm:text-6xl lg:text-[5rem]">
                    Precision <span class="text-gradient-brand">pharmaceutical</span><br>
                    machinery, engineered<br>
                    for the next generation.
                </h1>
                <p v-motion :initial="{ opacity: 0, y: 24 }" :enter="{ opacity: 1, y: 0, transition: { duration: 900, delay: 220 } }" class="mt-7 max-w-2xl text-lg leading-8 text-slate-200">
                    From ampoule washing to vial filling, capping, labelling and turnkey lines — Kailash Machine Tools delivers cGMP-ready pharma equipment to manufacturers across 25+ countries.
                </p>
                <div v-motion :initial="{ opacity: 0, y: 24 }" :enter="{ opacity: 1, y: 0, transition: { duration: 900, delay: 340 } }" class="mt-10 flex flex-wrap items-center gap-4">
                    <MagneticButton>
                        <Link href="/products" class="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[color:var(--color-brand)] shadow-xl shadow-teal-500/20 transition hover:bg-teal-300">
                            Explore Machinery
                            <svg class="size-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                        </Link>
                    </MagneticButton>
                    <Link href="/contact" class="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:border-teal-300 hover:bg-white/10 hover:text-teal-300">
                        Request Quote
                    </Link>
                </div>

                <!-- tiny trust line -->
                <div v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { duration: 900, delay: 500 } }" class="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-slate-400">
                    <span class="flex items-center gap-2"><svg class="size-4 text-teal-400" fill="currentColor" viewBox="0 0 20 20"><path d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"/></svg> cGMP</span>
                    <span class="flex items-center gap-2"><svg class="size-4 text-teal-400" fill="currentColor" viewBox="0 0 20 20"><path d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"/></svg> SS 316L</span>
                    <span class="flex items-center gap-2"><svg class="size-4 text-teal-400" fill="currentColor" viewBox="0 0 20 20"><path d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"/></svg> FAT / SAT</span>
                    <span class="flex items-center gap-2"><svg class="size-4 text-teal-400" fill="currentColor" viewBox="0 0 20 20"><path d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"/></svg> IQ / OQ / PQ</span>
                </div>
            </div>

            <!-- Floating glass spec card -->
            <div class="relative lg:col-span-5">
                <div v-motion :initial="{ opacity: 0, scale: 0.92, y: 40 }" :enter="{ opacity: 1, scale: 1, y: 0, transition: { duration: 1200, delay: 400 } }" class="relative">
                    <div class="glass-dark relative rounded-3xl p-6 shadow-2xl">
                        <!-- secondary image inside card -->
                        <div class="aspect-[4/3] overflow-hidden rounded-2xl">
                            <img
                                :src="heroImages.secondary"
                                alt="Filled pharmaceutical vials on a cGMP production line"
                                class="size-full object-contain object-center"
                                width="800"
                                height="600"
                                loading="eager"
                                sizes="(min-width: 1024px) 36vw, 92vw"
                            />
                        </div>
                        <div class="mt-5 grid grid-cols-2 gap-3">
                            <div class="rounded-xl border border-white/10 bg-white/5 p-4">
                                <div class="font-mono text-[10px] uppercase tracking-widest text-teal-300">Vial fill</div>
                                <div class="mt-1 font-heading text-2xl font-semibold">±0.5 %</div>
                            </div>
                            <div class="rounded-xl border border-white/10 bg-white/5 p-4">
                                <div class="font-mono text-[10px] uppercase tracking-widest text-teal-300">Output</div>
                                <div class="mt-1 font-heading text-2xl font-semibold">300 BPM</div>
                            </div>
                            <div class="rounded-xl border border-white/10 bg-white/5 p-4">
                                <div class="font-mono text-[10px] uppercase tracking-widest text-teal-300">Contact parts</div>
                                <div class="mt-1 font-heading text-sm font-semibold">SS 316 L</div>
                            </div>
                            <div class="rounded-xl border border-white/10 bg-white/5 p-4">
                                <div class="font-mono text-[10px] uppercase tracking-widest text-teal-300">Finish</div>
                                <div class="mt-1 font-heading text-sm font-semibold">Ra &lt; 0.4 µm</div>
                            </div>
                        </div>
                    </div>
                    <div class="absolute -left-10 -top-10 -z-10 size-48 rounded-full bg-teal-400/40 blur-3xl" />
                    <div class="absolute -bottom-12 -right-12 -z-10 size-64 rounded-full bg-cyan-400/40 blur-3xl" />
                </div>
            </div>
        </div>

    </section>

    <!-- STATS STRIP ============================================== -->
    <section class="relative -mt-16 px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-7xl">
            <ScrollReveal :stagger="0.12" :y="24" target=".stat-card">
                <div class="glass grid divide-x divide-slate-200 overflow-hidden rounded-3xl shadow-xl md:grid-cols-4">
                    <div v-for="(s, i) in stats" :key="i" class="stat-card p-8 text-center">
                        <div class="font-heading text-4xl font-semibold text-[color:var(--color-brand)] sm:text-5xl">
                            <AnimatedCounter :to="s.to" :suffix="s.suffix" />
                        </div>
                        <div class="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{{ s.label }}</div>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    </section>

    <!-- WHY KAILASH ============================================== -->
    <section class="relative py-24 sm:py-32">
        <div class="bg-grid absolute inset-0 opacity-40" />
        <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
                <div class="lg:col-span-5">
                    <ScrollReveal :y="20">
                        <p class="text-xs font-semibold uppercase tracking-[0.22em] text-teal-600">Why Kailash</p>
                        <h2 class="mt-3 font-heading text-balance text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                            Built for pharma. <span class="text-gradient-brand">Proven across continents.</span>
                        </h2>
                        <p class="mt-6 max-w-xl text-base leading-8 text-slate-600">
                            We engineer reliability into every mechanism — from rotary vial washers and high-precision injectable fillers to complete turnkey lines audited by global regulators.
                        </p>
                        <Link href="/about" class="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-brand)] hover:text-[color:var(--color-brand-accent)]">
                            Our story <span class="transition group-hover:translate-x-1">→</span>
                        </Link>
                    </ScrollReveal>
                </div>
                <div class="lg:col-span-7">
                    <ScrollReveal :stagger="0.12" :y="30" target=".pillar-card">
                        <div class="grid gap-4 sm:grid-cols-2">
                            <div v-for="(p, i) in pillars" :key="i" class="pillar-card hover-lift group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <div class="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[color:var(--color-brand)] to-[color:var(--color-brand-accent)] text-white">
                                    <svg class="size-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                                </div>
                                <h3 class="font-heading text-lg font-semibold text-slate-900">{{ p.title }}</h3>
                                <p class="mt-2 text-sm leading-6 text-slate-600">{{ p.body }}</p>
                                <div class="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[color:var(--color-brand-accent)]/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    </section>

    <!-- BENTO CATEGORIES ============================================== -->
    <section class="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-32">
        <div class="absolute inset-0 opacity-50">
            <div class="mesh-hero-animated absolute inset-0" />
        </div>
        <div class="bg-grid-dark grid-pattern-fade absolute inset-0 opacity-20" />

        <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
                <div>
                    <p class="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">Machinery</p>
                    <h2 class="mt-3 font-heading text-balance text-4xl font-semibold leading-tight sm:text-5xl">
                        A complete pharmaceutical line,<br>engineered by one team.
                    </h2>
                </div>
                <Link href="/products" class="group inline-flex items-center gap-2 text-sm font-semibold text-teal-300 hover:text-white">
                    View all 14 categories
                    <svg class="size-4 transition group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </Link>
            </div>

            <ScrollReveal :stagger="0.1" :y="40" target=".bento-card" class="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
                <Link
                    v-for="c in bento"
                    :key="c.id"
                    :href="`/products/${c.slug}`"
                    :class="['bento-card group relative overflow-hidden rounded-2xl border border-white/10', c.span]"
                >
                    <img
                        v-if="c.hero_image"
                        :src="c.hero_image"
                        :alt="c.name + ' — Kailash Machine Tools'"
                        :class="['absolute inset-0 size-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110', c.tall ? 'aspect-auto' : 'aspect-[16/10]']"
                        loading="lazy"
                        width="1200" height="800"
                        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 96vw"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                    <div class="relative flex h-full min-h-[220px] flex-col justify-end p-6">
                        <div class="mb-3 inline-flex size-9 items-center justify-center rounded-lg bg-white/10 backdrop-blur">
                            <CategoryIcon :name="c.icon" class="size-5 text-teal-300" />
                        </div>
                        <h3 :class="['font-heading font-semibold', c.tall ? 'text-3xl' : 'text-xl']">{{ c.name }}</h3>
                        <p class="mt-1 text-sm text-slate-300" :class="c.tall ? 'max-w-sm' : 'line-clamp-1'">{{ c.tagline }}</p>
                        <div class="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-teal-300">
                            Discover <span class="transition group-hover:translate-x-1">→</span>
                        </div>
                    </div>
                </Link>
            </ScrollReveal>
        </div>
    </section>

    <!-- HOW WE BUILD ============================================== -->
    <section class="relative py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal :y="20">
                <p class="text-xs font-semibold uppercase tracking-[0.22em] text-teal-600">Our Process</p>
                <h2 class="mt-3 font-heading text-balance text-4xl font-semibold text-slate-900 sm:text-5xl">From URS to validated line — six deliberate steps.</h2>
            </ScrollReveal>

            <ScrollReveal :stagger="0.1" :y="30" target=".step-card" class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <div v-for="(s, i) in process" :key="i" class="step-card group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[color:var(--color-brand-accent)]/40 hover:shadow-[var(--shadow-brand)]">
                    <span class="font-mono text-xs font-semibold uppercase tracking-widest text-[color:var(--color-brand-accent)]">{{ s.step }}</span>
                    <h3 class="mt-4 font-heading text-xl font-semibold text-slate-900">{{ s.title }}</h3>
                    <p class="mt-3 text-sm leading-6 text-slate-600">{{ s.body }}</p>
                    <div class="absolute -right-4 -top-4 size-20 rounded-full bg-gradient-to-br from-teal-400/20 to-cyan-400/20 blur-2xl transition-opacity group-hover:opacity-100" />
                </div>
            </ScrollReveal>
        </div>
    </section>

    <!-- FEATURED PRODUCTS ============================================== -->
    <section class="relative bg-gradient-to-b from-slate-50 to-white py-24 sm:py-32">
        <div class="bg-grid absolute inset-0 opacity-40" />
        <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex items-end justify-between gap-6">
                <ScrollReveal :y="20">
                    <p class="text-xs font-semibold uppercase tracking-[0.22em] text-teal-600">Flagship Machinery</p>
                    <h2 class="mt-3 font-heading text-balance text-4xl font-semibold text-slate-900 sm:text-5xl">Lines trusted by pharma leaders.</h2>
                </ScrollReveal>
                <Link href="/products" class="hidden text-sm font-semibold text-[color:var(--color-brand)] hover:text-[color:var(--color-brand-accent)] sm:inline">All products →</Link>
            </div>
            <ScrollReveal :stagger="0.1" :y="30" target=".prod" class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div v-for="p in featured" :key="p.id" class="prod">
                    <ProductCard :product="p" />
                </div>
            </ScrollReveal>
        </div>
    </section>

    <!-- SPLIT: QUALITY / HERITAGE ============================================== -->
    <section class="relative py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="grid items-center gap-12 lg:grid-cols-2">
                <ScrollReveal :y="30" :stagger="0.12" target=".reveal-item">
                    <div class="reveal-item">
                        <p class="text-xs font-semibold uppercase tracking-[0.22em] text-teal-600">Quality & Compliance</p>
                    </div>
                    <h2 class="reveal-item mt-3 font-heading text-balance text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                        Auditable by design. <span class="text-gradient-brand">Validated on delivery.</span>
                    </h2>
                    <p class="reveal-item mt-6 max-w-xl text-base leading-8 text-slate-600">
                        Every build assumes your plant will be audited tomorrow — and makes sure the machine passes. Full material traceability, sanitary design, IQ/OQ/PQ protocols in the box.
                    </p>
                    <ul class="reveal-item mt-8 space-y-3 text-sm text-slate-700">
                        <li class="flex items-start gap-3"><svg class="mt-0.5 size-5 shrink-0 text-[color:var(--color-brand-accent)]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"/></svg> cGMP + EU-GMP aligned construction</li>
                        <li class="flex items-start gap-3"><svg class="mt-0.5 size-5 shrink-0 text-[color:var(--color-brand-accent)]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"/></svg> SS 316L contact parts, Ra &lt; 0.4 µm finish</li>
                        <li class="flex items-start gap-3"><svg class="mt-0.5 size-5 shrink-0 text-[color:var(--color-brand-accent)]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"/></svg> FAT / SAT protocols, IQ/OQ/PQ documentation</li>
                        <li class="flex items-start gap-3"><svg class="mt-0.5 size-5 shrink-0 text-[color:var(--color-brand-accent)]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"/></svg> CE-ready variants for EU export</li>
                    </ul>
                    <Link href="/quality-compliance" class="reveal-item mt-8 inline-flex items-center gap-2 rounded-full bg-[color:var(--color-brand)] px-6 py-3 text-sm font-semibold text-white hover:bg-[color:var(--color-brand-accent)]">
                        Our quality commitment
                        <svg class="size-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </Link>
                </ScrollReveal>

                <ScrollReveal :y="30" :x="30">
                    <div class="relative">
                        <div class="overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
                            <img :src="qualityImage" alt="Cleanroom operator at a cGMP-compliant pharmaceutical facility" class="aspect-[4/5] w-full object-cover" loading="lazy" width="800" height="1000" />
                        </div>
                        <div class="absolute -bottom-6 -left-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
                            <div class="flex items-center gap-3">
                                <div class="inline-flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-[color:var(--color-brand)] to-[color:var(--color-brand-accent)] text-white"><svg class="size-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.6-4A11.95 11.95 0 0112 2a11.95 11.95 0 01-8.6 3A12 12 0 0012 21a12 12 0 008.6-15z"/></svg></div>
                                <div>
                                    <div class="font-heading text-sm font-semibold text-slate-900">cGMP Compliant</div>
                                    <div class="text-xs text-slate-500">Audited by global regulators</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    </section>

    <!-- INDUSTRIES ============================================== -->
    <section class="relative overflow-hidden bg-slate-50 py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal :y="20">
                <p class="text-xs font-semibold uppercase tracking-[0.22em] text-teal-600">Industries We Serve</p>
                <h2 class="mt-3 font-heading text-balance text-4xl font-semibold text-slate-900 sm:text-5xl">Engineered for every regulated environment.</h2>
            </ScrollReveal>
            <ScrollReveal :stagger="0.08" :y="30" target=".ind-card" class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Link
                    v-for="i in industries"
                    :key="i.slug"
                    href="/industries"
                    class="ind-card group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-[color:var(--color-brand-accent)]/40 hover:shadow-[var(--shadow-brand)]"
                >
                    <h3 class="font-heading text-xl font-semibold text-slate-900 group-hover:text-[color:var(--color-brand-accent)]">{{ i.name }}</h3>
                    <p class="mt-2 text-sm leading-6 text-slate-600">{{ i.body }}</p>
                    <span class="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--color-brand)]">Learn more <span class="transition group-hover:translate-x-1">→</span></span>
                </Link>
            </ScrollReveal>
        </div>
    </section>

    <!-- CLIENTS MARQUEE ============================================== -->
    <section class="border-y border-slate-200 bg-white py-14">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p class="text-center text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Trusted by 450+ pharmaceutical manufacturers worldwide</p>
        </div>
        <div class="mt-8">
            <InfiniteMarquee :speed="50">
                <div
                    v-for="c in clients"
                    :key="c.id"
                    class="flex h-20 min-w-[190px] items-center justify-center rounded-lg border border-slate-200 bg-white px-6 shadow-sm transition"
                >
                    <img
                        v-if="c.logo"
                        :src="c.logo"
                        :alt="c.name"
                        class="h-12 w-auto max-w-[150px] object-contain"
                        loading="lazy"
                    >
                    <span
                        v-else
                        class="text-sm font-semibold tracking-wider text-slate-600"
                    >
                        {{ c.name }}
                    </span>
                </div>
            </InfiniteMarquee>
        </div>
    </section>

    <!-- BLOG / INSIGHTS ============================================== -->
    <section v-if="latestPosts?.length" class="relative py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex items-end justify-between gap-6">
                <ScrollReveal :y="20">
                    <p class="text-xs font-semibold uppercase tracking-[0.22em] text-teal-600">Insights</p>
                    <h2 class="mt-3 font-heading text-balance text-4xl font-semibold text-slate-900 sm:text-5xl">Buying guides &amp; technical articles.</h2>
                </ScrollReveal>
                <Link href="/blog" class="hidden text-sm font-semibold text-[color:var(--color-brand)] hover:text-[color:var(--color-brand-accent)] sm:inline">All articles →</Link>
            </div>
            <ScrollReveal :stagger="0.1" :y="30" target=".post" class="mt-12 grid gap-6 lg:grid-cols-3">
                <Link v-for="post in latestPosts" :key="post.id" :href="`/blog/${post.slug}`" class="post group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-[var(--shadow-brand)]">
                    <div class="relative aspect-[16/10] overflow-hidden bg-slate-100">
                        <img
                            v-if="post.hero_image"
                            :src="post.hero_image"
                            :alt="post.title"
                            class="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                            width="800"
                            height="500"
                            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 96vw"
                        />
                    </div>
                    <div class="p-6">
                        <div class="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-teal-600">
                            <span>{{ post.category_tag }}</span>
                            <span class="size-1 rounded-full bg-slate-300"></span>
                            <span>{{ post.reading_minutes }} min read</span>
                        </div>
                        <h3 class="mt-3 font-heading text-lg font-semibold text-slate-900 group-hover:text-[color:var(--color-brand-accent)]">{{ post.title }}</h3>
                        <p class="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">{{ post.excerpt }}</p>
                    </div>
                </Link>
            </ScrollReveal>
        </div>
    </section>

    <!-- FINAL CTA ============================================== -->
    <section class="relative isolate overflow-hidden">
        <div class="mesh-hero-animated absolute inset-0" />
        <div class="bg-grid-dark grid-pattern-fade absolute inset-0 opacity-30" />
        <div class="noise-overlay absolute inset-0" />
        <div class="relative mx-auto max-w-7xl px-4 py-24 text-white sm:px-6 lg:px-8 lg:py-32">
            <div class="max-w-4xl">
                <h2 class="font-heading text-balance text-4xl font-semibold leading-tight sm:text-6xl">
                    Planning a new line or expansion?<br>
                    <span class="text-gradient-brand">Let's engineer it together.</span>
                </h2>
                <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                    Share your product, batch size and target output. Our application engineers will come back with a machine specification within 48 hours.
                </p>
                <div class="mt-10 flex flex-wrap gap-4">
                    <MagneticButton>
                        <Link href="/contact" class="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[color:var(--color-brand)] shadow-xl hover:bg-teal-300">
                            Request Consultation
                            <svg class="size-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                        </Link>
                    </MagneticButton>
                    <a :href="`tel:${company?.phone?.replace(/\\s/g,'')}`" class="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur hover:border-teal-300 hover:text-teal-300">
                        {{ company?.phone }}
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
