<template>
  <div class="vue-tempalte">
    <!-- Navigation -->
    <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row">
      <div class="col-10">
        <ul class="nav navbar-nav flex-row float-end">
          <li class="nav-item m-3">
            <router-link class="nav-link" to="/login">Sign in</router-link>
          </li>
          <li class="nav-item m-3">
            <router-link class="btn btn-outline-primary" to="/cadastro">Sign up</router-link>
          </li>
        </ul>
      </div>
    </nav>
    
    <!-- Main -->
    <div class="App">
      <div class="vertical-center">
          <router-view/>
      </div>
    </div>
  </div>
</template>

<style >
</style>
