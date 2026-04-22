import './bootstrap';
import '../css/app.css';

import { createApp, h, DefineComponent } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { MotionPlugin } from '@vueuse/motion';
import AppLayout from '@/Layouts/AppLayout.vue';

const appName = 'Kailash Machine Tools';
const defaultTitle = `${appName} — Pharmaceutical Machinery Manufacturer Since 1991`;
const formatTitle = (title?: string) => {
    if (!title) return defaultTitle;
    // Avoid brand duplication: only append " | appName" if title doesn't already include it.
    return title.includes(appName) ? title : `${title} | ${appName}`;
};

createInertiaApp({
    title: formatTitle,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob<DefineComponent>('./Pages/**/*.vue'),
        ).then((page: any) => {
            page.default.layout ??= AppLayout;
            return page;
        }),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(MotionPlugin)
            .mount(el);
    },
    progress: {
        color: '#14B8A6',
        showSpinner: false,
    },
});
