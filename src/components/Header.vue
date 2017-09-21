<template>
  <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <router-link class="navbar-brand" to="/">Game Menu</router-link>
    </div>

    <div class="navbar-collapse">
      <ul class="nav navbar-nav">
        <router-link to="/inventory" activeClass="active" tag="li"><a>Inventory</a></router-link>
        <router-link to="/store" activeClass="active" tag="li"><a>Store</a></router-link>
        <router-link to="/party" activeClass="active" tag="li"><a>Party</a></router-link>
        <li :class="{open: isDropdownOpen}" class="dropdown">
          <a
          href="#"
          class="dropdown-toggle"
          data-toggle="dropdown"
          role="button"
          aria-haspopup="true"
          @click="isDropdownOpen = !isDropdownOpen"

          aria-expanded="false">Save & Load <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a @click="saveGame" href="#">Save Game</a></li>
            <li><a @click="loadGame" href="#">Load Game</a></li>
          </ul>
          </li>

      </ul>


      <ul class="nav navbar-nav navbar-right">
        <li>Funds: <span class="funds">{{funds}}</span> </li>


      </ul>


    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  data(){
    return {
      isDropdownOpen: false
    }
  },
  computed: {
    ...mapGetters({
      funds: 'funds'
    })
  },
  methods: {
    saveGame(){
      const data = {
        funds: this.$store.getters.funds,
        items: this.$store.getters.items,
        party: this.$store.getters.party
      };
      this.$http.put('data.json', data);
      this.isDropdownOpen = false;
    },
    loadGame() {
      this.$store.dispatch('loadData');
      this.isDropdownOpen = false;

    }
  }

}

</script>

<style scoped>
.funds{
  color:white;
}

.navbar-default{
  background-color: #28aae1;
   border-color: #28aae1;
}

.navbar-default .navbar-brand
{
  color:black;
  text-transform:uppercase;
  font-size:32px;
}

.navbar-default .navbar-nav > li > a {
  color:white;
  font-size:18px;
}

.navbar {
  border-radius:0px;
}

.navbar-text {
color:black;
font-size:14px;
}

.navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:focus, .navbar-default .navbar-nav > .active > a:hover {
background:#20d6fa;
color:black;
}

.navbar-default .navbar-nav > .open > a, .navbar-default .navbar-nav > .open > a:focus, .navbar-default .navbar-nav > .open > a:hover {
  background:#20d6fa;
  color:black;

}


.navbar-right {
    float: right;
    font-size: 18px;
    margin-right: -15px;
    padding-top:10px;
    color:black;
}

.dropdown-menu > li > a {
font-size:16px;

}



</style>
