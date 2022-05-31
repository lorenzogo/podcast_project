<!-- Este es el MENU INFERIOR. Permite navegar entre apartados. -->

<template>
  <nav class="inferior">
    <ul>
      <li>
        <Nuxtlink to="/">Inicio</Nuxtlink>
      </li>
      <li>
        <Nuxtlink to="/colecciones">Mis colecciones</Nuxtlink>
      </li>
      <li>
        <Nuxtlink to="/buscador">Buscador</Nuxtlink>
      </li>
      <li>
        <Nuxtlink to="/ajustes">Ajustes</Nuxtlink>
      </li>
    </ul>
  </nav>
</template>

<style lang="postcss">
  ul {
    display: flex;
  }

  li {
    padding: 1em;
  }

  .inferior {
    background: #000000;
    color: white;
  }

</style>
