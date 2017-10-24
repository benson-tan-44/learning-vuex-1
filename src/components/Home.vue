<template>

    <div class="col-md-12">
      <h1>Home Component testing</h1>

      <div v-for="genre in genres" class="test">
        {{genre}}
      </div>

  <select v-on:change="changeGenres" v-model="selectedGenre">
    <option :value="null">None</option>
    <option value="28">Action</option>
  </select>

  <div>
    {{selectedGenre}}
    {{userGenre}}

  </div>

    </div>

  </div>

</template>

<script>

export default {

data() {
  return {
    selectedGenre: null
  }
},

computed: {
  genres() {
  return this.$store.getters.genres;
  },
  userGenre() {
    return this.$store.getters.userGenre;
  }

},

methods: {
  changeGenres() {
    this.$store.dispatch('changeGenres', this.selectedGenre );
  }
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
</style>
