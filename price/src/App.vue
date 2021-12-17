<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Home from "./components/Home.vue";
import Db from "./components/Db.vue";

export default {
  name: "App",
  components: { Db, Home },
};
</script>


<template>
  <div class="container-fluid">

    <div class="row">
      <nav
      id="sidebarMenu"
      class="col-2 border-right bg-light"
    >
      <div class="position-sticky">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <span data-feather="home"></span>
              <router-link class="nav-link" to="/">Home</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#db">
              <span data-feather="home"></span>
              <router-link class="nav-link" to="/db">database</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#register">
              <span data-feather="home"></span>
              <router-link class="nav-link" to="/register">register</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#signin">
              <span data-feather="home"></span>
              <router-link class="nav-link" to="/signin">SignIn</router-link>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <main class="col">
        <div class="d-flex flex-wrap flex-md-nowrap align-items-center">
  <router-view />
        </div>
  </main>
    </div>
    
    

  </div>
  </template>


<style>
#app {
  font-family: futura, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

h2 {
  color: black;
}

body {
  background: grey;
}
</style>
