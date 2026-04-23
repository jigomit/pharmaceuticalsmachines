<script setup lang="ts">
import SiteNav from '@/Components/SiteNav.vue';
import SiteFooter from '@/Components/SiteFooter.vue';
import { Head, usePage } from '@inertiajs/vue3';
import { computed } from 'vue';

const page = usePage();
const company = computed(() => (page.props as any).company);

const SITE = 'https://pharmaceuticalsmachines.com';

const sameAs = computed(() => Object.values(company.value?.socials ?? {}).filter(Boolean));

const addr = computed(() => ({
    '@type': 'PostalAddress',
    streetAddress: `${company.value?.address?.street}, ${company.value?.address?.locality}`,
    addressLocality: company.value?.address?.city,
    addressRegion: company.value?.address?.region,
    postalCode: company.value?.address?.postal_code,
    addressCountry: company.value?.address?.country,
}));

const globalSchema = computed(() => ({
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Organization',
            '@id': `${SITE}/#organization`,
            name: company.value?.name,
            alternateName: ['Shree Ganesh Pharmatech', 'Ganesh Machine Tools', 'Kailash Pharmatech'],
            url: SITE,
            logo: { '@type': 'ImageObject', url: `${SITE}/images/brand/kmt-logo-square.png`, width: 512, height: 512 },
            image: `${SITE}/og-default.jpg`,
            foundingDate: '1991',
            foundingLocation: { '@type': 'Place', name: 'Ahmedabad, Gujarat, India' },
            slogan: company.value?.tagline,
            email: company.value?.email,
            telephone: company.value?.phone,
            address: addr.value,
            sameAs: sameAs.value,
            contactPoint: [{
                '@type': 'ContactPoint',
                telephone: company.value?.phone,
                contactType: 'sales',
                areaServed: ['IN', 'AE', 'SA', 'KE', 'NG', 'TZ', 'VN', 'PH', 'ID', 'EG'],
                availableLanguage: ['en', 'hi', 'gu'],
            }],
            knowsAbout: [
                'Pharmaceutical machinery', 'Vial filling machines', 'Ampoule filling machines',
                'Powder filling machines', 'Capping machines', 'Labelling machines',
                'Tablet press', 'Ointment manufacturing plant', 'Liquid syrup plant',
                'cGMP equipment', 'Injectable line', 'Packaging line',
            ],
        },
        {
            '@type': 'LocalBusiness',
            '@id': `${SITE}/#localbusiness`,
            name: company.value?.name,
            image: `${SITE}/og-default.jpg`,
            telephone: company.value?.phone,
            email: company.value?.email,
            url: SITE,
            priceRange: '$$$',
            address: addr.value,
            geo: {
                '@type': 'GeoCoordinates',
                latitude: company.value?.address?.lat,
                longitude: company.value?.address?.lng,
            },
            openingHoursSpecification: [{
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                opens: '10:00',
                closes: '19:00',
            }],
            paymentAccepted: 'Bank Transfer, Letter of Credit, Wire Transfer',
            currenciesAccepted: 'INR, USD, EUR',
            areaServed: [
                { '@type': 'Country', name: 'India' },
                { '@type': 'Country', name: 'United Arab Emirates' },
                { '@type': 'Country', name: 'Saudi Arabia' },
                { '@type': 'Country', name: 'Kenya' },
                { '@type': 'Country', name: 'Nigeria' },
                { '@type': 'Country', name: 'Vietnam' },
                { '@type': 'Country', name: 'Indonesia' },
            ],
            hasMap: 'https://www.google.com/maps?q=22.947,72.6261',
        },
        {
            '@type': 'WebSite',
            '@id': `${SITE}/#website`,
            url: SITE,
            name: company.value?.name,
            inLanguage: 'en-IN',
            publisher: { '@id': `${SITE}/#organization` },
            potentialAction: {
                '@type': 'SearchAction',
                target: { '@type': 'EntryPoint', urlTemplate: `${SITE}/products?q={search_term_string}` },
                'query-input': 'required name=search_term_string',
            },
        },
    ],
}));
</script>

<template>
    <div class="flex min-h-screen flex-col">
        <Head>
            <component :is="'script'" type="application/ld+json">
                {{ JSON.stringify(globalSchema) }}
            </component>
        </Head>
        <SiteNav />
        <main class="flex-1">
            <slot />
        </main>
        <SiteFooter />

        <a
            :href="`https://wa.me/${company?.whatsapp}?text=${encodeURIComponent('Hello, I would like to enquire about your pharmaceutical machinery.')}`"
            target="_blank"
            rel="noopener"
            class="fixed bottom-5 right-5 z-40 inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-600/30 transition hover:scale-105"
            aria-label="Chat on WhatsApp"
        >
            <svg viewBox="0 0 24 24" class="size-7" fill="currentColor" aria-hidden="true">
                <path d="M20.52 3.48A11.87 11.87 0 0012.05 0C5.5 0 .17 5.33.17 11.88c0 2.09.55 4.13 1.6 5.94L0 24l6.34-1.66a11.85 11.85 0 005.71 1.45h.01c6.54 0 11.87-5.33 11.87-11.88 0-3.17-1.24-6.15-3.41-8.43zM12.06 21.3h-.01a9.43 9.43 0 01-4.8-1.32l-.34-.2-3.76.99 1-3.67-.22-.37a9.41 9.41 0 01-1.44-5.04c0-5.22 4.24-9.46 9.47-9.46 2.53 0 4.9.98 6.69 2.77a9.4 9.4 0 012.76 6.68c0 5.22-4.25 9.46-9.35 9.62zm5.4-7.07c-.3-.15-1.74-.86-2.01-.96-.27-.1-.47-.15-.66.15-.2.3-.75.96-.92 1.15-.17.2-.34.22-.63.08a7.74 7.74 0 01-2.27-1.4 8.44 8.44 0 01-1.57-1.96c-.16-.3 0-.46.13-.6.14-.14.3-.36.46-.53.15-.17.2-.3.3-.5.1-.19.05-.37-.02-.52-.08-.15-.66-1.6-.9-2.18-.24-.57-.48-.5-.66-.5l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.07.15.2 2.1 3.2 5.09 4.49.71.3 1.27.48 1.7.62.71.22 1.36.19 1.88.12.57-.08 1.74-.71 1.98-1.4.24-.68.24-1.27.17-1.4-.07-.12-.27-.2-.57-.35z"/>
            </svg>
        </a>
    </div>
</template>
