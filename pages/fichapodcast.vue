<!-- Ficha Podcast -->

<template>
  <div class="ficha">
    {{title}}
    <div class="flecha">
      <img src="/flecha.svg" alt="flecha hacia la izquierda"/>
    </div>

    <Portada :icons="icons" :name="name"/>
    <CardEpisodioHoz :title="tit" :exp="exp" :source="src"/>
  </div>
</template>

<script>
import Portada from "../components/portada.vue";
import CardEpisodioHoz from "../components/cardEpisodioHoz.vue";

  export default {
    name: "ficha_podcast",
    components: { Portada, CardEpisodioHoz },
    data () {
      return {
        name: "reproducir",
        title: "",
        icons: [
          {id:1, source:'/like.svg', accesible:'me gusta', anclaje:'suscribirme' },
          {id:2, source:'/guardar.svg', accesible:'guardar', anclaje:'guardar' },
          {id:2, source:'/compartir.svg', accesible:'compartir', anclaje:'compartir' }
        ],
         anclaje: "hola",
         tit: 'ejemplo',
         exp:'esta es la explicación',
         src: '/ellos_juegan.png'


      }
    },
    mounted() {
      console.log(this.$route.params)
        this.title = this.$route.params.cosa;
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
    align-items: center;
    flex-direction: column;
  }


</style>
