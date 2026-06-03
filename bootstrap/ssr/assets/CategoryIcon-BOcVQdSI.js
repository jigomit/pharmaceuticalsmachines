import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
//#region resources/js/Components/CategoryIcon.vue?vue&type=script&setup=true&lang.ts
var CategoryIcon_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CategoryIcon",
	__ssrInlineRender: true,
	props: {
		name: {},
		class: {}
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<svg${ssrRenderAttrs(mergeProps({
				class: _ctx.$props.class ?? "size-6",
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "1.8",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				"aria-hidden": "true"
			}, _attrs))}>`);
			if (__props.name === "droplet") _push(`<path d="M12 2l6 9a6 6 0 11-12 0l6-9z"></path>`);
			else if (__props.name === "syringe") _push(`<path d="M18 2l4 4M15 5l4 4M6.5 18.5l-2 2M3 21l1.5-1.5M14 6l4 4-9 9H5v-4l9-9z"></path>`);
			else if (__props.name === "flask") _push(`<path d="M9 2h6M10 2v6l-5 10a2 2 0 001.8 3h10.4a2 2 0 001.8-3L14 8V2"></path>`);
			else if (__props.name === "lock") _push(`<!--[--><rect x="5" y="11" width="14" height="10" rx="2"></rect><path d="M8 11V7a4 4 0 018 0v4"></path><!--]-->`);
			else if (__props.name === "tag") _push(`<!--[--><path d="M20 12l-8 8-9-9V3h8l9 9z"></path><circle cx="7.5" cy="7.5" r="1"></circle><!--]-->`);
			else if (__props.name === "eye") _push(`<!--[--><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"></path><circle cx="12" cy="12" r="3"></circle><!--]-->`);
			else if (__props.name === "pill") _push(`<path d="M10.5 20.5l10-10a5 5 0 00-7-7l-10 10a5 5 0 007 7zM8.5 8.5l7 7"></path>`);
			else if (__props.name === "beaker") _push(`<path d="M9 2v7l-5 10a2 2 0 001.8 3h10.4a2 2 0 001.8-3L13 9V2M9 2h4"></path>`);
			else if (__props.name === "bottle") _push(`<path d="M10 2h4v4l2 3v12a1 1 0 01-1 1H9a1 1 0 01-1-1V9l2-3V2z"></path>`);
			else if (__props.name === "conveyor") _push(`<!--[--><rect x="2" y="10" width="20" height="6" rx="1"></rect><circle cx="6" cy="19" r="2"></circle><circle cx="18" cy="19" r="2"></circle><path d="M6 7h12"></path><!--]-->`);
			else if (__props.name === "wrench") _push(`<path d="M14.7 6.3a4 4 0 00-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 005.4-5.4l-3 3-2.4-2.4 3-3z"></path>`);
			else if (__props.name === "cabinet") _push(`<!--[--><rect x="4" y="3" width="16" height="18" rx="1"></rect><path d="M12 3v18M8 9h.01M8 15h.01M16 9h.01M16 15h.01"></path><!--]-->`);
			else if (__props.name === "box") _push(`<!--[--><path d="M21 8l-9-5-9 5v8l9 5 9-5V8z"></path><path d="M3 8l9 5 9-5M12 13v10"></path><!--]-->`);
			else if (__props.name === "cog") _push(`<!--[--><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.7 1.7 0 00.4 1.9l.1.1a2 2 0 01-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.9-.4 1.7 1.7 0 00-1 1.5V21a2 2 0 01-4 0v-.1a1.7 1.7 0 00-1-1.5 1.7 1.7 0 00-1.9.4l-.1.1a2 2 0 01-2.8-2.8l.1-.1a1.7 1.7 0 00.4-1.9 1.7 1.7 0 00-1.5-1H3a2 2 0 010-4h.1a1.7 1.7 0 001.5-1 1.7 1.7 0 00-.4-1.9l-.1-.1a2 2 0 012.8-2.8l.1.1a1.7 1.7 0 001.9.4H9a1.7 1.7 0 001-1.5V3a2 2 0 014 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.9-.4l.1-.1a2 2 0 012.8 2.8l-.1.1a1.7 1.7 0 00-.4 1.9V9a1.7 1.7 0 001.5 1H21a2 2 0 010 4h-.1a1.7 1.7 0 00-1.5 1z"></path><!--]-->`);
			else _push(`<!--[--><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M9 9h6v6H9z"></path><!--]-->`);
			_push(`</svg>`);
		};
	}
});
//#endregion
//#region resources/js/Components/CategoryIcon.vue
var _sfc_setup = CategoryIcon_vue_vue_type_script_setup_true_lang_default.setup;
CategoryIcon_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/CategoryIcon.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var CategoryIcon_default = CategoryIcon_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { CategoryIcon_default as t };
