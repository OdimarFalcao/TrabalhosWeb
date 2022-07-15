<script setup>
defineProps({
  nome: String,
})

</script>

<template>
 <div class="p-1 col-4 d-flex justify-content-center align-self-center">
    <img class="rounded-circle" src="../assets/pablo.jpg" alt="">
  </div>
  <div class="p-1 col-4 d-flex justify-content-center align-self-center">
    <a href="#">{{nome}}</a>
  </div>
  <div class="p-1 col-4 d-flex justify-content-center align-self-center">
    <button class="btn btn-primary">Seguir</button>
  </div>
</template>

<style>
/* procurar css e colocar aq */
</style>












