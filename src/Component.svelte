<script>
  import OpenpeepsTypes from './Openpeeps'
  console.log('lol', OpenpeepsTypes)
  export let name;
  export let buttonText = "Button";

  export let strokeColor = '#000000';
  export let backgroundColor = '#ffffff';
  export let pose = 'default';
  export let hair = 'default';
  export let face = 'default';
  export let facialHair = 'default';
  export let accessory = 'default';
  export let hairColor = 'default';
  export let skinColor = 'default';
  export let circleColor = '#ff004A';
  export let clothesColorPrimary = '#ffff00';
  export let clothesColorSecondary = '#cecece';

  let selectedPose = OpenpeepsTypes.PoseTypes['ArmsCrossed']
  let props = {strokeColor, skinColor:OpenpeepsTypes.SkinColorTypes[skinColor]}
  function handleClick() {
    buttonText += " Clicked";
  }
</script>

<!-- your code here -->
<h1>Hello shitface: {name}!</h1>

<style>

</style>

<svg>
      <svg viewBox="-100 -50 1100 1200">
      <g>
      <svelte:component this={OpenpeepsTypes.PoseTypes[pose]}  {...props}/>
       <g transform='translate(225 0)'>
        <g>
      <svelte:component this={OpenpeepsTypes.HairTypes[hair]}  {...props}/>
        </g>
        <g transform='translate(159 186)'>
      <svelte:component this={OpenpeepsTypes.FaceTypes[face]}  {...props}/>
        </g>
        <g transform='translate(123 338)'>
      <svelte:component this={OpenpeepsTypes.FacialHairTypes[facialHair]}  {...props}/>
        </g>
        <g transform='translate(47 241)'>
      <svelte:component this={OpenpeepsTypes.AccessoryTypes[accessory]}  {...props}/>
        </g>
      </g>
    </svg>
</svg>