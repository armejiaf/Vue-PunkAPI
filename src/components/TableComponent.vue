<template>
  <table>
    <t-header :header="tableHeaders"/>
    <t-row
      v-for="(row, $index) in tableRows"
      :key="$index"
      :row="row"
    />
  </table>
</template>
<script>
import TableHeader from '@/components/TableHeaderComponent.vue'
import TableRow from '@/components/TableRowComponent.vue'
export default {
  props: ['tableData'],
  components: {
    THeader: TableHeader,
    TRow: TableRow
  },
  data: () => {
    return {
      data: []
    }
  },
  created () {
    this.data = this.tableData
  },
  computed: {
    tableHeaders () {
      return Object.keys(this.data[0]).map((header, index) => {
        return {
          index: index,
          identifier: header
        }
      })
    },
    tableRows () {
      return this.data.map((obj, idx) => {
        return Object.keys(obj).map((key, idx2) => {
          return {
            key: key,
            value: Object.values(obj)[idx2]
          }
        })
      })
    }
  }
}
</script>
