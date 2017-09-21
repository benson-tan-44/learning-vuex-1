<template>

    <div class="col-md-12">
      <app-members v-for="part in party" :part="part"></app-members>
    </div>

  </div>
</template>

<script>
import PartyMembers from './PartyMembers.vue'

export default {
  computed: {
    party() {
      return this.$store.getters.party;
    }
  },
  components: {
    appMembers: PartyMembers
  }
}


</script>

<style scoped>

</style>
