import { t as SeoHead_default } from "./SeoHead-ILEVCC59.js";
import { t as EnquiryForm_default } from "./EnquiryForm-C7PFK15L.js";
import { t as ImageLightbox_default } from "./ImageLightbox-Cy5zirLC.js";
import { t as ProductCard_default } from "./ProductCard-C-SlM2Bk.js";
import { computed, createTextVNode, defineComponent, ref, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Link } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
//#region resources/js/Pages/Products/Show.vue?vue&type=script&setup=true&lang.ts
var SITE = "https://pharmaceuticalsmachines.com";
var Show_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Show",
	__ssrInlineRender: true,
	props: {
		product: {},
		related: {}
	},
	setup(__props) {
		const props = __props;
		const gallery = computed(() => {
			const imgs = [];
			if (props.product.hero_image) imgs.push(props.product.hero_image);
			if (Array.isArray(props.product.images)) props.product.images.forEach((u) => {
				if (u && !imgs.includes(u)) imgs.push(u);
			});
			return imgs;
		});
		const activeImage = ref(0);
		const lightboxOpen = ref(false);
		const lightboxIndex = ref(0);
		const productUrl = computed(() => `${SITE}/products/${props.product.category?.slug}/${props.product.slug}`);
		const productSchema = computed(() => ({
			"@context": "https://schema.org",
			"@type": "Product",
			name: props.product.name,
			description: props.product.short_description,
			sku: props.product.model_code || `KMT-${props.product.id}`,
			mpn: props.product.model_code || `KMT-${props.product.id}`,
			brand: {
				"@type": "Brand",
				name: "Kailash Machine Tools"
			},
			manufacturer: {
				"@type": "Organization",
				name: "Kailash Machine Tools",
				url: SITE,
				address: "Vatva, Ahmedabad, Gujarat, India"
			},
			category: props.product.category?.name,
			image: gallery.value.length ? gallery.value : [`${SITE}/og-default.jpg`],
			url: productUrl.value,
			material: "AISI 316L stainless steel (product-contact parts)",
			countryOfOrigin: "IN",
			audience: {
				"@type": "BusinessAudience",
				audienceType: "Pharmaceutical manufacturers"
			},
			offers: {
				"@type": "Offer",
				url: productUrl.value,
				priceCurrency: "INR",
				availability: "https://schema.org/InStock",
				priceSpecification: {
					"@type": "PriceSpecification",
					priceCurrency: "INR",
					valueAddedTaxIncluded: false,
					description: "Price on request — quotation issued within 48 hours"
				},
				seller: {
					"@type": "Organization",
					name: "Kailash Machine Tools",
					url: SITE
				},
				areaServed: "Worldwide"
			}
		}));
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
					name: props.product.category?.name,
					item: `${SITE}/products/${props.product.category?.slug}`
				},
				{
					"@type": "ListItem",
					position: 4,
					name: props.product.name,
					item: productUrl.value
				}
			]
		}));
		const faqSchema = computed(() => ({
			"@context": "https://schema.org",
			"@type": "FAQPage",
			mainEntity: [
				{
					"@type": "Question",
					name: `What is the lead time for the ${props.product.name}?`,
					acceptedAnswer: {
						"@type": "Answer",
						text: "Standard configurations ship in 6–10 weeks from purchase order. Customised builds: 12–18 weeks depending on scope."
					}
				},
				{
					"@type": "Question",
					name: `Is the ${props.product.name} cGMP compliant?`,
					acceptedAnswer: {
						"@type": "Answer",
						text: "Yes. SS 316L product-contact parts, Ra < 0.4 µm finish, and full IQ/OQ/PQ documentation are included on every machine."
					}
				},
				{
					"@type": "Question",
					name: "Do you provide installation and validation support?",
					acceptedAnswer: {
						"@type": "Answer",
						text: "Yes — FAT at our Ahmedabad floor, plus on-site SAT, operator training, and IQ/OQ/PQ execution at your facility."
					}
				},
				{
					"@type": "Question",
					name: "Can the machine be customised for our product?",
					acceptedAnswer: {
						"@type": "Answer",
						text: "Yes. Over 60% of our builds include customisation — from contact-part geometry to special control logic. Share a URS for a 48-hour response."
					}
				},
				{
					"@type": "Question",
					name: "What is the warranty on this machine?",
					acceptedAnswer: {
						"@type": "Answer",
						text: "24-month standard warranty on parts and workmanship, plus regional spare-parts stocking and remote diagnostics."
					}
				}
			]
		}));
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(SeoHead_default, {
				title: __props.product.meta_title ?? `${__props.product.name} | Manufacturer`,
				description: __props.product.meta_description ?? __props.product.short_description,
				image: gallery.value[0],
				type: "product",
				schema: [
					productSchema.value,
					breadcrumbSchema.value,
					faqSchema.value
				]
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
			_push(`</li><li>/</li><li>`);
			_push(ssrRenderComponent(unref(Link), {
				href: `/products/${__props.product.category.slug}`,
				class: "hover:text-[color:var(--color-brand)]"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${ssrInterpolate(__props.product.category.name)}`);
					else return [createTextVNode(toDisplayString(__props.product.category.name), 1)];
				}),
				_: 1
			}, _parent));
			_push(`</li><li>/</li><li class="text-slate-900">${ssrInterpolate(__props.product.name)}</li></ol></div></nav><section class="bg-white py-12 sm:py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="grid gap-10 lg:grid-cols-12"><div class="lg:col-span-7"><button type="button" class="group relative block aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">`);
			if (gallery.value[activeImage.value]) _push(`<img${ssrRenderAttr("src", gallery.value[activeImage.value])}${ssrRenderAttr("alt", __props.product.name + " — " + __props.product.category.name)} class="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105" width="1200" height="900" loading="eager" fetchpriority="high">`);
			else _push(`<!---->`);
			_push(`<span class="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-medium text-slate-700 shadow opacity-0 transition-opacity group-hover:opacity-100"><svg class="size-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"></path></svg> Expand </span><span class="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-[color:var(--color-brand)]">${ssrInterpolate(__props.product.category.name)}</span></button>`);
			if (gallery.value.length > 1) {
				_push(`<div class="mt-4 grid grid-cols-4 gap-3"><!--[-->`);
				ssrRenderList(gallery.value, (g, i) => {
					_push(`<button type="button" class="${ssrRenderClass(["relative aspect-square overflow-hidden rounded-xl border-2 transition", activeImage.value === i ? "border-[color:var(--color-brand-accent)]" : "border-slate-200 opacity-70 hover:opacity-100"])}"><img${ssrRenderAttr("src", g)}${ssrRenderAttr("alt", `${__props.product.name} view ${i + 1}`)} class="absolute inset-0 size-full object-cover" loading="lazy" width="200" height="200"></button>`);
				});
				_push(`<!--]--></div>`);
			} else _push(`<!---->`);
			_push(`</div><div class="lg:col-span-5">`);
			if (__props.product.model_code) _push(`<p class="font-mono text-xs uppercase tracking-widest text-teal-600">Model ${ssrInterpolate(__props.product.model_code)}</p>`);
			else _push(`<!---->`);
			_push(`<h1 class="mt-2 font-heading text-balance text-3xl font-semibold text-slate-900 sm:text-4xl">${ssrInterpolate(__props.product.name)}</h1><p class="mt-4 text-base leading-7 text-slate-600">${ssrInterpolate(__props.product.short_description)}</p>`);
			if (__props.product.specs) {
				_push(`<div class="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"><div class="border-b border-slate-200 bg-white px-5 py-3"><h2 class="text-xs font-semibold uppercase tracking-widest text-slate-500">Key Specifications</h2></div><dl class="divide-y divide-slate-200"><!--[-->`);
				ssrRenderList(__props.product.specs, (v, k) => {
					_push(`<div class="flex items-baseline justify-between gap-3 px-5 py-3"><dt class="text-xs text-slate-500">${ssrInterpolate(k)}</dt><dd class="text-right font-mono text-sm text-slate-900">${ssrInterpolate(v)}</dd></div>`);
				});
				_push(`<!--]--></dl></div>`);
			} else _push(`<!---->`);
			_push(`<div class="mt-8 flex flex-wrap gap-3"><a href="#enquire" class="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-brand)] px-6 py-3 text-sm font-semibold text-white hover:bg-[color:var(--color-brand-accent)]"> Request Quotation <svg class="size-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></a><a href="https://wa.me/919825018210" target="_blank" rel="noopener" class="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:border-teal-500 hover:text-teal-600"> Chat on WhatsApp </a></div><div class="mt-8 grid grid-cols-2 gap-3 text-xs"><div class="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-slate-600"><svg class="size-4 text-teal-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"></path></svg> cGMP compliant build</div><div class="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-slate-600"><svg class="size-4 text-teal-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"></path></svg> SS 316L contact parts</div><div class="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-slate-600"><svg class="size-4 text-teal-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"></path></svg> IQ / OQ / PQ support</div><div class="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-slate-600"><svg class="size-4 text-teal-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"></path></svg> 24-month warranty</div></div></div></div></div></section><section class="bg-slate-50 py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="grid gap-12 lg:grid-cols-3"><div class="lg:col-span-2"><article class="prose prose-slate max-w-none"><div>${__props.product.long_description?.replace(/\n\n/g, "<br><br>") ?? ""}</div></article>`);
			if (__props.product.features?.length) {
				_push(`<div class="mt-12"><h2 class="font-heading text-2xl font-semibold text-slate-900">Features</h2><ul class="mt-6 grid gap-3 sm:grid-cols-2"><!--[-->`);
				ssrRenderList(__props.product.features, (f, i) => {
					_push(`<li class="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700"><svg class="mt-0.5 size-5 shrink-0 text-teal-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"></path></svg><span>${ssrInterpolate(f)}</span></li>`);
				});
				_push(`<!--]--></ul></div>`);
			} else _push(`<!---->`);
			if (__props.product.applications?.length) {
				_push(`<div class="mt-12"><h2 class="font-heading text-2xl font-semibold text-slate-900">Applications</h2><div class="mt-4 flex flex-wrap gap-2"><!--[-->`);
				ssrRenderList(__props.product.applications, (a, i) => {
					_push(`<span class="rounded-full bg-white px-4 py-1.5 text-sm text-slate-700 ring-1 ring-slate-200">${ssrInterpolate(a)}</span>`);
				});
				_push(`<!--]--></div></div>`);
			} else _push(`<!---->`);
			_push(`</div><aside class="lg:col-span-1"><div id="enquire" class="sticky top-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><h3 class="font-heading text-lg font-semibold text-slate-900">Enquire about this machine</h3><p class="mt-1 text-sm text-slate-500">We reply within 24 business hours.</p><div class="mt-4">`);
			_push(ssrRenderComponent(EnquiryForm_default, {
				"product-slug": __props.product.slug,
				compact: ""
			}, null, _parent));
			_push(`</div></div></aside></div></div></section>`);
			if (__props.related?.length) {
				_push(`<section class="py-16 sm:py-20"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><h2 class="font-heading text-2xl font-semibold text-slate-900">Related machines</h2><div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"><!--[-->`);
				ssrRenderList(__props.related, (r) => {
					_push(ssrRenderComponent(ProductCard_default, {
						key: r.id,
						product: r
					}, null, _parent));
				});
				_push(`<!--]--></div></div></section>`);
			} else _push(`<!---->`);
			_push(ssrRenderComponent(ImageLightbox_default, {
				open: lightboxOpen.value,
				images: gallery.value.map((src, i) => ({
					src,
					alt: `${__props.product.name} — image ${i + 1}`
				})),
				"initial-index": lightboxIndex.value,
				onClose: ($event) => lightboxOpen.value = false
			}, null, _parent));
			_push(`<!--]-->`);
		};
	}
});
//#endregion
//#region resources/js/Pages/Products/Show.vue
var _sfc_setup = Show_vue_vue_type_script_setup_true_lang_default.setup;
Show_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Products/Show.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Show_default = Show_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { Show_default as default };
