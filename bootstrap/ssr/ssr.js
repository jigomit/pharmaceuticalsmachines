import { t as _plugin_vue_export_helper_default } from "./assets/_plugin-vue_export-helper-jrA-gPFe.js";
import { computed, createBlock, createCommentVNode, createSSRApp, createTextVNode, createVNode, defineComponent, h, mergeProps, onBeforeUnmount, onMounted, openBlock, ref, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Link, createInertiaApp, usePage } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
import { MotionPlugin } from "@vueuse/motion";
import { ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderSlot } from "vue/server-renderer";
//#region node_modules/laravel-vite-plugin/inertia-helpers/index.js
async function resolvePageComponent(path, pages) {
	for (const p of Array.isArray(path) ? path : [path]) {
		const page = pages[p];
		if (typeof page === "undefined") continue;
		return typeof page === "function" ? page() : page;
	}
	throw new Error(`Page not found: ${path}`);
}
//#endregion
//#region resources/js/Components/KmtLogo.vue?vue&type=script&setup=true&lang.ts
var KmtLogo_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "KmtLogo",
	__ssrInlineRender: true,
	props: {
		class: {},
		withWordmark: {
			type: Boolean,
			default: true
		},
		light: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<span${ssrRenderAttrs(mergeProps({ class: ["inline-flex items-center gap-2.5", _ctx.$props.class] }, _attrs))}><img src="/images/brand/kmt-logo.png" srcset="/images/brand/kmt-logo.png 1x, /images/brand/kmt-logo-2x.png 2x" alt="Kailash Machine Tools" width="56" height="38" class="h-10 w-auto shrink-0" decoding="async">`);
			if (__props.withWordmark) _push(`<span class="hidden sm:flex flex-col leading-none"><span class="${ssrRenderClass(["font-heading text-[15px] font-bold tracking-tight", __props.light ? "text-white" : "text-[color:var(--color-brand)]"])}"> Kailash Machine Tools </span><span class="${ssrRenderClass(["mt-0.5 text-[9px] font-semibold uppercase tracking-[0.2em]", __props.light ? "text-teal-300" : "text-teal-600"])}"> Since 1991 </span></span>`);
			else _push(`<!---->`);
			_push(`</span>`);
		};
	}
});
//#endregion
//#region resources/js/Components/KmtLogo.vue
var _sfc_setup$3 = KmtLogo_vue_vue_type_script_setup_true_lang_default.setup;
KmtLogo_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/KmtLogo.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var KmtLogo_default = KmtLogo_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/Components/SiteNav.vue?vue&type=script&setup=true&lang.ts
var SiteNav_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SiteNav",
	__ssrInlineRender: true,
	setup(__props) {
		const page = usePage();
		const company = computed(() => page.props.company);
		const isOpen = ref(false);
		const scrolled = ref(false);
		const onScroll = () => {
			scrolled.value = window.scrollY > 8;
		};
		onMounted(() => {
			onScroll();
			window.addEventListener("scroll", onScroll, { passive: true });
		});
		onBeforeUnmount(() => window.removeEventListener("scroll", onScroll));
		const nav = [
			{
				label: "Home",
				href: "/"
			},
			{
				label: "About",
				href: "/about"
			},
			{
				label: "Products",
				href: "/products"
			},
			{
				label: "Industries",
				href: "/industries"
			},
			{
				label: "Quality",
				href: "/quality-compliance"
			},
			{
				label: "Clients",
				href: "/clients"
			},
			{
				label: "Blog",
				href: "/blog"
			},
			{
				label: "Contact",
				href: "/contact"
			}
		];
		const isActive = (href) => {
			const url = page.url;
			if (href === "/") return url === "/";
			return url === href || url.startsWith(href + "/");
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<header${ssrRenderAttrs(mergeProps({ class: ["sticky top-0 z-50 w-full border-b transition-all duration-300", scrolled.value ? "border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-sm" : "border-transparent bg-white/70 backdrop-blur"] }, _attrs))} data-v-83e1a58d><div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" data-v-83e1a58d>`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/",
				class: "flex items-center gap-2",
				"aria-label": "Kailash Machine Tools home"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(KmtLogo_default, { class: "h-10 w-auto" }, null, _parent, _scopeId));
					else return [createVNode(KmtLogo_default, { class: "h-10 w-auto" })];
				}),
				_: 1
			}, _parent));
			_push(`<nav class="hidden items-center gap-1 lg:flex" data-v-83e1a58d><!--[-->`);
			ssrRenderList(nav, (item) => {
				_push(ssrRenderComponent(unref(Link), {
					key: item.href,
					href: item.href,
					class: ["relative rounded-full px-4 py-2 text-sm font-medium transition-colors", isActive(item.href) ? "text-[color:var(--color-brand)]" : "text-slate-600 hover:text-[color:var(--color-brand)]"]
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`${ssrInterpolate(item.label)} `);
							if (isActive(item.href)) _push(`<span class="absolute inset-x-3 -bottom-[1px] h-0.5 rounded-full bg-gradient-to-r from-[color:var(--color-brand-accent)] to-[color:var(--color-brand-highlight)]" data-v-83e1a58d${_scopeId}></span>`);
							else _push(`<!---->`);
						} else return [createTextVNode(toDisplayString(item.label) + " ", 1), isActive(item.href) ? (openBlock(), createBlock("span", {
							key: 0,
							class: "absolute inset-x-3 -bottom-[1px] h-0.5 rounded-full bg-gradient-to-r from-[color:var(--color-brand-accent)] to-[color:var(--color-brand-highlight)]"
						})) : createCommentVNode("", true)];
					}),
					_: 2
				}, _parent));
			});
			_push(`<!--]--></nav><div class="flex items-center gap-3" data-v-83e1a58d><a${ssrRenderAttr("href", `tel:${company.value?.phone?.replace(/\s/g, "")}`)} class="hidden font-mono text-xs tracking-wider text-[color:var(--color-brand)] md:inline" data-v-83e1a58d>${ssrInterpolate(company.value?.phone)}</a>`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/contact",
				class: "hidden rounded-full bg-[color:var(--color-brand)] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[color:var(--color-brand-accent)] md:inline-flex"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Get Quote `);
					else return [createTextVNode(" Get Quote ")];
				}),
				_: 1
			}, _parent));
			_push(`<button class="inline-flex size-10 items-center justify-center rounded-md border border-slate-200 text-slate-700 lg:hidden" aria-label="Toggle menu" data-v-83e1a58d>`);
			if (!isOpen.value) _push(`<svg class="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-83e1a58d><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-v-83e1a58d></path></svg>`);
			else _push(`<svg class="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-83e1a58d><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-83e1a58d></path></svg>`);
			_push(`</button></div></div>`);
			if (isOpen.value) {
				_push(`<div class="border-t border-slate-100 bg-white lg:hidden" data-v-83e1a58d><nav class="flex flex-col gap-1 px-4 py-4 text-sm font-medium" data-v-83e1a58d><!--[-->`);
				ssrRenderList(nav, (item) => {
					_push(ssrRenderComponent(unref(Link), {
						key: item.href,
						href: item.href,
						class: ["rounded-md px-3 py-2 text-slate-700 hover:bg-slate-50", { "bg-slate-50 text-[color:var(--color-brand)]": isActive(item.href) }],
						onClick: ($event) => isOpen.value = false
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(item.label)}`);
							else return [createTextVNode(toDisplayString(item.label), 1)];
						}),
						_: 2
					}, _parent));
				});
				_push(`<!--]-->`);
				_push(ssrRenderComponent(unref(Link), {
					href: "/contact",
					class: "mt-2 rounded-full bg-[color:var(--color-brand)] px-4 py-2 text-center text-white",
					onClick: ($event) => isOpen.value = false
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`Get Quote`);
						else return [createTextVNode("Get Quote")];
					}),
					_: 1
				}, _parent));
				_push(`</nav></div>`);
			} else _push(`<!---->`);
			_push(`</header>`);
		};
	}
});
//#endregion
//#region resources/js/Components/SiteNav.vue
var _sfc_setup$2 = SiteNav_vue_vue_type_script_setup_true_lang_default.setup;
SiteNav_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SiteNav.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var SiteNav_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SiteNav_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-83e1a58d"]]);
//#endregion
//#region resources/js/Components/SiteFooter.vue?vue&type=script&setup=true&lang.ts
var SiteFooter_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SiteFooter",
	__ssrInlineRender: true,
	setup(__props) {
		const page = usePage();
		const company = computed(() => page.props.company);
		const year = (/* @__PURE__ */ new Date()).getFullYear();
		const cols = [
			{
				title: "Injectable Line",
				links: [
					{
						label: "Washing Machines",
						href: "/products/washing-machines"
					},
					{
						label: "Liquid Filling",
						href: "/products/injectable-liquid-filling"
					},
					{
						label: "Powder Filling",
						href: "/products/injectable-powder-filling"
					},
					{
						label: "Capping & Sealing",
						href: "/products/capping-sealing"
					},
					{
						label: "Labelling Machines",
						href: "/products/labelling"
					},
					{
						label: "Inspection Machines",
						href: "/products/inspection"
					}
				]
			},
			{
				title: "Plants & Solids",
				links: [
					{
						label: "Tablet Section",
						href: "/products/tablet-section"
					},
					{
						label: "Ointment / Cream Plants",
						href: "/products/ointment-cream-plants"
					},
					{
						label: "Liquid Syrup Plants",
						href: "/products/liquid-syrup-plants"
					},
					{
						label: "Packing Conveyors",
						href: "/products/packing-conveyors"
					},
					{
						label: "Tray Dryers & Storage",
						href: "/products/tray-dryers-storage"
					},
					{
						label: "Other Machinery",
						href: "/products/other-machinery"
					}
				]
			},
			{
				title: "Support",
				links: [
					{
						label: "Change Parts",
						href: "/products/change-parts"
					},
					{
						label: "Pharma Furniture",
						href: "/products/pharma-furniture"
					},
					{
						label: "Quality & Compliance",
						href: "/quality-compliance"
					},
					{
						label: "Industries",
						href: "/industries"
					},
					{
						label: "FAQ",
						href: "/faq"
					},
					{
						label: "Blog",
						href: "/blog"
					}
				]
			},
			{
				title: "Company",
				links: [
					{
						label: "About Us",
						href: "/about"
					},
					{
						label: "Clients",
						href: "/clients"
					},
					{
						label: "Gallery",
						href: "/gallery"
					},
					{
						label: "Contact",
						href: "/contact"
					},
					{
						label: "Privacy",
						href: "/privacy"
					},
					{
						label: "Terms",
						href: "/terms"
					}
				]
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<footer${ssrRenderAttrs(mergeProps({ class: "relative mt-24 overflow-hidden bg-[color:var(--color-brand)] text-slate-200" }, _attrs))}><div class="absolute inset-0 bg-grid-dark opacity-40"></div><div class="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"><div class="grid gap-12 lg:grid-cols-6"><div class="lg:col-span-2">`);
			_push(ssrRenderComponent(KmtLogo_default, { light: "" }, null, _parent));
			_push(`<p class="mt-4 text-sm leading-6 text-slate-300">${ssrInterpolate(company.value?.tagline)}. Leading manufacturer and exporter of injectable &amp; packaging line pharmaceutical machinery from Ahmedabad, India — trusted since 1991. </p><p class="mt-4 text-xs uppercase tracking-widest text-teal-300"> Formerly Shree Ganesh Pharmatech </p></div><!--[-->`);
			ssrRenderList(cols, (col) => {
				_push(`<div><h3 class="font-heading text-sm font-semibold uppercase tracking-widest text-white">${ssrInterpolate(col.title)}</h3><ul class="mt-4 space-y-2 text-sm"><!--[-->`);
				ssrRenderList(col.links, (link) => {
					_push(`<li>`);
					_push(ssrRenderComponent(unref(Link), {
						href: link.href,
						class: "text-slate-300 transition hover:text-teal-300"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(link.label)}`);
							else return [createTextVNode(toDisplayString(link.label), 1)];
						}),
						_: 2
					}, _parent));
					_push(`</li>`);
				});
				_push(`<!--]--></ul></div>`);
			});
			_push(`<!--]--></div><div class="mt-12 grid gap-8 rounded-2xl border border-white/10 bg-white/5 p-6 sm:grid-cols-3"><div><h3 class="font-heading text-sm font-semibold uppercase tracking-widest text-white">Factory Address</h3><address class="mt-3 text-sm not-italic leading-6 text-slate-300">${ssrInterpolate(company.value?.address?.street)}<br> ${ssrInterpolate(company.value?.address?.locality)}<br> ${ssrInterpolate(company.value?.address?.city)} ${ssrInterpolate(company.value?.address?.postal_code)}, ${ssrInterpolate(company.value?.address?.region)}<br> ${ssrInterpolate(company.value?.address?.country_name)}</address></div><div><h3 class="font-heading text-sm font-semibold uppercase tracking-widest text-white">Phone &amp; WhatsApp</h3><div class="mt-3 space-y-1.5 text-sm"><a${ssrRenderAttr("href", `tel:${company.value?.phone?.replace(/\s/g, "")}`)} class="block font-semibold text-teal-300 hover:text-white">${ssrInterpolate(company.value?.phone)}</a><a${ssrRenderAttr("href", `https://wa.me/${company.value?.whatsapp}`)} target="_blank" rel="noopener" class="block text-slate-300 hover:text-white">WhatsApp · Mon–Sat 10–7 IST</a></div></div><div><h3 class="font-heading text-sm font-semibold uppercase tracking-widest text-white">Email</h3><div class="mt-3 space-y-1.5 text-sm"><a${ssrRenderAttr("href", `mailto:${company.value?.email}`)} class="block text-slate-300 hover:text-white">${ssrInterpolate(company.value?.email)}</a><p class="text-xs text-slate-400">Responses within 24 business hours</p></div></div></div><div class="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center"><p>© ${ssrInterpolate(unref(year))} ${ssrInterpolate(company.value?.name)}. All rights reserved.</p><div class="flex gap-4">`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/privacy",
				class: "hover:text-white"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Privacy`);
					else return [createTextVNode("Privacy")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(unref(Link), {
				href: "/terms",
				class: "hover:text-white"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Terms`);
					else return [createTextVNode("Terms")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(unref(Link), {
				href: "/sitemap.xml",
				class: "hover:text-white"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Sitemap`);
					else return [createTextVNode("Sitemap")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></div></footer>`);
		};
	}
});
//#endregion
//#region resources/js/Components/SiteFooter.vue
var _sfc_setup$1 = SiteFooter_vue_vue_type_script_setup_true_lang_default.setup;
SiteFooter_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SiteFooter.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var SiteFooter_default = SiteFooter_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/Layouts/AppLayout.vue?vue&type=script&setup=true&lang.ts
var SITE = "https://pharmaceuticalsmachines.com";
var AppLayout_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AppLayout",
	__ssrInlineRender: true,
	setup(__props) {
		const page = usePage();
		const company = computed(() => page.props.company);
		const sameAs = computed(() => Object.values(company.value?.socials ?? {}).filter(Boolean));
		const addr = computed(() => ({
			"@type": "PostalAddress",
			streetAddress: `${company.value?.address?.street}, ${company.value?.address?.locality}`,
			addressLocality: company.value?.address?.city,
			addressRegion: company.value?.address?.region,
			postalCode: company.value?.address?.postal_code,
			addressCountry: company.value?.address?.country
		}));
		const globalSchema = computed(() => ({
			"@context": "https://schema.org",
			"@graph": [
				{
					"@type": "Organization",
					"@id": `${SITE}/#organization`,
					name: company.value?.name,
					alternateName: [
						"Shree Ganesh Pharmatech",
						"Ganesh Machine Tools",
						"Kailash Pharmatech"
					],
					url: SITE,
					logo: {
						"@type": "ImageObject",
						url: `${SITE}/images/brand/kmt-logo-square.png`,
						width: 512,
						height: 512
					},
					image: `${SITE}/og-default.jpg`,
					foundingDate: "1991",
					foundingLocation: {
						"@type": "Place",
						name: "Ahmedabad, Gujarat, India"
					},
					slogan: company.value?.tagline,
					email: company.value?.email,
					telephone: company.value?.phone,
					address: addr.value,
					sameAs: sameAs.value,
					contactPoint: [{
						"@type": "ContactPoint",
						telephone: company.value?.phone,
						contactType: "sales",
						areaServed: [
							"IN",
							"AE",
							"SA",
							"KE",
							"NG",
							"TZ",
							"VN",
							"PH",
							"ID",
							"EG"
						],
						availableLanguage: [
							"en",
							"hi",
							"gu"
						]
					}],
					knowsAbout: [
						"Pharmaceutical machinery",
						"Vial filling machines",
						"Ampoule filling machines",
						"Powder filling machines",
						"Capping machines",
						"Labelling machines",
						"Tablet press",
						"Ointment manufacturing plant",
						"Liquid syrup plant",
						"cGMP equipment",
						"Injectable line",
						"Packaging line"
					]
				},
				{
					"@type": "LocalBusiness",
					"@id": `${SITE}/#localbusiness`,
					name: company.value?.name,
					image: `${SITE}/og-default.jpg`,
					telephone: company.value?.phone,
					email: company.value?.email,
					url: SITE,
					priceRange: "$$$",
					address: addr.value,
					geo: {
						"@type": "GeoCoordinates",
						latitude: company.value?.address?.lat,
						longitude: company.value?.address?.lng
					},
					openingHoursSpecification: [{
						"@type": "OpeningHoursSpecification",
						dayOfWeek: [
							"Monday",
							"Tuesday",
							"Wednesday",
							"Thursday",
							"Friday",
							"Saturday"
						],
						opens: "10:00",
						closes: "19:00"
					}],
					paymentAccepted: "Bank Transfer, Letter of Credit, Wire Transfer",
					currenciesAccepted: "INR, USD, EUR",
					areaServed: [
						{
							"@type": "Country",
							name: "India"
						},
						{
							"@type": "Country",
							name: "United Arab Emirates"
						},
						{
							"@type": "Country",
							name: "Saudi Arabia"
						},
						{
							"@type": "Country",
							name: "Kenya"
						},
						{
							"@type": "Country",
							name: "Nigeria"
						},
						{
							"@type": "Country",
							name: "Vietnam"
						},
						{
							"@type": "Country",
							name: "Indonesia"
						}
					],
					hasMap: "https://www.google.com/maps?q=22.947,72.6261"
				},
				{
					"@type": "WebSite",
					"@id": `${SITE}/#website`,
					url: SITE,
					name: company.value?.name,
					inLanguage: "en-IN",
					publisher: { "@id": `${SITE}/#organization` },
					potentialAction: {
						"@type": "SearchAction",
						target: {
							"@type": "EntryPoint",
							urlTemplate: `${SITE}/products?q={search_term_string}`
						},
						"query-input": "required name=search_term_string"
					}
				}
			]
		}));
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "flex min-h-screen flex-col" }, _attrs))}><script type="application/ld+json">${JSON.stringify(globalSchema.value) ?? ""}<\/script>`);
			_push(ssrRenderComponent(SiteNav_default, null, null, _parent));
			_push(`<main class="flex-1">`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</main>`);
			_push(ssrRenderComponent(SiteFooter_default, null, null, _parent));
			_push(`<a${ssrRenderAttr("href", `https://wa.me/${company.value?.whatsapp}?text=${encodeURIComponent("Hello, I would like to enquire about your pharmaceutical machinery.")}`)} target="_blank" rel="noopener" class="fixed bottom-5 right-5 z-40 inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-600/30 transition hover:scale-105" aria-label="Chat on WhatsApp"><svg viewBox="0 0 24 24" class="size-7" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.87 11.87 0 0012.05 0C5.5 0 .17 5.33.17 11.88c0 2.09.55 4.13 1.6 5.94L0 24l6.34-1.66a11.85 11.85 0 005.71 1.45h.01c6.54 0 11.87-5.33 11.87-11.88 0-3.17-1.24-6.15-3.41-8.43zM12.06 21.3h-.01a9.43 9.43 0 01-4.8-1.32l-.34-.2-3.76.99 1-3.67-.22-.37a9.41 9.41 0 01-1.44-5.04c0-5.22 4.24-9.46 9.47-9.46 2.53 0 4.9.98 6.69 2.77a9.4 9.4 0 012.76 6.68c0 5.22-4.25 9.46-9.35 9.62zm5.4-7.07c-.3-.15-1.74-.86-2.01-.96-.27-.1-.47-.15-.66.15-.2.3-.75.96-.92 1.15-.17.2-.34.22-.63.08a7.74 7.74 0 01-2.27-1.4 8.44 8.44 0 01-1.57-1.96c-.16-.3 0-.46.13-.6.14-.14.3-.36.46-.53.15-.17.2-.3.3-.5.1-.19.05-.37-.02-.52-.08-.15-.66-1.6-.9-2.18-.24-.57-.48-.5-.66-.5l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.07.15.2 2.1 3.2 5.09 4.49.71.3 1.27.48 1.7.62.71.22 1.36.19 1.88.12.57-.08 1.74-.71 1.98-1.4.24-.68.24-1.27.17-1.4-.07-.12-.27-.2-.57-.35z"></path></svg></a></div>`);
		};
	}
});
//#endregion
//#region resources/js/Layouts/AppLayout.vue
var _sfc_setup = AppLayout_vue_vue_type_script_setup_true_lang_default.setup;
AppLayout_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AppLayout.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var AppLayout_default = AppLayout_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/ssr.ts
var appName = "Kailash Machine Tools";
var defaultTitle = `${appName} — Pharmaceutical Machinery Manufacturer Since 1991`;
var formatTitle = (title) => {
	if (!title) return defaultTitle;
	return title.includes(appName) ? title : `${title} | ${appName}`;
};
createServer((page) => createInertiaApp({
	page,
	render: renderToString,
	title: formatTitle,
	resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, /* @__PURE__ */ Object.assign({
		"./Pages/About.vue": () => import("./assets/About-BIX-nsh3.js"),
		"./Pages/Blog/Index.vue": () => import("./assets/Index-dS77Jg7y.js"),
		"./Pages/Blog/Show.vue": () => import("./assets/Show-CBzyMJ9I.js"),
		"./Pages/Clients.vue": () => import("./assets/Clients-DoQEurOU.js"),
		"./Pages/Contact.vue": () => import("./assets/Contact-C8KhRYCT.js"),
		"./Pages/Errors/NotFound.vue": () => import("./assets/NotFound-DMMhc8pW.js"),
		"./Pages/Faq.vue": () => import("./assets/Faq-krrdpMQG.js"),
		"./Pages/Gallery.vue": () => import("./assets/Gallery-Cggbqrf3.js"),
		"./Pages/Home.vue": () => import("./assets/Home-M14DgL8t.js"),
		"./Pages/Industries.vue": () => import("./assets/Industries-DG5VrCer.js"),
		"./Pages/Privacy.vue": () => import("./assets/Privacy-MElKXTOs.js"),
		"./Pages/Products/Category.vue": () => import("./assets/Category-Dh5YKja0.js"),
		"./Pages/Products/Index.vue": () => import("./assets/Index-HYXbWonm.js"),
		"./Pages/Products/Show.vue": () => import("./assets/Show-CWO4l_VE.js"),
		"./Pages/Quality.vue": () => import("./assets/Quality-ebKe3S6m.js"),
		"./Pages/Terms.vue": () => import("./assets/Terms-BJ276G-6.js")
	})).then((p) => {
		p.default.layout ??= AppLayout_default;
		return p;
	}),
	setup({ App, props, plugin }) {
		return createSSRApp({ render: () => h(App, props) }).use(plugin).use(MotionPlugin);
	}
}));
//#endregion
export {};
