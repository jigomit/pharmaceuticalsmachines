import { t as SeoHead_default } from "./SeoHead-ILEVCC59.js";
import { createTextVNode, defineComponent, unref, useSSRContext, withCtx } from "vue";
import { Link } from "@inertiajs/vue3";
import { ssrRenderComponent } from "vue/server-renderer";
//#region resources/js/Pages/Errors/NotFound.vue?vue&type=script&setup=true&lang.ts
var NotFound_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "NotFound",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(SeoHead_default, {
				title: "Page not found (404)",
				description: "The page you requested could not be found.",
				noindex: ""
			}, null, _parent));
			_push(`<section class="mesh-hero relative flex min-h-[70vh] items-center py-20 text-white"><div class="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8"><p class="font-mono text-sm font-semibold uppercase tracking-[0.3em] text-teal-300">404</p><h1 class="mt-4 text-4xl font-semibold sm:text-5xl">We couldn&#39;t find that page.</h1><p class="mt-4 text-lg text-slate-200">It may have moved under our rebrand. Try the links below or drop us a line.</p><div class="mt-8 flex flex-wrap justify-center gap-3">`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/",
				class: "rounded-full bg-white px-6 py-3 text-sm font-semibold text-[color:var(--color-brand)] hover:bg-teal-300"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Home`);
					else return [createTextVNode("Home")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(unref(Link), {
				href: "/products",
				class: "rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:border-teal-300 hover:text-teal-300"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Browse Products`);
					else return [createTextVNode("Browse Products")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(unref(Link), {
				href: "/contact",
				class: "rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:border-teal-300 hover:text-teal-300"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Contact Us`);
					else return [createTextVNode("Contact Us")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></section><!--]-->`);
		};
	}
});
//#endregion
//#region resources/js/Pages/Errors/NotFound.vue
var _sfc_setup = NotFound_vue_vue_type_script_setup_true_lang_default.setup;
NotFound_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Errors/NotFound.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var NotFound_default = NotFound_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { NotFound_default as default };
