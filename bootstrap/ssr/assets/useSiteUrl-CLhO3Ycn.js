import { computed } from "vue";
import { usePage } from "@inertiajs/vue3";
//#region resources/js/composables/useSiteUrl.ts
/** Canonical site origin for JSON-LD (from shared Inertia `siteUrl`). */
function useSiteUrl() {
	const page = usePage();
	return computed(() => {
		const fromProps = page.props.siteUrl;
		if (fromProps) return fromProps.replace(/\/$/, "");
		try {
			const canonical = page.props.canonical;
			if (canonical) return new URL(canonical).origin;
		} catch {}
		return "https://pharmaceuticalsmachines.com";
	});
}
//#endregion
export { useSiteUrl as t };
