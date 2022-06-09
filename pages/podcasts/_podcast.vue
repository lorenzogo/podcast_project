<!-- Ficha Podcast -->

<template>
  <div class="ficha">
    <nuxt-link to="/">
      <div class="flecha">
        <img src="/flecha.svg" alt="flecha hacia la izquierda"/>
      </div>
    </nuxt-link>
    <Portada :icons="icons" :name="name" :podcast="podcast" />
  </div>
</template>

<script>
import Portada from "../../components/portada.vue";

  export default {
    name: "ficha_podcast",
    components: { Portada },
    data () {
      return {
        name: "reproducir",
        podcast: "",
        icons: [
          {id:1, source:'/like.svg', accesible:'me gusta', anclaje:'hola' },
          {id:2, source:'/like.svg', accesible:'me gusta', anclaje:'que' },
          {id:2, source:'/like.svg', accesible:'me gusta', anclaje:'tal' }
        ],
         anclaje: "hola"

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
    align-items: center;
    flex-direction: column;
  }
</style>
