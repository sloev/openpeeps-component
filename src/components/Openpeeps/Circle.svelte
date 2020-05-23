
<script>
export let circleColor="#00ff00"
</script>
<style>
.circle-style {
         background-color: var(--openpeeps-circle-color, #000000);
          width: 170px;
          height: 170px;
          align-self: center;
          border-radius: 135px;
          overflow: hidden;
          border-width: 3px;
          border-color: black;
          border-style: solid;
}
</style>

<div class="circle-style" style="--openpeeps-circle-color: {circleColor};">
	<slot></slot>
</div>