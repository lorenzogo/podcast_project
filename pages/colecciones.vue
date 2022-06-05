<template>
  <section>
    <Boton_small class="verde" :name_small="name_small"/>
    <Boton_simple class="verde" :name="name"/>
    <h1>Sección de Colecciones</h1>
    <card-episodio-hoz/>

    </section>
</template>



<script>
  import card_episodio_hoz from "../components/card_episodio_hoz.vue";
  import Boton_simple from "../components/boton_simple.vue";
  import Boton_small from "../components/boton_small.vue";
  export default {
        name: "coleccionesPage",
        components: { card_episodio_hoz, Boton_simple, Boton_small },
        data () {
          return {
            name: 'botonaco',
            name_small: 'peque'
          }
        }
    }



</script>



