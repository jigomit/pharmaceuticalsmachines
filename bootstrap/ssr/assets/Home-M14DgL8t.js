import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-jrA-gPFe.js";
import { t as SeoHead_default } from "./SeoHead-ILEVCC59.js";
import { t as ScrollReveal_default } from "./ScrollReveal-oDITbbxE.js";
import { t as AnimatedCounter_default } from "./AnimatedCounter-PkZHsldm.js";
import { t as ProductCard_default } from "./ProductCard-C-SlM2Bk.js";
import { t as CategoryIcon_default } from "./CategoryIcon-Bm7pAnF1.js";
import { Fragment, computed, createBlock, createCommentVNode, createTextVNode, createVNode, defineComponent, mergeProps, onBeforeUnmount, onMounted, openBlock, ref, renderList, resolveDirective, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Head, Link, usePage } from "@inertiajs/vue3";
import { ssrGetDirectiveProps, ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderSlot } from "vue/server-renderer";
//#region resources/js/Components/InfiniteMarquee.vue?vue&type=script&setup=true&lang.ts
var InfiniteMarquee_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InfiniteMarquee",
	__ssrInlineRender: true,
	props: {
		speed: { default: 40 },
		pauseOnHover: {
			type: Boolean,
			default: true
		},
		reverse: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({
				class: ["marquee-wrap", { "marquee-pause-hover": __props.pauseOnHover }],
				style: {
					"--marquee-speed": __props.speed + "s",
					"--marquee-direction": __props.reverse ? "reverse" : "normal"
				}
			}, _attrs))} data-v-eb002f97><div class="marquee-track" data-v-eb002f97><div class="marquee-group" data-v-eb002f97>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</div><div class="marquee-group" aria-hidden="true" data-v-eb002f97>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</div></div></div>`);
		};
	}
});
//#endregion
//#region resources/js/Components/InfiniteMarquee.vue
var _sfc_setup$2 = InfiniteMarquee_vue_vue_type_script_setup_true_lang_default.setup;
InfiniteMarquee_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/InfiniteMarquee.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var InfiniteMarquee_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InfiniteMarquee_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-eb002f97"]]);
//#endregion
//#region resources/js/Components/MagneticButton.vue?vue&type=script&setup=true&lang.ts
var MagneticButton_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MagneticButton",
	__ssrInlineRender: true,
	props: { strength: { default: .25 } },
	setup(__props) {
		const root = ref(null);
		let rafId = null;
		const onMove = (e) => {
			if (!root.value) return;
			if (window.matchMedia("(pointer: coarse)").matches) return;
			const rect = root.value.getBoundingClientRect();
			const x = e.clientX - rect.left - rect.width / 2;
			const y = e.clientY - rect.top - rect.height / 2;
			if (rafId) cancelAnimationFrame(rafId);
			rafId = requestAnimationFrame(() => {
				root.value.style.transform = `translate3d(${x * .25}px, ${y * .25}px, 0)`;
			});
		};
		const reset = () => {
			if (!root.value) return;
			if (rafId) cancelAnimationFrame(rafId);
			root.value.style.transform = "";
		};
		onMounted(() => {
			root.value?.addEventListener("mousemove", onMove);
			root.value?.addEventListener("mouseleave", reset);
		});
		onBeforeUnmount(() => {
			root.value?.removeEventListener("mousemove", onMove);
			root.value?.removeEventListener("mouseleave", reset);
			if (rafId) cancelAnimationFrame(rafId);
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<span${ssrRenderAttrs(mergeProps({
				ref_key: "root",
				ref: root,
				class: "inline-block transition-transform duration-200 ease-out will-change-transform"
			}, _attrs))}>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</span>`);
		};
	}
});
//#endregion
//#region resources/js/Components/MagneticButton.vue
var _sfc_setup$1 = MagneticButton_vue_vue_type_script_setup_true_lang_default.setup;
MagneticButton_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/MagneticButton.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var MagneticButton_default = MagneticButton_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/Pages/Home.vue?vue&type=script&setup=true&lang.ts
var Home_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Home",
	__ssrInlineRender: true,
	props: {
		featured: {},
		categories: {},
		clients: {},
		latestPosts: {},
		heroImages: {},
		aboutImages: {},
		qualityImage: {}
	},
	setup(__props) {
		const props = __props;
		const page = usePage();
		const company = computed(() => page.props.company);
		const stats = [
			{
				label: "Years of Precision",
				to: 34,
				suffix: "+"
			},
			{
				label: "Machines Delivered",
				to: 2500,
				suffix: "+"
			},
			{
				label: "Countries Served",
				to: 25,
				suffix: "+"
			},
			{
				label: "Pharma Clients",
				to: 450,
				suffix: "+"
			}
		];
		const pillars = [
			{
				title: "cGMP by design",
				body: "SS 316L, documented traceability, FAT/SAT, IQ/OQ/PQ on every build."
			},
			{
				title: "Injectable specialists",
				body: "Complete ampoule & vial lines — washing, filling, sealing, inspection."
			},
			{
				title: "In-house engineering",
				body: "34-year Ahmedabad workshop. Mechanical, servo and controls under one roof."
			},
			{
				title: "Global after-sales",
				body: "Spare-parts stocked regionally. On-site service in 72 hours."
			}
		];
		const process = [
			{
				step: "01",
				title: "Consult",
				body: "Share URS, product, container, batch size — we come back with a specification in 48 hours."
			},
			{
				step: "02",
				title: "Design",
				body: "Engineering drawings, DQ documentation, 3D layouts and material plans for approval."
			},
			{
				step: "03",
				title: "Build",
				body: "In-house machining, assembly, servo integration, PLC programming and run-in testing."
			},
			{
				step: "04",
				title: "Validate",
				body: "FAT at our Ahmedabad floor with your team + full protocol sign-off before ship."
			},
			{
				step: "05",
				title: "Commission",
				body: "On-site SAT, operator training, IQ/OQ/PQ execution, documentation handover."
			},
			{
				step: "06",
				title: "Support",
				body: "24-month warranty, regional spare stocking, remote diagnostics, life-of-machine updates."
			}
		];
		const industries = [
			{
				name: "Pharmaceutical",
				slug: "pharmaceutical",
				body: "Small-volume parenterals, LVP, tablets, oral liquids."
			},
			{
				name: "Biotech & Biosimilars",
				slug: "biotech",
				body: "Sterile vial filling with nitrogen purge, cold-chain ready."
			},
			{
				name: "Nutraceutical",
				slug: "nutraceutical",
				body: "Liquid and powder filling for wellness brands."
			},
			{
				name: "Cosmetics",
				slug: "cosmetics",
				body: "Cream, ointment, gel vacuum manufacturing."
			},
			{
				name: "Ayurvedic / Herbal",
				slug: "ayurvedic",
				body: "Syrups, tablets, labelling tailored for herbal production."
			},
			{
				name: "Veterinary",
				slug: "veterinary",
				body: "Scaled filling for veterinary injectables and oral dosing."
			}
		];
		const bento = computed(() => {
			const cats = props.categories ?? [];
			return [
				{
					...cats[0],
					span: "lg:col-span-2 lg:row-span-2",
					tall: true
				},
				{
					...cats[1],
					span: "lg:col-span-2"
				},
				{
					...cats[2],
					span: "lg:col-span-2"
				},
				{
					...cats[3],
					span: "lg:col-span-2"
				},
				{
					...cats[4],
					span: "lg:col-span-2"
				},
				{
					...cats[5],
					span: "lg:col-span-2"
				}
			].filter((c) => c.id);
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _directive_motion = resolveDirective("motion");
			_push(`<!--[-->`);
			_push(ssrRenderComponent(SeoHead_default, { description: "Pharmaceutical machinery manufacturer since 1991. Vial filling, ampoule sealing, washing, capping, labelling, tablet press — cGMP built in Ahmedabad, India." }, null, _parent));
			_push(ssrRenderComponent(unref(Head), null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<link rel="preload" as="image"${ssrRenderAttr("href", __props.heroImages.primary)}${_scopeId}>`);
					else return [createVNode("link", {
						rel: "preload",
						as: "image",
						href: __props.heroImages.primary
					}, null, 8, ["href"])];
				}),
				_: 1
			}, _parent));
			_push(`<section class="relative isolate overflow-hidden text-white"><div class="absolute inset-0 -z-20"><img${ssrRenderAttr("src", __props.heroImages.primary)} alt="Pharmaceutical machinery manufacturer Kailash Machine Tools — vial filling line at Ahmedabad factory" class="size-full object-cover ken-burns" fetchpriority="high" decoding="async" width="1800" height="1200" sizes="100vw"></div><div class="absolute inset-0 -z-10 bg-gradient-to-br from-[color:var(--color-brand)]/95 via-[color:var(--color-brand)]/80 to-[#061433]/95"></div><div class="mesh-hero-animated absolute inset-0 -z-10 opacity-60 mix-blend-screen"></div><div class="bg-grid-dark grid-pattern-fade absolute inset-0 -z-10 opacity-30"></div><div class="noise-overlay absolute inset-0 -z-10"></div><div class="mx-auto grid max-w-7xl gap-12 px-4 pt-24 pb-32 sm:px-6 lg:grid-cols-12 lg:px-8 lg:pt-36 lg:pb-40"><div class="lg:col-span-7"><span${ssrRenderAttrs(mergeProps({
				initial: {
					opacity: 0,
					y: 12
				},
				enter: {
					opacity: 1,
					y: 0,
					transition: { duration: 700 }
				},
				class: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-teal-200 backdrop-blur"
			}, ssrGetDirectiveProps(_ctx, _directive_motion)))}><span class="relative flex size-2"><span class="absolute inline-flex size-full animate-ping rounded-full bg-teal-300 opacity-75"></span><span class="relative inline-flex size-2 rounded-full bg-teal-300"></span></span> Engineering since 1991 · Formerly Shree Ganesh Pharmatech </span><h1${ssrRenderAttrs(mergeProps({
				initial: {
					opacity: 0,
					y: 24
				},
				enter: {
					opacity: 1,
					y: 0,
					transition: {
						duration: 900,
						delay: 100
					}
				},
				class: "mt-7 font-heading text-balance text-[2.75rem] leading-[0.95] sm:text-6xl lg:text-[5rem]"
			}, ssrGetDirectiveProps(_ctx, _directive_motion)))}> Precision <span class="text-gradient-brand">pharmaceutical</span><br> machinery, engineered<br> for the next generation. </h1><p${ssrRenderAttrs(mergeProps({
				initial: {
					opacity: 0,
					y: 24
				},
				enter: {
					opacity: 1,
					y: 0,
					transition: {
						duration: 900,
						delay: 220
					}
				},
				class: "mt-7 max-w-2xl text-lg leading-8 text-slate-200"
			}, ssrGetDirectiveProps(_ctx, _directive_motion)))}> From ampoule washing to vial filling, capping, labelling and turnkey lines — Kailash Machine Tools delivers cGMP-ready pharma equipment to manufacturers across 25+ countries. </p><div${ssrRenderAttrs(mergeProps({
				initial: {
					opacity: 0,
					y: 24
				},
				enter: {
					opacity: 1,
					y: 0,
					transition: {
						duration: 900,
						delay: 340
					}
				},
				class: "mt-10 flex flex-wrap items-center gap-4"
			}, ssrGetDirectiveProps(_ctx, _directive_motion)))}>`);
			_push(ssrRenderComponent(MagneticButton_default, null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(unref(Link), {
						href: "/products",
						class: "inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[color:var(--color-brand)] shadow-xl shadow-teal-500/20 transition hover:bg-teal-300"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(` Explore Machinery <svg class="size-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"${_scopeId}></path></svg>`);
							else return [createTextVNode(" Explore Machinery "), (openBlock(), createBlock("svg", {
								class: "size-4",
								fill: "none",
								stroke: "currentColor",
								"stroke-width": "2",
								viewBox: "0 0 24 24"
							}, [createVNode("path", {
								"stroke-linecap": "round",
								"stroke-linejoin": "round",
								d: "M17 8l4 4m0 0l-4 4m4-4H3"
							})]))];
						}),
						_: 1
					}, _parent, _scopeId));
					else return [createVNode(unref(Link), {
						href: "/products",
						class: "inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[color:var(--color-brand)] shadow-xl shadow-teal-500/20 transition hover:bg-teal-300"
					}, {
						default: withCtx(() => [createTextVNode(" Explore Machinery "), (openBlock(), createBlock("svg", {
							class: "size-4",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							viewBox: "0 0 24 24"
						}, [createVNode("path", {
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							d: "M17 8l4 4m0 0l-4 4m4-4H3"
						})]))]),
						_: 1
					})];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(unref(Link), {
				href: "/contact",
				class: "inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:border-teal-300 hover:bg-white/10 hover:text-teal-300"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Request Quote `);
					else return [createTextVNode(" Request Quote ")];
				}),
				_: 1
			}, _parent));
			_push(`</div><div${ssrRenderAttrs(mergeProps({
				initial: { opacity: 0 },
				enter: {
					opacity: 1,
					transition: {
						duration: 900,
						delay: 500
					}
				},
				class: "mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-slate-400"
			}, ssrGetDirectiveProps(_ctx, _directive_motion)))}><span class="flex items-center gap-2"><svg class="size-4 text-teal-400" fill="currentColor" viewBox="0 0 20 20"><path d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"></path></svg> cGMP</span><span class="flex items-center gap-2"><svg class="size-4 text-teal-400" fill="currentColor" viewBox="0 0 20 20"><path d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"></path></svg> SS 316L</span><span class="flex items-center gap-2"><svg class="size-4 text-teal-400" fill="currentColor" viewBox="0 0 20 20"><path d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"></path></svg> FAT / SAT</span><span class="flex items-center gap-2"><svg class="size-4 text-teal-400" fill="currentColor" viewBox="0 0 20 20"><path d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"></path></svg> IQ / OQ / PQ</span></div></div><div class="relative lg:col-span-5"><div${ssrRenderAttrs(mergeProps({
				initial: {
					opacity: 0,
					scale: .92,
					y: 40
				},
				enter: {
					opacity: 1,
					scale: 1,
					y: 0,
					transition: {
						duration: 1200,
						delay: 400
					}
				},
				class: "relative"
			}, ssrGetDirectiveProps(_ctx, _directive_motion)))}><div class="glass-dark relative rounded-3xl p-6 shadow-2xl"><div class="overflow-hidden rounded-2xl"><img${ssrRenderAttr("src", __props.heroImages.secondary)} alt="Filled pharmaceutical vials on a cGMP production line" class="aspect-[4/3] w-full object-cover" width="800" height="600" loading="eager"></div><div class="mt-5 grid grid-cols-2 gap-3"><div class="rounded-xl border border-white/10 bg-white/5 p-4"><div class="font-mono text-[10px] uppercase tracking-widest text-teal-300">Vial fill</div><div class="mt-1 font-heading text-2xl font-semibold">±0.5 %</div></div><div class="rounded-xl border border-white/10 bg-white/5 p-4"><div class="font-mono text-[10px] uppercase tracking-widest text-teal-300">Output</div><div class="mt-1 font-heading text-2xl font-semibold">300 BPM</div></div><div class="rounded-xl border border-white/10 bg-white/5 p-4"><div class="font-mono text-[10px] uppercase tracking-widest text-teal-300">Contact parts</div><div class="mt-1 font-heading text-sm font-semibold">SS 316 L</div></div><div class="rounded-xl border border-white/10 bg-white/5 p-4"><div class="font-mono text-[10px] uppercase tracking-widest text-teal-300">Finish</div><div class="mt-1 font-heading text-sm font-semibold">Ra &lt; 0.4 µm</div></div></div></div><div class="absolute -left-10 -top-10 -z-10 size-48 rounded-full bg-teal-400/40 blur-3xl"></div><div class="absolute -bottom-12 -right-12 -z-10 size-64 rounded-full bg-cyan-400/40 blur-3xl"></div></div></div></div><div class="absolute inset-x-0 bottom-8 flex justify-center"><div class="scroll-indicator" aria-hidden="true"></div></div></section><section class="relative -mt-16 px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-7xl">`);
			_push(ssrRenderComponent(ScrollReveal_default, {
				stagger: .12,
				y: 24,
				target: ".stat-card"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="glass grid divide-x divide-slate-200 overflow-hidden rounded-3xl shadow-xl md:grid-cols-4"${_scopeId}><!--[-->`);
						ssrRenderList(stats, (s, i) => {
							_push(`<div class="stat-card p-8 text-center"${_scopeId}><div class="font-heading text-4xl font-semibold text-[color:var(--color-brand)] sm:text-5xl"${_scopeId}>`);
							_push(ssrRenderComponent(AnimatedCounter_default, {
								to: s.to,
								suffix: s.suffix
							}, null, _parent, _scopeId));
							_push(`</div><div class="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"${_scopeId}>${ssrInterpolate(s.label)}</div></div>`);
						});
						_push(`<!--]--></div>`);
					} else return [createVNode("div", { class: "glass grid divide-x divide-slate-200 overflow-hidden rounded-3xl shadow-xl md:grid-cols-4" }, [(openBlock(), createBlock(Fragment, null, renderList(stats, (s, i) => {
						return createVNode("div", {
							key: i,
							class: "stat-card p-8 text-center"
						}, [createVNode("div", { class: "font-heading text-4xl font-semibold text-[color:var(--color-brand)] sm:text-5xl" }, [createVNode(AnimatedCounter_default, {
							to: s.to,
							suffix: s.suffix
						}, null, 8, ["to", "suffix"])]), createVNode("div", { class: "mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500" }, toDisplayString(s.label), 1)]);
					}), 64))])];
				}),
				_: 1
			}, _parent));
			_push(`</div></section><section class="relative py-24 sm:py-32"><div class="bg-grid absolute inset-0 opacity-40"></div><div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="grid gap-12 lg:grid-cols-12 lg:gap-16"><div class="lg:col-span-5">`);
			_push(ssrRenderComponent(ScrollReveal_default, { y: 20 }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<p class="text-xs font-semibold uppercase tracking-[0.22em] text-teal-600"${_scopeId}>Why Kailash</p><h2 class="mt-3 font-heading text-balance text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl"${_scopeId}> Built for pharma. <span class="text-gradient-brand"${_scopeId}>Proven across continents.</span></h2><p class="mt-6 max-w-xl text-base leading-8 text-slate-600"${_scopeId}> We engineer reliability into every mechanism — from rotary vial washers and high-precision injectable fillers to complete turnkey lines audited by global regulators. </p>`);
						_push(ssrRenderComponent(unref(Link), {
							href: "/about",
							class: "mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-brand)] hover:text-[color:var(--color-brand-accent)]"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Our story <span class="transition group-hover:translate-x-1"${_scopeId}>→</span>`);
								else return [createTextVNode(" Our story "), createVNode("span", { class: "transition group-hover:translate-x-1" }, "→")];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [
						createVNode("p", { class: "text-xs font-semibold uppercase tracking-[0.22em] text-teal-600" }, "Why Kailash"),
						createVNode("h2", { class: "mt-3 font-heading text-balance text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl" }, [createTextVNode(" Built for pharma. "), createVNode("span", { class: "text-gradient-brand" }, "Proven across continents.")]),
						createVNode("p", { class: "mt-6 max-w-xl text-base leading-8 text-slate-600" }, " We engineer reliability into every mechanism — from rotary vial washers and high-precision injectable fillers to complete turnkey lines audited by global regulators. "),
						createVNode(unref(Link), {
							href: "/about",
							class: "mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-brand)] hover:text-[color:var(--color-brand-accent)]"
						}, {
							default: withCtx(() => [createTextVNode(" Our story "), createVNode("span", { class: "transition group-hover:translate-x-1" }, "→")]),
							_: 1
						})
					];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="lg:col-span-7">`);
			_push(ssrRenderComponent(ScrollReveal_default, {
				stagger: .12,
				y: 30,
				target: ".pillar-card"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="grid gap-4 sm:grid-cols-2"${_scopeId}><!--[-->`);
						ssrRenderList(pillars, (p, i) => {
							_push(`<div class="pillar-card hover-lift group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"${_scopeId}><div class="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[color:var(--color-brand)] to-[color:var(--color-brand-accent)] text-white"${_scopeId}><svg class="size-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"${_scopeId}></path></svg></div><h3 class="font-heading text-lg font-semibold text-slate-900"${_scopeId}>${ssrInterpolate(p.title)}</h3><p class="mt-2 text-sm leading-6 text-slate-600"${_scopeId}>${ssrInterpolate(p.body)}</p><div class="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[color:var(--color-brand-accent)]/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"${_scopeId}></div></div>`);
						});
						_push(`<!--]--></div>`);
					} else return [createVNode("div", { class: "grid gap-4 sm:grid-cols-2" }, [(openBlock(), createBlock(Fragment, null, renderList(pillars, (p, i) => {
						return createVNode("div", {
							key: i,
							class: "pillar-card hover-lift group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
						}, [
							createVNode("div", { class: "mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[color:var(--color-brand)] to-[color:var(--color-brand-accent)] text-white" }, [(openBlock(), createBlock("svg", {
								class: "size-6",
								fill: "none",
								stroke: "currentColor",
								"stroke-width": "2",
								viewBox: "0 0 24 24"
							}, [createVNode("path", {
								"stroke-linecap": "round",
								"stroke-linejoin": "round",
								d: "M5 13l4 4L19 7"
							})]))]),
							createVNode("h3", { class: "font-heading text-lg font-semibold text-slate-900" }, toDisplayString(p.title), 1),
							createVNode("p", { class: "mt-2 text-sm leading-6 text-slate-600" }, toDisplayString(p.body), 1),
							createVNode("div", { class: "absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[color:var(--color-brand-accent)]/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" })
						]);
					}), 64))])];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></div></section><section class="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-32"><div class="absolute inset-0 opacity-50"><div class="mesh-hero-animated absolute inset-0"></div></div><div class="bg-grid-dark grid-pattern-fade absolute inset-0 opacity-20"></div><div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"><div><p class="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">Machinery</p><h2 class="mt-3 font-heading text-balance text-4xl font-semibold leading-tight sm:text-5xl"> A complete pharmaceutical line,<br>engineered by one team. </h2></div>`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/products",
				class: "group inline-flex items-center gap-2 text-sm font-semibold text-teal-300 hover:text-white"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` View all 14 categories <svg class="size-4 transition group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"${_scopeId}></path></svg>`);
					else return [createTextVNode(" View all 14 categories "), (openBlock(), createBlock("svg", {
						class: "size-4 transition group-hover:translate-x-1",
						fill: "none",
						stroke: "currentColor",
						"stroke-width": "2",
						viewBox: "0 0 24 24"
					}, [createVNode("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						d: "M17 8l4 4m0 0l-4 4m4-4H3"
					})]))];
				}),
				_: 1
			}, _parent));
			_push(`</div>`);
			_push(ssrRenderComponent(ScrollReveal_default, {
				stagger: .1,
				y: 40,
				target: ".bento-card",
				class: "mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<!--[-->`);
						ssrRenderList(bento.value, (c) => {
							_push(ssrRenderComponent(unref(Link), {
								key: c.id,
								href: `/products/${c.slug}`,
								class: ["bento-card group relative overflow-hidden rounded-2xl border border-white/10", c.span]
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) {
										if (c.hero_image) _push(`<img${ssrRenderAttr("src", c.hero_image)}${ssrRenderAttr("alt", c.name + " — Kailash Machine Tools")} class="${ssrRenderClass(["absolute inset-0 size-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110", c.tall ? "aspect-auto" : "aspect-[16/10]"])}" loading="lazy" width="1200" height="800"${_scopeId}>`);
										else _push(`<!---->`);
										_push(`<div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"${_scopeId}></div><div class="relative flex h-full min-h-[220px] flex-col justify-end p-6"${_scopeId}><div class="mb-3 inline-flex size-9 items-center justify-center rounded-lg bg-white/10 backdrop-blur"${_scopeId}>`);
										_push(ssrRenderComponent(CategoryIcon_default, {
											name: c.icon,
											class: "size-5 text-teal-300"
										}, null, _parent, _scopeId));
										_push(`</div><h3 class="${ssrRenderClass(["font-heading font-semibold", c.tall ? "text-3xl" : "text-xl"])}"${_scopeId}>${ssrInterpolate(c.name)}</h3><p class="${ssrRenderClass([c.tall ? "max-w-sm" : "line-clamp-1", "mt-1 text-sm text-slate-300"])}"${_scopeId}>${ssrInterpolate(c.tagline)}</p><div class="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-teal-300"${_scopeId}> Discover <span class="transition group-hover:translate-x-1"${_scopeId}>→</span></div></div>`);
									} else return [
										c.hero_image ? (openBlock(), createBlock("img", {
											key: 0,
											src: c.hero_image,
											alt: c.name + " — Kailash Machine Tools",
											class: ["absolute inset-0 size-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110", c.tall ? "aspect-auto" : "aspect-[16/10]"],
											loading: "lazy",
											width: "1200",
											height: "800"
										}, null, 10, ["src", "alt"])) : createCommentVNode("", true),
										createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" }),
										createVNode("div", { class: "relative flex h-full min-h-[220px] flex-col justify-end p-6" }, [
											createVNode("div", { class: "mb-3 inline-flex size-9 items-center justify-center rounded-lg bg-white/10 backdrop-blur" }, [createVNode(CategoryIcon_default, {
												name: c.icon,
												class: "size-5 text-teal-300"
											}, null, 8, ["name"])]),
											createVNode("h3", { class: ["font-heading font-semibold", c.tall ? "text-3xl" : "text-xl"] }, toDisplayString(c.name), 3),
											createVNode("p", { class: ["mt-1 text-sm text-slate-300", c.tall ? "max-w-sm" : "line-clamp-1"] }, toDisplayString(c.tagline), 3),
											createVNode("div", { class: "mt-4 inline-flex items-center gap-1 text-xs font-semibold text-teal-300" }, [createTextVNode(" Discover "), createVNode("span", { class: "transition group-hover:translate-x-1" }, "→")])
										])
									];
								}),
								_: 2
							}, _parent, _scopeId));
						});
						_push(`<!--]-->`);
					} else return [(openBlock(true), createBlock(Fragment, null, renderList(bento.value, (c) => {
						return openBlock(), createBlock(unref(Link), {
							key: c.id,
							href: `/products/${c.slug}`,
							class: ["bento-card group relative overflow-hidden rounded-2xl border border-white/10", c.span]
						}, {
							default: withCtx(() => [
								c.hero_image ? (openBlock(), createBlock("img", {
									key: 0,
									src: c.hero_image,
									alt: c.name + " — Kailash Machine Tools",
									class: ["absolute inset-0 size-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110", c.tall ? "aspect-auto" : "aspect-[16/10]"],
									loading: "lazy",
									width: "1200",
									height: "800"
								}, null, 10, ["src", "alt"])) : createCommentVNode("", true),
								createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" }),
								createVNode("div", { class: "relative flex h-full min-h-[220px] flex-col justify-end p-6" }, [
									createVNode("div", { class: "mb-3 inline-flex size-9 items-center justify-center rounded-lg bg-white/10 backdrop-blur" }, [createVNode(CategoryIcon_default, {
										name: c.icon,
										class: "size-5 text-teal-300"
									}, null, 8, ["name"])]),
									createVNode("h3", { class: ["font-heading font-semibold", c.tall ? "text-3xl" : "text-xl"] }, toDisplayString(c.name), 3),
									createVNode("p", { class: ["mt-1 text-sm text-slate-300", c.tall ? "max-w-sm" : "line-clamp-1"] }, toDisplayString(c.tagline), 3),
									createVNode("div", { class: "mt-4 inline-flex items-center gap-1 text-xs font-semibold text-teal-300" }, [createTextVNode(" Discover "), createVNode("span", { class: "transition group-hover:translate-x-1" }, "→")])
								])
							]),
							_: 2
						}, 1032, ["href", "class"]);
					}), 128))];
				}),
				_: 1
			}, _parent));
			_push(`</div></section><section class="relative py-24 sm:py-32"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">`);
			_push(ssrRenderComponent(ScrollReveal_default, { y: 20 }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<p class="text-xs font-semibold uppercase tracking-[0.22em] text-teal-600"${_scopeId}>Our Process</p><h2 class="mt-3 font-heading text-balance text-4xl font-semibold text-slate-900 sm:text-5xl"${_scopeId}>From URS to validated line — six deliberate steps.</h2>`);
					else return [createVNode("p", { class: "text-xs font-semibold uppercase tracking-[0.22em] text-teal-600" }, "Our Process"), createVNode("h2", { class: "mt-3 font-heading text-balance text-4xl font-semibold text-slate-900 sm:text-5xl" }, "From URS to validated line — six deliberate steps.")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(ScrollReveal_default, {
				stagger: .1,
				y: 30,
				target: ".step-card",
				class: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<!--[-->`);
						ssrRenderList(process, (s, i) => {
							_push(`<div class="step-card group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[color:var(--color-brand-accent)]/40 hover:shadow-[var(--shadow-brand)]"${_scopeId}><span class="font-mono text-xs font-semibold uppercase tracking-widest text-[color:var(--color-brand-accent)]"${_scopeId}>${ssrInterpolate(s.step)}</span><h3 class="mt-4 font-heading text-xl font-semibold text-slate-900"${_scopeId}>${ssrInterpolate(s.title)}</h3><p class="mt-3 text-sm leading-6 text-slate-600"${_scopeId}>${ssrInterpolate(s.body)}</p><div class="absolute -right-4 -top-4 size-20 rounded-full bg-gradient-to-br from-teal-400/20 to-cyan-400/20 blur-2xl transition-opacity group-hover:opacity-100"${_scopeId}></div></div>`);
						});
						_push(`<!--]-->`);
					} else return [(openBlock(), createBlock(Fragment, null, renderList(process, (s, i) => {
						return createVNode("div", {
							key: i,
							class: "step-card group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[color:var(--color-brand-accent)]/40 hover:shadow-[var(--shadow-brand)]"
						}, [
							createVNode("span", { class: "font-mono text-xs font-semibold uppercase tracking-widest text-[color:var(--color-brand-accent)]" }, toDisplayString(s.step), 1),
							createVNode("h3", { class: "mt-4 font-heading text-xl font-semibold text-slate-900" }, toDisplayString(s.title), 1),
							createVNode("p", { class: "mt-3 text-sm leading-6 text-slate-600" }, toDisplayString(s.body), 1),
							createVNode("div", { class: "absolute -right-4 -top-4 size-20 rounded-full bg-gradient-to-br from-teal-400/20 to-cyan-400/20 blur-2xl transition-opacity group-hover:opacity-100" })
						]);
					}), 64))];
				}),
				_: 1
			}, _parent));
			_push(`</div></section><section class="relative bg-gradient-to-b from-slate-50 to-white py-24 sm:py-32"><div class="bg-grid absolute inset-0 opacity-40"></div><div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex items-end justify-between gap-6">`);
			_push(ssrRenderComponent(ScrollReveal_default, { y: 20 }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<p class="text-xs font-semibold uppercase tracking-[0.22em] text-teal-600"${_scopeId}>Flagship Machinery</p><h2 class="mt-3 font-heading text-balance text-4xl font-semibold text-slate-900 sm:text-5xl"${_scopeId}>Lines trusted by pharma leaders.</h2>`);
					else return [createVNode("p", { class: "text-xs font-semibold uppercase tracking-[0.22em] text-teal-600" }, "Flagship Machinery"), createVNode("h2", { class: "mt-3 font-heading text-balance text-4xl font-semibold text-slate-900 sm:text-5xl" }, "Lines trusted by pharma leaders.")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(unref(Link), {
				href: "/products",
				class: "hidden text-sm font-semibold text-[color:var(--color-brand)] hover:text-[color:var(--color-brand-accent)] sm:inline"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`All products →`);
					else return [createTextVNode("All products →")];
				}),
				_: 1
			}, _parent));
			_push(`</div>`);
			_push(ssrRenderComponent(ScrollReveal_default, {
				stagger: .1,
				y: 30,
				target: ".prod",
				class: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<!--[-->`);
						ssrRenderList(__props.featured, (p) => {
							_push(`<div class="prod"${_scopeId}>`);
							_push(ssrRenderComponent(ProductCard_default, { product: p }, null, _parent, _scopeId));
							_push(`</div>`);
						});
						_push(`<!--]-->`);
					} else return [(openBlock(true), createBlock(Fragment, null, renderList(__props.featured, (p) => {
						return openBlock(), createBlock("div", {
							key: p.id,
							class: "prod"
						}, [createVNode(ProductCard_default, { product: p }, null, 8, ["product"])]);
					}), 128))];
				}),
				_: 1
			}, _parent));
			_push(`</div></section><section class="relative py-24 sm:py-32"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="grid items-center gap-12 lg:grid-cols-2">`);
			_push(ssrRenderComponent(ScrollReveal_default, {
				y: 30,
				stagger: .12,
				target: ".reveal-item"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="reveal-item"${_scopeId}><p class="text-xs font-semibold uppercase tracking-[0.22em] text-teal-600"${_scopeId}>Quality &amp; Compliance</p></div><h2 class="reveal-item mt-3 font-heading text-balance text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl"${_scopeId}> Auditable by design. <span class="text-gradient-brand"${_scopeId}>Validated on delivery.</span></h2><p class="reveal-item mt-6 max-w-xl text-base leading-8 text-slate-600"${_scopeId}> Every build assumes your plant will be audited tomorrow — and makes sure the machine passes. Full material traceability, sanitary design, IQ/OQ/PQ protocols in the box. </p><ul class="reveal-item mt-8 space-y-3 text-sm text-slate-700"${_scopeId}><li class="flex items-start gap-3"${_scopeId}><svg class="mt-0.5 size-5 shrink-0 text-[color:var(--color-brand-accent)]" fill="currentColor" viewBox="0 0 20 20"${_scopeId}><path d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"${_scopeId}></path></svg> cGMP + EU-GMP aligned construction</li><li class="flex items-start gap-3"${_scopeId}><svg class="mt-0.5 size-5 shrink-0 text-[color:var(--color-brand-accent)]" fill="currentColor" viewBox="0 0 20 20"${_scopeId}><path d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"${_scopeId}></path></svg> SS 316L contact parts, Ra &lt; 0.4 µm finish</li><li class="flex items-start gap-3"${_scopeId}><svg class="mt-0.5 size-5 shrink-0 text-[color:var(--color-brand-accent)]" fill="currentColor" viewBox="0 0 20 20"${_scopeId}><path d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"${_scopeId}></path></svg> FAT / SAT protocols, IQ/OQ/PQ documentation</li><li class="flex items-start gap-3"${_scopeId}><svg class="mt-0.5 size-5 shrink-0 text-[color:var(--color-brand-accent)]" fill="currentColor" viewBox="0 0 20 20"${_scopeId}><path d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"${_scopeId}></path></svg> CE-ready variants for EU export</li></ul>`);
						_push(ssrRenderComponent(unref(Link), {
							href: "/quality-compliance",
							class: "reveal-item mt-8 inline-flex items-center gap-2 rounded-full bg-[color:var(--color-brand)] px-6 py-3 text-sm font-semibold text-white hover:bg-[color:var(--color-brand-accent)]"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Our quality commitment <svg class="size-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"${_scopeId}></path></svg>`);
								else return [createTextVNode(" Our quality commitment "), (openBlock(), createBlock("svg", {
									class: "size-4",
									fill: "none",
									stroke: "currentColor",
									"stroke-width": "2",
									viewBox: "0 0 24 24"
								}, [createVNode("path", {
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									d: "M14 5l7 7m0 0l-7 7m7-7H3"
								})]))];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [
						createVNode("div", { class: "reveal-item" }, [createVNode("p", { class: "text-xs font-semibold uppercase tracking-[0.22em] text-teal-600" }, "Quality & Compliance")]),
						createVNode("h2", { class: "reveal-item mt-3 font-heading text-balance text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl" }, [createTextVNode(" Auditable by design. "), createVNode("span", { class: "text-gradient-brand" }, "Validated on delivery.")]),
						createVNode("p", { class: "reveal-item mt-6 max-w-xl text-base leading-8 text-slate-600" }, " Every build assumes your plant will be audited tomorrow — and makes sure the machine passes. Full material traceability, sanitary design, IQ/OQ/PQ protocols in the box. "),
						createVNode("ul", { class: "reveal-item mt-8 space-y-3 text-sm text-slate-700" }, [
							createVNode("li", { class: "flex items-start gap-3" }, [(openBlock(), createBlock("svg", {
								class: "mt-0.5 size-5 shrink-0 text-[color:var(--color-brand-accent)]",
								fill: "currentColor",
								viewBox: "0 0 20 20"
							}, [createVNode("path", { d: "M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" })])), createTextVNode(" cGMP + EU-GMP aligned construction")]),
							createVNode("li", { class: "flex items-start gap-3" }, [(openBlock(), createBlock("svg", {
								class: "mt-0.5 size-5 shrink-0 text-[color:var(--color-brand-accent)]",
								fill: "currentColor",
								viewBox: "0 0 20 20"
							}, [createVNode("path", { d: "M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" })])), createTextVNode(" SS 316L contact parts, Ra < 0.4 µm finish")]),
							createVNode("li", { class: "flex items-start gap-3" }, [(openBlock(), createBlock("svg", {
								class: "mt-0.5 size-5 shrink-0 text-[color:var(--color-brand-accent)]",
								fill: "currentColor",
								viewBox: "0 0 20 20"
							}, [createVNode("path", { d: "M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" })])), createTextVNode(" FAT / SAT protocols, IQ/OQ/PQ documentation")]),
							createVNode("li", { class: "flex items-start gap-3" }, [(openBlock(), createBlock("svg", {
								class: "mt-0.5 size-5 shrink-0 text-[color:var(--color-brand-accent)]",
								fill: "currentColor",
								viewBox: "0 0 20 20"
							}, [createVNode("path", { d: "M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" })])), createTextVNode(" CE-ready variants for EU export")])
						]),
						createVNode(unref(Link), {
							href: "/quality-compliance",
							class: "reveal-item mt-8 inline-flex items-center gap-2 rounded-full bg-[color:var(--color-brand)] px-6 py-3 text-sm font-semibold text-white hover:bg-[color:var(--color-brand-accent)]"
						}, {
							default: withCtx(() => [createTextVNode(" Our quality commitment "), (openBlock(), createBlock("svg", {
								class: "size-4",
								fill: "none",
								stroke: "currentColor",
								"stroke-width": "2",
								viewBox: "0 0 24 24"
							}, [createVNode("path", {
								"stroke-linecap": "round",
								"stroke-linejoin": "round",
								d: "M14 5l7 7m0 0l-7 7m7-7H3"
							})]))]),
							_: 1
						})
					];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(ScrollReveal_default, {
				y: 30,
				x: 30
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<div class="relative"${_scopeId}><div class="overflow-hidden rounded-3xl border border-slate-200 shadow-xl"${_scopeId}><img${ssrRenderAttr("src", __props.qualityImage)} alt="Cleanroom operator at a cGMP-compliant pharmaceutical facility" class="aspect-[4/5] w-full object-cover" loading="lazy" width="800" height="1000"${_scopeId}></div><div class="absolute -bottom-6 -left-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><div class="inline-flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-[color:var(--color-brand)] to-[color:var(--color-brand-accent)] text-white"${_scopeId}><svg class="size-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.6-4A11.95 11.95 0 0112 2a11.95 11.95 0 01-8.6 3A12 12 0 0012 21a12 12 0 008.6-15z"${_scopeId}></path></svg></div><div${_scopeId}><div class="font-heading text-sm font-semibold text-slate-900"${_scopeId}>cGMP Compliant</div><div class="text-xs text-slate-500"${_scopeId}>Audited by global regulators</div></div></div></div></div>`);
					else return [createVNode("div", { class: "relative" }, [createVNode("div", { class: "overflow-hidden rounded-3xl border border-slate-200 shadow-xl" }, [createVNode("img", {
						src: __props.qualityImage,
						alt: "Cleanroom operator at a cGMP-compliant pharmaceutical facility",
						class: "aspect-[4/5] w-full object-cover",
						loading: "lazy",
						width: "800",
						height: "1000"
					}, null, 8, ["src"])]), createVNode("div", { class: "absolute -bottom-6 -left-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl" }, [createVNode("div", { class: "flex items-center gap-3" }, [createVNode("div", { class: "inline-flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-[color:var(--color-brand)] to-[color:var(--color-brand-accent)] text-white" }, [(openBlock(), createBlock("svg", {
						class: "size-5",
						fill: "none",
						stroke: "currentColor",
						"stroke-width": "2",
						viewBox: "0 0 24 24"
					}, [createVNode("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						d: "M9 12l2 2 4-4m5.6-4A11.95 11.95 0 0112 2a11.95 11.95 0 01-8.6 3A12 12 0 0012 21a12 12 0 008.6-15z"
					})]))]), createVNode("div", null, [createVNode("div", { class: "font-heading text-sm font-semibold text-slate-900" }, "cGMP Compliant"), createVNode("div", { class: "text-xs text-slate-500" }, "Audited by global regulators")])])])])];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></section><section class="relative overflow-hidden bg-slate-50 py-24 sm:py-32"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">`);
			_push(ssrRenderComponent(ScrollReveal_default, { y: 20 }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<p class="text-xs font-semibold uppercase tracking-[0.22em] text-teal-600"${_scopeId}>Industries We Serve</p><h2 class="mt-3 font-heading text-balance text-4xl font-semibold text-slate-900 sm:text-5xl"${_scopeId}>Engineered for every regulated environment.</h2>`);
					else return [createVNode("p", { class: "text-xs font-semibold uppercase tracking-[0.22em] text-teal-600" }, "Industries We Serve"), createVNode("h2", { class: "mt-3 font-heading text-balance text-4xl font-semibold text-slate-900 sm:text-5xl" }, "Engineered for every regulated environment.")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(ScrollReveal_default, {
				stagger: .08,
				y: 30,
				target: ".ind-card",
				class: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<!--[-->`);
						ssrRenderList(industries, (i) => {
							_push(ssrRenderComponent(unref(Link), {
								key: i.slug,
								href: "/industries",
								class: "ind-card group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-[color:var(--color-brand-accent)]/40 hover:shadow-[var(--shadow-brand)]"
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`<h3 class="font-heading text-xl font-semibold text-slate-900 group-hover:text-[color:var(--color-brand-accent)]"${_scopeId}>${ssrInterpolate(i.name)}</h3><p class="mt-2 text-sm leading-6 text-slate-600"${_scopeId}>${ssrInterpolate(i.body)}</p><span class="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--color-brand)]"${_scopeId}>Learn more <span class="transition group-hover:translate-x-1"${_scopeId}>→</span></span>`);
									else return [
										createVNode("h3", { class: "font-heading text-xl font-semibold text-slate-900 group-hover:text-[color:var(--color-brand-accent)]" }, toDisplayString(i.name), 1),
										createVNode("p", { class: "mt-2 text-sm leading-6 text-slate-600" }, toDisplayString(i.body), 1),
										createVNode("span", { class: "mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--color-brand)]" }, [createTextVNode("Learn more "), createVNode("span", { class: "transition group-hover:translate-x-1" }, "→")])
									];
								}),
								_: 2
							}, _parent, _scopeId));
						});
						_push(`<!--]-->`);
					} else return [(openBlock(), createBlock(Fragment, null, renderList(industries, (i) => {
						return createVNode(unref(Link), {
							key: i.slug,
							href: "/industries",
							class: "ind-card group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-[color:var(--color-brand-accent)]/40 hover:shadow-[var(--shadow-brand)]"
						}, {
							default: withCtx(() => [
								createVNode("h3", { class: "font-heading text-xl font-semibold text-slate-900 group-hover:text-[color:var(--color-brand-accent)]" }, toDisplayString(i.name), 1),
								createVNode("p", { class: "mt-2 text-sm leading-6 text-slate-600" }, toDisplayString(i.body), 1),
								createVNode("span", { class: "mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--color-brand)]" }, [createTextVNode("Learn more "), createVNode("span", { class: "transition group-hover:translate-x-1" }, "→")])
							]),
							_: 2
						}, 1024);
					}), 64))];
				}),
				_: 1
			}, _parent));
			_push(`</div></section><section class="border-y border-slate-200 bg-white py-14"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p class="text-center text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Trusted by 450+ pharmaceutical manufacturers worldwide</p></div><div class="mt-8">`);
			_push(ssrRenderComponent(InfiniteMarquee_default, { speed: 50 }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<!--[-->`);
						ssrRenderList(__props.clients, (c) => {
							_push(`<div class="flex h-14 items-center justify-center rounded-lg border border-slate-200 bg-white px-8 text-sm font-semibold tracking-wider text-slate-600 grayscale transition hover:grayscale-0"${_scopeId}>${ssrInterpolate(c.name)}</div>`);
						});
						_push(`<!--]-->`);
					} else return [(openBlock(true), createBlock(Fragment, null, renderList(__props.clients, (c) => {
						return openBlock(), createBlock("div", {
							key: c.id,
							class: "flex h-14 items-center justify-center rounded-lg border border-slate-200 bg-white px-8 text-sm font-semibold tracking-wider text-slate-600 grayscale transition hover:grayscale-0"
						}, toDisplayString(c.name), 1);
					}), 128))];
				}),
				_: 1
			}, _parent));
			_push(`</div></section>`);
			if (__props.latestPosts?.length) {
				_push(`<section class="relative py-24 sm:py-32"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex items-end justify-between gap-6">`);
				_push(ssrRenderComponent(ScrollReveal_default, { y: 20 }, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<p class="text-xs font-semibold uppercase tracking-[0.22em] text-teal-600"${_scopeId}>Insights</p><h2 class="mt-3 font-heading text-balance text-4xl font-semibold text-slate-900 sm:text-5xl"${_scopeId}>Buying guides &amp; technical articles.</h2>`);
						else return [createVNode("p", { class: "text-xs font-semibold uppercase tracking-[0.22em] text-teal-600" }, "Insights"), createVNode("h2", { class: "mt-3 font-heading text-balance text-4xl font-semibold text-slate-900 sm:text-5xl" }, "Buying guides & technical articles.")];
					}),
					_: 1
				}, _parent));
				_push(ssrRenderComponent(unref(Link), {
					href: "/blog",
					class: "hidden text-sm font-semibold text-[color:var(--color-brand)] hover:text-[color:var(--color-brand-accent)] sm:inline"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`All articles →`);
						else return [createTextVNode("All articles →")];
					}),
					_: 1
				}, _parent));
				_push(`</div>`);
				_push(ssrRenderComponent(ScrollReveal_default, {
					stagger: .1,
					y: 30,
					target: ".post",
					class: "mt-12 grid gap-6 lg:grid-cols-3"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<!--[-->`);
							ssrRenderList(__props.latestPosts, (post) => {
								_push(ssrRenderComponent(unref(Link), {
									key: post.id,
									href: `/blog/${post.slug}`,
									class: "post group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-[var(--shadow-brand)]"
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) {
											_push(`<div class="relative aspect-[16/10] overflow-hidden bg-slate-100"${_scopeId}>`);
											if (post.hero_image) _push(`<img${ssrRenderAttr("src", post.hero_image)}${ssrRenderAttr("alt", post.title)} class="size-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" width="800" height="500"${_scopeId}>`);
											else _push(`<!---->`);
											_push(`</div><div class="p-6"${_scopeId}><div class="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-teal-600"${_scopeId}><span${_scopeId}>${ssrInterpolate(post.category_tag)}</span><span class="size-1 rounded-full bg-slate-300"${_scopeId}></span><span${_scopeId}>${ssrInterpolate(post.reading_minutes)} min read</span></div><h3 class="mt-3 font-heading text-lg font-semibold text-slate-900 group-hover:text-[color:var(--color-brand-accent)]"${_scopeId}>${ssrInterpolate(post.title)}</h3><p class="mt-2 line-clamp-3 text-sm leading-6 text-slate-600"${_scopeId}>${ssrInterpolate(post.excerpt)}</p></div>`);
										} else return [createVNode("div", { class: "relative aspect-[16/10] overflow-hidden bg-slate-100" }, [post.hero_image ? (openBlock(), createBlock("img", {
											key: 0,
											src: post.hero_image,
											alt: post.title,
											class: "size-full object-cover transition-transform duration-700 group-hover:scale-110",
											loading: "lazy",
											width: "800",
											height: "500"
										}, null, 8, ["src", "alt"])) : createCommentVNode("", true)]), createVNode("div", { class: "p-6" }, [
											createVNode("div", { class: "flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-teal-600" }, [
												createVNode("span", null, toDisplayString(post.category_tag), 1),
												createVNode("span", { class: "size-1 rounded-full bg-slate-300" }),
												createVNode("span", null, toDisplayString(post.reading_minutes) + " min read", 1)
											]),
											createVNode("h3", { class: "mt-3 font-heading text-lg font-semibold text-slate-900 group-hover:text-[color:var(--color-brand-accent)]" }, toDisplayString(post.title), 1),
											createVNode("p", { class: "mt-2 line-clamp-3 text-sm leading-6 text-slate-600" }, toDisplayString(post.excerpt), 1)
										])];
									}),
									_: 2
								}, _parent, _scopeId));
							});
							_push(`<!--]-->`);
						} else return [(openBlock(true), createBlock(Fragment, null, renderList(__props.latestPosts, (post) => {
							return openBlock(), createBlock(unref(Link), {
								key: post.id,
								href: `/blog/${post.slug}`,
								class: "post group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-[var(--shadow-brand)]"
							}, {
								default: withCtx(() => [createVNode("div", { class: "relative aspect-[16/10] overflow-hidden bg-slate-100" }, [post.hero_image ? (openBlock(), createBlock("img", {
									key: 0,
									src: post.hero_image,
									alt: post.title,
									class: "size-full object-cover transition-transform duration-700 group-hover:scale-110",
									loading: "lazy",
									width: "800",
									height: "500"
								}, null, 8, ["src", "alt"])) : createCommentVNode("", true)]), createVNode("div", { class: "p-6" }, [
									createVNode("div", { class: "flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-teal-600" }, [
										createVNode("span", null, toDisplayString(post.category_tag), 1),
										createVNode("span", { class: "size-1 rounded-full bg-slate-300" }),
										createVNode("span", null, toDisplayString(post.reading_minutes) + " min read", 1)
									]),
									createVNode("h3", { class: "mt-3 font-heading text-lg font-semibold text-slate-900 group-hover:text-[color:var(--color-brand-accent)]" }, toDisplayString(post.title), 1),
									createVNode("p", { class: "mt-2 line-clamp-3 text-sm leading-6 text-slate-600" }, toDisplayString(post.excerpt), 1)
								])]),
								_: 2
							}, 1032, ["href"]);
						}), 128))];
					}),
					_: 1
				}, _parent));
				_push(`</div></section>`);
			} else _push(`<!---->`);
			_push(`<section class="relative isolate overflow-hidden"><div class="mesh-hero-animated absolute inset-0"></div><div class="bg-grid-dark grid-pattern-fade absolute inset-0 opacity-30"></div><div class="noise-overlay absolute inset-0"></div><div class="relative mx-auto max-w-7xl px-4 py-24 text-white sm:px-6 lg:px-8 lg:py-32"><div class="max-w-4xl"><h2 class="font-heading text-balance text-4xl font-semibold leading-tight sm:text-6xl"> Planning a new line or expansion?<br><span class="text-gradient-brand">Let&#39;s engineer it together.</span></h2><p class="mt-6 max-w-2xl text-lg leading-8 text-slate-200"> Share your product, batch size and target output. Our application engineers will come back with a machine specification within 48 hours. </p><div class="mt-10 flex flex-wrap gap-4">`);
			_push(ssrRenderComponent(MagneticButton_default, null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(unref(Link), {
						href: "/contact",
						class: "inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[color:var(--color-brand)] shadow-xl hover:bg-teal-300"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(` Request Consultation <svg class="size-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"${_scopeId}></path></svg>`);
							else return [createTextVNode(" Request Consultation "), (openBlock(), createBlock("svg", {
								class: "size-4",
								fill: "none",
								stroke: "currentColor",
								"stroke-width": "2",
								viewBox: "0 0 24 24"
							}, [createVNode("path", {
								"stroke-linecap": "round",
								"stroke-linejoin": "round",
								d: "M14 5l7 7m0 0l-7 7m7-7H3"
							})]))];
						}),
						_: 1
					}, _parent, _scopeId));
					else return [createVNode(unref(Link), {
						href: "/contact",
						class: "inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[color:var(--color-brand)] shadow-xl hover:bg-teal-300"
					}, {
						default: withCtx(() => [createTextVNode(" Request Consultation "), (openBlock(), createBlock("svg", {
							class: "size-4",
							fill: "none",
							stroke: "currentColor",
							"stroke-width": "2",
							viewBox: "0 0 24 24"
						}, [createVNode("path", {
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							d: "M14 5l7 7m0 0l-7 7m7-7H3"
						})]))]),
						_: 1
					})];
				}),
				_: 1
			}, _parent));
			_push(`<a${ssrRenderAttr("href", `tel:${company.value?.phone?.replace(/\\s/g, "")}`)} class="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur hover:border-teal-300 hover:text-teal-300">${ssrInterpolate(company.value?.phone)}</a></div></div></div></section><!--]-->`);
		};
	}
});
//#endregion
//#region resources/js/Pages/Home.vue
var _sfc_setup = Home_vue_vue_type_script_setup_true_lang_default.setup;
Home_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Home_default = Home_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { Home_default as default };
