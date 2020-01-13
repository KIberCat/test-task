<template>
  <v-row class="wrapper-loader" justify="center" align="center">
    <v-progress-circular
      :size="80"
      :width="8"
      color="primary"
      indeterminate
    ></v-progress-circular>
  </v-row>
</template>

<style scoped>
  .wrapper-loader {
    height: 100vh;
  }
</style>