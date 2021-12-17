<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import axios from "axios";

export default {
  name: "App",
  components: {},
  data: function () {
    return {
      infos: null,
    };
  },
  mounted() {
    this.buildDashboard();
  },

  methods: {
    buildDashboard: function () {
      axios
        .get("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then((response) => {
          this.infos = response.data.bpi;
          // Graphs
          var ctx = document.getElementById("myChart");
          // eslint-disable-next-line no-unused-vars
          var myChart = new Chart(ctx, {
            type: "line",
            data: {
              labels: Object.values(this.infos).map((e) => e.code),
              datasets: [
                {
                  data: Object.values(this.infos).map((e) => e.rate_float),
                  lineTension: 0,
                  backgroundColor: "transparent",
                  borderColor: "#007bff",
                  borderWidth: 4,
                  pointBackgroundColor: "#007bff",
                },
              ],
            },
            options: {
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: false,
                    },
                  },
                ],
              },
              legend: {
                display: false,
              },
            },
          });
        });
    },
  },
};
</script>


<template>
  <div class="container-fluid">
    <div class="row">
      <nav
        id="sidebarMenu"
        class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        <div class="position-sticky pt-3">
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
                <router-link class="nav-link" to="/db">db</router-link>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <router-view></router-view>
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div
          class="
            d-flex
            justify-content-between
            flex-wrap flex-md-nowrap
            align-items-center
            pt-3
            pb-2
            mb-3
            border-bottom
          "
        >
          <h1 class="h2">Dashboard</h1>
        </div>

        <canvas
          class="my-4 w-100"
          id="myChart"
          width="900"
          height="380"
        ></canvas>

        <h2>title</h2>
        <div class="table-responsive">
          <table class="table table-striped table-sm">
            <thead>
              <tr>
                <th>unité</th>
                <th>prix</th>
                <th>pays</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="info in infos" :key="info.data">
                <td>{{ info.code }}</td>
                <td>{{ info.rate_float }}</td>
                <td>{{ info.description }}</td>
              </tr>
            </tbody>
          </table>
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
  margin-top: 60px;
}

h2 {
  color: black;
}

body {
  background: grey;
}
</style>
