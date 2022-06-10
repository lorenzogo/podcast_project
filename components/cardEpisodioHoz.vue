<!-- Card episodio podcast  -->
<template>

    <article class="card-episodio">
          <img class="ilustra-epi" src="/1931.png" alt="portada">
          <img class="puntos" src= "/puntos.svg" alt="opciones">
          <div class="horizontal_segundo hEp">
              <h3>{{title}}</h3>
              <p>{{exp}}</p>
          </div>
          <button
          class="playBoton"
          @click="toggle"
          ><img class="play" src= "/play.svg" alt="iniciar"></button>
    </article>

</template>

<script>
    import { mapMutations } from 'vuex'
    export default {
        props: ['title','exp','src'],
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
    align-items: center;
    justify-content: flex-start;
    height: 100px;
    width: 100%;
    background-color:#ffffff;
    margin-bottom: 1em;
    padding: 0.2em;
    margin-left: 1em;
    gap: 16px
  }

  .ilustra-epi {
    height: 90%;
    border-radius: 0px;
  }

.hEp {
  width:fit-content;
}



</style>

