<template>
  <h1>Create an Account</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p><button @click="register">Submit</button></p>
</template>
 
<script setup>
import { ref } from "vue";
import firebase from "firebase";
const email = ref("");
const password = ref("");
const register = () => {};
</script>