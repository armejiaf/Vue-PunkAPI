<template>
  <router-view :searchByBeerName="searchByBeerName" :beers="beers"/>

  <Sidebar
    v-if="showSidebar"
    :toggle="toggleSidebar"
    :cart="cart"
    :inventory="inventory"
    :remove="removeItem"
  />
</template>

<script>
import Sidebar from '@/components/SidebarComponent.vue'
import food from '@/food.json'

export default {
  components: {
    Sidebar
  },
  data () {
    return {
      showSidebar: false,
      inventory: food,
      cart: {},
      beers: {}
    }
  },
  computed: {
    totalQuantity () {
      return Object.values(this.cart).reduce((sum, curr) => {
        return sum + curr
      }, 0)
    }
  },
  methods: {
    searchByBeerName (name) {
      // TODO CALL API
      const result = {}
      this.beers = result
    },
    toggleSidebar () {
      this.showSidebar = !this.showSidebar
    },
    removeItem (name) {
      delete this.cart[name]
    }
  }
}
</script>
