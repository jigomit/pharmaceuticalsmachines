<script setup lang="ts">
import SeoHead from '@/Components/SeoHead.vue';
import EnquiryForm from '@/Components/EnquiryForm.vue';
import ProductCard from '@/Components/ProductCard.vue';
import ImageLightbox from '@/Components/ImageLightbox.vue';
import { Link } from '@inertiajs/vue3';
import { computed, ref } from 'vue';

const props = defineProps<{ product: any; related: any[] }>();

const gallery = computed(() => {
    const imgs: string[] = [];
    if (props.product.hero_image) imgs.push(props.product.hero_image);
    if (Array.isArray(props.product.images)) {
        props.product.images.forEach((u: string) => { if (u && !imgs.includes(u)) imgs.push(u); });
    }
    return imgs;
});

const activeImage = ref(0);
const lightboxOpen = ref(false);
const lightboxIndex = ref(0);

const openLightbox = (i: number) => { lightboxIndex.value = i; lightboxOpen.value = true; };

const SITE = 'https://pharmaceuticalsmachines.com';
const productUrl = computed(() => `${SITE}/products/${props.product.category?.slug}/${props.product.slug}`);

const productSchema = computed(() => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: props.product.name,
    description: props.product.short_description,
    sku: props.product.model_code || `KMT-${props.product.id}`,
    mpn: props.product.model_code || `KMT-${props.product.id}`,
    brand: { '@type': 'Brand', name: 'Kailash Machine Tools' },
    manufacturer: {
        '@type': 'Organization',
        name: 'Kailash Machine Tools',
        url: SITE,
        address: 'Vatva, Ahmedabad, Gujarat, India',
    },
    category: props.product.category?.name,
    image: gallery.value.length ? gallery.value : [`${SITE}/og-default.jpg`],
    url: productUrl.value,
    material: 'AISI 316L stainless steel (product-contact parts)',
    countryOfOrigin: 'IN',
    audience: { '@type': 'BusinessAudience', audienceType: 'Pharmaceutical manufacturers' },
    offers: {
        '@type': 'Offer',
        url: productUrl.value,
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'INR',
            valueAddedTaxIncluded: false,
            description: 'Price on request — quotation issued within 48 hours',
        },
        seller: { '@type': 'Organization', name: 'Kailash Machine Tools', url: SITE },
        areaServed: 'Worldwide',
    },
}));

