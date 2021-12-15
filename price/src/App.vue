<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

  import axios from 'axios';
  export default {
  name: "App",
  components: {},
  data () {
    return {
      infos: null
    }
  },
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.infos = response.data.bpi))
  }

};

</script>

<template>
  <table class="table table-striped">
     <caption>Bitcion</caption>
        <thead>
           <tr>
              <th>unité</th>
              <th>prix</th>
              <th>pays</th>
           </tr>
        </thead>
          <tbody>
              <tr v-for="info in infos" :key="info.data"> 
                
                <td>{{info.code}}</td>
                 <td>{{info.rate_float}}</td>
                 <td>{{info.description}}</td>
               </tr>
            </tbody>
   </table>

   <div>
  <!-- {{infos}} -->
</div>

</template>

<style>
td
{
 border: 10px solid black;
}

table
{ 
  border-collapse: collapse;
}

#app {
  font-family: futura, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
}
</style>
