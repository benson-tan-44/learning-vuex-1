<template>

    <div class="col-md-12">


      <app-genres></app-genres>
      <app-movies></app-movies>

    </div>

  </div>

</template>

<script>

import Genres from './Genres.vue'
import Movies from './Movies.vue'

export default {

data() {
  return {
    selectedGenre: null
  }
},

computed: {
  userGenre() {
    return this.$store.getters.userGenre;
  }
},

methods: {
  changeGenres() {
    this.$store.dispatch('changeGenres', this.selectedGenre );
  },


},

components: {
  appGenres: Genres,
  appMovies: Movies
},


created() {
this.$store.dispatch('initGenres');
}



}

</script>

<style scoped>
h3{
  font-family: 'Verdana';
}
h2{
  font-family:'Verdana';
  font-weight:300;
  text-transform:uppercase;
  font-size:22px;
}



</style>
