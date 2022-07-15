<script setup>
defineProps({
  nome: String,
  image: String,
  nickname: String,
  data: String,
  texto: String,
  comentarios: String,
  retweet: String,
  like: String,
})
</script>

<template>
   <div class="row border">
                    <div>
                        <div class="tweet">
                            <div>
                                <img class="rounded-circle" src="../assets/pablo.jpg">
                            </div>
                            <h3 class="name ">{{nome}}</h3>
                            <p class="nickName ">{{nickname}}</p>
                            <p class="tweetData ">{{data}}</p>
                        </div>
                        <p class="tweetTexto ">{{texto}}</p>

                        <ul class="col-3 d-flex acoesf" id="acoes">
                            <li class="col-2 d-flex justify-content-center align-self-center" id="comentarios_share">
                                <i class="bi bi-chat col-2 d-flex justify-content-center align-self-center"></i>
                                <a href="#">{{comentarios}}</a>
                            </li>
                            <li class="col-2 d-flex justify-content-center align-self-center" id="retweet">
                                <i class="bi bi-arrow-repeat col-2 d-flex justify-content-center align-self-center"></i>
                                <a href="#">{{retweet}}</a>
                            </li>
                            <li class="col-2 d-flex justify-content-center align-self-center" id="like">
                                <i class="bi bi-heart col-2 d-flex justify-content-center align-self-center"></i>
                                <a href="#">{{like}}</a>
                            </li>
                            <li class="col-2 d-flex justify-content-center align-self-center" id="comentarios_share">
                                <i class="bi bi-upload col-2 d-flex justify-content-center align-self-center"></i>
                            </li>
                        </ul>
                    </div>
                </div>
</template>

<style>
/* procurar css e colocar aq */
</style>