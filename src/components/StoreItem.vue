<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">
          <strong>{{item.name}}</strong> - Price: {{item.price}} - Owned: {{item.stock}}
        </h3>
      </div>
      <div class="panel-body">
        {{item.desc}}
        <div class="textpad">
        <button :disabled="noFunds" @click="buyItem" class="btn btn-success">{{noFunds ? 'Not enough money' : 'Buy'}}</button>
        <button :disabled="noQuantity" @click="sellItem" class="btn btn-success">{{noQuantity ? "You don't own any" : 'Sell'}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    noFunds() {
      return this.funds < this.item.price;
    },
    noQuantity() {
      return this.item.stock <= 0;
    }

  },
  props:['item'],
  methods: {
    buyItem(){
      const qinput = prompt('How many would you like to purchase?', "0");
      const quantity = parseInt(qinput);

      if(quantity * this.item.price > this.funds) {
        alert('Not enough money!');
      } else if(quantity == 0) {
        alert("You can't buy 0 items");
      } else if(isNaN(quantity)) {
        alert("Invalid. Please enter a number.");
      }
      else {

        if(Number.isInteger(quantity))
        {
          const order = {
            id: this.item.id,
            price: this.item.price,
            quantity: quantity
          };
          this.$store.dispatch('purchase', order);

        }
      }
    },
    sellItem(){
      const qinput = prompt('How many would you like to sell?', "0");
      const quantity = parseInt(qinput);

      if(quantity > this.item.stock) {
        alert("You can't oversell your stock...");
      } else if(quantity == 0 ) {
        alert("You can't sell 0 items.");
      } else if(isNaN(quantity)) {
        alert("Invalid. Please enter a number.");
      }
      else {

        if(Number.isInteger(quantity))
        {
          const order = {
            id: this.item.id,
            price: this.item.price,
            quantity: quantity
          };
          this.$store.dispatch('sell', order);

        }
      }
    }
  }
}

</script>

<style scoped>
.textpad{
  padding-top:10px;
}

.panel{
  height:200px;
}

</style>
