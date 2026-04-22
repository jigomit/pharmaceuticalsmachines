import { createBlock, createCommentVNode, createTextVNode, createVNode, defineComponent, mergeProps, openBlock, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Link } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
//#region resources/js/Components/ProductCard.vue?vue&type=script&setup=true&lang.ts
var ProductCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ProductCard",
	__ssrInlineRender: true,
	props: {
		product: {},
		href: {},
		eager: { type: Boolean }
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Link), mergeProps({
				href: __props.href ?? `/products/${__props.product.category?.slug}/${__props.product.slug}`,
				class: "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-[color:var(--color-brand-accent)]/40 hover:shadow-[var(--shadow-brand)]"
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="relative aspect-[4/3] overflow-hidden bg-slate-100"${_scopeId}>`);
						if (__props.product.hero_image) _push(`<img${ssrRenderAttr("src", __props.product.hero_image)}${ssrRenderAttr("alt", __props.product.name + " manufacturer — Kailash Machine Tools Ahmedabad")}${ssrRenderAttr("loading", __props.eager ? "eager" : "lazy")}${ssrRenderAttr("fetchpriority", __props.eager ? "high" : "auto")} width="800" height="600" class="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"${_scopeId}>`);
						else _push(`<div class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200"${_scopeId}><svg class="size-16 text-slate-300" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10h6m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"${_scopeId}></path></svg></div>`);
						_push(`<div class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[color:var(--color-brand)]/70 via-[color:var(--color-brand)]/15 to-transparent"${_scopeId}></div>`);
						if (__props.product.is_featured) _push(`<span class="absolute left-4 top-4 rounded-full bg-teal-500 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow"${_scopeId}>Featured</span>`);
						else _push(`<!---->`);
						if (__props.product.model_code) _push(`<span class="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1 font-mono text-xs text-[color:var(--color-brand)] shadow"${_scopeId}>${ssrInterpolate(__props.product.model_code)}</span>`);
						else _push(`<!---->`);
						if (__props.product.category) _push(`<span class="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-[color:var(--color-brand)] shadow"${_scopeId}><span class="size-1.5 rounded-full bg-[color:var(--color-brand-accent)]"${_scopeId}></span> ${ssrInterpolate(__props.product.category.name)}</span>`);
						else _push(`<!---->`);
						_push(`</div><div class="flex flex-1 flex-col p-5"${_scopeId}><h3 class="font-heading text-lg font-semibold leading-snug text-slate-900 transition-colors group-hover:text-[color:var(--color-brand-accent)]"${_scopeId}>${ssrInterpolate(__props.product.name)}</h3>`);
						if (__props.product.short_description) _push(`<p class="mt-2 line-clamp-2 text-sm leading-6 text-slate-500"${_scopeId}>${ssrInterpolate(__props.product.short_description)}</p>`);
						else _push(`<!---->`);
						_push(`<div class="mt-4 flex items-center justify-between"${_scopeId}><span class="inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--color-brand)]"${_scopeId}> View details <span class="inline-block transition-transform duration-300 group-hover:translate-x-1"${_scopeId}>→</span></span></div></div>`);
					} else return [createVNode("div", { class: "relative aspect-[4/3] overflow-hidden bg-slate-100" }, [
						__props.product.hero_image ? (openBlock(), createBlock("img", {
							key: 0,
							src: __props.product.hero_image,
							alt: __props.product.name + " manufacturer — Kailash Machine Tools Ahmedabad",
							loading: __props.eager ? "eager" : "lazy",
							fetchpriority: __props.eager ? "high" : "auto",
							width: "800",
							height: "600",
							class: "absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
						}, null, 8, [
							"src",
							"alt",
							"loading",
							"fetchpriority"
						])) : (openBlock(), createBlock("div", {
							key: 1,
							class: "absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200"
						}, [(openBlock(), createBlock("svg", {
							class: "size-16 text-slate-300",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "1.5",
							viewBox: "0 0 24 24"
						}, [createVNode("path", {
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							d: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10h6m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
						})]))])),
						createVNode("div", { class: "absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[color:var(--color-brand)]/70 via-[color:var(--color-brand)]/15 to-transparent" }),
						__props.product.is_featured ? (openBlock(), createBlock("span", {
							key: 2,
							class: "absolute left-4 top-4 rounded-full bg-teal-500 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow"
						}, "Featured")) : createCommentVNode("", true),
						__props.product.model_code ? (openBlock(), createBlock("span", {
							key: 3,
							class: "absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1 font-mono text-xs text-[color:var(--color-brand)] shadow"
						}, toDisplayString(__props.product.model_code), 1)) : createCommentVNode("", true),
						__props.product.category ? (openBlock(), createBlock("span", {
							key: 4,
							class: "absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-[color:var(--color-brand)] shadow"
						}, [createVNode("span", { class: "size-1.5 rounded-full bg-[color:var(--color-brand-accent)]" }), createTextVNode(" " + toDisplayString(__props.product.category.name), 1)])) : createCommentVNode("", true)
					]), createVNode("div", { class: "flex flex-1 flex-col p-5" }, [
						createVNode("h3", { class: "font-heading text-lg font-semibold leading-snug text-slate-900 transition-colors group-hover:text-[color:var(--color-brand-accent)]" }, toDisplayString(__props.product.name), 1),
						__props.product.short_description ? (openBlock(), createBlock("p", {
							key: 0,
							class: "mt-2 line-clamp-2 text-sm leading-6 text-slate-500"
						}, toDisplayString(__props.product.short_description), 1)) : createCommentVNode("", true),
						createVNode("div", { class: "mt-4 flex items-center justify-between" }, [createVNode("span", { class: "inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--color-brand)]" }, [createTextVNode(" View details "), createVNode("span", { class: "inline-block transition-transform duration-300 group-hover:translate-x-1" }, "→")])])
					])];
				}),
				_: 1
			}, _parent));
		};
	}
});
//#endregion
//#region resources/js/Components/ProductCard.vue
var _sfc_setup = ProductCard_vue_vue_type_script_setup_true_lang_default.setup;
ProductCard_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ProductCard.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var ProductCard_default = ProductCard_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { ProductCard_default as t };
