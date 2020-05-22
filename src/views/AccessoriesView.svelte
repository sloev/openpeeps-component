<script>
import Component from '../index';
import OpenpeepsTypes from '../components/Openpeeps/index'
</script>

<style>
div {
display:inline
}
</style>
{#each Object.keys(OpenpeepsTypes.AccessoryTypes) as accessory }
	<div>
		<h1>{accessory}:</h1>
		<Component accessory={accessory} />
	</div>
{/each}