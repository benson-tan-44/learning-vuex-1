<template>
  <div class="col-sm-12 col-md-12">

    <h2 class="btn btn-primary" v-on:click="backList">Back to list</h2>
        <h3>


          <img :src="'https://image.tmdb.org/t/p/w500/' + this.singleMovie.movie.poster_path" />
        </h3>




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
