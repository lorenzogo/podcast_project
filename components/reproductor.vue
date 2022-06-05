<!-- REPRODUCTOR DE AUDIO -->

<template>
  <article class="player verde">
    <div class="player_info">
      <img class="min" src="/ilustra_tipo.jpg" alt="ilustra">
      <div class="submenu_rep">
        <img class="puntos" src= "puntos_negro.svg" alt="opciones" @click="panelActive = !panelActive">
        <div class="modal_rep" v-show="panelActive">
            <boton_small class="option blanco"
              v-for="(boton_small, index) in name_small"
              :key="index"
              :name_small="boton_small.name"/>
        </div>
      </div>
      <div class="horizontal_segundo">
          <h3>{{titulo_rep}}</h3>
          <p>{{descripcion_rep}}</p>
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
import Boton_small from './boton_small.vue';

  export default {
    props: ["titulo_rep", "descripcion_rep"],
    data() {
        return {
            sound: "",
            name_small: [
              {id:1, name:'guardar'},
              {id:2, name:'eliminar'},
              {id:3, name:'compartir'}
            ],
            panelActive: false
        };
    },
    mounted() {
        this.sound = new Howl({
            src: ["/audios/ejemplo.mp3"]
        });
    },
    methods: {
        playpause() {
            if (this.sound.playing()) {
                this.sound.pause();
                this.playing = false;
            }
            else {
                this.sound.play();
                this.playing = true;
            }
        }
    },
    components: { Boton_small }
}
</script>


<style lang="postcss">
  .player {
    display: flex;
    justify-content: flex-start;
    /* display: none; */
    width: 100%;
    height: 110px;
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

  .submenu_rep {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .modal_rep {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    gap: 0.2em;
    margin: 0.5em;

  }

  /* .option {
    border-radius: 10px;
    height: 16px;
    font-size: 0.9em;
  } */
</style>
