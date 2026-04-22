import { t as SeoHead_default } from "./SeoHead-ILEVCC59.js";
import { defineComponent, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
//#region resources/js/Pages/Clients.vue?vue&type=script&setup=true&lang.ts
var Clients_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Clients",
	__ssrInlineRender: true,
	props: { clients: {} },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(SeoHead_default, {
				title: "Our Clients — 450+ Pharmaceutical Manufacturers",
				description: "Pharmaceutical manufacturers worldwide who trust us (formerly Shree Ganesh Pharmatech) for their injectable and packaging machinery."
			}, null, _parent));
			_push(`<section class="mesh-hero relative py-20 text-white"><div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p class="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">Clients</p><h1 class="mt-3 max-w-3xl text-4xl font-semibold sm:text-5xl">Trusted by pharma manufacturers across the world.</h1></div></section><section class="py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"><!--[-->`);
			ssrRenderList(__props.clients, (c) => {
				_push(`<div class="flex h-28 items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 text-center text-sm font-semibold text-slate-700 shadow-sm">${ssrInterpolate(c.name)}</div>`);
			});
			_push(`<!--]--></div></div></section><!--]-->`);
		};
	}
});
//#endregion
//#region resources/js/Pages/Clients.vue
var _sfc_setup = Clients_vue_vue_type_script_setup_true_lang_default.setup;
Clients_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Clients.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Clients_default = Clients_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { Clients_default as default };
