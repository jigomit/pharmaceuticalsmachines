import { t as SeoHead_default } from "./SeoHead-ILEVCC59.js";
import { t as ScrollReveal_default } from "./ScrollReveal-oDITbbxE.js";
import { t as ImageLightbox_default } from "./ImageLightbox-Cy5zirLC.js";
import { Fragment, computed, createBlock, createVNode, defineComponent, openBlock, ref, renderList, toDisplayString, useSSRContext, withCtx } from "vue";
import { ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
//#region resources/js/Pages/Gallery.vue?vue&type=script&setup=true&lang.ts
var Gallery_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Gallery",
	__ssrInlineRender: true,
	props: { images: {} },
	setup(__props) {
		const props = __props;
		const items = computed(() => {
			return (props.images ?? []).map((src, i) => ({
				src,
				alt: `Kailash Machine Tools facility — photograph ${i + 1}`,
				caption: [
					"Pharmaceutical manufacturing line",
					"Vial filling operation",
					"Cleanroom operation",
					"Quality inspection",
					"Ampoule sealing",
					"Production floor",
					"Engineering bay",
					"Validation & testing",
					"Packaging line",
					"Warehouse storage",
					"FAT documentation",
					"Operator training"
				][i] ?? "Kailash facility"
			}));
		});
		const lightboxOpen = ref(false);
		const lightboxIndex = ref(0);
		const open = (i) => {
			lightboxIndex.value = i;
			lightboxOpen.value = true;
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(SeoHead_default, {
				title: "Gallery — Pharmaceutical Machinery Photos",
				description: "Photos of our pharmaceutical machinery installations, cleanroom operations, vial filling lines and Ahmedabad manufacturing facility."
			}, null, _parent));
			_push(`<section class="relative isolate overflow-hidden text-white"><div class="mesh-hero-animated absolute inset-0"></div><div class="bg-grid-dark grid-pattern-fade absolute inset-0 opacity-30"></div><div class="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"><p class="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">Gallery</p><h1 class="mt-3 font-heading text-balance text-4xl font-semibold sm:text-6xl">Machinery. Manufacturing. Installations.</h1><p class="mt-5 max-w-2xl text-lg leading-8 text-slate-200">A visual tour of our Ahmedabad workshop, pharma production lines, and client installations. Click any image to expand.</p></div></section><section class="py-16 sm:py-20"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">`);
			_push(ssrRenderComponent(ScrollReveal_default, {
				stagger: .05,
				y: 24,
				target: ".gitem",
				class: "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<!--[-->`);
						ssrRenderList(items.value, (it, i) => {
							_push(`<button type="button" class="gitem group relative aspect-square overflow-hidden rounded-2xl bg-slate-100 shadow-sm"${_scopeId}><img${ssrRenderAttr("src", it.src)}${ssrRenderAttr("alt", it.alt)} class="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" width="600" height="600"${_scopeId}><div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/0 to-transparent opacity-0 transition-opacity group-hover:opacity-100"${_scopeId}></div><span class="absolute inset-x-4 bottom-4 text-left text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100"${_scopeId}>${ssrInterpolate(it.caption)}</span><span class="absolute right-3 top-3 inline-flex size-8 items-center justify-center rounded-full bg-white/95 opacity-0 transition-opacity group-hover:opacity-100"${_scopeId}><svg class="size-4 text-slate-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"${_scopeId}></path></svg></span></button>`);
						});
						_push(`<!--]-->`);
					} else return [(openBlock(true), createBlock(Fragment, null, renderList(items.value, (it, i) => {
						return openBlock(), createBlock("button", {
							key: i,
							type: "button",
							class: "gitem group relative aspect-square overflow-hidden rounded-2xl bg-slate-100 shadow-sm",
							onClick: ($event) => open(i)
						}, [
							createVNode("img", {
								src: it.src,
								alt: it.alt,
								class: "absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-110",
								loading: "lazy",
								width: "600",
								height: "600"
							}, null, 8, ["src", "alt"]),
							createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/0 to-transparent opacity-0 transition-opacity group-hover:opacity-100" }),
							createVNode("span", { class: "absolute inset-x-4 bottom-4 text-left text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100" }, toDisplayString(it.caption), 1),
							createVNode("span", { class: "absolute right-3 top-3 inline-flex size-8 items-center justify-center rounded-full bg-white/95 opacity-0 transition-opacity group-hover:opacity-100" }, [(openBlock(), createBlock("svg", {
								class: "size-4 text-slate-700",
								fill: "none",
								stroke: "currentColor",
								"stroke-width": "2",
								viewBox: "0 0 24 24"
							}, [createVNode("path", {
								"stroke-linecap": "round",
								"stroke-linejoin": "round",
								d: "M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"
							})]))])
						], 8, ["onClick"]);
					}), 128))];
				}),
				_: 1
			}, _parent));
			_push(`<div class="mt-16 rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center sm:p-12"><h2 class="font-heading text-2xl font-semibold text-slate-900">Videos coming soon</h2><p class="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600">Machine walkthroughs and commissioning footage will appear here. To request a line-in-action video of any specific machine, drop us an enquiry.</p></div></div></section>`);
			_push(ssrRenderComponent(ImageLightbox_default, {
				open: lightboxOpen.value,
				images: items.value,
				"initial-index": lightboxIndex.value,
				onClose: ($event) => lightboxOpen.value = false
			}, null, _parent));
			_push(`<!--]-->`);
		};
	}
});
//#endregion
//#region resources/js/Pages/Gallery.vue
var _sfc_setup = Gallery_vue_vue_type_script_setup_true_lang_default.setup;
Gallery_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Gallery.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Gallery_default = Gallery_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { Gallery_default as default };
