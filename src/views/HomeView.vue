<template>
  <div class="home">
    <main class="wrapper">
      <div class="splash-container">
        <div class="splash">
           <img :src="logo">
        </div>
      </div>
      <br/>
      <div class="search-container">
          <input @keypress.enter="searchByBeerName(searchInformation)" type="text" placeholder="Search by beer name.." :value="searchInformation" @input="updateSearchInformation" name="search">
          <button @click="searchByBeerName(searchInformation)" ><i class="fa fa-search"></i></button>
      </div>
      <br/>
      <br/>
      <br/>
      <div class="card-container">
        <BeerCard
          v-for="(beer,index) in beers"
          :key="beer.id"
          :beer="beer"
          :index="index"
        />
      </div>
      <div v-if="notFound" class="not-found">
        <p>We're sorry. We couldn't find any beers for "{{searchInformationCopy}}"...</p>
      </div>
    </main>
  </div>
</template>

<script>
import BeerCard from '@/components/BeerCardComponent.vue'
import logoImage from '@/assets/img/logo.png'

export default {
  name: 'HomeView',
  data () {
    return {
      logo: logoImage
    }
  },
  props: ['searchByBeerName', 'beers', 'searchInformation', 'clearBeers', 'notFound', 'searchInformationCopy'],
  methods: {
    updateSearchInformation (event) {
      this.$emit('searchInformationChanged', event.target.value)
    }
  },
  components: {
    BeerCard
  }
}
</script>
