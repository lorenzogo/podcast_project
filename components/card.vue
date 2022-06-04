<!-- CARD  -->

<template>
  <article class="card">
    <img class="ilustra" :src= "source" alt="portada">
    <div class="izq_medio margen_medio">
      <h2>{{ title }}</h2>
      <p>{{ des }}</p>
    </div>
  </article>
</template>


<script>
  export default {
    props: ['title','des','source']
  }
</script>

<style lang="postcss">
.card {
    min-width: 222px;
}

img {
  height: 180px;
  object-fit: cover;
  @apply rounded-2xl;
  }

</style>
