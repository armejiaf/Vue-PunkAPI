<template>
  <vue-basic-alert :duration="300"  :closeIn="8000" ref="alert" />
  <loading v-model:active="isLoading"
    :is-full-page="fullPage"
    :loader="loader"
  />
  <router-view
    :searchByBeerName="searchByBeerName"
    :notFound="notFound"
    :beers="beers"
    :searchInformation="searchInformation"
    :searchInformationCopy="searchInformationCopy"
    @searchInformationChanged="searchInformation = $event"
  />

</template>

<script>
import PunkAPIWrapper from 'punkapi-javascript-wrapper'
import VueBasicAlert from 'vue-basic-alert'
import Loading from 'vue-loading-overlay'

export default {
  components: {
    VueBasicAlert,
    Loading
  },
  data () {
    return {
      beers: {},
      searchInformation: '',
      searchInformationCopy: '',
      isLoading: false,
      fullPage: true,
      loader: 'dots',
      notFound: false
    }
  },
  methods: {
    searchByBeerName () {
      this.isLoading = true
      setTimeout(() => { this.isLoading = false }, 1000)
      if (this.searchInformation) {
        this.notFound = false
        const punkApi = new PunkAPIWrapper()
        const result = punkApi.getBeers({ beer_name: this.searchInformation })
        result.then(beers => {
          if (beers.length > 0) {
            this.beers = beers
            this.$refs.alert.showAlert('success', 'Some beers were found.', 'Success', { iconSize: 35, iconType: 'solid', position: 'top right' })
          } else {
            // PARAMS ORDER TO USE
            // There are 4 types of alert: success, info, warning, error
            // Message of the alert
            // Header of the alert
            // Object { Size of the icon (px), Icon styles: now only 2 styles 'solid' and 'regular'. Position of the alert 'top right', 'top left', 'bottom left', 'bottom right'}
            this.beers = {}
            this.notFound = true
            this.searchInformationCopy = Object.assign(this.searchInformation)
            this.$refs.alert.showAlert('error', 'No beers were found.', 'Information', { iconSize: 35, iconType: 'solid', position: 'top right' })
          }
        })
      } else {
        this.$refs.alert.showAlert('warning', 'Please write a beer name.', 'Empty', { iconSize: 35, iconType: 'solid', position: 'top right' })
      }
    }
  }
}
</script>
