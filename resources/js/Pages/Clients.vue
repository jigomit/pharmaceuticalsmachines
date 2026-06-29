<script setup lang="ts">
import SeoHead from '@/Components/SeoHead.vue';

defineProps<{
    clients: any[];
    exportCountries: any[];
}>();
</script>

<template>
    <SeoHead title="Our Clients — 450+ Pharmaceutical Manufacturers" description="Pharmaceutical manufacturers worldwide who trust us (formerly Shree Ganesh Pharmatech) for their injectable and packaging machinery." />

    <section class="mesh-hero relative py-20 text-white">
        <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">Clients</p>
            <h1 class="mt-3 max-w-3xl text-4xl font-semibold sm:text-5xl">Trusted by pharma manufacturers across the world.</h1>
        </div>
    </section>

    <section class="py-16">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                <div v-for="c in clients" :key="c.id" class="flex h-32 items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 text-center text-sm font-semibold text-slate-700 shadow-sm">
                    <img
                        v-if="c.logo"
                        :src="c.logo"
                        :alt="c.name"
                        class="h-20 w-auto max-w-full object-contain sm:h-24"
                        loading="lazy"
                    >
                    <span v-else>{{ c.name }}</span>
                </div>
            </div>
        </div>
    </section>

    <section class="border-t border-slate-200 bg-slate-50 py-16">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="mb-10 text-center">
                <p class="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">Global Reach</p>
                <h2 class="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">Export Countries</h2>
                <p class="mx-auto mt-3 max-w-2xl text-slate-600">We export pharmaceutical machinery worldwide.</p>
            </div>

            <div class="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-5">
                <div
                    v-for="country in exportCountries"
                    :key="country.id"
                    class="flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm"
                >
                    <img
                        v-if="country.flag"
                        :src="country.flag"
                        :alt="`${country.country_name} flag`"
                        class="h-12 w-auto max-w-full object-contain sm:h-14"
                        loading="lazy"
                    >
                    <span class="text-xs font-semibold text-slate-700 sm:text-sm">{{ country.country_name }}</span>
                </div>
            </div>
        </div>
    </section>
</template>
