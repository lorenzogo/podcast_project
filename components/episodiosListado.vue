<!-- Lista de episodios -->
<template>
        <div class="card-ep-list">
            <cardEpisodioHoz
                v-for="(cardEpisodioHoz, index) in Epis"
                :key = "index"
                :title="cardEpisodioHoz.title"
                :exp="cardEpisodioHoz.exp"
                />
        </div>

</template>


<script>
    export default {
        props: ['Epis']
    }
</script>

<style lang="postcss">
.card-ep-list {
    display: flex;
    flex-direction: column;
    margin-top: 0.8em;
    width: 100%;
}



</style>
