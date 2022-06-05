<template>
  <div>
    <section class="contenedor">
      <h2 class="gris_t">¡Bienvenido!</h2>
      <galeria-destacados :seccion="seccion01" :cards="cards1"/>
      <card-horizontal-listado class="arriba_medio" :seccionHoz="seccionHoz01" :cards="cardsHoz1"/>
      <galeria-destacados :seccion="seccion02" :cards="cards2"/>
      <galeria-destacados :seccion="seccion03" :cards="cards3"/>
      <galeria-destacados :seccion="seccion04" :cards="cards4"/>
    </section>
    <div class="repro"><reproductor :titulo_rep="titulo_rep" :descripcion_rep="descripcion_rep"/></div>
  </div>
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
        seccion01: 'Destacados de esta semana',
        cards1: [
          {id:1, title: 'Radioestadio', des: 'Vive todo el deporte del fin de semana.', source:'/radio_estadio.png'},
          {id:2, title: 'Salud financiera', des: 'El podcast para gestionar mejor tus finanzas', source: '/salud_financiera.png'},
          {id:3, title: 'Un alto en el camino', des: 'Cosas de viajes y mucho más', source:'/alto_camino.png'},
          {id:4, title: 'La cultureta', des: 'Todos los temas de actualidad', source: '/ilustra_tipo.jpg'},
          {id:5, title: '1931', des: 'Una serie documental de Juan Carlos Alsina', source: '/1931.png'}
        ],
        seccion02: 'Cultura y humor',
        cards2: [
          {id:1, title: 'After Hours', des: 'Disfruta de las charlas entre Gemma Ruiz e Isa Blanco', source:'/after_hours.png'},
          {id:2, title: 'Latitud Cero', des: 'Curiosidades gastronómicas de los países del mundo', source: '/latitud_cero.png'},
          {id:3, title: 'La cultureta', des: 'Todos los temas de actualidad', source:'/ilustra_tipo.jpg'},
          {id:4, title: 'La parroquia del monaguillo', des: 'El nuevo podcast de humor', source: '/monaguillo.png'},
          {id:4, title: '¿Qué fue de Brian?', des: 'Una ficción sonora de Juan Carlos Alsina', source: '/bryan.png'}
        ],
        seccionHoz01: 'Actualidad',
        cardsHoz1: [
          {id:1, title: 'Julia en la Onda', exp: 'Julia Otero te trae toda la información y el humor de las tardes de Onda Cero', source:'/julia.png'},
          {id:2, title: 'No son horas', exp: 'El programa para los noctámbulos presentado por José Luis Salas', source: '/locutor_3.png'},
          {id:3, title: 'Noticias de mediodia', exp: 'Toda la información con Elena Gijón', source:'/locutor_2.png'},
          {id:4, title: 'Más de uno', exp: 'Carlos Alsina nos trae toda la información en las mañanas', source: '/locutor.png'},
          {id:5, title: 'Un alto en el camino', exp: 'Toda la información con Elena Gijón', source:'/locutor_4.png'},
          {id:6, title: 'La rosa de los vientos', exp: 'Historias y misterio. Con Bruno Cardeñosa y Silvia Casasola', source: '/locutor_5.png'}
        ],
        seccion03: 'Momentos radiofónicos',
        cards3: [
          {id:1, title: 'No son horas', des: 'Actualidad con José Luis Salas', source:'/locutor_3.png'},
          {id:2, title: 'Pares y nones', des: 'Innovación y otras cosas con Carlos Lamelo', source: '/paresynones.png'},
          {id:3, title: 'La rosa de los vientos', des: 'Con Bruno Cardeñosa y Silvia Casasola', source:'/rosa_vientos.png'},
          {id:4, title: 'Radios estadio', des: 'Vive todo el deporte del fin de semana.', source:'radio_estadio.png'},
          {id:4, title: 'La parroquia del monaguillo', des: 'El nuevo podcast de humor', source: '/monaguillo.png'}
        ],
        seccion04: 'Lo más escuchado',
        cards4: [
          {id:1, title: 'Onda fútbol', des: 'Hablamos de fútbol con José Luis de la Morena', source:'/ondafutbol.png'},
          {id:2, title: 'Comunica A3', des: 'Tu cita con el mundo audiovisual.', source: '/A3_comunicacion.png'},
          {id:3, title: 'Ellas juegan', des: 'El podcast en el que hablamos de fútbol en femenino', source:'/ellos_juegan.png'},
          {id:4, title: 'Latitud cero', des: 'Curiosidades gastronómicas de los países del mundo', source:'latitud_cero.png'},
          {id:4, title: '1931', des: 'Una serie documental de Juan Carlos Alsina.', source: '/1931.png'}
        ],
        titulo_rep: 'título',
        descripcion_rep: 'descripción'
      }
    }
}
</script>


<style lang="postcss">
  .contenedor {
    padding: 1em;
  }

  .repro {
    position: sticky;
    bottom: 0;
    z-index: 1;
  }

</style>
