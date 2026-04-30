/**
 * Lazy-load GSAP + ScrollTrigger on the client.
 * Skips in SSR, respects prefers-reduced-motion.
 */
import { onMounted, onBeforeUnmount, ref, type Ref } from 'vue';

type GsapModule = typeof import('gsap');
type ScrollTriggerModule = typeof import('gsap/ScrollTrigger');

export interface GsapHandle {
    gsap: Ref<GsapModule['gsap'] | null>;
    ScrollTrigger: Ref<ScrollTriggerModule['ScrollTrigger'] | null>;
    ready: Ref<boolean>;
    reducedMotion: Ref<boolean>;
}

export function useGsap(): GsapHandle {
    const gsap = ref<GsapModule['gsap'] | null>(null);
    const ScrollTrigger = ref<ScrollTriggerModule['ScrollTrigger'] | null>(null);
    const ready = ref(false);
    const reducedMotion = ref(false);

    onMounted(async () => {
        if (typeof window === 'undefined') return;

        reducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const smallScreen = window.matchMedia('(max-width: 1023px)').matches;
        if (reducedMotion.value || smallScreen) {
            ready.value = true;
            return;
        }

        // Keep GSAP/ScrollTrigger off the critical rendering path.
        await new Promise<void>((resolve) => {
            const ric = (window as Window & { requestIdleCallback?: (cb: () => void) => void }).requestIdleCallback;
            if (ric) {
                ric(() => resolve());
            } else {
                window.setTimeout(() => resolve(), 1);
            }
        });

        const [gsapMod, stMod] = await Promise.all([
            import('gsap'),
            import('gsap/ScrollTrigger'),
        ]);

        gsapMod.gsap.registerPlugin(stMod.ScrollTrigger);
        stMod.ScrollTrigger.config({
            ignoreMobileResize: true,
            limitCallbacks: true,
        });
        gsap.value = gsapMod.gsap;
        ScrollTrigger.value = stMod.ScrollTrigger;
        ready.value = true;
    });

    onBeforeUnmount(() => {
        ScrollTrigger.value?.getAll().forEach((st) => st.kill());
    });

    return { gsap, ScrollTrigger, ready, reducedMotion };
}
