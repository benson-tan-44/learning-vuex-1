<template>

    <div v-if="isGenreSelected" class="col-md-12">
      
      <app-movie v-if="!showSingle" v-for="movie in movies" :movie="movie"></app-movie>
      <app-single v-if="showSingle"></app-single>

    </div>

  </div>
</template>

<script>
import MoviesView from './MoviesView.vue'
import SingleMovie from './MovieSingle.vue'

export default {
  computed: {

      isGenreSelected() {
        return this.$store.getters.isGenreSelected;
      },

      movies() {
        return this.$store.getters.movies;
      },

      showSingle() {
        return this.$store.getters.showSingle;
      }


  },

  components: {
    appMovie: MoviesView,
    appSingle: SingleMovie
  },

  methods: {
    backGenres() {
      this.$store.dispatch('backGenres');
    }
  }
}


</script>

<style scoped>
.btn-primary{
  font-size:22px;
}
</style>
