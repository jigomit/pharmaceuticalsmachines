import { t as SeoHead_default } from "./SeoHead-ILEVCC59.js";
import { t as ScrollReveal_default } from "./ScrollReveal-oDITbbxE.js";
import { Fragment, createBlock, createTextVNode, createVNode, defineComponent, openBlock, renderList, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Link } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
//#region resources/js/Pages/Industries.vue?vue&type=script&setup=true&lang.ts
var Industries_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Industries",
	__ssrInlineRender: true,
	props: { industries: {} },
	setup(__props) {
		const list = __props.industries;
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(SeoHead_default, {
				title: "Industries — Pharma, Biotech, Nutraceutical, Cosmetics",
				description: "Pharmaceutical, biotech, nutraceutical, cosmetic, veterinary and Ayurvedic manufacturers we serve — since 1991, from Ahmedabad India."
			}, null, _parent));
			_push(`<section class="relative isolate overflow-hidden text-white"><div class="mesh-hero-animated absolute inset-0"></div><div class="bg-grid-dark grid-pattern-fade absolute inset-0 opacity-30"></div><div class="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"><p class="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">Industries Served</p><h1 class="mt-3 font-heading text-balance text-4xl font-semibold sm:text-6xl">Engineered for every regulated manufacturing environment.</h1></div></section><section class="py-20"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">`);
			_push(ssrRenderComponent(ScrollReveal_default, {
				stagger: .1,
				y: 30,
				target: ".ind",
				class: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<!--[-->`);
						ssrRenderList(unref(list), (i) => {
							_push(`<div class="ind group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-[color:var(--color-brand-accent)]/50 hover:shadow-[var(--shadow-brand)]"${_scopeId}><div class="relative aspect-[16/10] overflow-hidden bg-slate-100"${_scopeId}><img${ssrRenderAttr("src", i.image)}${ssrRenderAttr("alt", i.name + " industry served by Kailash Machine Tools")} class="size-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" width="800" height="500"${_scopeId}><div class="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"${_scopeId}></div></div><div class="p-6"${_scopeId}><h2 class="font-heading text-xl font-semibold text-slate-900 group-hover:text-[color:var(--color-brand-accent)]"${_scopeId}>${ssrInterpolate(i.name)}</h2><p class="mt-3 text-sm leading-6 text-slate-600"${_scopeId}>${ssrInterpolate(i.body)}</p></div></div>`);
						});
						_push(`<!--]-->`);
					} else return [(openBlock(true), createBlock(Fragment, null, renderList(unref(list), (i) => {
						return openBlock(), createBlock("div", {
							key: i.slug,
							class: "ind group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-[color:var(--color-brand-accent)]/50 hover:shadow-[var(--shadow-brand)]"
						}, [createVNode("div", { class: "relative aspect-[16/10] overflow-hidden bg-slate-100" }, [createVNode("img", {
							src: i.image,
							alt: i.name + " industry served by Kailash Machine Tools",
							class: "size-full object-cover transition-transform duration-700 group-hover:scale-110",
							loading: "lazy",
							width: "800",
							height: "500"
						}, null, 8, ["src", "alt"]), createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" })]), createVNode("div", { class: "p-6" }, [createVNode("h2", { class: "font-heading text-xl font-semibold text-slate-900 group-hover:text-[color:var(--color-brand-accent)]" }, toDisplayString(i.name), 1), createVNode("p", { class: "mt-3 text-sm leading-6 text-slate-600" }, toDisplayString(i.body), 1)])]);
					}), 128))];
				}),
				_: 1
			}, _parent));
			_push(`<div class="mt-14 text-center">`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/contact",
				class: "inline-flex items-center gap-2 rounded-full bg-[color:var(--color-brand)] px-7 py-3 text-sm font-semibold text-white hover:bg-[color:var(--color-brand-accent)]"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Discuss your project <svg class="size-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"${_scopeId}></path></svg>`);
					else return [createTextVNode(" Discuss your project "), (openBlock(), createBlock("svg", {
						class: "size-4",
						fill: "none",
						stroke: "currentColor",
						"stroke-width": "2",
						viewBox: "0 0 24 24"
					}, [createVNode("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						d: "M14 5l7 7m0 0l-7 7m7-7H3"
					})]))];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></section><!--]-->`);
		};
	}
});
//#endregion
//#region resources/js/Pages/Industries.vue
var _sfc_setup = Industries_vue_vue_type_script_setup_true_lang_default.setup;
Industries_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Industries.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Industries_default = Industries_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { Industries_default as default };
