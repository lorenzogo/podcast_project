<!-- CARD  -->

<template>
  <article class="card">
    <img class="ilustra" :src= "source" alt="portada">
    <h2>{{ title }}</h2>
    <p>{{ des }}</p>
  </article>
</template>


<script>
  export default {
    props: ['title','des','source']
  }
</script>

<style lang="postcss">
img {
  object-fit: cover;
  @apply rounded-2xl;
  }

</style>
