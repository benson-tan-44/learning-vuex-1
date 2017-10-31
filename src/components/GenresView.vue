<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">
          <strong>{{genre.name}}</strong>
        </h3>
      </div>
      <!--
      <div class="panel-body">
        {{item.desc}}
      </div>
    -->
    </div>
  </div>
</template>

<script>
export default {
  props:['genre']
}

</script>

<style scoped>
.panel{
  height:200px;
}
</style>
