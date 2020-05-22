<script>
import Component from '../index';
import OpenpeepsTypes from '../components/Openpeeps/index'
</script>

<style>
div {
display:inline
}
</style>
{#each Object.keys(OpenpeepsTypes.PoseTypes) as pose }
	<div>
		<h1>{pose}:</h1>
		<Component pose={pose} />
	</div>
{/each}