<template>
  <div>
    <app-header></app-header>
      <br />
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    appHeader: Header
  },
  created() {
  }
}
</script>

<style>
.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}


@keyframes slide-in {
from {
  transform: translateY(-30px);
  opacity:0;
}

to{
  transform:translateY(0);
  opacity:1
}
}

@keyframes slide-out {
from {
  transform: translateY(0);
  opacity:1;
}

to{
  transform:translateY(-30px);
  opacity:0;
}
}


.textpad{
  padding-top:10px;
}

body{
  font-family: 'Ubuntu', sans-serif;
background:black;
color:white;
}

.panel-title {
font-size:20px;
}

.panel-body{
  font-size:16px;
}

.btn{
  font-family: 'Dosis', sans-serif;
  text-transform:uppercase;
}

</style>
