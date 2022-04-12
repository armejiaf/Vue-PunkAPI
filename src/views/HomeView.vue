<template>
  <div class="home">

    <div class="splash-container">
      <div class="splash">
        <h1>BREWDOG'S CRAFT BEER</h1>
      </div>
    </div>
    <br/>
    <div class="search-container">
        <input type="text" placeholder="Search by beer name.." :value="searchInformation" @input="updateSearchInformation" name="search">
        <button @click="searchByBeerName(searchInformation)" ><i class="fa fa-search"></i></button>
    </div>

    <main class="wrapper">

      <div class="card-container">

      </div>

    </main>

  </div>
</template>

<script>

export default {
  name: 'HomeView',
  props: ['searchByBeerName', 'beers', 'searchInformation'],
  methods: {
    updateSearchInformation (event) {
      this.$emit('searchInformationChanged', event.target.value)
    }
  }
}
</script>
