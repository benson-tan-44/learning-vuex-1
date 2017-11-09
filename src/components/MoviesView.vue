<template>
  <div class="col-sm-12 col-md-12">


        <h3 v-on:click="showSingleSource({movie})" class="btn btn-primary">  <strong>{{movie.title}}</strong>     </h3>






        <hr />



  </div>

</template>

<script>
export default {
  computed: {
    showSingle() {
      return this.$store.getters.showSingle;
    }
  },
  props:['movie'],
  methods: {
    showSingleSource(movieobject) {
      this.$store.dispatch('singleSelected', movieobject);
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
