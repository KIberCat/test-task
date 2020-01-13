<template>
  <v-app-bar
      app
    >

      <v-btn icon @click.stop="$emit('click')">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

      <v-tabs>
        <v-tab @click="$emit('change', 'arrived')">Присутствуют({{ listArrived.length }})</v-tab>
        <v-tab @click="$emit('change', 'retired')">Выбывшие({{ listRetired.length }})</v-tab>
      </v-tabs>

    </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['listArrived', 'listRetired'])
  }
}
</script>