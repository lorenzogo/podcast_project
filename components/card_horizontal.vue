<!-- CARD HORIZONTAL  -->

<template>
    <article class="card-horizontal">
        <img class="ilustraHozPod" :src= "source" alt="portada">
        <img class="puntos" src= "puntos.svg" alt="opciones">
        <div class="horizontal_segundo">
            <h2>{{ title }}</h2>
            <p>{{ exp }}</p>
        </div>
        <button class="playBoton"><img class="play" src= "play.svg" alt="iniciar"></button>
    </article>
</template>

<script>
    export default {
        props: ['title','exp','source']
    }
</script>


<style lang="postcss">
  .card-horizontal {
    display: flex;
    align-items: center;
    height: 100px;
    width: 400px;
    background-color:#ffffff;
    border-radius: 0 100px 100px 0;
    box-shadow: 2px 2px 4px 0;
    margin-bottom: 0.8em;
    gap: 16px
  }

  .horizontal_segundo {
    display: flex;
    width: 60%;
    flex-direction: column;
  }

  .ilustraHozPod {
    height: 100px;
    border-radius: 0px;
  }

  .puntos {
    height: 30px;
  }

  .play {
    height: 50px;
    border-radius: 0;

  }

  .playBoton{
       margin-right: 0.5em;
  }
</style>

