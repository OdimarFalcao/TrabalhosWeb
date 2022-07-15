<script setup>
// defineProps({
//   nome: String,
//   icone: String
// })

</script>

<template>
 <div>
  <textarea class="col-12 d-flex textarea" name="textarea" id="textarea" cols="100" rows="1" placeholder="O que você está pensando?"></textarea>
  <div>
    <a class="col-12 reply" style="text-decoration: none;">
    <i class="bi bi-globe"></i> Everyone can reply</a>
  </div>
  <!-- ajeitar identação -->
  <div class="d-flex flex-row justify-content-between border-top">
                                    <ul class="d-flex flex-row">
                                        <li class=" multimedia d-flex justify-content-center align-self-center p-2">
                                            <i class="bi bi-image p-1"></i>
                                        </li>
                                        <li class="multimedia d-flex justify-content-center align-self-center p-2">
                                            <i class="bi bi-filetype-doc p-1"></i>
                                        </li>
                                        <li class=" multimedia d-flex justify-content-center align-self-center p-2">
                                            <i class="bi bi-emoji-smile p-1"></i>
                                        </li>
                                        <li class="multimedia d-flex justify-content-center align-self-center p-2">
                                            <i class="bi bi-bar-chart p-1"></i>
                                        </li>
                                        <li class="multimedia d-flex justify-content-center align-self-center p-2">
                                            <i class="bi bi-calendar-event p-1"></i>
                                        </li>
                                        <li class="multimedia d-flex justify-content-center align-self-center p-2">
                                            <i class="bi  bi-geo-alt-fill p-1"></i>
                                        </li>
                                    </ul>
                                    <div class="d-flex flex-row justify-content-between align-items-center">
                                        <p id="contador">0</p>
                                        <i class="bi bi-grip-vertical p-1"></i>
                                        <div class="d-flex justify-content-center align-self-center p-2">
                                            <i class="bi bi-plus-circle p-1"></i>
                                        </div>
                                        <button class="btn-custon p-2 btn-primary" id="buttonPost">Enviar</button>
                                    </div>
  </div>
</div>
</template>

<style>
/* procurar css e colocar aq */
</style>
