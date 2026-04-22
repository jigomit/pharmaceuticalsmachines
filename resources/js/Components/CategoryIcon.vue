<script setup lang="ts">
defineProps<{ name?: string; class?: string }>();
</script>

<template>
    <svg :class="$props.class ?? 'size-6'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <template v-if="name === 'droplet'"><path d="M12 2l6 9a6 6 0 11-12 0l6-9z"/></template>
        <template v-else-if="name === 'syringe'"><path d="M18 2l4 4M15 5l4 4M6.5 18.5l-2 2M3 21l1.5-1.5M14 6l4 4-9 9H5v-4l9-9z"/></template>
        <template v-else-if="name === 'flask'"><path d="M9 2h6M10 2v6l-5 10a2 2 0 001.8 3h10.4a2 2 0 001.8-3L14 8V2"/></template>
        <template v-else-if="name === 'lock'"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></template>
        <template v-else-if="name === 'tag'"><path d="M20 12l-8 8-9-9V3h8l9 9z"/><circle cx="7.5" cy="7.5" r="1"/></template>
        <template v-else-if="name === 'eye'"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></template>
        <template v-else-if="name === 'pill'"><path d="M10.5 20.5l10-10a5 5 0 00-7-7l-10 10a5 5 0 007 7zM8.5 8.5l7 7"/></template>
        <template v-else-if="name === 'beaker'"><path d="M9 2v7l-5 10a2 2 0 001.8 3h10.4a2 2 0 001.8-3L13 9V2M9 2h4"/></template>
        <template v-else-if="name === 'bottle'"><path d="M10 2h4v4l2 3v12a1 1 0 01-1 1H9a1 1 0 01-1-1V9l2-3V2z"/></template>
        <template v-else-if="name === 'conveyor'"><rect x="2" y="10" width="20" height="6" rx="1"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/><path d="M6 7h12"/></template>
        <template v-else-if="name === 'wrench'"><path d="M14.7 6.3a4 4 0 00-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 005.4-5.4l-3 3-2.4-2.4 3-3z"/></template>
        <template v-else-if="name === 'cabinet'"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M12 3v18M8 9h.01M8 15h.01M16 9h.01M16 15h.01"/></template>
        <template v-else-if="name === 'box'"><path d="M21 8l-9-5-9 5v8l9 5 9-5V8z"/><path d="M3 8l9 5 9-5M12 13v10"/></template>
        <template v-else-if="name === 'cog'"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 00.4 1.9l.1.1a2 2 0 01-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.9-.4 1.7 1.7 0 00-1 1.5V21a2 2 0 01-4 0v-.1a1.7 1.7 0 00-1-1.5 1.7 1.7 0 00-1.9.4l-.1.1a2 2 0 01-2.8-2.8l.1-.1a1.7 1.7 0 00.4-1.9 1.7 1.7 0 00-1.5-1H3a2 2 0 010-4h.1a1.7 1.7 0 001.5-1 1.7 1.7 0 00-.4-1.9l-.1-.1a2 2 0 012.8-2.8l.1.1a1.7 1.7 0 001.9.4H9a1.7 1.7 0 001-1.5V3a2 2 0 014 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.9-.4l.1-.1a2 2 0 012.8 2.8l-.1.1a1.7 1.7 0 00-.4 1.9V9a1.7 1.7 0 001.5 1H21a2 2 0 010 4h-.1a1.7 1.7 0 00-1.5 1z"/></template>
        <template v-else><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6v6H9z"/></template>
    </svg>
</template>
