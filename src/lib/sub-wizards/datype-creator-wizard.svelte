<script lang="ts">
    import { Button, Select, SelectItem, TextInput } from "carbon-components-svelte";
    import NullableTextInput from "../components/nullable-text-input/nullable-text-input.svelte";
    import { WizardCard } from "../components/wizard-card";
    import type { Optional } from "../x/type-helper";
    import { makeDATypeCreationEvent, makeWizardFinishedEvent } from "../x/events";

	export let templates: Optional<Document>
	export let parent: Optional<Element>
	
	let formEl: HTMLFormElement

	$: daTypes = Array.from( templates?.querySelectorAll('DAType') ?? []) 
	$: console.log({level:"dev", parent})

	function handleSubmit(e: SubmitEvent){
		const formData = new FormData(e.target as HTMLFormElement)

		const id = formData.get("id") as string
		const desc = formData.get("desc") as string
		const valueTemplateId = formData.get("valueTemplateId") as string
		let selectedTemplate: Optional<Element>
		if(valueTemplateId){
			selectedTemplate = templates?.querySelector(`DAType[id="${valueTemplateId}"]`) ?? undefined
		}

		const creationEvent = makeDATypeCreationEvent(id, parent, desc, selectedTemplate, templates)
		formEl.dispatchEvent(creationEvent)
		
		const finishedEvent = makeWizardFinishedEvent()
		formEl.dispatchEvent(finishedEvent)

	}

	function handleCancel(){
		const finishedEvent = makeWizardFinishedEvent()
		formEl.dispatchEvent(finishedEvent)
	}

</script>


<form on:submit|preventDefault={handleSubmit} bind:this={formEl}>
	<WizardCard>
		<h4 slot="header">
			Add DAType
		</h4>
		
		<div class="form">
			<Select
				name="valueTemplateId"
				labelText="Values"
				helperText="Default Enumerations"
			>
				{#each daTypes as daType}

					{@const value = daType?.getAttribute('id') ?? ""}
					{@const text = daType?.getAttribute('id')?.replace('OpenSCD_', '') ?? ""}

					<SelectItem {value} {text} />
				{/each}
			</Select>

			<TextInput name="id" labelText="Id" required />	

			<NullableTextInput name="desc" labelText="Description" required />
		</div>
		
		<footer slot="footer">
			<Button kind="ghost" on:click={handleCancel}>Cancel</Button>
			<Button type="submit">Add</Button>
		</footer>
	</WizardCard>
</form>

<style>
	.form{
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	footer{
		display: flex;
		justify-content: flex-end;
	}
</style>


