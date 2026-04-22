import { t as SeoHead_default } from "./SeoHead-ILEVCC59.js";
import { defineComponent, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
//#region resources/js/Pages/Terms.vue?vue&type=script&setup=true&lang.ts
var Terms_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Terms",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(SeoHead_default, {
				title: "Terms of Use",
				description: "Terms and conditions for using the Kailash Machine Tools website."
			}, null, _parent));
			_push(`<section class="bg-slate-50 py-16"><div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"><h1 class="font-heading text-3xl font-semibold text-slate-900">Terms of Use</h1><p class="mt-3 text-sm text-slate-500">Last updated: April 2026</p><div class="prose prose-slate mt-8 max-w-none"><h2>About this site</h2><p>This website is owned and operated by Kailash Machine Tools (formerly Shree Ganesh Pharmatech), a pharmaceutical machinery manufacturer based in Ahmedabad, Gujarat, India.</p><h2>Content &amp; specifications</h2><p>All machine specifications, output speeds and features shown on this website are indicative. Actual deliverables are governed by the written commercial offer and purchase order accepted by both parties.</p><h2>Intellectual property</h2><p>All trademarks, logos, designs and content on this website are property of Kailash Machine Tools unless otherwise noted. Unauthorised reproduction is prohibited.</p><h2>Liability</h2><p>This website is provided &quot;as is&quot;. Kailash Machine Tools is not liable for any indirect damages arising from use of the website.</p><h2>Governing law</h2><p>Any dispute arising out of the use of this website is subject to the exclusive jurisdiction of the courts at Ahmedabad, Gujarat, India.</p></div></div></section><!--]-->`);
		};
	}
});
//#endregion
//#region resources/js/Pages/Terms.vue
var _sfc_setup = Terms_vue_vue_type_script_setup_true_lang_default.setup;
Terms_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Terms.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Terms_default = Terms_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { Terms_default as default };
