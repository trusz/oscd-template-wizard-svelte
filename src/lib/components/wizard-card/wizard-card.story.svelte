<script lang="ts">

	import WizardCard from "./wizard-card.svelte"
	import { Button } from "carbon-components-svelte";

	export let height = 100
	export let width = 100

</script>

<div 
	class="container" 
	style:width={`${width}px`}  
	style:height={`${height}px`}
>
	<WizardCard>
		<h4 slot="header">
			Quest: The Electromagnetic Odyssey
		</h4>
		<div>
			Embark on a journey through the Electromagnetic Odyssey, 
			where you'll decode the Resistor Maze, 
			unlock the Capacitor Riddles, and unravel the Inductor Enigma. 
			Master the Transistor Quest and decipher the Signal Cipher 
			to uncover the wisdom of Professor Ohm. 
			Conquer the Circuit Conundrum to become a 
			legendary electrical engineer! Do you accept?
		</div>
		<div slot="footer" class="footer">
			<Button kind="ghost">Cancel</Button>
			<Button>Accept</Button>

		</div>
	</WizardCard>
</div>

<style>
	.container {
		border: grey 1px solid;
		padding: 1rem;
	}
	.footer {
		display: flex;
		justify-content: flex-end;
	}
</style>