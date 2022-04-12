<template>
  <div class="card">
    <div class="card-title">
       <button @click="showCardDetails()" class="btn btn-light"><i class="fa fa-info-circle"></i></button>
    </div>
    <div class="card-body">
      <img :src="beer.image_url">
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
export default {
  props: ['beer'],
  methods: {
    showCardDetails () {
      console.log('TODO show details')
    }
  }
}
</script>
