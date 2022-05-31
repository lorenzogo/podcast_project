<template>
  <main class="general">
    <header><headerMenu/></header>
    <Nuxt/>
    <div class="menu_inferior"><footerMenu/></div>
    <footer>Este es el footer</footer>
    <div class="repro"><reproductor :post="'PLAY'"/></div>
  </main>
</template>


<style lang="postcss">

/* estilos generales */
  header {
    order: -2
  }


  body {
    font-size: 16px;
    background-color: #EDEDED;
  }

  footer {
    background-color: black;
    color: white;
    height: 60px;
    padding: 1em;
  }

  .general {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .menu_inferior {
      order: -1;
    }

  .repro {
    position: sticky;
    bottom: 0;
    z-index: 1;
  }

/* tipografía */

  h1 {
    font-size: 1.2em;
    font-weight: 700;
  }

</style>
