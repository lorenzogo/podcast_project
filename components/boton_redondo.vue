<!-- Botón redondo -->

<template>
  <button class="boton_redondo">
      <img src="/play_negro.svg" alt="botón play" class="playincircle"/>
  </button>
</template>



<style lan="postcss">
  .boton_redondo {
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
    padding-left: 4px;
    margin: 0;
  }
  .playincircle {
    height: 25px;
  }
</style>
