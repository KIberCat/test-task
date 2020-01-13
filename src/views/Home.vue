<template>
  <div>

    <Loader v-if="loading"/>

    <div v-else>
      <Sidebar :drawer="isOpen"/>

      <Navbar @click="isOpen = !isOpen" @change="changeTabs"/>

      <Main :tab="tabs"/>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/home/Navbar'
import Sidebar from '../components/home/Sidebar'
import Main from '../components/home/Main'

import { mapActions } from 'vuex'

export default {
  components: {
    Navbar,
    Sidebar,
    Main
  },
  props: {
      source: String,
  },
  data: () => ({
    isOpen: true,
    loading: true,
    tabs: 'arrived'
  }),
  methods: {
    ...mapActions(['getListArrived', 'getListRetired']),

    changeTabs(value) {
      this.tabs = value;
    }
  },
  async mounted() {
    try {
      await this.getListArrived();
      await this.getListRetired();
    } catch (e) {}

    this.loading = false;
  }
}
</script>
