import { computed, defineComponent, mergeProps, unref, useSSRContext } from "vue";
import { useForm, usePage } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderClass } from "vue/server-renderer";
//#region resources/js/Components/EnquiryForm.vue?vue&type=script&setup=true&lang.ts
var EnquiryForm_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "EnquiryForm",
	__ssrInlineRender: true,
	props: {
		productSlug: {},
		variant: {},
		compact: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		const form = useForm({
			name: "",
			email: "",
			phone: "",
			company: "",
			country: "",
			message: "",
			product_slug: props.productSlug ?? "",
			website: ""
		});
		const page = usePage();
		const flashSuccess = computed(() => page.props.flash?.success);
		const labelClass = computed(() => props.variant === "dark" ? "text-slate-300" : "text-slate-700");
		const inputClass = computed(() => props.variant === "dark" ? "mt-1 block w-full rounded-lg border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-400 focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-300/30" : "mt-1 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:border-[color:var(--color-brand-accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-brand-accent)]/30");
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<form${ssrRenderAttrs(mergeProps({ class: "space-y-4" }, _attrs))}><input${ssrRenderAttr("value", unref(form).website)} type="text" name="website" tabindex="-1" autocomplete="off" class="hidden" aria-hidden="true">`);
			if (flashSuccess.value) _push(`<div class="rounded-lg border border-teal-200 bg-teal-50 px-4 py-3 text-sm text-teal-900">${ssrInterpolate(flashSuccess.value)}</div>`);
			else _push(`<!---->`);
			_push(`<div class="${ssrRenderClass(__props.compact ? "grid gap-4 sm:grid-cols-2" : "grid gap-4 sm:grid-cols-2")}"><div><label class="${ssrRenderClass([labelClass.value, "text-xs font-semibold uppercase tracking-widest"])}">Name *</label><input${ssrRenderAttr("value", unref(form).name)} type="text" required class="${ssrRenderClass(inputClass.value)}" placeholder="Your full name">`);
			if (unref(form).errors.name) _push(`<p class="mt-1 text-xs text-red-500">${ssrInterpolate(unref(form).errors.name)}</p>`);
			else _push(`<!---->`);
			_push(`</div><div><label class="${ssrRenderClass([labelClass.value, "text-xs font-semibold uppercase tracking-widest"])}">Email *</label><input${ssrRenderAttr("value", unref(form).email)} type="email" required class="${ssrRenderClass(inputClass.value)}" placeholder="you@company.com">`);
			if (unref(form).errors.email) _push(`<p class="mt-1 text-xs text-red-500">${ssrInterpolate(unref(form).errors.email)}</p>`);
			else _push(`<!---->`);
			_push(`</div><div><label class="${ssrRenderClass([labelClass.value, "text-xs font-semibold uppercase tracking-widest"])}">Phone *</label><input${ssrRenderAttr("value", unref(form).phone)} type="tel" required class="${ssrRenderClass(inputClass.value)}" placeholder="+91 98xxx xxxxx">`);
			if (unref(form).errors.phone) _push(`<p class="mt-1 text-xs text-red-500">${ssrInterpolate(unref(form).errors.phone)}</p>`);
			else _push(`<!---->`);
			_push(`</div><div><label class="${ssrRenderClass([labelClass.value, "text-xs font-semibold uppercase tracking-widest"])}">Company</label><input${ssrRenderAttr("value", unref(form).company)} type="text" class="${ssrRenderClass(inputClass.value)}" placeholder="Your company"></div><div class="sm:col-span-2"><label class="${ssrRenderClass([labelClass.value, "text-xs font-semibold uppercase tracking-widest"])}">Country</label><input${ssrRenderAttr("value", unref(form).country)} type="text" class="${ssrRenderClass(inputClass.value)}" placeholder="India, UAE, Kenya..."></div><div class="sm:col-span-2"><label class="${ssrRenderClass([labelClass.value, "text-xs font-semibold uppercase tracking-widest"])}">How can we help? *</label><textarea rows="4" required class="${ssrRenderClass(inputClass.value)}" placeholder="Tell us about your product, batch size, container type and target output...">${ssrInterpolate(unref(form).message)}</textarea>`);
			if (unref(form).errors.message) _push(`<p class="mt-1 text-xs text-red-500">${ssrInterpolate(unref(form).errors.message)}</p>`);
			else _push(`<!---->`);
			_push(`</div></div><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--color-brand)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[color:var(--color-brand-accent)] disabled:opacity-50 sm:w-auto">${ssrInterpolate(unref(form).processing ? "Sending..." : "Send Enquiry")} `);
			if (!unref(form).processing) _push(`<svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>`);
			else _push(`<!---->`);
			_push(`</button><p class="${ssrRenderClass([__props.variant === "dark" ? "text-slate-400" : "text-slate-500", "text-xs"])}"> We respond within 24 business hours. No spam. Your details stay with us. </p></form>`);
		};
	}
});
//#endregion
//#region resources/js/Components/EnquiryForm.vue
var _sfc_setup = EnquiryForm_vue_vue_type_script_setup_true_lang_default.setup;
EnquiryForm_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/EnquiryForm.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var EnquiryForm_default = EnquiryForm_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { EnquiryForm_default as t };
