<template>

    <div class="col-md-12">
      <app-inventory v-for="item in items" :item="item"></app-inventory>
    </div>

  </div>
</template>

<script>
import InventoryView from './InventoryView.vue'

export default {
  computed: {
    items() {
      return this.$store.getters.items;
    }
  },
  components: {
    appInventory: InventoryView
  }
}


</script>

<style scoped>

</style>
