<script>
  import OpenpeepsTypes from './Openpeeps'
  import Circle from './Openpeeps/Circle.svelte'

  console.log('lol', OpenpeepsTypes)

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
  export let accessoryColor = "#00f0e0";
  export let clothesPrimaryColor = '#ffff00';
  export let clothesSecondaryColor = '#cecece';

  let selectedPose = OpenpeepsTypes.PoseTypes['ArmsCrossed']
  let props = {strokeColor, accessoryColor, clothesPrimaryColor, clothesSecondaryColor, skinColor:OpenpeepsTypes.SkinColorTypes[skinColor], hairColor:OpenpeepsTypes.HairColorTypes[hairColor]}
  function handleClick() {
    buttonText += " Clicked";
  }
</script>

<!-- your code here -->
<style>
</style>

<svelte:component this={Circle} circleColor={circleColor}>
  <svg viewBox="-450 150 1100 1200">
          <g transform='translate(-350 200)'>


  <svelte:component this={OpenpeepsTypes.PoseTypes[pose]}  {...props}/>
    <g transform='translate(225 0)'>
  
            <g transform='translate(-100 0)'>

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
</svelte:component>