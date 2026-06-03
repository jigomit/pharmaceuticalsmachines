import { t as SeoHead_default } from "./SeoHead-vcfRhzu1.js";
import { createTextVNode, defineComponent, unref, useSSRContext, withCtx } from "vue";
import { Link } from "@inertiajs/vue3";
import { ssrRenderComponent } from "vue/server-renderer";
//#region resources/js/Pages/Seo/VialFillingMachineIndia.vue?vue&type=script&setup=true&lang.ts
var VialFillingMachineIndia_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "VialFillingMachineIndia",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(SeoHead_default, {
				title: "Vial Filling Machine Manufacturer in India",
				description: "Kailash Machine Tools is a vial filling machine manufacturer in India with cGMP-built automatic vial filling and stoppering lines for sterile injectable production.",
				keywords: "vial filling machine manufacturer india, automatic vial filling machine, sterile vial filling line"
			}, null, _parent));
			_push(`<section class="mesh-hero relative py-20 text-white"><div class="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><p class="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">India Focused Manufacturing</p><h1 class="mt-3 text-balance text-4xl font-semibold sm:text-5xl">Vial filling machine manufacturer in India.</h1><p class="mt-5 max-w-3xl text-lg leading-8 text-slate-200">We engineer vial filling and rubber stoppering systems for sterile injectables with documented FAT/SAT and IQ/OQ support.</p></div></section><section class="py-16"><div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><div class="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"><h2 class="text-2xl font-semibold text-slate-900">Why Indian pharma teams choose Kailash</h2><ul class="mt-4 space-y-3 text-sm leading-7 text-slate-700"><li>Servo-driven filling with high repeatability for injectable products.</li><li>Integrated stoppering and optional nitrogen purging modules.</li><li>Ahmedabad-based manufacturing with faster support turnaround.</li></ul><div class="mt-6 flex flex-wrap gap-3">`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/products/injectable-liquid-filling/automatic-vial-filling-machine",
				class: "rounded-full bg-[color:var(--color-brand)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[color:var(--color-brand-accent)]"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`View Automatic Vial Filling Machine`);
					else return [createTextVNode("View Automatic Vial Filling Machine")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(unref(Link), {
				href: "/contact",
				class: "rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-[color:var(--color-brand-accent)] hover:text-[color:var(--color-brand-accent)]"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Request quotation`);
					else return [createTextVNode("Request quotation")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></div></section><!--]-->`);
		};
	}
});
//#endregion
//#region resources/js/Pages/Seo/VialFillingMachineIndia.vue
var _sfc_setup = VialFillingMachineIndia_vue_vue_type_script_setup_true_lang_default.setup;
VialFillingMachineIndia_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Seo/VialFillingMachineIndia.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var VialFillingMachineIndia_default = VialFillingMachineIndia_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { VialFillingMachineIndia_default as default };
