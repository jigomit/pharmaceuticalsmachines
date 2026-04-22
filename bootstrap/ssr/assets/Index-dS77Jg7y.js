import { t as SeoHead_default } from "./SeoHead-ILEVCC59.js";
import { createVNode, defineComponent, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Link } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
//#region resources/js/Pages/Blog/Index.vue?vue&type=script&setup=true&lang.ts
var Index_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Index",
	__ssrInlineRender: true,
	props: { posts: {} },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(SeoHead_default, {
				title: "Blog — Pharmaceutical Machinery Insights",
				description: "Technical articles, buying guides and industry insights on injectable lines, vial filling, washing, capping and cGMP compliance."
			}, null, _parent));
			_push(`<section class="mesh-hero relative py-20 text-white"><div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p class="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">Blog</p><h1 class="mt-3 max-w-3xl text-4xl font-semibold sm:text-5xl">Technical insights from our engineers.</h1></div></section><section class="py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="grid gap-6 lg:grid-cols-3"><!--[-->`);
			ssrRenderList(__props.posts.data, (post) => {
				_push(ssrRenderComponent(unref(Link), {
					key: post.id,
					href: `/blog/${post.slug}`,
					class: "group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-brand)]"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<span class="text-xs font-semibold uppercase tracking-widest text-teal-600"${_scopeId}>${ssrInterpolate(post.category_tag)} · ${ssrInterpolate(post.reading_minutes)} min read</span><h2 class="mt-3 font-heading text-lg font-semibold text-slate-900 group-hover:text-[color:var(--color-brand-accent)]"${_scopeId}>${ssrInterpolate(post.title)}</h2><p class="mt-2 line-clamp-3 text-sm text-slate-600"${_scopeId}>${ssrInterpolate(post.excerpt)}</p>`);
						else return [
							createVNode("span", { class: "text-xs font-semibold uppercase tracking-widest text-teal-600" }, toDisplayString(post.category_tag) + " · " + toDisplayString(post.reading_minutes) + " min read", 1),
							createVNode("h2", { class: "mt-3 font-heading text-lg font-semibold text-slate-900 group-hover:text-[color:var(--color-brand-accent)]" }, toDisplayString(post.title), 1),
							createVNode("p", { class: "mt-2 line-clamp-3 text-sm text-slate-600" }, toDisplayString(post.excerpt), 1)
						];
					}),
					_: 2
				}, _parent));
			});
			_push(`<!--]--></div></div></section><!--]-->`);
		};
	}
});
//#endregion
//#region resources/js/Pages/Blog/Index.vue
var _sfc_setup = Index_vue_vue_type_script_setup_true_lang_default.setup;
Index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Blog/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Index_default = Index_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { Index_default as default };
