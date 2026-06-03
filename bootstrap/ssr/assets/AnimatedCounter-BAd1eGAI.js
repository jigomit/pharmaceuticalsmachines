import { defineComponent, mergeProps, onBeforeUnmount, onMounted, ref, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderAttrs } from "vue/server-renderer";
//#region resources/js/Components/AnimatedCounter.vue?vue&type=script&setup=true&lang.ts
var AnimatedCounter_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AnimatedCounter",
	__ssrInlineRender: true,
	props: {
		to: {},
		duration: { default: 1800 },
		prefix: { default: "" },
		suffix: { default: "" },
		format: {}
	},
	setup(__props) {
		const props = __props;
		const current = ref(0);
		const el = ref(null);
		let rafId = null;
		let started = false;
		let observer = null;
		const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
		const run = () => {
			if (started) return;
			started = true;
			const start = performance.now();
			const tick = (now) => {
				const elapsed = now - start;
				const p = Math.min(elapsed / props.duration, 1);
				current.value = Math.round(easeOutCubic(p) * props.to);
				if (p < 1) rafId = requestAnimationFrame(tick);
			};
			rafId = requestAnimationFrame(tick);
		};
		onMounted(() => {
			if (typeof window === "undefined" || !el.value) return;
			if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
				current.value = props.to;
				return;
			}
			observer = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && run()), { threshold: .4 });
			observer.observe(el.value);
		});
		onBeforeUnmount(() => {
			if (rafId) cancelAnimationFrame(rafId);
			observer?.disconnect();
		});
		const formatted = () => props.format ? props.format(current.value) : current.value.toLocaleString();
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<span${ssrRenderAttrs(mergeProps({
				ref_key: "el",
				ref: el
			}, _attrs))}>${ssrInterpolate(__props.prefix)}${ssrInterpolate(formatted())}${ssrInterpolate(__props.suffix)}</span>`);
		};
	}
});
//#endregion
//#region resources/js/Components/AnimatedCounter.vue
var _sfc_setup = AnimatedCounter_vue_vue_type_script_setup_true_lang_default.setup;
AnimatedCounter_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/AnimatedCounter.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var AnimatedCounter_default = AnimatedCounter_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { AnimatedCounter_default as t };
