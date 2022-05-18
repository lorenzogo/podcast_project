<!-- Galeria que contiene varias CARDS  -->

<template>
  <section>
    <h1>Destacados de la semana</h1>
    <div class="card-section">
      <card
        v-for="(card, index) in cards"
        :key="index"
        :title="card.title"
        :source="card.source"/>
    </div>
  </section>
</template>


<style lang="postcss">
  .card-section {
    display: flex;
    gap: 0.5em;
    padding: 1em;
  }
</style>


<script>
export default {
//  data () {
//    return {
//      cards: [
//        {id: 1, title: 'título uno', source:'/ilustra_tipo.jpg'},
//        {id:2, title: 'título dos', source: '/locutor.png'},
//        {id: 1, title: 'título tres', source:'/ilustra_tipo.jpg'},
//        {id:2, title: 'título cuatro', source: '/locutor.png'}
//      ]
//    }
//  }
props: ['cards']
}</script>











