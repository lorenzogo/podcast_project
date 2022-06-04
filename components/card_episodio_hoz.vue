<!-- Card episodio podcast -->
<template>
    <article class="card-episodio">
        <img class="ilustraEpisodio" :src= "source" alt="portada">
        <img class="puntos" src= "puntos.svg" alt="opciones">
        <div class="horizontal_segundo">
            <h3>{{ title }}</h3>
            <p>{{ exp }}</p>
        </div>
        <button class="playBoton"><img class="play" src= "play.svg" alt="iniciar"></button>
    </article>
</template>


<style lang="postcss">
.card-episodio {
    display: flex;
    flex-direction: column;
    width: fit-content;
    padding: 1em;
}



</style>
