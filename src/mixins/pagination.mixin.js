import _ from 'lodash'

export default {
  data() {
    return {
      page: 1,
      pageSize: 8,
      pageCount: 0,
      allItems: []
    }
  },
  methods: {
    setupPagination(allItems) {
      this.allItems = _.chunk(allItems, this.pageSize);
      this.pageCount = _.size(this.allItems);
    }
  },
  computed: {
    pageItems() {
      return this.allItems[this.page - 1] || this.allItems[0];
    }
  }
}