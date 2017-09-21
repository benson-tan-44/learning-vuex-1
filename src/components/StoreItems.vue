<template>

    <div class="col-md-12">
      <app-item v-for="item in items" :item="item"></app-item>
    </div>

  </div>
</template>

<script>
import StoreItem from './StoreItem.vue'

export default {
  computed: {
    items() {
      return this.$store.getters.items;
    }
  },
  components: {
    appItem: StoreItem
  }
}


</script>

<style scoped>

</style>
