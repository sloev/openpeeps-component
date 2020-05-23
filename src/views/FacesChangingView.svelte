<script>
import Component from '../index';
import OpenpeepsTypes from '../components/Openpeeps/index'

let faces = ['Calm', 'Smile', 'SmileTeeth', 'Serious', 'Explaining', 'Tired'];
let faceIndex = 0
setInterval(function (){
	faceIndex += 1;
	if (faceIndex > faces.length-1){
		faceIndex = 0
	}
}, 1000)
</script>

<style>

</style>


<div>
	<h1>{faces[faceIndex]}:</h1>
	<Component face={faces[faceIndex]} />
</div>
