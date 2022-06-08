<!-- CARD  -->

<template>
<div>
  <!-- <nuxt-link :to="{ name: 'podcast', params: { cosa: 'private' }}"> -->
    <article class="card">
      <img class="ilustra" :src= "source" alt="portada">
      <div class="izq_medio margen_medio">
        <h2>{{ title }}</h2>
        <p>{{ des }}</p>
      </div>
    </article>
  <!-- </nuxt-link> -->
  </div>
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

.ilustra {
  height: 180px;
  object-fit: cover;
  @apply rounded-2xl;
  margin-bottom: 0.4em;
  }

</style>
