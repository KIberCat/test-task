<template>
  <div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">№ ИБ</th>
            <th class="text-left">ФИО</th>
            <th class="text-left">Палата</th>
          </tr>
        </thead>
        <tbody v-for="(item, index) in pageItems" :key="index">
          <TableRow :value="item" :layout="'arrived'"/>
        </tbody>
      </template>
    </v-simple-table>
    <v-row class="py-6" justify="center">
      <v-pagination
        v-model="page"
        :length="pageCount"
      ></v-pagination>
    </v-row>
  </div>
</template>

<script>
import paginationMixin from '@/mixins/pagination.mixin'
import TableRow from './TableRow'
import { mapGetters } from 'vuex'

export default {
  mixins: [paginationMixin],
  components: {
    TableRow
  },
  computed: {
    ...mapGetters(['listArrived'])
  },
  mounted() {
    this.setupPagination(this.listArrived);
  }
}
</script>