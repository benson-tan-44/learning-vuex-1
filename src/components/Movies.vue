<template>

    <div v-if="isGenreSelected" class="col-md-12">

      <app-movie v-for="movie in movies" :movie="movie"></app-movie>

    </div>

  </div>
</template>

<script>
import MoviesView from './MoviesView.vue'

export default {
  computed: {

      isGenreSelected() {
        return this.$store.getters.isGenreSelected;
      }
  },

  components: {
    appMovie: MoviesView
  }
}


</script>

<style scoped>

</style>
