import { createSSRApp, h, DefineComponent } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import createServer from '@inertiajs/vue3/server';
import { renderToString } from '@vue/server-renderer';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { MotionPlugin } from '@vueuse/motion';
import AppLayout from '@/Layouts/AppLayout.vue';

const appName = 'Kailash Machine Tools';
const defaultTitle = `${appName} — Pharmaceutical Machinery Manufacturer Since 1991`;
const formatTitle = (title?: string) => {
    if (!title) return defaultTitle;
    return title.includes(appName) ? title : `${title} | ${appName}`;
};

createServer((page) =>
    createInertiaApp({
        page,
        render: renderToString,
        title: formatTitle,
        resolve: (name) =>
            resolvePageComponent(
                `./Pages/${name}.vue`,
                import.meta.glob<DefineComponent>('./Pages/**/*.vue'),
            ).then((p: any) => {
                p.default.layout ??= AppLayout;
                return p;
            }),
        setup({ App, props, plugin }) {
            return createSSRApp({ render: () => h(App, props) })
                .use(plugin)
                .use(MotionPlugin);
        },
    }),
);
