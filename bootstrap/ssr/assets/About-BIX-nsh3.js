import { t as SeoHead_default } from "./SeoHead-ILEVCC59.js";
import { t as ScrollReveal_default } from "./ScrollReveal-oDITbbxE.js";
import { t as AnimatedCounter_default } from "./AnimatedCounter-PkZHsldm.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, defineComponent, openBlock, renderList, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Link } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
//#region resources/js/Pages/About.vue?vue&type=script&setup=true&lang.ts
var About_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "About",
	__ssrInlineRender: true,
	props: {
		categoriesCount: {},
		aboutImages: {}
	},
	setup(__props) {
		const timeline = [
			{
				year: "1991",
				title: "Kailash Machine Tools founded",
				body: "Mr. Hitesh Mevada opens a precision workshop in Ahmedabad focused on pharmaceutical tooling."
			},
			{
				year: "2002",
				title: "Expansion into injectable lines",
				body: "First ampoule filling & sealing machines delivered to mid-tier Indian pharma manufacturers."
			},
			{
				year: "2010",
				title: "Export markets opened",
				body: "Installations in Middle East, Southeast Asia and East Africa begin."
			},
			{
				year: "2016",
				title: "Shree Ganesh Pharmatech era",
				body: "Re-branded as Shree Ganesh Pharmatech; product range expanded to complete turnkey lines."
			},
			{
				year: "2026",
				title: "Back as Kailash Machine Tools",
				body: "Honouring the founding identity with a next-generation brand, modernised servo machinery, and a digital-first customer experience."
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(SeoHead_default, {
				title: "About Us — Pharmaceutical Machinery Since 1991",
				description: "Kailash Machine Tools (formerly Shree Ganesh Pharmatech / Ganesh Machine Tools) — Ahmedabad, India manufacturer of injectable & packaging line machinery since 1991."
			}, null, _parent));
			_push(`<section class="relative isolate overflow-hidden text-white"><div class="absolute inset-0 -z-10">`);
			if (__props.aboutImages) _push(`<img${ssrRenderAttr("src", __props.aboutImages.factory)} alt="Kailash Machine Tools factory floor Ahmedabad" class="size-full object-cover ken-burns" loading="eager" fetchpriority="high">`);
			else _push(`<!---->`);
			_push(`<div class="absolute inset-0 bg-gradient-to-br from-[color:var(--color-brand)]/95 via-[color:var(--color-brand)]/80 to-[#061433]/95"></div><div class="mesh-hero-animated absolute inset-0 opacity-50 mix-blend-screen"></div></div><div class="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32"><p class="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">About Us</p><h1 class="mt-3 max-w-4xl font-heading text-balance text-4xl font-semibold leading-tight sm:text-6xl"> Three decades of precision engineering, <span class="text-gradient-brand">now a brand built for the next decade.</span></h1><p class="mt-6 max-w-3xl text-lg leading-8 text-slate-200"> Kailash Machine Tools is a pharmaceutical machinery manufacturer from Ahmedabad, Gujarat — founded in 1991, previously known as Shree Ganesh Pharmatech, and known across the industry as Ganesh Machine Tools. Today, we combine 34 years of workshop heritage with modern servo automation to deliver cGMP-ready injectable and packaging lines to pharma manufacturers worldwide. </p></div></section><section class="relative -mt-16 px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-6xl">`);
			_push(ssrRenderComponent(ScrollReveal_default, {
				stagger: .1,
				y: 20,
				target: ".stat"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="grid divide-y divide-slate-200 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl md:grid-cols-4 md:divide-x md:divide-y-0"${_scopeId}><div class="stat p-8 text-center"${_scopeId}><div class="font-heading text-4xl font-semibold text-[color:var(--color-brand)] sm:text-5xl"${_scopeId}>`);
						_push(ssrRenderComponent(AnimatedCounter_default, {
							to: 34,
							suffix: "+"
						}, null, _parent, _scopeId));
						_push(`</div><div class="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"${_scopeId}>Years</div></div><div class="stat p-8 text-center"${_scopeId}><div class="font-heading text-4xl font-semibold text-[color:var(--color-brand)] sm:text-5xl"${_scopeId}>`);
						_push(ssrRenderComponent(AnimatedCounter_default, {
							to: 2500,
							suffix: "+"
						}, null, _parent, _scopeId));
						_push(`</div><div class="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"${_scopeId}>Machines</div></div><div class="stat p-8 text-center"${_scopeId}><div class="font-heading text-4xl font-semibold text-[color:var(--color-brand)] sm:text-5xl"${_scopeId}>`);
						_push(ssrRenderComponent(AnimatedCounter_default, {
							to: 25,
							suffix: "+"
						}, null, _parent, _scopeId));
						_push(`</div><div class="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"${_scopeId}>Countries</div></div><div class="stat p-8 text-center"${_scopeId}><div class="font-heading text-4xl font-semibold text-[color:var(--color-brand)] sm:text-5xl"${_scopeId}>`);
						_push(ssrRenderComponent(AnimatedCounter_default, {
							to: 450,
							suffix: "+"
						}, null, _parent, _scopeId));
						_push(`</div><div class="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"${_scopeId}>Clients</div></div></div>`);
					} else return [createVNode("div", { class: "grid divide-y divide-slate-200 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl md:grid-cols-4 md:divide-x md:divide-y-0" }, [
						createVNode("div", { class: "stat p-8 text-center" }, [createVNode("div", { class: "font-heading text-4xl font-semibold text-[color:var(--color-brand)] sm:text-5xl" }, [createVNode(AnimatedCounter_default, {
							to: 34,
							suffix: "+"
						})]), createVNode("div", { class: "mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500" }, "Years")]),
						createVNode("div", { class: "stat p-8 text-center" }, [createVNode("div", { class: "font-heading text-4xl font-semibold text-[color:var(--color-brand)] sm:text-5xl" }, [createVNode(AnimatedCounter_default, {
							to: 2500,
							suffix: "+"
						})]), createVNode("div", { class: "mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500" }, "Machines")]),
						createVNode("div", { class: "stat p-8 text-center" }, [createVNode("div", { class: "font-heading text-4xl font-semibold text-[color:var(--color-brand)] sm:text-5xl" }, [createVNode(AnimatedCounter_default, {
							to: 25,
							suffix: "+"
						})]), createVNode("div", { class: "mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500" }, "Countries")]),
						createVNode("div", { class: "stat p-8 text-center" }, [createVNode("div", { class: "font-heading text-4xl font-semibold text-[color:var(--color-brand)] sm:text-5xl" }, [createVNode(AnimatedCounter_default, {
							to: 450,
							suffix: "+"
						})]), createVNode("div", { class: "mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500" }, "Clients")])
					])];
				}),
				_: 1
			}, _parent));
			_push(`</div></section><section class="py-24 sm:py-28"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="grid items-start gap-16 lg:grid-cols-2">`);
			_push(ssrRenderComponent(ScrollReveal_default, { y: 30 }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="overflow-hidden rounded-3xl border border-slate-200 shadow-xl"${_scopeId}>`);
						if (__props.aboutImages) _push(`<img${ssrRenderAttr("src", __props.aboutImages.heritage)} alt="Pharmaceutical production — Kailash Machine Tools heritage" class="aspect-[4/5] w-full object-cover" loading="lazy" width="800" height="1000"${_scopeId}>`);
						else _push(`<!---->`);
						_push(`</div>`);
					} else return [createVNode("div", { class: "overflow-hidden rounded-3xl border border-slate-200 shadow-xl" }, [__props.aboutImages ? (openBlock(), createBlock("img", {
						key: 0,
						src: __props.aboutImages.heritage,
						alt: "Pharmaceutical production — Kailash Machine Tools heritage",
						class: "aspect-[4/5] w-full object-cover",
						loading: "lazy",
						width: "800",
						height: "1000"
					}, null, 8, ["src"])) : createCommentVNode("", true)])];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(ScrollReveal_default, {
				stagger: .1,
				y: 20,
				target: ".rev"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<div class="rev"${_scopeId}><p class="text-xs font-semibold uppercase tracking-[0.22em] text-teal-600"${_scopeId}>Our Mission</p></div><h2 class="rev mt-3 font-heading text-balance text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl"${_scopeId}> Engineer machinery that <span class="text-gradient-brand"${_scopeId}>hits purity, throughput and compliance</span> targets on day one. </h2><p class="rev mt-6 text-base leading-8 text-slate-600"${_scopeId}> Every machine we ship is built to be measurable, serviceable and validatable for two decades after commissioning. We don&#39;t just deliver equipment — we deliver regulatory peace of mind. </p><div class="rev mt-10"${_scopeId}><h3 class="font-heading text-xl font-semibold text-slate-900"${_scopeId}>What we stand for</h3><ul class="mt-4 space-y-4 text-sm leading-6 text-slate-700"${_scopeId}><li class="flex gap-3"${_scopeId}><span class="mt-1 size-2 shrink-0 rounded-full bg-[color:var(--color-brand-accent)]"${_scopeId}></span><div${_scopeId}><strong class="block text-slate-900"${_scopeId}>Precision, always</strong>±0.5 % fill accuracy, ±0.5 mm label registration, µm-level surface finish on contact parts.</div></li><li class="flex gap-3"${_scopeId}><span class="mt-1 size-2 shrink-0 rounded-full bg-[color:var(--color-brand-accent)]"${_scopeId}></span><div${_scopeId}><strong class="block text-slate-900"${_scopeId}>cGMP by design</strong>SS 316L, documented material traceability, FAT/SAT, IQ/OQ/PQ on every build.</div></li><li class="flex gap-3"${_scopeId}><span class="mt-1 size-2 shrink-0 rounded-full bg-[color:var(--color-brand-accent)]"${_scopeId}></span><div${_scopeId}><strong class="block text-slate-900"${_scopeId}>Responsive support</strong>Spare parts stocked regionally; remote diagnostics; on-site service within 72 hours.</div></li><li class="flex gap-3"${_scopeId}><span class="mt-1 size-2 shrink-0 rounded-full bg-[color:var(--color-brand-accent)]"${_scopeId}></span><div${_scopeId}><strong class="block text-slate-900"${_scopeId}>Honest pricing</strong>Transparent scope, no hidden validation or change-part surcharges.</div></li></ul></div>`);
					else return [
						createVNode("div", { class: "rev" }, [createVNode("p", { class: "text-xs font-semibold uppercase tracking-[0.22em] text-teal-600" }, "Our Mission")]),
						createVNode("h2", { class: "rev mt-3 font-heading text-balance text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl" }, [
							createTextVNode(" Engineer machinery that "),
							createVNode("span", { class: "text-gradient-brand" }, "hits purity, throughput and compliance"),
							createTextVNode(" targets on day one. ")
						]),
						createVNode("p", { class: "rev mt-6 text-base leading-8 text-slate-600" }, " Every machine we ship is built to be measurable, serviceable and validatable for two decades after commissioning. We don't just deliver equipment — we deliver regulatory peace of mind. "),
						createVNode("div", { class: "rev mt-10" }, [createVNode("h3", { class: "font-heading text-xl font-semibold text-slate-900" }, "What we stand for"), createVNode("ul", { class: "mt-4 space-y-4 text-sm leading-6 text-slate-700" }, [
							createVNode("li", { class: "flex gap-3" }, [createVNode("span", { class: "mt-1 size-2 shrink-0 rounded-full bg-[color:var(--color-brand-accent)]" }), createVNode("div", null, [createVNode("strong", { class: "block text-slate-900" }, "Precision, always"), createTextVNode("±0.5 % fill accuracy, ±0.5 mm label registration, µm-level surface finish on contact parts.")])]),
							createVNode("li", { class: "flex gap-3" }, [createVNode("span", { class: "mt-1 size-2 shrink-0 rounded-full bg-[color:var(--color-brand-accent)]" }), createVNode("div", null, [createVNode("strong", { class: "block text-slate-900" }, "cGMP by design"), createTextVNode("SS 316L, documented material traceability, FAT/SAT, IQ/OQ/PQ on every build.")])]),
							createVNode("li", { class: "flex gap-3" }, [createVNode("span", { class: "mt-1 size-2 shrink-0 rounded-full bg-[color:var(--color-brand-accent)]" }), createVNode("div", null, [createVNode("strong", { class: "block text-slate-900" }, "Responsive support"), createTextVNode("Spare parts stocked regionally; remote diagnostics; on-site service within 72 hours.")])]),
							createVNode("li", { class: "flex gap-3" }, [createVNode("span", { class: "mt-1 size-2 shrink-0 rounded-full bg-[color:var(--color-brand-accent)]" }), createVNode("div", null, [createVNode("strong", { class: "block text-slate-900" }, "Honest pricing"), createTextVNode("Transparent scope, no hidden validation or change-part surcharges.")])])
						])])
					];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></section><section class="bg-slate-50 py-24 sm:py-28"><div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">`);
			_push(ssrRenderComponent(ScrollReveal_default, { y: 20 }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<p class="text-center text-xs font-semibold uppercase tracking-[0.22em] text-teal-600"${_scopeId}>Our Journey</p><h2 class="mt-3 text-center font-heading text-balance text-4xl font-semibold text-slate-900 sm:text-5xl"${_scopeId}>From Kailash to Shree Ganesh — and back again.</h2>`);
					else return [createVNode("p", { class: "text-center text-xs font-semibold uppercase tracking-[0.22em] text-teal-600" }, "Our Journey"), createVNode("h2", { class: "mt-3 text-center font-heading text-balance text-4xl font-semibold text-slate-900 sm:text-5xl" }, "From Kailash to Shree Ganesh — and back again.")];
				}),
				_: 1
			}, _parent));
			_push(`<div class="relative mt-16"><div class="absolute inset-y-0 left-5 w-px bg-gradient-to-b from-teal-400 via-slate-300 to-transparent sm:left-1/2"></div>`);
			_push(ssrRenderComponent(ScrollReveal_default, {
				stagger: .12,
				y: 30,
				target: ".tline"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<ul class="space-y-10"${_scopeId}><!--[-->`);
						ssrRenderList(timeline, (t, i) => {
							_push(`<li class="tline relative grid gap-4 sm:grid-cols-2"${_scopeId}><div class="${ssrRenderClass(i % 2 === 0 ? "sm:pr-10 sm:text-right" : "sm:col-start-2 sm:pl-10")}"${_scopeId}><span class="font-heading text-sm font-semibold uppercase tracking-widest text-[color:var(--color-brand-accent)]"${_scopeId}>${ssrInterpolate(t.year)}</span><h3 class="mt-1 font-heading text-xl font-semibold text-slate-900"${_scopeId}>${ssrInterpolate(t.title)}</h3><p class="mt-2 text-sm leading-6 text-slate-600"${_scopeId}>${ssrInterpolate(t.body)}</p></div><div class="absolute left-5 top-1 size-4 -translate-x-1/2 rounded-full border-4 border-white bg-[color:var(--color-brand-accent)] shadow-lg sm:left-1/2"${_scopeId}></div></li>`);
						});
						_push(`<!--]--></ul>`);
					} else return [createVNode("ul", { class: "space-y-10" }, [(openBlock(), createBlock(Fragment, null, renderList(timeline, (t, i) => {
						return createVNode("li", {
							key: i,
							class: "tline relative grid gap-4 sm:grid-cols-2"
						}, [createVNode("div", { class: i % 2 === 0 ? "sm:pr-10 sm:text-right" : "sm:col-start-2 sm:pl-10" }, [
							createVNode("span", { class: "font-heading text-sm font-semibold uppercase tracking-widest text-[color:var(--color-brand-accent)]" }, toDisplayString(t.year), 1),
							createVNode("h3", { class: "mt-1 font-heading text-xl font-semibold text-slate-900" }, toDisplayString(t.title), 1),
							createVNode("p", { class: "mt-2 text-sm leading-6 text-slate-600" }, toDisplayString(t.body), 1)
						], 2), createVNode("div", { class: "absolute left-5 top-1 size-4 -translate-x-1/2 rounded-full border-4 border-white bg-[color:var(--color-brand-accent)] shadow-lg sm:left-1/2" })]);
					}), 64))])];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></section><section class="py-24"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 sm:p-12 lg:flex lg:items-center lg:justify-between"><div class="max-w-xl"><h2 class="font-heading text-balance text-3xl font-semibold text-slate-900">Ready to specify your next line?</h2><p class="mt-3 text-sm leading-6 text-slate-600">Our application engineers will help you size the right machines for your product, batch size and target throughput — in 48 hours.</p></div><div class="mt-6 flex gap-3 lg:mt-0">`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/products",
				class: "inline-flex items-center rounded-full bg-[color:var(--color-brand)] px-6 py-3 text-sm font-semibold text-white hover:bg-[color:var(--color-brand-accent)]"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Browse ${ssrInterpolate(__props.categoriesCount)} Categories`);
					else return [createTextVNode("Browse " + toDisplayString(__props.categoriesCount) + " Categories", 1)];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(unref(Link), {
				href: "/contact",
				class: "inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:border-[color:var(--color-brand-accent)] hover:text-[color:var(--color-brand-accent)]"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Contact Us`);
					else return [createTextVNode("Contact Us")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></div></section><!--]-->`);
		};
	}
});
//#endregion
//#region resources/js/Pages/About.vue
var _sfc_setup = About_vue_vue_type_script_setup_true_lang_default.setup;
About_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/About.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var About_default = About_vue_vue_type_script_setup_true_lang_default;
//#endregion
export { About_default as default };
