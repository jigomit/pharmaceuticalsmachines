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
        if (reducedMotion.value) {
            ready.value = true;
            return;
        }

        const [gsapMod, stMod] = await Promise.all([
            import('gsap'),
            import('gsap/ScrollTrigger'),
        ]);

        gsapMod.gsap.registerPlugin(stMod.ScrollTrigger);
        gsap.value = gsapMod.gsap;
        ScrollTrigger.value = stMod.ScrollTrigger;
        ready.value = true;
    });

    onBeforeUnmount(() => {
        ScrollTrigger.value?.getAll().forEach((st) => st.kill());
    });

    return { gsap, ScrollTrigger, ready, reducedMotion };
}
