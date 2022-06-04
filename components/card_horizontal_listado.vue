<!-- CARD HORIZONTAL LISTADO  -->
<template>
    <section>
        <h3>Actualidad</h3>
        <div class="card-horizontal-list">
            <card-horizontal
                v-for="(card, index) in cards"
                :key = "index"
                :title="card.title"
                :exp="card.exp"
                :source="card.source"/>
        </div>
    </section>

</template>


<script>
    export default {
        props: ['cards']
    }
</script>

<style lang="postcss">
  .card-horizontal-list {
    display: flex;
    flex-wrap: wrap;
    /* flex-direction: column; */
    /* width: fit-content; */
    padding: 1em;
    gap: 0.5em;
  }

</style>
