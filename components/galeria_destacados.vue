<!-- Galeria que contiene varias CARDS  -->

<template>
  <section class="arriba_uno">
    <h3>{{seccion}}</h3>
    <div class="card-section">
      <card
        v-for="(card, index) in cards"
        :key="index"
        :title="card.title"
        :des="card.des"
        :source="card.source"/>
    </div>
  </section>
</template>


<style lang="postcss">
  .card-section {
    display: flex;
    gap: 1em;
    padding: 1em;
    overflow-x: scroll;
  }

</style>


<script>
export default {
props: ['seccion','cards']
}</script>











