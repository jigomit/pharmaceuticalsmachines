import { t as SeoHead_default } from "./SeoHead-ILEVCC59.js";
import { t as EnquiryForm_default } from "./EnquiryForm-C7PFK15L.js";
import { computed, defineComponent, useSSRContext } from "vue";
import { usePage } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
//#region resources/js/Pages/Contact.vue?vue&type=script&setup=true&lang.ts
var Contact_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Contact",
	__ssrInlineRender: true,
	setup(__props) {
		const page = usePage();
		const company = computed(() => page.props.company);
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(SeoHead_default, {
				title: "Contact Us — Pharmaceutical Machinery, Ahmedabad",
				description: "Talk to us about pharmaceutical machinery — injectable lines, vial filling, washing, capping. Factory in Vatva, Ahmedabad, Gujarat, India."
			}, null, _parent));
			_push(`<section class="relative isolate overflow-hidden bg-[color:var(--color-brand)] py-20 text-white"><div class="mesh-hero absolute inset-0 opacity-80"></div><div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p class="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">Contact</p><h1 class="mt-3 max-w-4xl text-4xl font-semibold sm:text-5xl">Let&#39;s design the right line for your product.</h1><p class="mt-4 max-w-3xl text-lg leading-8 text-slate-200">Share your product, batch size and target output — our application engineers will come back with a machine specification within 48 hours.</p></div></section><section class="py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="grid gap-12 lg:grid-cols-5"><div class="lg:col-span-3 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"><h2 class="font-heading text-2xl font-semibold text-slate-900">Send us an enquiry</h2><p class="mt-1 text-sm text-slate-500">We respond within one business day.</p><div class="mt-6">`);
			_push(ssrRenderComponent(EnquiryForm_default, null, null, _parent));
			_push(`</div></div><div class="lg:col-span-2 space-y-6"><div class="rounded-3xl border border-slate-200 bg-gradient-to-br from-[color:var(--color-brand)] to-[color:var(--color-brand-accent)] p-8 text-white"><h3 class="font-heading text-lg font-semibold">Factory &amp; head office</h3><address class="mt-3 not-italic text-sm leading-6 text-slate-100">${ssrInterpolate(company.value?.address?.street)}<br> ${ssrInterpolate(company.value?.address?.locality)}<br> ${ssrInterpolate(company.value?.address?.city)} ${ssrInterpolate(company.value?.address?.postal_code)}<br> ${ssrInterpolate(company.value?.address?.region)}, ${ssrInterpolate(company.value?.address?.country_name)}</address><div class="mt-5 space-y-2 text-sm"><a${ssrRenderAttr("href", `tel:${company.value?.phone?.replace(/\\s/g, "")}`)} class="block font-semibold text-white hover:text-teal-200">${ssrInterpolate(company.value?.phone)}</a><a${ssrRenderAttr("href", `mailto:${company.value?.email}`)} class="block text-slate-100 hover:text-white">${ssrInterpolate(company.value?.email)}</a></div></div><div class="rounded-3xl border border-slate-200 bg-white p-6"><h3 class="font-heading text-base font-semibold text-slate-900">Business hours</h3><dl class="mt-3 space-y-1 text-sm text-slate-600"><div class="flex justify-between"><dt>Monday – Saturday</dt><dd>10:00 – 19:00</dd></div><div class="flex justify-between"><dt>Sunday</dt><dd>Closed</dd></div></dl></div><a${ssrRenderAttr("href", `https://wa.me/${company.value?.whatsapp}`)} target="_blank" rel="noopener" class="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 py-4 text-sm font-semibold text-white shadow hover:opacity-95"><svg viewBox="0 0 24 24" class="size-5" fill="currentColor"><path d="M20.52 3.48A11.87 11.87 0 0012.05 0C5.5 0 .17 5.33.17 11.88c0 2.09.55 4.13 1.6 5.94L0 24l6.34-1.66a11.85 11.85 0 005.71 1.45h.01c6.54 0 11.87-5.33 11.87-11.88 0-3.17-1.24-6.15-3.41-8.43z"></path></svg> Chat with us on WhatsApp </a></div></div><div class="mt-12 overflow-hidden rounded-3xl border border-slate-200"><iframe src="https://www.google.com/maps?q=22.947000,72.626100&amp;z=15&amp;output=embed" class="h-96 w-full" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Kailash Machine Tools factory — Vatva, Ahmedabad, Gujarat, India"></iframe></div></div></section><!--]-->`);
		};
	}
});
//#endregion
//#region resources/js/Pages/Contact.vue
var _sfc_setup = Contact_vue_vue_type_script_setup_true_lang_default.setup;
Contact_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Contact.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Contact_default = Contact_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { Contact_default as default };
