<template>
<section>
    <galeria_destacados :cards="cards"/>
    <galeria_destacados :cards="cards2"/>
    <reproductor :post="'holi'"/>
    <reproductor :post="'pepe'"/>
  </section>
</template>

<script>
import Galeria_destacados from '../components/galeria_destacados.vue';
import Reproductor from '../components/reproductor.vue';
export default {
    name: "IndexPage",
    components: { Galeria_destacados, Reproductor },
    data () {
      return {
        cards: [
          {id: 1, title: 'título uno', source:'/ilustra_tipo.jpg'},
          {id:2, title: 'título dos', source: '/locutor.png'},
          {id: 1, title: 'título tres', source:'/ilustra_tipo.jpg'},
          {id:2, title: 'título cuatro', source: '/locutor.png'}
        ],
        cards2: [
          {id: 1, title: 'título de pruebA uno', source:'/ilustra_tipo.jpg'},
          {id:2, title: 'título PRUEBA dos', source: '/locutor.png'},
          {id: 1, title: 'título BLS BLAtres', source:'/ilustra_tipo.jpg'},
          {id:2, title: 'título JJFJ cuatro', source: '/locutor.png'}
        ]
      }
    }
}
</script>
