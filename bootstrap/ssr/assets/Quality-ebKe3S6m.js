import { t as SeoHead_default } from "./SeoHead-ILEVCC59.js";
import { defineComponent, unref, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
//#region resources/js/Pages/Quality.vue?vue&type=script&setup=true&lang.ts
var SITE = "https://pharmaceuticalsmachines.com";
var Quality_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Quality",
	__ssrInlineRender: true,
	setup(__props) {
		const pillars = [
			{
				title: "cGMP Construction",
				body: "Every machine is built to current Good Manufacturing Practice — full material traceability, sanitary design, no dead-legs, smooth-finish welds."
			},
			{
				title: "SS 316/316L Contact Parts",
				body: "Product-contact surfaces are SS 316L, polished to Ra ≤ 0.4 µm internal finish, passivated and documented per ASME BPE."
			},
			{
				title: "FAT & SAT",
				body: "Factory Acceptance Test at our Ahmedabad facility with full protocol + Site Acceptance Test at your plant, both fully documented."
			},
			{
				title: "IQ / OQ / PQ",
				body: "Installation, Operational and Performance Qualification protocols supplied with every machine — ready for regulatory audit."
			},
			{
				title: "Design Qualification (DQ)",
				body: "Engineering drawings, URS mapping, component datasheets delivered before the build begins."
			},
			{
				title: "CE-Ready Variants",
				body: "CE-compliant models available for European and export markets — electrical, mechanical, and safety compliance per EU directives."
			}
		];
		const provider = {
			"@type": "Organization",
			name: "Kailash Machine Tools",
			url: SITE
		};
		const serviceSchema = [
			{
				name: "Pharmaceutical Machinery Manufacturing",
				description: "Custom design and manufacture of cGMP-compliant pharmaceutical machinery — vial filling, ampoule sealing, washing, capping, labelling, tablet press and turnkey lines."
			},
			{
				name: "IQ/OQ/PQ Validation Support",
				description: "Installation, Operational and Performance Qualification protocols supplied with every machine. Audit-ready documentation for regulatory submissions."
			},
			{
				name: "FAT & SAT Testing",
				description: "Factory Acceptance Test at our Ahmedabad workshop, plus on-site Site Acceptance Test at your facility — full sign-off documentation."
			},
			{
				name: "Installation & Commissioning",
				description: "Service engineers travel on-site for installation, commissioning, and operator training in India and export markets."
			},
			{
				name: "After-Sales Support",
				description: "Regional spare-parts stocking, remote diagnostics, on-site service within 72 hours, and 24-month parts warranty."
			}
		].map((s) => ({
			"@context": "https://schema.org",
			"@type": "Service",
			name: s.name,
			description: s.description,
			provider,
			serviceType: "Pharmaceutical engineering",
			areaServed: {
				"@type": "Country",
				name: "Worldwide"
			}
		}));
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(SeoHead_default, {
				title: "Quality & Compliance — cGMP, SS 316L, FAT/SAT, IQ/OQ/PQ",
				description: "cGMP design, SS 316L contact parts, FAT/SAT validation and IQ/OQ/PQ documentation on every pharmaceutical machine we ship.",
				schema: unref(serviceSchema)
			}, null, _parent));
			_push(`<section class="mesh-hero relative py-20 text-white"><div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p class="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">Quality &amp; Compliance</p><h1 class="mt-3 max-w-3xl text-4xl font-semibold sm:text-5xl">Auditable by design. Validated on delivery.</h1><p class="mt-4 max-w-2xl text-lg leading-8 text-slate-200">Every Kailash Machine Tools build passes through a quality system that assumes your plant will be audited tomorrow — and makes sure the machine passes.</p></div></section><section class="py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
			ssrRenderList(pillars, (p) => {
				_push(`<div class="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-brand)]"><div class="mb-4 inline-flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-[color:var(--color-brand)] to-[color:var(--color-brand-accent)] text-white"><svg class="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12 12 0 0012 21.056a12 12 0 008.618-15.072z"></path></svg></div><h2 class="font-heading text-lg font-semibold text-slate-900">${ssrInterpolate(p.title)}</h2><p class="mt-3 text-sm leading-6 text-slate-600">${ssrInterpolate(p.body)}</p></div>`);
			});
			_push(`<!--]--></div></div></section><!--]-->`);
		};
	}
});
//#endregion
//#region resources/js/Pages/Quality.vue
var _sfc_setup = Quality_vue_vue_type_script_setup_true_lang_default.setup;
Quality_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Quality.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Quality_default = Quality_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { Quality_default as default };
