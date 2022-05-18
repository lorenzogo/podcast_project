<!-- Este es el MENU SUPERIOR. Aloja el avatar de usuario, titula la sección, incorpora un logo que vincula a la home de incio. -->


<template>
  <div class="superior">
    <div class="avatar"></div>
    <h1>Título de sección</h1>
    <div>Logo</div>
  </div>
</template>


<style lang="postcss">
  .superior {
    display: flex;
    padding: 1em;
  }

  .avatar {
    height: 30px;
    width: 30px;
    background-color: red;
    border-radius: 100%;
  }

  h1 {
    padding: 0 1em;
  }
</style>
