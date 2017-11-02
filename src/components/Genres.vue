<template>

    <div class="col-md-12">
      <app-genre v-for="genre in genres" :genre="genre"></app-genre>
    </div>

  </div>
</template>

<script>
import GenresView from './GenresView.vue'

export default {
  computed: {
      genres() {
      return this.$store.getters.genres;
      }
  },

  components: {
    appGenre: GenresView
  }
}


</script>

<style scoped>

</style>
