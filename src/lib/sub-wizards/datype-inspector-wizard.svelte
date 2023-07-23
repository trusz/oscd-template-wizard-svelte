<script lang="ts">

    import { Button, Select, SelectItem, TextInput } from "carbon-components-svelte";
    import NullableTextInput from "../components/nullable-text-input/nullable-text-input.svelte";
    import { WizardCard } from "../components/wizard-card";
    import type { Optional } from "../x/type-helper";
    import { makeDATypeChangeEvent, makeWizardFinishedEvent } from "../x/events";
	import {
		StructuredList,
		StructuredListHead,
		StructuredListRow,
		StructuredListCell,
		StructuredListBody,
	} from "carbon-components-svelte";
	import Save from "carbon-icons-svelte/lib/Save.svelte";

	export let element: Optional<Element>
	
	let formEl: HTMLFormElement

	$: id = element?.getAttribute('id') ?? ""
	$: desc = element?.getAttribute('desc') ?? ""
	$: bdas = Array.from(element?.querySelectorAll("BDA") ?? [])

	function handleSubmit(e: SubmitEvent){
		if(!element){ throw new Error("DAType Inspector Wizard: element is required")}

		const formData = new FormData(e.target as HTMLFormElement)

		const id = formData.get("id") as string
		const desc = formData.get("desc") as string

		const creationEvent = makeDATypeChangeEvent(id, desc, element)
		formEl.dispatchEvent(creationEvent)
		
		const finishedEvent = makeWizardFinishedEvent()
		formEl.dispatchEvent(finishedEvent)

	}

	function handleCancel(){
		const finishedEvent = makeWizardFinishedEvent()
		formEl.dispatchEvent(finishedEvent)
	}

	function getName(bda: Element): string {
		return bda.getAttribute("name") ?? ""
	}

	function getType(bda: Element): string {
		const bType = bda.getAttribute('bType') ?? ""
		const type = bda.getAttribute("type") ?? ""
		
		let displayedType = bType
		if(isEnumOrStruct(bType)){
			displayedType = `#${type}`
		}

		return displayedType
	}

	function isEnumOrStruct(type: string | null){
		return type === 'Enum' || type === 'Struct'
	}

</script>


<form on:submit|preventDefault={handleSubmit} bind:this={formEl}>
	<WizardCard>
		<h4 slot="header">
			Inspect DAType
		</h4>
		
		<div class="form">
			<TextInput name="id" labelText="Id" required value={id}/>	
			<NullableTextInput toggled={true} name="desc" labelText="Description" required value={desc} />

			<StructuredList condensed selection>
				<StructuredListHead>
				  <StructuredListRow head>
					<StructuredListCell head>BDAs</StructuredListCell>
				  </StructuredListRow>
				</StructuredListHead>
				<StructuredListBody>
					{#each bdas as bda}

						<StructuredListRow>
							<StructuredListCell noWrap>
								<div>{getName(bda)}</div>
								<div>{getType(bda)}</div>
							</StructuredListCell>
						</StructuredListRow>
					{/each}
				</StructuredListBody>
			  </StructuredList>
		</div>
		
		<footer slot="footer">
			<Button kind="ghost" on:click={handleCancel}>Cancel</Button>
			<Button type="submit" icon={Save}>Save</Button>
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


