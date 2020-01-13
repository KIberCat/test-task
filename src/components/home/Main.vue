<template>
  <v-content>
    <component :is="componentName">
    </component>
  </v-content>
</template>

<script>
import ListArrived from './ListArrived'
import ListRetired from './ListRetired'

import { mapGetters } from 'vuex'

export default {
  props: {
    tab: String
  },
  components: {
    ListArrived,
    ListRetired
  },
  data: () => ({
    mode: 'arrived'
  }),
  computed: {
    ...mapGetters(['listArrived', 'listRetired']),

    componentName() {
      return this.tab === 'arrived' ? 'ListArrived' : 'ListRetired';
    }
  },
  mounted() {
    console.log(this.tab)
  }
}
</script>