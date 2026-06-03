import { usePage } from '@inertiajs/vue3';
import { computed } from 'vue';

/** Canonical site origin for JSON-LD (from shared Inertia `siteUrl`). */
export function useSiteUrl() {
    const page = usePage();

    return computed(() => {
        const fromProps = (page.props as { siteUrl?: string }).siteUrl;
        if (fromProps) {
            return fromProps.replace(/\/$/, '');
        }

        try {
            const canonical = (page.props as { canonical?: string }).canonical;
            if (canonical) {
                return new URL(canonical).origin;
            }
        } catch {
            /* fall through */
        }

        return 'https://pharmaceuticalsmachines.com';
    });
}
