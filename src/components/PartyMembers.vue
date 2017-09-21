<template>
  <div class="col-sm-6 col-md-6">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">
          <strong>{{part.name}}</strong>
        </h3>
      </div>
      <div class="panel-body">
        {{part.desc}}
        <div class="textpad"><button v-if="!edit" @click="edit = !edit" class="btn btn-primary">Edit Description</button></div>

        <div v-if="edit">
            <textarea v-model="inputDesc" type="text" />

            <div class="textpad">
              <button class="btn btn-success" @click="saveDesc">Confirm</button>
              <button class="btn btn-danger" @click="edit = !edit">Cancel</button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      edit: false,
      inputDesc: ''
    }
  },
  props:['part'],
  methods: {
    saveDesc() {
      if(this.inputDesc == '') {
          alert("You didn't enter anything");
        } else {
        this.edit = false;

        const member = {
          id: this.part.id,
          desc: this.inputDesc
        };

        this.$store.dispatch('initDesc', member);
      }
    }
  }

}



</script>

<style scoped>
textarea{
  overflow:hidden;
padding:10px;
width:100%;
height:150px;
font-size:14px;
display:block;
border:1px solid #ccc;
resize:vertical;
}
</style>