const breadcrumbSchema = computed(() => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE}/products` },
        { '@type': 'ListItem', position: 3, name: props.product.category?.name, item: `${SITE}/products/${props.product.category?.slug}` },
        { '@type': 'ListItem', position: 4, name: props.product.name, item: productUrl.value },
    ],
}));

const faqSchema = computed(() => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: `What is the lead time for the ${props.product.name}?`,
            acceptedAnswer: { '@type': 'Answer', text: 'Standard configurations ship in 6–10 weeks from purchase order. Customised builds: 12–18 weeks depending on scope.' },
        },
        {
            '@type': 'Question',
            name: `Is the ${props.product.name} cGMP compliant?`,
            acceptedAnswer: { '@type': 'Answer', text: 'Yes. SS 316L product-contact parts, Ra < 0.4 µm finish, and full IQ/OQ/PQ documentation are included on every machine.' },
        },
        {
            '@type': 'Question',
            name: 'Do you provide installation and validation support?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes — FAT at our Ahmedabad floor, plus on-site SAT, operator training, and IQ/OQ/PQ execution at your facility.' },
        },
        {
            '@type': 'Question',
            name: 'Can the machine be customised for our product?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes. Over 60% of our builds include customisation — from contact-part geometry to special control logic. Share a URS for a 48-hour response.' },
        },
        {
            '@type': 'Question',
            name: 'What is the warranty on this machine?',
            acceptedAnswer: { '@type': 'Answer', text: '24-month standard warranty on parts and workmanship, plus regional spare-parts stocking and remote diagnostics.' },
        },
    ],
}));
</script>

<template>
    <SeoHead
        :title="product.meta_title ?? `${product.name} | Manufacturer`"
        :description="product.meta_description ?? product.short_description"
        :image="gallery[0]"
        type="product"
        :schema="[productSchema, breadcrumbSchema, faqSchema]"
    />

    <nav class="border-b border-slate-100 bg-white py-3 text-xs">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ol class="flex flex-wrap items-center gap-2 text-slate-500">
                <li><Link href="/" class="hover:text-[color:var(--color-brand)]">Home</Link></li>
                <li>/</li>
                <li><Link href="/products" class="hover:text-[color:var(--color-brand)]">Products</Link></li>
                <li>/</li>
                <li><Link :href="`/products/${product.category.slug}`" class="hover:text-[color:var(--color-brand)]">{{ product.category.name }}</Link></li>
                <li>/</li>
                <li class="text-slate-900">{{ product.name }}</li>
            </ol>
        </div>
    </nav>

    <section class="bg-white py-12 sm:py-16">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="grid gap-10 lg:grid-cols-12">
                <div class="lg:col-span-7">
                    <!-- main image -->
                    <button
                        type="button"
                        @click="openLightbox(activeImage)"
                        class="group relative block aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100"
                    >
                        <img
                            v-if="gallery[activeImage]"
                            :src="gallery[activeImage]"
                            :alt="product.name + ' — ' + product.category.name"
                            class="absolute inset-0 size-full object-contain transition-transform duration-500 group-hover:scale-105"
                            width="1200" height="900"
                            loading="eager" fetchpriority="high"
                        />
                        <span class="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-medium text-slate-700 shadow opacity-0 transition-opacity group-hover:opacity-100">
                            <svg class="size-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"/></svg>
                            Expand
                        </span>
                        <span class="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-[color:var(--color-brand)]">{{ product.category.name }}</span>
                    </button>
                    <!-- thumbnails -->
                    <div v-if="gallery.length > 1" class="mt-4 grid grid-cols-4 gap-3">
                        <button
                            v-for="(g, i) in gallery"
                            :key="i"
                            type="button"
                            @click="activeImage = i"
                            :class="['relative aspect-square overflow-hidden rounded-xl border-2 transition', activeImage === i ? 'border-[color:var(--color-brand-accent)]' : 'border-slate-200 opacity-70 hover:opacity-100']"
                        >
                            <img :src="g" :alt="`${product.name} view ${i + 1}`" class="absolute inset-0 size-full object-cover" loading="lazy" width="200" height="200" />
                        </button>
                    </div>
                </div>

                <div class="lg:col-span-5">
                    <p v-if="product.model_code" class="font-mono text-xs uppercase tracking-widest text-teal-600">Model {{ product.model_code }}</p>
                    <h1 class="mt-2 font-heading text-balance text-3xl font-semibold text-slate-900 sm:text-4xl">{{ product.name }}</h1>
                    <p class="mt-4 text-base leading-7 text-slate-600">{{ product.short_description }}</p>

                    <div v-if="product.specs" class="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                        <div class="border-b border-slate-200 bg-white px-5 py-3">
                            <h2 class="text-xs font-semibold uppercase tracking-widest text-slate-500">Key Specifications</h2>
                        </div>
                        <dl class="divide-y divide-slate-200">
                            <div v-for="(v, k) in product.specs" :key="k" class="flex items-baseline justify-between gap-3 px-5 py-3">
                                <dt class="text-xs text-slate-500">{{ k }}</dt>
                                <dd class="text-right font-mono text-sm text-slate-900">{{ v }}</dd>
                            </div>
                        </dl>
                    </div>

                    <div class="mt-8 flex flex-wrap gap-3">
                        <a href="#enquire" class="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-brand)] px-6 py-3 text-sm font-semibold text-white hover:bg-[color:var(--color-brand-accent)]">
                            Request Quotation
                            <svg class="size-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                        </a>
                        <a href="https://wa.me/919825018210" target="_blank" rel="noopener" class="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:border-teal-500 hover:text-teal-600">
                            Chat on WhatsApp
                        </a>
                    </div>

                    <!-- Trust badges -->
                    <div class="mt-8 grid grid-cols-2 gap-3 text-xs">
                        <div class="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-slate-600"><svg class="size-4 text-teal-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"/></svg> cGMP compliant build</div>
                        <div class="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-slate-600"><svg class="size-4 text-teal-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"/></svg> SS 316L contact parts</div>
                        <div class="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-slate-600"><svg class="size-4 text-teal-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"/></svg> IQ / OQ / PQ support</div>
                        <div class="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-slate-600"><svg class="size-4 text-teal-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"/></svg> 24-month warranty</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="bg-slate-50 py-16">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="grid gap-12 lg:grid-cols-3">
                <div class="lg:col-span-2">
                    <article class="prose prose-slate max-w-none">
                        <div v-html="product.long_description?.replace(/\n\n/g, '<br><br>')" />
                    </article>

                    <div v-if="product.features?.length" class="mt-12">
                        <h2 class="font-heading text-2xl font-semibold text-slate-900">Features</h2>
                        <ul class="mt-6 grid gap-3 sm:grid-cols-2">
                            <li v-for="(f, i) in product.features" :key="i" class="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
                                <svg class="mt-0.5 size-5 shrink-0 text-teal-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"/></svg>
                                <span>{{ f }}</span>
                            </li>
                        </ul>
                    </div>

                    <div v-if="product.applications?.length" class="mt-12">
                        <h2 class="font-heading text-2xl font-semibold text-slate-900">Applications</h2>
                        <div class="mt-4 flex flex-wrap gap-2">
                            <span v-for="(a, i) in product.applications" :key="i" class="rounded-full bg-white px-4 py-1.5 text-sm text-slate-700 ring-1 ring-slate-200">{{ a }}</span>
                        </div>
                    </div>
                </div>

                <aside class="lg:col-span-1">
                    <div id="enquire" class="sticky top-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h3 class="font-heading text-lg font-semibold text-slate-900">Enquire about this machine</h3>
                        <p class="mt-1 text-sm text-slate-500">We reply within 24 business hours.</p>
                        <div class="mt-4">
                            <EnquiryForm :product-slug="product.slug" compact />
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    </section>

    <section v-if="related?.length" class="py-16 sm:py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 class="font-heading text-2xl font-semibold text-slate-900">Related machines</h2>
            <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <ProductCard v-for="r in related" :key="r.id" :product="r" />
            </div>
        </div>
    </section>

    <ImageLightbox
        :open="lightboxOpen"
        :images="gallery.map((src, i) => ({ src, alt: `${product.name} — image ${i + 1}` }))"
        :initial-index="lightboxIndex"
        @close="lightboxOpen = false"
    />
</template>
