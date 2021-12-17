import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import {initializeApp} from 'firebase/app'
 
const firebaseConfig = {
    apiKey: "AIzaSyC8ygnOzm3ASZyC9m7CrzmsgQhIPZ3H-DM",
    authDomain: "siteprice123456789.firebaseapp.com",
    projectId: "siteprice123456789",
    storageBucket: "siteprice123456789.appspot.com",
    messagingSenderId: "671212182241",
    appId: "1:671212182241:web:698a7f86d3f70f4ed9f5a0",
    measurementId: "G-GYS8K7RKZB"
  };
initializeApp(firebaseConfig)  
createApp(App).use(router).mount('#app')
