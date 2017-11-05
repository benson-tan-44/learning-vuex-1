<template>
  <div class="col-sm-3 col-md-2">

        <h3 v-on:click="selectGenre" class="btn btn-primary">
          <strong>{{genre.name}} </strong>

        </h3>
      </div>

</template>

<script>
export default {
  props:['genre'],

  methods: {
    selectGenre() {
      this.$store.dispatch('genreSelected', this.genre.id);
    }
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
