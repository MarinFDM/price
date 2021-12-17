<template>
  <h1>Login to Your Account</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p><button @click="signIn">Submit</button></p>
</template>
 
<script setup>
  import { ref } from 'vue'

  const email = ref('')
  const password = ref('')
  const signIn = () => { 
    firebase
      .auth()
      .signInWithEmailAndPassword(email.value, password.value)
      .then((data) => {
        console.log('Successfully logged in!');
        router.push('/feed') 
      })
      .catch(error => {
        console.log(error.code)
        alert(error.message);
      });
  }
</script>
