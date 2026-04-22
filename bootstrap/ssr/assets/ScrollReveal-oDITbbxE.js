import { createVNode, defineComponent, mergeProps, onBeforeUnmount, onMounted, ref, renderSlot, resolveDynamicComponent, unref, useSSRContext, watch, withCtx } from "vue";
import { ssrRenderSlot, ssrRenderVNode } from "vue/server-renderer";
//#region resources/js/composables/useGsap.ts
/**
* Lazy-load GSAP + ScrollTrigger on the client.
* Skips in SSR, respects prefers-reduced-motion.
*/
function useGsap() {
	const gsap = ref(null);
	const ScrollTrigger = ref(null);
	const ready = ref(false);
	const reducedMotion = ref(false);
	onMounted(async () => {
		if (typeof window === "undefined") return;
		reducedMotion.value = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (reducedMotion.value) {
			ready.value = true;
			return;
		}
		const [gsapMod, stMod] = await Promise.all([import("gsap"), import("gsap/ScrollTrigger")]);
		gsapMod.gsap.registerPlugin(stMod.ScrollTrigger);
		gsap.value = gsapMod.gsap;
		ScrollTrigger.value = stMod.ScrollTrigger;
		ready.value = true;
	});
	onBeforeUnmount(() => {
		ScrollTrigger.value?.getAll().forEach((st) => st.kill());
	});
	return {
		gsap,
		ScrollTrigger,
		ready,
		reducedMotion
	};
}
//#endregion
//#region resources/js/Components/ScrollReveal.vue?vue&type=script&setup=true&lang.ts
var ScrollReveal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ScrollReveal",
	__ssrInlineRender: true,
	props: {
		as: { default: "div" },
		y: { default: 30 },
		x: { default: 0 },
		scale: { default: 1 },
		duration: { default: .9 },
		delay: { default: 0 },
		stagger: { default: .08 },
		start: { default: "top 80%" },
		once: {
			type: Boolean,
			default: true
		},
		target: { default: "> *" }
	},
	setup(__props) {
		const props = __props;
		const root = ref(null);
		const { gsap, ScrollTrigger, ready, reducedMotion } = useGsap();
		const play = () => {
			if (!root.value || !gsap.value || !ScrollTrigger.value) return;
			const targets = root.value.querySelectorAll(props.target);
			if (!targets.length) return;
			gsap.value.set(targets, {
				opacity: 0,
				y: props.y,
				x: props.x,
				scale: props.scale
			});
			gsap.value.to(targets, {
				opacity: 1,
				y: 0,
				x: 0,
				scale: 1,
				duration: props.duration,
				delay: props.delay,
				stagger: props.stagger,
				ease: "power3.out",
				scrollTrigger: {
					trigger: root.value,
					start: props.start,
					toggleActions: props.once ? "play none none none" : "play none none reverse"
				}
			});
		};
		watch(ready, (v) => {
			if (v) play();
		});
		onMounted(() => {
			if (ready.value) play();
		});
		return (_ctx, _push, _parent, _attrs) => {
			ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.as), mergeProps({
				ref_key: "root",
				ref: root,
				class: unref(reducedMotion) ? "" : "scroll-reveal-root"
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "default")];
				}),
				_: 3
			}), _parent);
		};
	}
});
//#endregion
//#region resources/js/Components/ScrollReveal.vue
var _sfc_setup = ScrollReveal_vue_vue_type_script_setup_true_lang_default.setup;
ScrollReveal_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ScrollReveal.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var ScrollReveal_default = ScrollReveal_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { ScrollReveal_default as t };
