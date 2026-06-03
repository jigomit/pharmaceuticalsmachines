import { t as useSiteUrl } from "./useSiteUrl-CLhO3Ycn.js";
import { t as SeoHead_default } from "./SeoHead-vcfRhzu1.js";
import { t as ScrollReveal_default } from "./ScrollReveal-CwIui_-r.js";
import { t as ProductCard_default } from "./ProductCard-bYE7QR9h.js";
import { t as CategoryIcon_default } from "./CategoryIcon-BOcVQdSI.js";
import { Fragment, computed, createBlock, createCommentVNode, createTextVNode, createVNode, defineComponent, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, watch, withCtx } from "vue";
import { Link } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
//#region resources/js/Pages/Products/Index.vue?vue&type=script&setup=true&lang.ts
var Index_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Index",
	__ssrInlineRender: true,
	props: {
		categories: {},
		searchQuery: {},
		searchResults: {}
	},
	setup(__props) {
		const props = __props;
		const site = useSiteUrl();
		const searchInput = ref(props.searchQuery ?? "");
		watch(() => props.searchQuery, (q) => {
			searchInput.value = q ?? "";
		});
		const breadcrumbSchema = computed(() => ({
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			itemListElement: [{
				"@type": "ListItem",
				position: 1,
				name: "Home",
				item: `${site.value}/`
			}, {
				"@type": "ListItem",
				position: 2,
				name: "Products",
				item: `${site.value}/products`
			}]
		}));
		const itemListSchema = computed(() => ({
			"@context": "https://schema.org",
			"@type": "ItemList",
			name: "Pharmaceutical Machinery Categories",
			numberOfItems: props.categories.length,
			itemListElement: props.categories.map((c, i) => ({
				"@type": "ListItem",
				position: i + 1,
				url: `${site.value}/products/${c.slug}`,
				name: c.name
			}))
		}));
		const isSearching = computed(() => (props.searchQuery ?? "").length > 0);
		const results = computed(() => props.searchResults ?? []);
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(SeoHead_default, {
				title: "Pharmaceutical Machinery Products — 14 Categories",
				description: "Ampoule & vial washing, injectable filling, capping, labelling, inspection, tablet presses, ointment & syrup plants. cGMP-built in Ahmedabad, India.",
				schema: [breadcrumbSchema.value, itemListSchema.value]
			}, null, _parent));
			_push(`<section class="relative isolate overflow-hidden text-white"><div class="mesh-hero-animated absolute inset-0"></div><div class="bg-grid-dark grid-pattern-fade absolute inset-0 opacity-30"></div><div class="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"><p class="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">Our Machinery</p><h1 class="mt-3 max-w-4xl font-heading text-balance text-4xl font-semibold sm:text-6xl">Every machine a pharma line needs — engineered in-house.</h1><p class="mt-6 max-w-3xl text-lg leading-8 text-slate-200">Browse 14 categories spanning washing, filling, sealing, labelling, inspection, solid dosage and turnkey plants. Every product is cGMP-ready with SS 316L build, servo automation, and IQ/OQ documentation.</p><form class="mt-8 max-w-xl" role="search"><label for="product-search" class="sr-only">Search pharmaceutical machinery</label><div class="flex gap-2"><input id="product-search"${ssrRenderAttr("value", searchInput.value)} type="search" name="q" autocomplete="off" placeholder="Search machines by name or model…" class="min-w-0 flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-slate-300 backdrop-blur focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-400/40"><button type="submit" class="shrink-0 rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-400">Search</button></div></form></div></section>`);
			if (isSearching.value) {
				_push(`<section class="border-b border-slate-100 bg-slate-50 py-12"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><h2 class="font-heading text-2xl font-semibold text-slate-900"> Search results for “${ssrInterpolate(__props.searchQuery)}” </h2>`);
				if (results.value.length === 0) _push(`<p class="mt-4 text-slate-600">No machines matched your search. Try another keyword or browse categories below.</p>`);
				else {
					_push(`<div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
					ssrRenderList(results.value, (p) => {
						_push(ssrRenderComponent(ProductCard_default, {
							key: p.id,
							product: p
						}, null, _parent));
					});
					_push(`<!--]--></div>`);
				}
				_push(`<p class="mt-6"><button type="button" class="text-sm font-semibold text-[color:var(--color-brand-accent)] hover:underline">Clear search</button></p></div></section>`);
			} else _push(`<!---->`);
			_push(`<section class="py-20 sm:py-24"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">`);
			if (isSearching.value) _push(`<h2 class="mb-8 font-heading text-xl font-semibold text-slate-900">Browse by category</h2>`);
			else _push(`<!---->`);
			_push(ssrRenderComponent(ScrollReveal_default, {
				stagger: .08,
				y: 30,
				target: ".cat-card",
				class: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<!--[-->`);
						ssrRenderList(__props.categories, (c) => {
							_push(ssrRenderComponent(unref(Link), {
								key: c.id,
								href: `/products/${c.slug}`,
								class: "cat-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-[color:var(--color-brand-accent)]/50 hover:shadow-[var(--shadow-brand)]"
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) {
										_push(`<div class="relative aspect-[16/10] overflow-hidden bg-slate-100"${_scopeId}>`);
										if (c.hero_image) _push(`<img${ssrRenderAttr("src", c.hero_image)}${ssrRenderAttr("alt", c.name + " — Kailash Machine Tools")} class="size-full object-contain transition-transform duration-700 group-hover:scale-105" loading="lazy" width="800" height="500"${_scopeId}>`);
										else _push(`<!---->`);
										_push(`<div class="absolute inset-0 bg-gradient-to-t from-[color:var(--color-brand)]/80 via-[color:var(--color-brand)]/20 to-transparent"${_scopeId}></div><div class="absolute left-5 top-5 inline-flex size-11 items-center justify-center rounded-xl bg-white/95 text-[color:var(--color-brand)] backdrop-blur"${_scopeId}>`);
										_push(ssrRenderComponent(CategoryIcon_default, {
											name: c.icon,
											class: "size-5"
										}, null, _parent, _scopeId));
										_push(`</div><span class="absolute bottom-5 left-5 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-[color:var(--color-brand)]"${_scopeId}>${ssrInterpolate(c.products_count)} machines</span></div><div class="flex flex-1 flex-col p-6"${_scopeId}><h2 class="font-heading text-xl font-semibold text-slate-900 group-hover:text-[color:var(--color-brand-accent)]"${_scopeId}>${ssrInterpolate(c.name)}</h2><p class="mt-1 text-sm text-teal-600"${_scopeId}>${ssrInterpolate(c.tagline)}</p><p class="mt-3 flex-1 text-sm leading-6 text-slate-600"${_scopeId}>${ssrInterpolate(c.short_description)}</p><p class="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--color-brand)]"${_scopeId}>Explore category <span class="transition group-hover:translate-x-1"${_scopeId}>→</span></p></div>`);
									} else return [createVNode("div", { class: "relative aspect-[16/10] overflow-hidden bg-slate-100" }, [
										c.hero_image ? (openBlock(), createBlock("img", {
											key: 0,
											src: c.hero_image,
											alt: c.name + " — Kailash Machine Tools",
											class: "size-full object-contain transition-transform duration-700 group-hover:scale-105",
											loading: "lazy",
											width: "800",
											height: "500"
										}, null, 8, ["src", "alt"])) : createCommentVNode("", true),
										createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-[color:var(--color-brand)]/80 via-[color:var(--color-brand)]/20 to-transparent" }),
										createVNode("div", { class: "absolute left-5 top-5 inline-flex size-11 items-center justify-center rounded-xl bg-white/95 text-[color:var(--color-brand)] backdrop-blur" }, [createVNode(CategoryIcon_default, {
											name: c.icon,
											class: "size-5"
										}, null, 8, ["name"])]),
										createVNode("span", { class: "absolute bottom-5 left-5 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-[color:var(--color-brand)]" }, toDisplayString(c.products_count) + " machines", 1)
									]), createVNode("div", { class: "flex flex-1 flex-col p-6" }, [
										createVNode("h2", { class: "font-heading text-xl font-semibold text-slate-900 group-hover:text-[color:var(--color-brand-accent)]" }, toDisplayString(c.name), 1),
										createVNode("p", { class: "mt-1 text-sm text-teal-600" }, toDisplayString(c.tagline), 1),
										createVNode("p", { class: "mt-3 flex-1 text-sm leading-6 text-slate-600" }, toDisplayString(c.short_description), 1),
										createVNode("p", { class: "mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--color-brand)]" }, [createTextVNode("Explore category "), createVNode("span", { class: "transition group-hover:translate-x-1" }, "→")])
									])];
								}),
								_: 2
							}, _parent, _scopeId));
						});
						_push(`<!--]-->`);
					} else return [(openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (c) => {
						return openBlock(), createBlock(unref(Link), {
							key: c.id,
							href: `/products/${c.slug}`,
							class: "cat-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-[color:var(--color-brand-accent)]/50 hover:shadow-[var(--shadow-brand)]"
						}, {
							default: withCtx(() => [createVNode("div", { class: "relative aspect-[16/10] overflow-hidden bg-slate-100" }, [
								c.hero_image ? (openBlock(), createBlock("img", {
									key: 0,
									src: c.hero_image,
									alt: c.name + " — Kailash Machine Tools",
									class: "size-full object-contain transition-transform duration-700 group-hover:scale-105",
									loading: "lazy",
									width: "800",
									height: "500"
								}, null, 8, ["src", "alt"])) : createCommentVNode("", true),
								createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-[color:var(--color-brand)]/80 via-[color:var(--color-brand)]/20 to-transparent" }),
								createVNode("div", { class: "absolute left-5 top-5 inline-flex size-11 items-center justify-center rounded-xl bg-white/95 text-[color:var(--color-brand)] backdrop-blur" }, [createVNode(CategoryIcon_default, {
									name: c.icon,
									class: "size-5"
								}, null, 8, ["name"])]),
								createVNode("span", { class: "absolute bottom-5 left-5 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-[color:var(--color-brand)]" }, toDisplayString(c.products_count) + " machines", 1)
							]), createVNode("div", { class: "flex flex-1 flex-col p-6" }, [
								createVNode("h2", { class: "font-heading text-xl font-semibold text-slate-900 group-hover:text-[color:var(--color-brand-accent)]" }, toDisplayString(c.name), 1),
								createVNode("p", { class: "mt-1 text-sm text-teal-600" }, toDisplayString(c.tagline), 1),
								createVNode("p", { class: "mt-3 flex-1 text-sm leading-6 text-slate-600" }, toDisplayString(c.short_description), 1),
								createVNode("p", { class: "mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--color-brand)]" }, [createTextVNode("Explore category "), createVNode("span", { class: "transition group-hover:translate-x-1" }, "→")])
							])]),
							_: 2
						}, 1032, ["href"]);
					}), 128))];
				}),
				_: 1
			}, _parent));
			_push(`</div></section><!--]-->`);
		};
	}
});
//#endregion
//#region resources/js/Pages/Products/Index.vue
var _sfc_setup = Index_vue_vue_type_script_setup_true_lang_default.setup;
Index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Products/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Index_default = Index_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { Index_default as default };
