<template>
  <vue-basic-alert :duration="300"  :closeIn="10000" ref="alert" />

  <router-view
    :searchByBeerName="searchByBeerName"
    :beers="beers"
    :searchInformation="searchInformation"
    @searchInformationChanged="searchInformation = $event"
  />

</template>

<script>
import food from '@/food.json'
import PunkAPIWrapper from 'punkapi-javascript-wrapper'
import VueBasicAlert from 'vue-basic-alert'

export default {
  components: {
    VueBasicAlert
  },
  data () {
    return {
      showSidebar: false,
      inventory: food,
      cart: {},
      beers: {},
      searchInformation: ''
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
    searchByBeerName () {
      const punkApi = new PunkAPIWrapper()
      const result = punkApi.getBeers({ beer_name: this.searchInformation })
      result.then(beers => {
        if (beers.length > 0) {
          this.beers = beers
          this.searchInformation = ''
          this.$refs.alert.showAlert('success', 'Some beers were found.', 'Success', { iconSize: 35, iconType: 'solid', position: 'top right' })
        } else {
          // PARAMS ORDER TO USE
          // There are 4 types of alert: success, info, warning, error
          // Message of the alert
          // Header of the alert
          // Object { Size of the icon (px), Icon styles: now only 2 styles 'solid' and 'regular'. Position of the alert 'top right', 'top left', 'bottom left', 'bottom right'}
          this.$refs.alert.showAlert('error', 'No beers were found.', 'Information', { iconSize: 35, iconType: 'solid', position: 'top right' })
        }
      })
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
