<!-- Este es el MENU INFERIOR. Permite navegar entre apartados. -->

<template>
  <nav class="inferior negro blanco-t">
    <ul>
      <li>
        <NuxtLink to="/">Inicio</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/colecciones">Mis colecciones</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/buscador">Buscador</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/ajustes">Ajustes</NuxtLink>
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

</style>
