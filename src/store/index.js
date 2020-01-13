import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listArrived: null,
    listRetired: null,
    info: null
  },
  mutations: {
    setListArrived(state, data) {
      state.listArrived = data;
    },
    setListRetired(state, data) {
      state.listRetired = data;
    },
    setInfo(state, data) {
      state.info = data;
    }
  },
  actions: {
    async getListArrived({commit}) {
      try {
        const data = (await firebase.database().ref(`/lists/arrived/-LyRxoRJ1zvctPJ72buu`).once('value')).val();
        commit('setListArrived', data);
      } catch (e) {
        console.log(e);
        throw e;
      }
    },

    async getListRetired({commit}) {
      try {
        const data = (await firebase.database().ref(`/lists/retired/-LyRy2vXy1EoiBihcHxp`).once('value')).val();
        commit('setListRetired', data);
      } catch (e) {
        console.log(e);
        throw e;
      }
    }
  },
  getters: {
    listArrived: i => i.listArrived,
    listRetired: i => i.listRetired,
    info: i => i.info
  }
})
