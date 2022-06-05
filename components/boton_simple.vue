<!-- Botón simple -->

<template>
  <button class="boton_simple">
    {{name}}
  </button>

</template>


<script>
  export default {
    props: ['name']
  }
</script>

<style lan="postcss">
  .boton_simple {
    width: fit-content;
    min-width: 90px;
    height: 40px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 48px;
    text-align: center;
    padding: 4px 20px;
    font-size: 1.25em;
    margin: 0.4em;
  }
</style>
