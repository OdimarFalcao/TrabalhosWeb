<template>
  <div class="vue-tempalte">
   <nav class="d-flex navbar shadow bg-white rounded flex-nowrap flex-row fixed-top">
      <div class="col-10">
        <ul class="nav navbar-nav flex-row ">
          <li class="nav-item m-3">
            <router-link class="nav-link" to="/perfil">Perfil</router-link>
          </li>
          <li class="nav-item m-3">
            <router-link class="nav-link" to="/home">Home</router-link>
          </li>
          <li class="nav-item m-3">
            <router-link class="nav-link" to="/help">Help</router-link>
          </li>
          <li class="nav-item m-3">
            <router-link class="nav-link" to="/login">Logout</router-link>
          </li>
        </ul>
      </div>
    </nav>    
    <section class="wrapper">
    <div class="container-fostrap">
        <div class="content">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-4">
                        <div class="card">
                            <a class="img-card" href="/">
                            <img src="https://www.vetquality.com.br/wp-content/uploads/2020/06/como-dar-banho-em-cachorro-em-casa.jpg" />
                          </a>
                            <div class="card-content">
                                <h4 class="card-title justify-content-center">
                                    Banho
                                </h4>
                                <p class="">
                                    Seu animal merece estar sempre limpinho e cheiroso 
                                </p>
                            </div>
                            <div class="card-read-more">
                                <a href="" class="btn btn-link btn-block">
                                    Reservar
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-4">
                        <div class="card">
                            <a class="img-card" href="">
                            <img src="https://t2.ea.ltmcdn.com/pt/posts/1/0/2/como_tosar_um_gato_em_casa_21201_paso_3_600.jpg" />
                          </a>
                            <div class="card-content">
                                <h4 class="card-title">
                                   Tosa
                                </h4>
                                <p class="">
                                  Seu bixinho tem que andar com o pelo na régua
                                </p>
                            </div>
                            <div class="card-read-more">
                                <a href="" class="btn btn-link btn-block">
                                    Reservar
                                </a>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    </div>
</section>

  </div>

</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
});
</script>

<style>@import url(https://fonts.googleapis.com/css?family=Roboto:400,100,900);

html,
body {
  -moz-box-sizing: border-box;
       box-sizing: border-box;
  height: 100%;
  width: 100%; 
  background: #FFF;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}
 
.wrapper {
  display: table;
  height: 100%;
  width: 100%;
}

.container-fostrap {
  display: table-cell;
  padding: 1em;
  text-align: center;
  vertical-align: middle;
}
.fostrap-logo {
  width: 100px;
  margin-bottom:15px
}
h1.heading {
  color: #fff;
  font-size: 1.15em;
  font-weight: 900;
  margin: 0 0 0.5em;
  color: #505050;
}
@media (min-width: 450px) {
  h1.heading {
    font-size: 3.55em;
  }
}
@media (min-width: 760px) {
  h1.heading {
    font-size: 3.05em;
  }
}
@media (min-width: 900px) {
  h1.heading {
    font-size: 3.25em;
    margin: 0 0 0.3em;
  }
} 
.card {
  display: block; 
    margin-bottom: 20px;
    line-height: 1.42857143;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12); 
    transition: box-shadow .25s; 
}
.card:hover {
  box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
}
.img-card {
  width: 100%;
  height:200px;
  border-top-left-radius:2px;
  border-top-right-radius:2px;
  display:block;
    overflow: hidden;
}
.img-card img{
  width: 100%;
  height: 200px;
  object-fit:cover; 
  transition: all .25s ease;
} 
.card-content {
  padding:15px;
  text-align:left;
}
.card-title {
  margin-top:0px;
  font-weight: 700;
  font-size: 1.65em;
}
.card-title a {
  color: #000;
  text-decoration: none !important;
}
.card-read-more {
  border-top: 1px solid #D4D4D4;
}
.card-read-more a {
  text-decoration: none !important;
  padding:10px;
  font-weight:600;
  text-transform: uppercase
}</style>