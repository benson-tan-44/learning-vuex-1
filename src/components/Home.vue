<template>

    <div class="col-md-12">
      <h1>Select a movie genre!</h1>

      <div v-for="genre in genres" class="test">
        {{genre.name}}
      </div>

<!--
  <select v-on:change="changeGenres" v-model="selectedGenre">
    <option :value="null">None</option>
    <option value="28">Action</option>
  </select>
-->


  <div v-for="movie in movies" class="test2">
    {{movie}}
  </div>

  <!--<button v-on:click="getMovies">Go!</button>-->

    </div>

  </div>

</template>

<script>

import Genres from './Genres.vue'

export default {

data() {
  return {
    selectedGenre: null
  }
},

computed: {
  userGenre() {
    return this.$store.getters.userGenre;
  },
  movies() {
    return this.$store.getters.movies;
  }

},

methods: {
  changeGenres() {
    this.$store.dispatch('changeGenres', this.selectedGenre );
  },
  getMovies() {
    this.$store.dispatch('getMovies');
  }

},

components: {
  appGenres: GenresView
}


created() {
this.$store.dispatch('initGenres');
}



}

</script>

<style scoped>
h3{
  font-family: 'Verdana';
}
</style>
