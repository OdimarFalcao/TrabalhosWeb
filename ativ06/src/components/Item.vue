<script setup>
defineProps({
  nome: String,
  icone: String,
  path: String
})

</script>

<template>
<li class="navegacaof row d-flex justify-content-center align-self-center">
  <i :class= "icone + ' p-1 d-flex col-5 justify-content-center justify-content-md-center justify-content-lg-end align-self-center'"></i>
  <router-link :to="path">
        <p class="d-none d-sm-none d-md-none d-lg-block d-xl-block p-1 col">{{nome}}</p>
  </router-link>
</li>
</template>

<style>
/* procurar css e colocar aq */
</style>