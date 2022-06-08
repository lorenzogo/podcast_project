<!--CARD HORIZONTAL-->

<template>
<div>
  <article class="card-horizontal">
        <img class="ilustraHozPod" :src= "source" alt="portada">
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

  .card-horizontal {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: flex-end;
    height: 100px;
    width: 380px;
    background-color:#ffffff;
    border-radius: 100px;
    margin-bottom: 1em;
    padding-left: 5em;
    margin-left: 1em;
    gap: 16px



  }

  .horizontal_segundo {
    display: flex;
    width: 60%;
    flex-direction: column;
  }

  .ilustraHozPod {
    height: 115px;
    border-radius: 0px;
    align-self: flex-end;
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: -6px

  }

  .puntos {
    height: 32px;
  }

  .play {
    height: 32px;
    margin-right: 1em;
    border-radius: 0;

  }

  .playBoton{
       margin-right: 0.5em;
  }


</style>

