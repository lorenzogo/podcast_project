<!-- REPRODUCTOR DE AUDIO -->

<template>
  <article class="player">
    <div>
      <img class="min" src="/ilustra_tipo.jpg" alt="ilustra">
    </div>
    <button @click="playpause">
      <MIconPlay v-show="!playing"/>
      <MIconPause v-show="playing"/>
      {{ post }}
    </button>
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
    @apply bg-gray-400 text-gray-100 ;
    width: 100%;
    height: 100px;
    padding: 1em;
    gap: 1em;
  }
  .min {
    height: 60px;
  }

</style>
