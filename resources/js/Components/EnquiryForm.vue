<script setup lang="ts">
import { useForm, usePage } from '@inertiajs/vue3';
import { computed } from 'vue';

const props = defineProps<{
    productSlug?: string;
    variant?: 'light' | 'dark';
    compact?: boolean;
}>();

const form = useForm({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    message: '',
    product_slug: props.productSlug ?? '',
    website: '', // honeypot
});

const page = usePage();
const flashSuccess = computed(() => (page.props as any).flash?.success);

const submit = () => {
    form.post('/enquiries', {
        preserveScroll: true,
        onSuccess: () => form.reset('name', 'email', 'phone', 'company', 'country', 'message'),
    });
};

const labelClass = computed(() =>
    props.variant === 'dark' ? 'text-slate-300' : 'text-slate-700',
);
const inputClass = computed(() =>
    props.variant === 'dark'
        ? 'mt-1 block w-full rounded-lg border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-400 focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-300/30'
        : 'mt-1 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:border-[color:var(--color-brand-accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-brand-accent)]/30',
);
</script>

<template>
    <form @submit.prevent="submit" class="space-y-4">
        <!-- honeypot -->
        <input v-model="form.website" type="text" name="website" tabindex="-1" autocomplete="off" class="hidden" aria-hidden="true" />

        <div v-if="flashSuccess" class="rounded-lg border border-teal-200 bg-teal-50 px-4 py-3 text-sm text-teal-900">
            {{ flashSuccess }}
        </div>

        <div :class="compact ? 'grid gap-4 sm:grid-cols-2' : 'grid gap-4 sm:grid-cols-2'">
            <div>
                <label :class="labelClass" class="text-xs font-semibold uppercase tracking-widest">Name *</label>
                <input v-model="form.name" type="text" required :class="inputClass" placeholder="Your full name" />
                <p v-if="form.errors.name" class="mt-1 text-xs text-red-500">{{ form.errors.name }}</p>
            </div>
            <div>
                <label :class="labelClass" class="text-xs font-semibold uppercase tracking-widest">Email *</label>
                <input v-model="form.email" type="email" required :class="inputClass" placeholder="you@company.com" />
                <p v-if="form.errors.email" class="mt-1 text-xs text-red-500">{{ form.errors.email }}</p>
            </div>
            <div>
                <label :class="labelClass" class="text-xs font-semibold uppercase tracking-widest">Phone *</label>
                <input v-model="form.phone" type="tel" required :class="inputClass" placeholder="+91 98xxx xxxxx" />
                <p v-if="form.errors.phone" class="mt-1 text-xs text-red-500">{{ form.errors.phone }}</p>
            </div>
            <div>
                <label :class="labelClass" class="text-xs font-semibold uppercase tracking-widest">Company</label>
                <input v-model="form.company" type="text" :class="inputClass" placeholder="Your company" />
            </div>
            <div class="sm:col-span-2">
                <label :class="labelClass" class="text-xs font-semibold uppercase tracking-widest">Country</label>
                <input v-model="form.country" type="text" :class="inputClass" placeholder="India, UAE, Kenya..." />
            </div>
            <div class="sm:col-span-2">
                <label :class="labelClass" class="text-xs font-semibold uppercase tracking-widest">How can we help? *</label>
                <textarea v-model="form.message" rows="4" required :class="inputClass" placeholder="Tell us about your product, batch size, container type and target output..." />
                <p v-if="form.errors.message" class="mt-1 text-xs text-red-500">{{ form.errors.message }}</p>
            </div>
        </div>

        <button
            type="submit"
            :disabled="form.processing"
            class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--color-brand)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[color:var(--color-brand-accent)] disabled:opacity-50 sm:w-auto"
        >
            {{ form.processing ? 'Sending...' : 'Send Enquiry' }}
            <svg v-if="!form.processing" class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </button>
        <p class="text-xs" :class="variant === 'dark' ? 'text-slate-400' : 'text-slate-500'">
            We respond within 24 business hours. No spam. Your details stay with us.
        </p>
    </form>
</template>
