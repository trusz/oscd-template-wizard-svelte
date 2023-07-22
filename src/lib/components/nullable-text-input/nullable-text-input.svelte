<script lang="ts">
	import { TextInput } from "carbon-components-svelte"
	import { Toggle } from "carbon-components-svelte";
    import type { Optional } from "../../x/type-helper";


	export let value = ""
	export let nullable = true
	export let labelText = ""

	let toggled = false

</script>


<div class="nullable-text-input">
	<TextInput
		{labelText}
		disabled={nullable && !toggled}
		bind:value 
		{...$$restProps} 
	/>

	{#if nullable}
		<span class="toggle-container" class:with-label={labelText!==""}>
			<Toggle  
				bind:toggled
				labelA=""
				labelB=""
			/>
		</span>
	{/if}


</div>

<style>
	.nullable-text-input {
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}

	.nullable-text-input :global(.bx--form-item){
		justify-content: center;
	}

	.nullable-text-input :global(.bx--toggle-input__label .bx--toggle__switch){
		margin-top: 0;
	}

	.toggle-container{
		display: flex;
		align-items: center;
	}
	.with-label{
		margin-top: 1.75rem;
	}
</style>