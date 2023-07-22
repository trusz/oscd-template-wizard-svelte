<script lang="ts">
	import "carbon-components-svelte/css/white.css"
	import DATypeCreatorWizard from "../sub-wizards/datype-creator-wizard.svelte";
    import type { Optional } from "../x/type-helper";

	
	let theme = "g80"; // "white" | "g10" | "g80" | "g90" | "g100"

  	$: document.documentElement.setAttribute("theme", theme);

	export let tagName = ""
	export let templates: Optional<Document> = undefined
	export let parent: Optional<Element> = undefined
	export let element: Optional<Element> = undefined

	
	async function loadTemplate(){
		const sourceURL = new URL(import.meta.url);
		const sourceOrigin = sourceURL.origin;

		const url = new URL("/templates.scd", sourceOrigin);
		const response = await fetch(url)
		const text = await response.text()
		
		templates = new DOMParser().parseFromString(text, 'application/xml');
	}


	loadTemplate()

</script>

<DATypeCreatorWizard {templates} {parent} />

<style>

</style>