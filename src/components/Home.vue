<template>

    <div class="col-md-12">


      <app-genres></app-genres>

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
  appGenres: Genres
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
  font-size:24px;
}



</style>
