<!-- REPRODUCTOR DE AUDIO -->

<template>
  <article class="player verde">
    <div class="player_info">
      <img class="min" src="/ilustra_tipo.jpg" alt="ilustra">
      <img class="puntos" src= "puntos_negro.svg" alt="opciones">
      <div class="horizontal_segundo">
          <h3>Título</h3>
          <p>Esta es la descripción del podcast</p>
      </div>
      <button @click="playpause">
        <MIconPlay v-show="!playing"/>
        <MIconPause v-show="playing"/>
        <img class="play" src= "play_negro.svg" alt="iniciar">
    </button>
    </div>
  </article>
</template>


<script>
  import {Howl, Howler} from 'howler'

  export default {
    props: ['post'],
    data () {
      return {
        sound: '',
      }
    },
    mounted () {
      this.sound = new Howl ({
        src: ['/audios/ejemplo.mp3']
      })
    },
    methods: {
      playpause () {if(this.sound.playing()){this.sound.pause();this.playing=false;}
         else{this.sound.play();
         this.playing = true;}
      }
    }

  }


</script>


<style lang="postcss">
  .player {
    display: flex;
    justify-content: flex-start;
    /* display: none; */
    width: 100%;
    height: 100px;
    padding: 1em;
    gap: 1em;
  }

  .player_info {
    display: flex;
    color: black;
    width: fit-content;
    min-width: 200px;
    gap: 1em;
    justify-content: space-between;
    align-items: center;
  }
  .min {
    height: 70px;
    border-radius: 0.3em;
  }

</style>
