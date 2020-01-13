<template>
  <tr @click="sendData">
    <td ref="number">{{ value.historyNumber }}</td>
    <td ref="name">{{ value.firstName }} {{ value.patrName }} {{ value.lastName }}</td>
    <td v-if="layout === 'arrived'">{{ value.bedNumber }}</td>
    <td v-else>{{ value.cause }}</td>
  </tr>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    value: Object,
    layout: String
  },
  methods: {
    ...mapMutations(['setInfo']),

    sendData() {
      this.setInfo({
        age: this.value.birthDate,
        name: this.$refs.name.textContent,
        diagnosis: this.value.diagnosis
      });
    }
  }
}
</script>
