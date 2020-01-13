<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    width="50%"
  >
    <v-card flat height="200px">

      <v-toolbar color="primary" :dark="true">
        <v-toolbar-title>Информация о пациенте</v-toolbar-title>
      </v-toolbar>

      <v-row class="px-4">
        <v-col cols="5">
          <form>
            <v-text-field
              v-model="name"
              label="ФИО"
              required
            ></v-text-field>
            <v-text-field
              v-model="age"
              label="Возраст"
              required
            ></v-text-field>
            <v-text-field
              v-model="diagnosis"
              label="Диагноз"
              required
            ></v-text-field>
          </form>
        </v-col>
      </v-row>
      
    </v-card>
  </v-navigation-drawer>
</template>


<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    drawer: Boolean
  },
  data: () => ({
    name: '',
    age: '',
    diagnosis: ''
  }),
  computed: {
    ...mapGetters(['info'])
  },
  watch: {
    info(item) {
      if (item) {
        let date = ((new Date().getTime() - new Date(item.age)) / (24 * 3600 * 365.25 * 1000)) | 0;
        this.name = item.name;
        this.age = date;
        this.diagnosis = item.diagnosis;
      }
    }
  }
}
</script>
