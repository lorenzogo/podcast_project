<!-- Botón compartir -->


<template>
<div>
  <button class="boton_social blanco">
    <img :src="src" :alt="alt" class="iconoincircle"/>
  </button>
  <p class="ancla">{{anclaje}}</p>
</div>
</template>


<script>
  export default {
    props: ['src','alt', 'anclaje']
  }
</script>


<style lang="postcss" scoped>
  .boton_social {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 40px;
    height: 40px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 48px;
    text-align: center;
    margin: 0.4em;
    padding-bottom: 7px;
    /* padding-left: 4px; */
    gap: 2px;
  }

  .iconoincircle {
    height: 25px;
  }

.ancla {
  height: 20px;
  font-size: 0.8em;
  color:black
}
</style>
