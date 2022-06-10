<!-- Portada Podcast -->

<template>
  <article class="portadaPodcast">
    <div class="port_uno">
      <img class="portEpisodio" :src="podcast.source" alt="Portada La Cultureta">
      <div class="port_dos">
        <div class="port_text">
          <h1 class="nopadding abajo_medio">{{podcast.title}}</h1>
          <p>{{podcast.des}}</p>
        </div>
        <div class="boton_compuesto">
          <boton-simple class="simple verde" :name="name"/>
          <boton-redondo class="redondo verde"/>
        </div>
        <div class="menu_compartir">
          <boton-compartir
            v-for="(icon, index) in icons"
            :key = "index"
            :src="icon.source"
            :alt="icon.accesible"
            :anclaje="icon.anclaje"
          />
        </div>
      </div>
    </div>

  </article>
</template>

<script>
import Boton_compartir from './BotonCompartir.vue'
export default {
    props: ['name','icons', 'podcast'],
    components: { Boton_compartir }
}


</script>

<style lang="postcss">

.portadaPodcast {
width: 800px;
/* background-color: yellow; */
}

.port_uno {
  display: flex;
  margin: 1em;
  width: 100%;

}

.portEpisodio {
  object-fit: contain;
  height: auto;
  width: 30%;
}

.port_dos {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin-left: 3em;
  width: 70%;
  /* background-color: aqua; */

}

.port_text {
  text-align: left;

}

.boton_compuesto {
  display:flex;
  align-items: center;
  justify-content: flex-start;
  width: auto;
  padding: 0.4em;
  margin-top: 1em;

}

.simple {
  margin:0;
}

.redondo {
  margin:0;
}

.menu_compartir {
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 1em;
  padding:  1em 2em 0 2em;
  /* background-color: red; */
}
</style>




