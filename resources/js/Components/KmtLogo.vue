<script setup lang="ts">
withDefaults(
    defineProps<{
        class?: string;
        /** Show wordmark next to the mark. */
        withWordmark?: boolean;
        /** Use white wordmark text (for dark backgrounds). */
        light?: boolean;
    }>(),
    { withWordmark: true, light: false },
);
</script>

<template>
    <span :class="['inline-flex items-center gap-2.5', $props.class]">
        <img
            src="/images/brand/kmt-logo.png"
            srcset="/images/brand/kmt-logo.png 1x, /images/brand/kmt-logo-2x.png 2x"
            alt="Kailash Machine Tools"
            width="56"
            height="38"
            class="h-10 w-auto shrink-0"
            decoding="async"
        />
        <span v-if="withWordmark" class="hidden sm:flex flex-col leading-none">
            <span :class="['font-heading text-[15px] font-bold tracking-tight', light ? 'text-white' : 'text-[color:var(--color-brand)]']">
                Kailash Machine Tools
            </span>
            <span :class="['mt-0.5 text-[9px] font-semibold uppercase tracking-[0.2em]', light ? 'text-teal-300' : 'text-teal-600']">
                Since 1991
            </span>
        </span>
    </span>
</template>
