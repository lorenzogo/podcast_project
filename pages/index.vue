<template>
  <section>
    <galeria-destacados :cards="cards"/>
    <galeria-destacados :cards="cards2"/>
    <card-horizontal-listado :cards="cardsHoz"/>
  </section>
</template>

<script>
import Galeria_destacados from '../components/galeria_destacados.vue';
import Reproductor from '../components/reproductor.vue';
import Card_horizontal_listado from '../components/card_horizontal_listado.vue';
export default {
    name: "IndexPage",
    components: { Galeria_destacados, Reproductor, Card_horizontal_listado },
    data () {
      return {
        cards: [
          {id:1, title: 'título uno', des: 'Primera', source:'/ilustra_tipo.jpg'},
          {id:2, title: 'título dos', des: 'Segunda', source: '/locutor.png'},
          {id:3, title: 'título tres', des: 'Tercera', source:'/ilustra_tipo.jpg'},
          {id:4, title: 'título cuatro', des: 'Cuarta', source: '/locutor.png'}
        ],
        cards2: [
          {id:1, title: 'título de pruebA uno', source:'/ilustra_tipo.jpg'},
          {id:2, title: 'título PRUEBA dos', source: '/locutor.png'},
          {id:3, title: 'título BLS BLAtres', source:'/ilustra_tipo.jpg'},
          {id:4, title: 'título JJFJ cuatro', source: '/locutor.png'}
        ],
        cardsHoz: [
          {id:1, title: 'título h uno', exp: 'Primera', source:'/ilustra_tipo.jpg'},
          {id:2, title: 'título h dos', exp: 'Segunda', source: '/locutor.png'},
          {id:3, title: 'título h tres', exp: 'Tercera', source:'/ilustra_tipo.jpg'},
          {id:4, title: 'título h cuatro', exp: 'Cuarta', source: '/locutor.png'}
        ]

      }
    }
}
</script>
