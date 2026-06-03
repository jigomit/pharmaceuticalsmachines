import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-jrA-gPFe.js";
import { computed, defineComponent, onBeforeUnmount, onMounted, ref, useSSRContext, watch } from "vue";
import { ssrInterpolate, ssrRenderAttr, ssrRenderTeleport } from "vue/server-renderer";
//#region resources/js/Components/ImageLightbox.vue?vue&type=script&setup=true&lang.ts
var ImageLightbox_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ImageLightbox",
	__ssrInlineRender: true,
	props: {
		images: {},
		open: { type: Boolean },
		initialIndex: {}
	},
	emits: ["close"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const index = ref(props.initialIndex ?? 0);
		watch(() => props.open, (o) => {
			if (o) {
				index.value = props.initialIndex ?? 0;
				document.documentElement.style.overflow = "hidden";
			} else document.documentElement.style.overflow = "";
		});
		const next = () => {
			index.value = (index.value + 1) % props.images.length;
		};
		const prev = () => {
			index.value = (index.value - 1 + props.images.length) % props.images.length;
		};
		const onKey = (e) => {
			if (!props.open) return;
			if (e.key === "Escape") emit("close");
			if (e.key === "ArrowRight") next();
			if (e.key === "ArrowLeft") prev();
		};
		onMounted(() => window.addEventListener("keydown", onKey));
		onBeforeUnmount(() => {
			window.removeEventListener("keydown", onKey);
			document.documentElement.style.overflow = "";
		});
		const current = computed(() => props.images[index.value]);
		return (_ctx, _push, _parent, _attrs) => {
			ssrRenderTeleport(_push, (_push) => {
				if (__props.open) {
					_push(`<div class="lightbox" data-v-c513d0fa><button type="button" class="lightbox-close" aria-label="Close" data-v-c513d0fa><svg class="size-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-c513d0fa><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" data-v-c513d0fa></path></svg></button>`);
					if (__props.images.length > 1) _push(`<button type="button" class="lightbox-nav lightbox-prev" aria-label="Previous image" data-v-c513d0fa><svg class="size-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-c513d0fa><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" data-v-c513d0fa></path></svg></button>`);
					else _push(`<!---->`);
					if (__props.images.length > 1) _push(`<button type="button" class="lightbox-nav lightbox-next" aria-label="Next image" data-v-c513d0fa><svg class="size-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-c513d0fa><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" data-v-c513d0fa></path></svg></button>`);
					else _push(`<!---->`);
					_push(`<figure class="lightbox-figure" data-v-c513d0fa><img${ssrRenderAttr("src", current.value.src)}${ssrRenderAttr("alt", current.value.alt ?? "")} class="lightbox-img" data-v-c513d0fa>`);
					if (current.value.caption) _push(`<figcaption class="lightbox-caption" data-v-c513d0fa>${ssrInterpolate(current.value.caption)}</figcaption>`);
					else _push(`<!---->`);
					if (__props.images.length > 1) _push(`<span class="lightbox-counter" data-v-c513d0fa>${ssrInterpolate(index.value + 1)} / ${ssrInterpolate(__props.images.length)}</span>`);
					else _push(`<!---->`);
					_push(`</figure></div>`);
				} else _push(`<!---->`);
			}, "body", false, _parent);
		};
	}
});
//#endregion
//#region resources/js/Components/ImageLightbox.vue
var _sfc_setup = ImageLightbox_vue_vue_type_script_setup_true_lang_default.setup;
ImageLightbox_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ImageLightbox.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var ImageLightbox_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ImageLightbox_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-c513d0fa"]]);
//#endregion
export { ImageLightbox_default as t };
