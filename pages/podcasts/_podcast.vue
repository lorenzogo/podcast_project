<!-- Ficha Podcast -->

<template>
  <div class="ficha">
    <nuxt-link to="/">
      <div class="flecha">
        <img src="/flecha.svg" alt="flecha hacia la izquierda"/>
      </div>
    </nuxt-link>
    <Portada :icons="icons" :name="name" :podcast="podcast" />
    <h3 class="izq_uno abajo_medio arriba_uno">Episodios</h3>
    <EpisodiosListado :Epis="Epis"/>

  </div>
</template>

<script>
import Portada from "../../components/portada.vue";
import CardEpisodioHoz from "../../components/cardEpisodioHoz.vue";
import EpisodiosListado from "../../components/episodiosListado.vue";

  export default {
    name: "ficha_podcast",
    components: { Portada, CardEpisodioHoz, EpisodiosListado },
    data () {
      return {
        name: "reproducir",
        podcast: "",
        icons: [
          {id:1, source:'/like.svg', accesible:'me gusta', anclaje:'suscribirme' },
          {id:2, source:'/guardar.svg', accesible:'me gusta', anclaje:'guardar' },
          {id:3, source:'/compartir.svg', accesible:'me gusta', anclaje:'compartir' }
        ],
         anclaje: "hola",
         Epis: [
          {id:'1', title:'Episodio uno', exp:'descripción del episodio'},
          {id:'1', title:'Episodio dos', exp:'descripción del episodio'},
          {id:'1', title:'Episodio tres', exp:'descripción del episodio'},
          {id:'1', title:'Episodio cuatro', exp:'descripción del episodio'}

         ]

      }
    },
    mounted() {
      console.log(this.$route.params)
        this.podcast = this.$route.params.podcast;
    }
}
</script>



<style lang="postcss">
  .flecha {
    padding: 1em;
    width: 100%;
    height:60px;
    text-align: left;

  }
  .ficha {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin: auto;
  }
</style>
