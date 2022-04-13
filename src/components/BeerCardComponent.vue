<template>
  <div class="card">
    <div class="card-title">
       <button @click="showCardDetails()" class="btn btn-light"><i class="fa fa-info-circle"></i> Details</button>
    </div>
    <div class="card-body">
      <img  @click="showCardDetails()" :src="beer.image_url?beer.image_url: defaultBeerImage">
      <p>{{beer.name}}</p>
      <p><em>{{beer.tagline}}</em></p>
      <div class="row">
        <div class="cell">
          <label>ABV:</label>
        </div>
        <div class="cell">
          {{beer.abv}}%
        </div>
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
