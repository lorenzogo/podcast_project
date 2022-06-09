<!-- Portada Podcast -->

<template>
  <article>
    <div class="port_uno">
      <img :src="podcast.source" alt="Portada La Cultureta">
      <div class="port_dos">
        <div class="port_text">
          <h1 class="nopadding">{{podcast.title}}</h1>
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
.port_uno {
  display: flex;
  margin: 1em;

}

.port_dos {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin-left: 3em;
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
  width: 100%;
  justify-content: space-between;
  padding:  1em 2em 0 2em;
}
</style>




