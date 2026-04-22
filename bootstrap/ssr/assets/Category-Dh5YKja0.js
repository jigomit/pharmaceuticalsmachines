import { t as SeoHead_default } from "./SeoHead-ILEVCC59.js";
import { t as ScrollReveal_default } from "./ScrollReveal-oDITbbxE.js";
import { t as ProductCard_default } from "./ProductCard-C-SlM2Bk.js";
import { Fragment, computed, createBlock, createTextVNode, createVNode, defineComponent, openBlock, renderList, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Link } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
//#region resources/js/Pages/Products/Category.vue?vue&type=script&setup=true&lang.ts
var SITE = "https://pharmaceuticalsmachines.com";
var Category_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Category",
	__ssrInlineRender: true,
	props: {
		category: {},
		products: {},
		otherCategories: {}
	},
	setup(__props) {
		const props = __props;
		const breadcrumbSchema = computed(() => ({
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			itemListElement: [
				{
					"@type": "ListItem",
					position: 1,
					name: "Home",
					item: `${SITE}/`
				},
				{
					"@type": "ListItem",
					position: 2,
					name: "Products",
					item: `${SITE}/products`
				},
				{
					"@type": "ListItem",
					position: 3,
					name: props.category.name,
					item: `${SITE}/products/${props.category.slug}`
				}
			]
		}));
		const itemListSchema = computed(() => ({
			"@context": "https://schema.org",
			"@type": "ItemList",
			name: `${props.category.name} — Products`,
			numberOfItems: props.products.length,
			itemListElement: props.products.map((p, i) => ({
				"@type": "ListItem",
				position: i + 1,
				url: `${SITE}/products/${props.category.slug}/${p.slug}`,
				name: p.name
			}))
		}));
		const faqSchema = computed(() => {
			if (!props.category.faqs?.length) return null;
			return {
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: props.category.faqs.map((f) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.a
					}
				}))
			};
		});
		const schemas = computed(() => [
			breadcrumbSchema.value,
			itemListSchema.value,
			faqSchema.value
		].filter(Boolean));
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(SeoHead_default, {
				title: __props.category.meta_title ?? __props.category.name,
				description: __props.category.meta_description ?? __props.category.short_description,
				schema: schemas.value
			}, null, _parent));
			_push(`<nav class="border-b border-slate-100 bg-white py-3 text-xs"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><ol class="flex flex-wrap items-center gap-2 text-slate-500"><li>`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/",
				class: "hover:text-[color:var(--color-brand)]"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Home`);
					else return [createTextVNode("Home")];
				}),
				_: 1
			}, _parent));
			_push(`</li><li>/</li><li>`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/products",
				class: "hover:text-[color:var(--color-brand)]"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Products`);
					else return [createTextVNode("Products")];
				}),
				_: 1
			}, _parent));
			_push(`</li><li>/</li><li class="text-slate-900">${ssrInterpolate(__props.category.name)}</li></ol></div></nav><section class="relative isolate overflow-hidden text-white"><div class="absolute inset-0 -z-10">`);
			if (__props.category.hero_image) _push(`<img${ssrRenderAttr("src", __props.category.hero_image)}${ssrRenderAttr("alt", __props.category.name)} class="size-full object-cover" loading="eager" fetchpriority="high">`);
			else _push(`<!---->`);
			_push(`<div class="absolute inset-0 bg-gradient-to-br from-[color:var(--color-brand)]/95 via-[color:var(--color-brand)]/75 to-[#061433]/90"></div><div class="mesh-hero-animated absolute inset-0 opacity-40 mix-blend-screen"></div></div><div class="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32"><p class="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">Category</p><h1 class="mt-3 max-w-4xl font-heading text-balance text-4xl font-semibold leading-tight sm:text-6xl">${ssrInterpolate(__props.category.name)}</h1><p class="mt-5 max-w-3xl text-lg leading-8 text-slate-200">${ssrInterpolate(__props.category.tagline)}</p></div></section><section class="py-16 sm:py-20"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="grid gap-12 lg:grid-cols-4"><aside class="lg:col-span-1"><div class="sticky top-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><h3 class="font-heading text-sm font-semibold uppercase tracking-widest text-slate-500">Other Categories</h3><ul class="mt-4 space-y-1 text-sm"><!--[-->`);
			ssrRenderList(__props.otherCategories, (oc) => {
				_push(`<li>`);
				_push(ssrRenderComponent(unref(Link), {
					href: `/products/${oc.slug}`,
					class: "block rounded-md px-2 py-1.5 text-slate-700 hover:bg-slate-50 hover:text-[color:var(--color-brand-accent)]"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(oc.name)}`);
						else return [createTextVNode(toDisplayString(oc.name), 1)];
					}),
					_: 2
				}, _parent));
				_push(`</li>`);
			});
			_push(`<!--]--><li class="pt-2 border-t border-slate-100 mt-2">`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/products",
				class: "block rounded-md px-2 py-1.5 text-sm font-semibold text-[color:var(--color-brand)] hover:bg-slate-50"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`View all 14 →`);
					else return [createTextVNode("View all 14 →")];
				}),
				_: 1
			}, _parent));
			_push(`</li></ul></div></aside><div class="lg:col-span-3"><div class="prose prose-slate max-w-none"><p class="text-lg leading-8 text-slate-700">${ssrInterpolate(__props.category.description)}</p></div>`);
			_push(ssrRenderComponent(ScrollReveal_default, {
				stagger: .08,
				y: 30,
				target: ".prod",
				class: "mt-12 grid gap-6 sm:grid-cols-2"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<!--[-->`);
						ssrRenderList(__props.products, (p) => {
							_push(`<div class="prod"${_scopeId}>`);
							_push(ssrRenderComponent(ProductCard_default, { product: {
								...p,
								category: __props.category
							} }, null, _parent, _scopeId));
							_push(`</div>`);
						});
						_push(`<!--]-->`);
					} else return [(openBlock(true), createBlock(Fragment, null, renderList(__props.products, (p) => {
						return openBlock(), createBlock("div", {
							key: p.id,
							class: "prod"
						}, [createVNode(ProductCard_default, { product: {
							...p,
							category: __props.category
						} }, null, 8, ["product"])]);
					}), 128))];
				}),
				_: 1
			}, _parent));
			if (__props.category.faqs?.length) {
				_push(`<div class="mt-20"><h2 class="font-heading text-3xl font-semibold text-slate-900">Frequently asked</h2><div class="mt-8 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"><!--[-->`);
				ssrRenderList(__props.category.faqs, (f, i) => {
					_push(`<details class="group p-6"><summary class="flex cursor-pointer items-center justify-between gap-4 font-semibold text-slate-900 list-none"><span>${ssrInterpolate(f.q)}</span><svg class="size-5 shrink-0 text-slate-400 transition group-open:rotate-180" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path></svg></summary><p class="mt-3 text-sm leading-6 text-slate-600">${ssrInterpolate(f.a)}</p></details>`);
				});
				_push(`<!--]--></div></div>`);
			} else _push(`<!---->`);
			_push(`</div></div></div></section><!--]-->`);
		};
	}
});
//#endregion
//#region resources/js/Pages/Products/Category.vue
var _sfc_setup = Category_vue_vue_type_script_setup_true_lang_default.setup;
Category_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Products/Category.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Category_default = Category_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { Category_default as default };
