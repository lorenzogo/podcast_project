<template>
  <main class="general">
    <header><headerMenu /></header>
    <Nuxt/>
    <div class="menu_inferior"><footerMenu/></div>
    <footer class="nota"> Lorenzo Gómez. Gráfica multimedia. Programación 3GB. <a href="https://esdmadrid.es" target="blank" class="bold">Escuela Superior de Diseño de Madrid</a>. 2022</footer>
  </main>
</template>



<style lang="postcss">

/* estilos generales */
  header {
    order: -2
  }

  footer {
    display: flex;
    align-items: center;
    background-color: black;
    color: white;
    height: 60px;
    width: 100%;
    padding-left: 1.5em;
  }

  .general {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .menu_inferior {
      order: -1;
    }


</style>
