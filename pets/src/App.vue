<template>
  <div class="vue-tempalte">
    <!-- Navigation -->
    <nav>
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/Login">Login</router-link>
    </nav>

    <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="col-10">
        <ul class="nav navbar-nav flex-row float-end">
          <li class="nav-item m-3">
            <router-link class="nav-link" to="/login">Sign in</router-link>
          </li>
          <li class="nav-item m-3">
            <router-link class="btn btn-outline-primary" to="/home">Sign up</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <!-- Main -->
    <div class="App">
      <div class="vertical-center">
        <div class="inner-block">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<style >
</style>
