import { t as SeoHead_default } from "./SeoHead-ILEVCC59.js";
import { computed, createVNode, defineComponent, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Link } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
//#region resources/js/Pages/Blog/Show.vue?vue&type=script&setup=true&lang.ts
var Show_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Show",
	__ssrInlineRender: true,
	props: {
		post: {},
		related: {}
	},
	setup(__props) {
		const props = __props;
		const articleSchema = computed(() => ({
			"@context": "https://schema.org",
			"@type": "Article",
			headline: props.post.title,
			description: props.post.excerpt,
			author: {
				"@type": "Organization",
				name: props.post.author_name
			},
			publisher: {
				"@type": "Organization",
				name: "Kailash Machine Tools",
				logo: {
					"@type": "ImageObject",
					url: "https://pharmaceuticalsmachines.com/og-default.jpg"
				}
			},
			datePublished: props.post.published_at,
			mainEntityOfPage: `https://pharmaceuticalsmachines.com/blog/${props.post.slug}`
		}));
		const formattedBody = computed(() => {
			if (!props.post.body) return "";
			return props.post.body.replace(/^### (.+)$/gm, "<h3 class=\"mt-8 font-heading text-xl font-semibold text-slate-900\">$1</h3>").replace(/^## (.+)$/gm, "<h2 class=\"mt-10 font-heading text-2xl font-semibold text-slate-900\">$1</h2>").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\n\n/g, "</p><p class=\"mt-4 text-base leading-7 text-slate-700\">").replace(/^/, "<p class=\"mt-4 text-base leading-7 text-slate-700\">").concat("</p>");
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(SeoHead_default, {
				title: __props.post.meta_title ?? __props.post.title,
				description: __props.post.meta_description ?? __props.post.excerpt,
				type: "article",
				schema: articleSchema.value
			}, null, _parent));
			_push(`<section class="mesh-hero relative py-20 text-white"><div class="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><p class="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">${ssrInterpolate(__props.post.category_tag)} · ${ssrInterpolate(__props.post.reading_minutes)} min read</p><h1 class="mt-3 font-heading text-3xl font-semibold leading-tight sm:text-5xl">${ssrInterpolate(__props.post.title)}</h1><p class="mt-4 text-lg leading-8 text-slate-200">${ssrInterpolate(__props.post.excerpt)}</p></div></section><article class="py-16"><div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"><div>${formattedBody.value ?? ""}</div></div></article>`);
			if (__props.related?.length) {
				_push(`<section class="border-t border-slate-100 bg-slate-50 py-16"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><h2 class="font-heading text-2xl font-semibold text-slate-900">Related articles</h2><div class="mt-8 grid gap-6 lg:grid-cols-3"><!--[-->`);
				ssrRenderList(__props.related, (r) => {
					_push(ssrRenderComponent(unref(Link), {
						key: r.id,
						href: `/blog/${r.slug}`,
						class: "group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-brand)]"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`<span class="text-xs font-semibold uppercase tracking-widest text-teal-600"${_scopeId}>${ssrInterpolate(r.category_tag)}</span><h3 class="mt-2 font-heading text-base font-semibold text-slate-900 group-hover:text-[color:var(--color-brand-accent)]"${_scopeId}>${ssrInterpolate(r.title)}</h3><p class="mt-2 line-clamp-2 text-sm text-slate-600"${_scopeId}>${ssrInterpolate(r.excerpt)}</p>`);
							else return [
								createVNode("span", { class: "text-xs font-semibold uppercase tracking-widest text-teal-600" }, toDisplayString(r.category_tag), 1),
								createVNode("h3", { class: "mt-2 font-heading text-base font-semibold text-slate-900 group-hover:text-[color:var(--color-brand-accent)]" }, toDisplayString(r.title), 1),
								createVNode("p", { class: "mt-2 line-clamp-2 text-sm text-slate-600" }, toDisplayString(r.excerpt), 1)
							];
						}),
						_: 2
					}, _parent));
				});
				_push(`<!--]--></div></div></section>`);
			} else _push(`<!---->`);
			_push(`<!--]-->`);
		};
	}
});
//#endregion
//#region resources/js/Pages/Blog/Show.vue
var _sfc_setup = Show_vue_vue_type_script_setup_true_lang_default.setup;
Show_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Blog/Show.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Show_default = Show_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { Show_default as default };
