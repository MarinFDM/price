<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

  import axios from 'axios';
  export default {
  name: "App",
  components: {},
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('https://blockchain.info/ticker')
      .then(response => (this.info = response))
  }

};

</script>

<template>
  <table class="table table-striped">
     <caption>Etherum</caption>
        <thead>
           <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
           </tr>
        </thead>
          <tbody>
              <tr>
                 <td>toto</td>
                 <td>toto1</td>
                 <td>toto2</td>
                 <td>toto3</td>
               </tr>
                <tr>
                  <td>toto4</td>
                  <td>toto5</td>
                  <td>toto6</td>
                  <td>toto7</td>
               </tr>
               <tr>
                 <td>toto8</td>
                 <td>toto9</td>
                 <td>toto10</td>
                 <td>toto11</td>
                </tr>
            </tbody>
   </table>

   <div>
  {{ info }}
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
