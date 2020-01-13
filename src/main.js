import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Loader from '@/components/app/Loader'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.component('Loader', Loader);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyCN3gBb6OuDLME0fU4XfQjxy4HMR2FFcWY",
  authDomain: "test-task-1fe1b.firebaseapp.com",
  databaseURL: "https://test-task-1fe1b.firebaseio.com",
  projectId: "test-task-1fe1b",
  storageBucket: "test-task-1fe1b.appspot.com",
  messagingSenderId: "674944832705",
  appId: "1:674944832705:web:2c35bfaf09c9461227b040",
  measurementId: "G-RGGMXD67D1"
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
