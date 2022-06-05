<!-- botón Small -->

<template>
  <button class="boton_small">
    {{name_small}}
  </button>

</template>


<script>
  export default {
    props: ['name_small']
  }
</script>

<style lan="postcss">
  .boton_small {
    width: fit-content;
    min-width: 90px;
    height: 22px;
    border-radius: 16px;
    text-align: center;
    font-size: 0.8em;
    margin: 0.2em;
    padding: 0px 6px;

  }
</style>
