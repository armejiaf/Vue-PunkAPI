<template>
  <div class="home">
    <br/>
    <div class="search-container">
        <input @keypress.enter="searchByBeerName(searchInformation)" type="text" placeholder="Search by beer name.." :value="searchInformation" @input="updateSearchInformation" name="search">
        <button @click="searchByBeerName(searchInformation)" ><i class="fa fa-search"></i></button>
    </div>
    <br/>
    <br/>
    <main class="wrapper">
      <div class="card-container">
        <BeerCard
          v-for="(beer,index) in beers"
          :key="beer.id"
          :beer="beer"
          :index="index"
        />
      </div>
    </main>
  </div>
</template>

<script>
import BeerCard from '@/components/BeerCardComponent.vue'

export default {
  name: 'HomeView',
  props: ['searchByBeerName', 'beers', 'searchInformation'],
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
