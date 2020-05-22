<script>
import Component from '../index';
import OpenpeepsTypes from '../components/Openpeeps/index'
</script>

<style>
div {
display:inline
}
</style>
{#each Object.keys(OpenpeepsTypes.FaceTypes) as face }
	<div>
		<h1>{face}:</h1>
		<Component face={face} />
	</div>
{/each}