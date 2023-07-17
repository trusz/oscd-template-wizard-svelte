<script lang="ts">
	import "carbon-components-svelte/css/white.css"
	import {
		  Form,
		  FormGroup,
		  Checkbox,
		  RadioButtonGroup,
		  RadioButton,
		  Select,
		  SelectItem,
		  Button,
		} from "carbon-components-svelte";
	
	let theme = "g80"; // "white" | "g10" | "g80" | "g90" | "g100"

  	$: document.documentElement.setAttribute("theme", theme);

	export let tagName = ""
	export let parent: Element | undefined = undefined
	export let element: Element | undefined = undefined

</script>

<h2>Add DAType</h2>

<span>
	<pre>
	{#if tagName !== ""}
		tagName: ✅ {tagName}	
	{:else}
		tagName: ❌
	{/if}

	{#if parent !== undefined}
		parent: ✅ {parent.tagName}
	{:else}
		parent: ❌
	{/if}

	{#if element !== undefined}
		element: ✅ {element.tagName}
	{:else}
		element: ❌
	{/if}

 
	<Form on:submit>
	<FormGroup legendText="Checkboxes">
		<Checkbox id="checkbox-0" labelText="Checkbox Label" checked />
		<Checkbox id="checkbox-1" labelText="Checkbox Label" />
		<Checkbox id="checkbox-2" labelText="Checkbox Label" disabled />
	</FormGroup>
	<FormGroup legendText="Radio buttons">
		<RadioButtonGroup id="radio-button-group" selected="default-selected">
		<RadioButton
			id="radio-1"
			value="standard"
			labelText="Standard Radio Button"
		/>
		<RadioButton
			id="radio-2"
			value="default-selected"
			labelText="Default Selected Radio Button"
		/>
		<RadioButton
			id="radio-4"
			value="disabled"
			labelText="Disabled Radio Button"
			disabled
		/>
		</RadioButtonGroup>
	</FormGroup>
	<FormGroup>
		<Select id="select-1" labelText="Select menu" value="placeholder-item">
		<SelectItem
			disabled
			hidden
			value="placeholder-item"
			text="Choose an option"
		/>
		<SelectItem value="option-1" text="Option 1" />
		<SelectItem value="option-2" text="Option 2" />
		<SelectItem value="option-3" text="Option 3" />
		</Select>
	</FormGroup>
	<Button type="submit">Submit</Button>
	</Form>
	  



	</pre>
</span>

<style>
	span {
		display: block;
		margin: 1rem;
		color:blue;
	}
</style>