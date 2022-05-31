<!-- Este es el MENU SUPERIOR. Aloja el avatar de usuario, titula la sección, incorpora un logo que vincula a la home de incio. -->


<template>
  <div class="superior">
    <img class="avatar" src= "avatar.svg" alt="avatar">
    <h1>Título de sección</h1>
    <img class="simbolo" src= "simbolo.svg" alt="simobolo onda cero podcast">
  </div>
</template>


<style lang="postcss">
  .superior {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }

  .avatar {
    height: 46px;
    width: 46px;
  }

  .simbolo {
    width: 49px;
    height: 21px;
    border-radius: 0;
  }

  h1 {
    padding: 0 1em;
  }
</style>
