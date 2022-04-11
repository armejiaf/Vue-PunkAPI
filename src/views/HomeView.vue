<template>
  <div class="home">

    <div class="splash-container">
      <div class="splash">
        <h1>BREWDOG'S CRAFT BEER</h1>
      </div>
    </div>
    <br/>
    <div class="search-container">
        <input type="text" placeholder="Search by beer name.." v-bind="searchInformation" name="search">
        <button @click="searchByBeerName(searchInformation)" ><i class="fa fa-search"></i></button>
    </div>

    <main class="wrapper">

      <h2>Recommended</h2>

      <div class="recommended">

      </div>

    </main>

  </div>
</template>

<script>

export default {
  name: 'HomeView',
  props: ['searchByBeerName', 'beers'],
  data () {
    return {
      searchInformation: ''
    }
  }
}
</script>
