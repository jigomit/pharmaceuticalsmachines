<script setup lang="ts">
import { Link, usePage } from '@inertiajs/vue3';
import { computed, ref, onMounted, onBeforeUnmount } from 'vue';
import KmtLogo from './KmtLogo.vue';

const page = usePage();
const company = computed(() => (page.props as any).company);
const isOpen = ref(false);
const scrolled = ref(false);

const onScroll = () => { scrolled.value = window.scrollY > 8; };
onMounted(() => { onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); });
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll));

const nav = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Industries', href: '/industries' },
    { label: 'Quality', href: '/quality-compliance' },
    { label: 'Clients', href: '/clients' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
];

const isActive = (href: string) => {
    const url = page.url;
    if (href === '/') return url === '/';
    return url === href || url.startsWith(href + '/');
};
</script>

<template>
    <header
        :class="[
            'sticky top-0 z-50 w-full border-b transition-all duration-300',
            scrolled ? 'border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-sm' : 'border-transparent bg-white/70 backdrop-blur',
        ]"
    >
        <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link href="/" class="flex items-center gap-2" aria-label="Kailash Machine Tools home">
                <KmtLogo class="h-10 w-auto" />
            </Link>

            <nav class="hidden items-center gap-1 lg:flex">
                <Link
                    v-for="item in nav"
                    :key="item.href"
                    :href="item.href"
                    :class="[
                        'relative rounded-full px-4 py-2 text-sm font-medium transition-colors',
                        isActive(item.href)
                            ? 'text-[color:var(--color-brand)]'
                            : 'text-slate-600 hover:text-[color:var(--color-brand)]',
                    ]"
                >
                    {{ item.label }}
                    <span v-if="isActive(item.href)" class="absolute inset-x-3 -bottom-[1px] h-0.5 rounded-full bg-gradient-to-r from-[color:var(--color-brand-accent)] to-[color:var(--color-brand-highlight)]" />
                </Link>
            </nav>

            <div class="flex items-center gap-3">
                <a
                    :href="`tel:${company?.phone?.replace(/\s/g, '')}`"
                    class="hidden font-mono text-xs tracking-wider text-[color:var(--color-brand)] md:inline"
                >
                    {{ company?.phone }}
                </a>
                <Link
                    href="/contact"
                    class="hidden rounded-full bg-[color:var(--color-brand)] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[color:var(--color-brand-accent)] md:inline-flex"
                >
                    Get Quote
                </Link>
                <button
                    @click="isOpen = !isOpen"
                    class="inline-flex size-10 items-center justify-center rounded-md border border-slate-200 text-slate-700 lg:hidden"
                    aria-label="Toggle menu"
                >
                    <svg v-if="!isOpen" class="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                    <svg v-else class="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </div>
        </div>

        <Transition name="slide">
            <div v-if="isOpen" class="border-t border-slate-100 bg-white lg:hidden">
                <nav class="flex flex-col gap-1 px-4 py-4 text-sm font-medium">
                    <Link v-for="item in nav" :key="item.href" :href="item.href" class="rounded-md px-3 py-2 text-slate-700 hover:bg-slate-50" :class="{ 'bg-slate-50 text-[color:var(--color-brand)]': isActive(item.href) }" @click="isOpen = false">
                        {{ item.label }}
                    </Link>
                    <Link href="/contact" class="mt-2 rounded-full bg-[color:var(--color-brand)] px-4 py-2 text-center text-white" @click="isOpen = false">Get Quote</Link>
                </nav>
            </div>
        </Transition>
    </header>
</template>

<style scoped>
.slide-enter-active, .slide-leave-active { transition: all 0.25s ease; }
.slide-enter-from, .slide-leave-to { opacity: 0; transform: translateY(-8px); }
</style>
