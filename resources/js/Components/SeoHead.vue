<script setup lang="ts">
import { Head, usePage } from '@inertiajs/vue3';
import { computed } from 'vue';

const props = defineProps<{
    title?: string;
    description?: string;
    image?: string;
    type?: string;
    noindex?: boolean;
    keywords?: string;
    schema?: object | object[];
}>();

const page = usePage();
const canonical = computed(() => (page.props as any).canonical as string);
const company = computed(() => (page.props as any).company);

const ogTitle = computed(() => props.title ?? `${company.value?.name} | Pharmaceutical Machinery Manufacturer`);
const ogDescription = computed(
    () =>
        props.description ??
        `${company.value?.name} — ${company.value?.tagline}. Leading manufacturer and exporter of injectable, filling, washing, capping and packaging pharmaceutical machinery from Ahmedabad, India.`,
);
const ogImage = computed(() => props.image ?? '/og-default.jpg');

const schemas = computed(() => {
    if (!props.schema) return [];
    return Array.isArray(props.schema) ? props.schema : [props.schema];
});
</script>

<template>
    <Head :title="title">
        <meta name="description" :content="ogDescription" head-key="description" />
        <link rel="canonical" :href="canonical" head-key="canonical" />
        <link rel="alternate" hreflang="en" :href="canonical" head-key="alt-en" />
        <link rel="alternate" hreflang="x-default" :href="canonical" head-key="alt-default" />
        <meta v-if="keywords" name="keywords" :content="keywords" head-key="keywords" />
        <meta v-if="noindex" name="robots" content="noindex,nofollow" head-key="robots" />
        <meta v-else name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" head-key="robots" />
        <meta name="author" content="Kailash Machine Tools" head-key="author" />
        <meta name="publisher" content="Kailash Machine Tools" head-key="publisher" />
        <meta name="geo.region" content="IN-GJ" head-key="geo-region" />
        <meta name="geo.placename" content="Ahmedabad" head-key="geo-place" />
        <meta name="geo.position" content="22.947;72.6261" head-key="geo-pos" />
        <meta name="ICBM" content="22.947, 72.6261" head-key="icbm" />

        <meta property="og:site_name" :content="company?.name" head-key="og:site_name" />
        <meta property="og:type" :content="type ?? 'website'" head-key="og:type" />
        <meta property="og:title" :content="ogTitle" head-key="og:title" />
        <meta property="og:description" :content="ogDescription" head-key="og:description" />
        <meta property="og:url" :content="canonical" head-key="og:url" />
        <meta property="og:image" :content="ogImage" head-key="og:image" />
        <meta property="og:locale" content="en_IN" head-key="og:locale" />

        <meta name="twitter:card" content="summary_large_image" head-key="twitter:card" />
        <meta name="twitter:title" :content="ogTitle" head-key="twitter:title" />
        <meta name="twitter:description" :content="ogDescription" head-key="twitter:description" />
        <meta name="twitter:image" :content="ogImage" head-key="twitter:image" />
    </Head>

    <!-- JSON-LD schemas rendered inline so SSR emits them with content,
         not as innerHTML="..." attributes which crawlers ignore. -->
    <script
        v-for="(s, i) in schemas"
        :key="`schema-${i}`"
        type="application/ld+json"
        v-html="JSON.stringify(s)"
    />
</template>
