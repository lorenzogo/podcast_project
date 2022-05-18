<!-- CARD  -->

<template>
  <article class="card">
    <img class="ilustra" :src= "source" alt="portada">
    <h2>Título de {{ title }}</h2>
  </article>
</template>


<script>
  export default {
    props: ['title','source']
  }
</script>

<style lang="postcss">
img {
  object-fit: cover;
  @apply rounded-2xl;
}
</style>
