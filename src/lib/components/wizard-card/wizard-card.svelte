
<card>
	<div class="header">
		<slot name="header"></slot>
	</div>

	<div class="content">
		<slot></slot>
	</div>

	<div class="footer">
		<slot name="footer"></slot>
	</div>
	
</card>

<style>
	card {
		display: grid;
		grid-template-rows: auto 1fr auto;
		gap: 1rem;
		height: 100%;
	}

	.header {
	}
	.content{
		text-overflow: ellipsis;
		overflow: auto;
		display: block;
	}

</style>