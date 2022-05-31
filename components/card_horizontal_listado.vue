<!-- CARD HORIZONTAL LISTADO  -->
<template>
    <section>
        <h1>Actualidad</h1>
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
    flex-direction: column;
    /* background-color: red; */
    width: fit-content;
    padding: 1em;
  }

</style>
