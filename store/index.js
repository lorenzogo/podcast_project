export const state = () => ({
    headerTitle: "",
    isPlaying: false
})

export const mutations = {
    toggle(state) {
      state.isPlaying = !state.isPlaying
    }

}