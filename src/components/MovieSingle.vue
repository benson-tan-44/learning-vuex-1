<template>
  <div class="col-sm-12 col-md-12">

    <h2 class="btn btn-primary" v-on:click="backList">Back to list</h2>
    <hr/>





          <div class="col-md-3">
          <img class="img-responsive" :src="'https://image.tmdb.org/t/p/w500/' + this.singleMovie.movie.poster_path" />
          </div>

          <div class="col-md-9">
            <h2>{{singleMovie.movie.overview}} </h2>

              <h3>Initial Release Date: {{singleMovie.movie.release_date}}</h3>

              <h4>Vote Count: {{singleMovie.movie.vote_count}} | Rating:  {{singleMovie.movie.vote_average}}</h4>
          </div>






  </div>

</template>

<script>
export default {


  computed: {
    singleMovie() {
      return this.$store.getters.singleMovie;
    },
    apiKey() {
      return this.$store.getters.apiKey;
    }
  },
  methods: {
    backList() {
      this.$store.dispatch('backList');
    },



  }


}




</script>

<style scoped>
.panel{
  height:200px;
}

.btn-primary{
  font-size:22px;
}

</style>
