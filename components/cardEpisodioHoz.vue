<!-- Card episodio podcast -->
<template>
  <div>
    <article class="card-episodio">
          <img class="ilustra-epi" :src= "source" alt="portada">
          <img class="puntos" src= "puntos.svg" alt="opciones">
          <div class="horizontal_segundo">
              <h3>{{ title }}</h3>
              <p>{{ exp }}</p>
          </div>
          <button
          class="playBoton"
          @click="toggle"
          ><img class="play" src= "play.svg" alt="iniciar"></button>
    </article>
  </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    export default {
        props: ['title','exp','source'],
        data() {
          return {
            showRep: false
          }
        },
        methods:{
          ...mapMutations([
            'toggle'
          ])
        }
    }
</script>


<style lang="postcss">

  .card-episodio {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: flex-end;
    height: 100px;
    width: 500px;
    background-color:#ffffff;
    margin-bottom: 1em;
    padding-left: 5em;
    margin-left: 1em;
    gap: 16px



  }

  .ilustra-epi {
    height: 90%;
    border-radius: 0px;


  }


</style>

