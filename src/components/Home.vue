<template>

    <div class="col-md-12">
      <h1>Home Component testing</h1>

      <div class="test"></div>

    </div>

  </div>
</template>

<script>

export default {

computed: {
  result() {
  return this.$store.getters.result;
}
}

created() {
  this.$store.dispatch('initAPI');
}



}

</script>

<style scoped>
h3{
  font-family: 'Verdana';
}
</style>
