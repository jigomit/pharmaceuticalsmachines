import { computed, createBlock, createCommentVNode, createVNode, defineComponent, openBlock, unref, useSSRContext, withCtx } from "vue";
import { Head, usePage } from "@inertiajs/vue3";
import { ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
//#region resources/js/Components/SeoHead.vue?vue&type=script&setup=true&lang.ts
var SeoHead_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SeoHead",
	__ssrInlineRender: true,
	props: {
		title: {},
		description: {},
		image: {},
		type: {},
		noindex: { type: Boolean },
		keywords: {},
		schema: {}
	},
	setup(__props) {
		const props = __props;
		const page = usePage();
		const canonical = computed(() => page.props.canonical);
		const company = computed(() => page.props.company);
		const ogTitle = computed(() => props.title ?? `${company.value?.name} | Pharmaceutical Machinery Manufacturer`);
		const ogDescription = computed(() => props.description ?? `${company.value?.name} — ${company.value?.tagline}. Leading manufacturer and exporter of injectable, filling, washing, capping and packaging pharmaceutical machinery from Ahmedabad, India.`);
		const ogImage = computed(() => props.image ?? "/og-default.jpg");
		const schemas = computed(() => {
			if (!props.schema) return [];
			return Array.isArray(props.schema) ? props.schema : [props.schema];
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: __props.title }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<meta name="description"${ssrRenderAttr("content", ogDescription.value)} head-key="description"${_scopeId}><link rel="canonical"${ssrRenderAttr("href", canonical.value)} head-key="canonical"${_scopeId}><link rel="alternate" hreflang="en"${ssrRenderAttr("href", canonical.value)} head-key="alt-en"${_scopeId}><link rel="alternate" hreflang="x-default"${ssrRenderAttr("href", canonical.value)} head-key="alt-default"${_scopeId}>`);
						if (__props.keywords) _push(`<meta name="keywords"${ssrRenderAttr("content", __props.keywords)} head-key="keywords"${_scopeId}>`);
						else _push(`<!---->`);
						if (__props.noindex) _push(`<meta name="robots" content="noindex,nofollow" head-key="robots"${_scopeId}>`);
						else _push(`<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" head-key="robots"${_scopeId}>`);
						_push(`<meta name="author" content="Kailash Machine Tools" head-key="author"${_scopeId}><meta name="publisher" content="Kailash Machine Tools" head-key="publisher"${_scopeId}><meta name="geo.region" content="IN-GJ" head-key="geo-region"${_scopeId}><meta name="geo.placename" content="Ahmedabad" head-key="geo-place"${_scopeId}><meta name="geo.position" content="22.947;72.6261" head-key="geo-pos"${_scopeId}><meta name="ICBM" content="22.947, 72.6261" head-key="icbm"${_scopeId}><meta property="og:site_name"${ssrRenderAttr("content", company.value?.name)} head-key="og:site_name"${_scopeId}><meta property="og:type"${ssrRenderAttr("content", __props.type ?? "website")} head-key="og:type"${_scopeId}><meta property="og:title"${ssrRenderAttr("content", ogTitle.value)} head-key="og:title"${_scopeId}><meta property="og:description"${ssrRenderAttr("content", ogDescription.value)} head-key="og:description"${_scopeId}><meta property="og:url"${ssrRenderAttr("content", canonical.value)} head-key="og:url"${_scopeId}><meta property="og:image"${ssrRenderAttr("content", ogImage.value)} head-key="og:image"${_scopeId}><meta property="og:locale" content="en_IN" head-key="og:locale"${_scopeId}><meta name="twitter:card" content="summary_large_image" head-key="twitter:card"${_scopeId}><meta name="twitter:title"${ssrRenderAttr("content", ogTitle.value)} head-key="twitter:title"${_scopeId}><meta name="twitter:description"${ssrRenderAttr("content", ogDescription.value)} head-key="twitter:description"${_scopeId}><meta name="twitter:image"${ssrRenderAttr("content", ogImage.value)} head-key="twitter:image"${_scopeId}>`);
					} else return [
						createVNode("meta", {
							name: "description",
							content: ogDescription.value,
							"head-key": "description"
						}, null, 8, ["content"]),
						createVNode("link", {
							rel: "canonical",
							href: canonical.value,
							"head-key": "canonical"
						}, null, 8, ["href"]),
						createVNode("link", {
							rel: "alternate",
							hreflang: "en",
							href: canonical.value,
							"head-key": "alt-en"
						}, null, 8, ["href"]),
						createVNode("link", {
							rel: "alternate",
							hreflang: "x-default",
							href: canonical.value,
							"head-key": "alt-default"
						}, null, 8, ["href"]),
						__props.keywords ? (openBlock(), createBlock("meta", {
							key: 0,
							name: "keywords",
							content: __props.keywords,
							"head-key": "keywords"
						}, null, 8, ["content"])) : createCommentVNode("", true),
						__props.noindex ? (openBlock(), createBlock("meta", {
							key: 1,
							name: "robots",
							content: "noindex,nofollow",
							"head-key": "robots"
						})) : (openBlock(), createBlock("meta", {
							key: 2,
							name: "robots",
							content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
							"head-key": "robots"
						})),
						createVNode("meta", {
							name: "author",
							content: "Kailash Machine Tools",
							"head-key": "author"
						}),
						createVNode("meta", {
							name: "publisher",
							content: "Kailash Machine Tools",
							"head-key": "publisher"
						}),
						createVNode("meta", {
							name: "geo.region",
							content: "IN-GJ",
							"head-key": "geo-region"
						}),
						createVNode("meta", {
							name: "geo.placename",
							content: "Ahmedabad",
							"head-key": "geo-place"
						}),
						createVNode("meta", {
							name: "geo.position",
							content: "22.947;72.6261",
							"head-key": "geo-pos"
						}),
						createVNode("meta", {
							name: "ICBM",
							content: "22.947, 72.6261",
							"head-key": "icbm"
						}),
						createVNode("meta", {
							property: "og:site_name",
							content: company.value?.name,
							"head-key": "og:site_name"
						}, null, 8, ["content"]),
						createVNode("meta", {
							property: "og:type",
							content: __props.type ?? "website",
							"head-key": "og:type"
						}, null, 8, ["content"]),
						createVNode("meta", {
							property: "og:title",
							content: ogTitle.value,
							"head-key": "og:title"
						}, null, 8, ["content"]),
						createVNode("meta", {
							property: "og:description",
							content: ogDescription.value,
							"head-key": "og:description"
						}, null, 8, ["content"]),
						createVNode("meta", {
							property: "og:url",
							content: canonical.value,
							"head-key": "og:url"
						}, null, 8, ["content"]),
						createVNode("meta", {
							property: "og:image",
							content: ogImage.value,
							"head-key": "og:image"
						}, null, 8, ["content"]),
						createVNode("meta", {
							property: "og:locale",
							content: "en_IN",
							"head-key": "og:locale"
						}),
						createVNode("meta", {
							name: "twitter:card",
							content: "summary_large_image",
							"head-key": "twitter:card"
						}),
						createVNode("meta", {
							name: "twitter:title",
							content: ogTitle.value,
							"head-key": "twitter:title"
						}, null, 8, ["content"]),
						createVNode("meta", {
							name: "twitter:description",
							content: ogDescription.value,
							"head-key": "twitter:description"
						}, null, 8, ["content"]),
						createVNode("meta", {
							name: "twitter:image",
							content: ogImage.value,
							"head-key": "twitter:image"
						}, null, 8, ["content"])
					];
				}),
				_: 1
			}, _parent));
			_push(`<!--[-->`);
			ssrRenderList(schemas.value, (s, i) => {
				_push(`<script type="application/ld+json">${JSON.stringify(s) ?? ""}<\/script>`);
			});
			_push(`<!--]--><!--]-->`);
		};
	}
});
//#endregion
//#region resources/js/Components/SeoHead.vue
var _sfc_setup = SeoHead_vue_vue_type_script_setup_true_lang_default.setup;
SeoHead_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SeoHead.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var SeoHead_default = SeoHead_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { SeoHead_default as t };
