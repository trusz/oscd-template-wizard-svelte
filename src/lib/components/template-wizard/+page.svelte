<script>
	import { Example } from "../_internal"
    import TemplateWizard from "./template-wizard.svelte";

	const parent = document.createElement("DataTypeTemplates");

	const element = new DOMParser().parseFromString(
		`
			<DAType id="OpenSCD_AnalogueValue_FLOAT32">
				<BDA name="f" bType="FLOAT32"/>
			</DAType>
		`,
		"text/xml"
	).documentElement;

</script>


<Example name="Create Mode">
	<div class="fake-dialog">
		<TemplateWizard tagName="DAType" parent={parent}/>
	</div>
</Example>

<Example name="Edit Mode">
	<div class="fake-dialog">
		<TemplateWizard element={element}/>
	</div>
</Example>

<style>
	.fake-dialog{
		border: black thin solid;
		width:500px;
		padding:1rem;
		margin: 0 auto;
	}
</style>