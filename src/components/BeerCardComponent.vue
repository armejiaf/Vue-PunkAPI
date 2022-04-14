<template>
  <div class="card" @click="showCardDetails()">
    <div class="card-body">
      <div class="row">
        <img :src="beer.image_url?beer.image_url: defaultBeerImage">
      </div>
      <div class="row">
        <p>{{beer.name}}</p>
      </div>
      <div class="row">
        <p><em>{{beer.tagline}}</em></p>
      </div>
      <div class="row">
        <div class="cell">
          <label>ABV:</label>
        </div>
        <div class="cell">
          {{beer.abv}}%
        </div>
      </div>
      <div class="row">
         <button @click="showCardDetails()" class="btn btn-light"><i class="fa fa-info-circle"></i> Details</button>
      </div>
    </div>
  </div>
</template>

<script>
import beerImage from '@/assets/img/beer.png'

export default {
  data () {
    return {
      defaultBeerImage: beerImage
    }
  },
  props: ['beer', 'index'],
  methods: {
    showCardDetails () {
      this.$router.push({ name: 'beer-detail', params: { id: this.$props.index } })
    }
  }
}
</script>
