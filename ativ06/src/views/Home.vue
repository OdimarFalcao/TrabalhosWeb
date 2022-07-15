<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Item from '../components/Item.vue'
import Formulario from '../components/Formulario.vue'
import Tzeet from '../components/Tzeet.vue'
import Seguidor from '../components/Seguidor.vue'
</script>

<template>
  <div class="container-fluid ">
        <div class="row">
            <div class="col-xl-2 col-sm-3 col-lg-3 col-md-3 col-md-3 border">
                <div id="navegacao">
                    <ul id="navegacao">
                        <li class="p-3 d-flex justify-content-center align-self-left">
                            <img src="./assets/tiziu.png" alt="">
                        </li>

                        <Item nome="Home" icone="bi bi-house-door" path="/"/>
                        <Item nome="Explore" icone="bi bi-hash" path="/"/>
                        <Item nome="Notifications" icone="bi bi-bell" path="/"/>
                        <Item nome="Messages" icone="bi bi-envelope" path="/"/>
                        <Item nome="Profile" icone="bi bi-person-fill" path="/profile"/>
                        <Item nome="More" icone="bi bi-three-dots" path="/"/>

                        <li class="row-4 d-flex justify-content-center align-self-center">
                            <button id="tzeet" class=" w-auto btn-custon d-block d-sm-block d-md-block d-lg-block d-xl-block btn-primary justify-content-center align-self-center">
                    
                                <i class="bi bi-send-plus p-1 d-flex justify-content-center d-block d-sm-block
                                d-md-block d-lg-none d-xl-none align-self-center btn-custon"></i>

                                <p class="d-none d-sm-none d-md-none d-lg-block d-xl-block">Tweet</p>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="col-sm-8 col-md-6 col-lg-6 col-xl-7 border">
              <h3>Home</h3>
              <div class="row">
                    <div id="image" class="col-xxl-1 col-xl-2 col-lg-2 col-md-3 col-sm-3 d-flex justify-content-end align-items-center pb-5">
                        <img src="./assets/pablo.jpg" class="rounded-circle" >
                    </div>
                    <div class="col-xxl col-xl col-md col-sm d-flex justify-content-end aling-self-end flex-column mt-5">

                        <div class="modal" id="modal" tabindex="-1">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title">Tzeet</h5>
                                        <button type="button" id="fechar" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <Formulario />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="d-flex" style="flex-direction: column; padding: 5px">
                           <Formulario />
                        </div>

                    </div>
              </div>
                <!--HOME SECTION-->

              <Tzeet 
                nome="Falcão" 
                image="pablo.jpg"
                nickname="Dumbof14" 
                data="17/04/2022" 
                texto="Se o Real não ganhar essa champions eu sou uma kombi 4 portas"
                comentarios="20"
                retweet="700"
                like="700"
              />

              <Tzeet 
                nome="SãoPaulo" 
                image="pablo.jpg"
                nickname="spfc" 
                data="13/04/2022" 
                texto="Ôôôô Toca no Calleri que é gooolll!"
                comentarios="24220"
                retweet="7000"
                like="4300"
              />
            </div>

            <div class=" col-sm-10 col-md-3 col-xl-3 col-lg-3 border p-3">
                <button class="col-12 btn-custon d-flex" style="background: rgba(239, 243, 244);">
                    <i class="bi bi-search p-3 btn-custon"></i>
                    <p class="p-3">Username</p>
                </button>
                <br>

                <div class="explorar col-12 d-flex ">
                    <div class="p-3 row">
                        <div class="p-1 col-12 d-flex justify-content-center align-self-center ">
                            <h3 class="justify-content-center align-self-cente">Talvez você curta</h3>
                        </div>

                        <Seguidor nome="Falção"/>
                        <Seguidor nome="Falção"/>

                        <a class="p-2 col d-flex align-self-left" href="#">Mostrar Mais..</a>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<style>
body {
    height: 100vh;
    font-family: Helvetica !important;
}

p {
    margin: 0 !important;
    padding: 0;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

.reply:hover {
    background-color: rgba(29, 155, 240);
    border-radius: 40px;
}

.multimedia:hover {
    background-color: rgba(29, 155, 240);
    border-radius: 40px;
}

#navegacao {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.navegacaof {
    padding: 10px;
}

.navegacaof:hover {
    background-color: rgba(15, 25, 20, 0.1);
    border-radius: 20px;
    color: rgb(15, 20, 25);
}

.navegacaof a {
    width: 100%;
    color: rgb(15, 20, 25);
    text-decoration: none;
}

.btn-custon {
    /* padding: 10px 50px; */
    border-radius: 50px;
    border: none;
    /* width: 100%; */
}

.btn-custon p {
    padding: 10px 40px;
    /* width: 100%; */
}

.btn-custon:hover {
    background-color: rgba(15, 25, 20, 0.1);
    border-radius: 20px;
    color: rgb(15, 20, 25);
}

#image {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
}

.name {
    color: rgb(15, 20, 25);
}

.nickName {
    color: rgb(83, 100, 113);
}

#descricao {
    color: rgb(15, 20, 25);
}

#estatiticas {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    gap: 23px;
    border: gray;
}

.estatiticasf a {
    color: rgb(83, 100, 113);
    text-decoration: none;
    border: gray;
}

.estatiticasf a strong {
    color: rgb(15, 20, 25);
    font-weight: bold;
}

.textarea {
    border: none;
}

.textarea:focus {
    border: none;
    outline: none;
}

.explorar {
    list-style-type: none;
    margin: 0;
    padding: 0;
    border: gray;
}

.barraDeAtividade:hover {
    background-color: rgba(15, 25, 20, 0.1);
    padding: 10px;
    color: rgb(15, 20, 25);
}

.tweet {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
}

.tweet:hover {
    background-color: rgba(249, 24, 128, 0.1);
}

.tweetData {
    color: rgb(83, 100, 113);
}

.tweetTexto {
    color: rgb(15, 20, 25);
}

.acoesf:hover {
    background-color: rgba(15, 25, 20, 0.1);
    border-radius: 20px;
    color: rgb(15, 20, 25);
}

#acoes {
    width: 100%;
    display: flex;
    flex-direction: row;
    list-style-type: none;
    align-items: center;
    justify-content: center;
}

#textarea {
    resize: none;
    display: inline;
}

#contador {
    display: inline;
}

#buttonPost {
    display: block;
}

#acoes li a {
    color: rgb(83, 100, 113);
    padding: 5px;
    border-radius: 10px;
    list-style-type: none;
    text-decoration: none;
}

#comentarios_share:hover i {
    background: rgba(29, 155, 240, 0.1);
    border-radius: 20px;
}

#comentarios_share:hover a {
    color: rgba(29, 155, 240, 1);
}

#retweet:hover a {
    color: rgba(0, 186, 124, 1);
}

#retweet:hover i {
    background: rgba(0, 186, 124, 0.1);
    border-radius: 20px;
}

#like:hover i {
    background: rgba(249, 24, 128, 0.1);
    border-radius: 10px;
}

#like:hover a {
    color: rgba(249, 24, 128, 1);
}

.explorar {
    display: flex;
    background: rgba(239, 243, 244);
    flex-direction: row;
    align-items: center;
    gap: 5px;
    border-radius: 10px;
}

</style>