<!-- Este es el MENU INFERIOR. Permite navegar entre apartados. -->

<template>
  <nav class="inferior negro blanco-t">
    <ul>
      <li>
        <NuxtLink to="/">Inicio</NuxtLink>
      </li>
      <li>Mis colecciones
        <!-- <NuxtLink to="/colecciones">Mis colecciones</NuxtLink> -->
      </li>
      <li>Buscador
        <!-- <NuxtLink to="/buscador">Buscador</NuxtLink> -->
      </li>
      <li>Ajustes
        <!-- <NuxtLink to="/ajustes">Ajustes</NuxtLink> -->
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
