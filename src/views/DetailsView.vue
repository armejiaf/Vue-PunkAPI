<template>
  <main class="wrapper">
    <div v-if="!$route.params.id" id="parent" class="row">
      <h1>No data to show</h1>
      <br/>
    </div>
    <div v-if="beers.length > 0 && $route.params.id >=0" id="parent">
      <div class="row">
        <img :src="beerImage?beerImage: defaultBeerImage">
      </div>
      <div class="row">
        <div class="cell">
          <label><strong>Name:</strong></label>
        </div>
        <div class="cell">
          <p> {{beers[$route.params.id].name}}</p>
        </div>
      </div>
      <div class="row">
        <div class="cell">
          <label><strong>First Brewed:</strong></label>
        </div>
        <div class="cell">
          <p> {{beers[$route.params.id].first_brewed}}</p>
        </div>
      </div>
      <p>{{beers[$route.params.id].description}}</p>
      <vue-collapsible-panel-group :style="collapsiblePanelCss">
        <vue-collapsible-panel :expanded="false">
          <template #title>
              Ingredients
          </template>
          <template #content>
            <h3>Malt</h3>
            <Table
              :tableData="maltInformation"
            />
            <h3>Hops</h3>
            <Table
              :tableData="hopsInformation"
            />
            <div>
              <h3>Yeast</h3>
              <p>{{ingredientsYeast}}</p>
            </div>
          </template>
        </vue-collapsible-panel>
        <vue-collapsible-panel :expanded="false">
          <template #title>
            Method
          </template>
          <template #content>
            <h3>Mash Temperature</h3>
            <Table
              :tableData="mashTempInformation"
            />
            <h3>Fermentation</h3>
            <p>{{fermentationInformation}}</p>
            <h3>Twist</h3>
            <p>{{methodTwist || 'None'}}</p>
          </template>
        </vue-collapsible-panel>
      </vue-collapsible-panel-group>
    </div>
    <br/>
    <div class="row">
      <button @click="returnToHome()" class="btn btn-light btn-text-large"><i class="fa fa-arrow-left"></i> Go back</button>
    </div>
  </main>
</template>

<script>
import Table from '@/components/TableComponent.vue'
import beerImage from '@/assets/img/beer.png'
import { VueCollapsiblePanelGroup, VueCollapsiblePanel } from '@dafcoe/vue-collapsible-panel'

export default {
  name: 'DetailsView',
  props: ['beers'],
  data () {
    return {
      ingredientsYeast: '',
      methodTwist: '',
      beerImage: '',
      defaultBeerImage: beerImage
    }
  },
  mounted () {
    if (this.$route.params.id) {
      this.ingredientsYeast = this.beers[this.$route.params.id].ingredients.yeast
      this.methodTwist = this.beers[this.$route.params.id].method.twist
      this.beerImage = this.beers[this.$route.params.id].image_url
    }
  },
  computed: {
    maltInformation () {
      return this.beers[this.$route.params.id].ingredients.malt.map((iMalt) => {
        return { Name: iMalt.name, Amount: iMalt.amount.value + ' ' + iMalt.amount.unit }
      })
    },
    hopsInformation () {
      return this.beers[this.$route.params.id].ingredients.hops.map((iHop) => {
        return { Name: iHop.name, Amount: iHop.amount.value + ' ' + iHop.amount.unit, Add: iHop.add, Attribute: iHop.attribute }
      })
    },
    mashTempInformation () {
      return this.beers[this.$route.params.id].method.mash_temp.map((mMashTemp) => {
        return { Temperature: mMashTemp.temp.value + ' ' + mMashTemp.temp.unit, Duration: mMashTemp.duration + ' minutes' }
      })
    },
    fermentationInformation () {
      const fermentation = this.beers[this.$route.params.id].method.fermentation
      return fermentation.temp.value + ' ' + fermentation.temp.unit
    },
    collapsiblePanelCss () {
      return {
        // '--base-color': '#1b1f22',
        // '--border-color': '#1b1f22',
        '--bg-color-header': '#babbbc',
        '--bg-color-header-hover': '#e8e8e8',
        '--bg-color-header-active': '#e8e8e8'
        // '--bg-color-body': '#1b1f22'
      }
    }
  },
  methods: {
    returnToHome (event) {
      history.back()
    }
  },
  components: {
    Table,
    VueCollapsiblePanelGroup,
    VueCollapsiblePanel
  }
}
</script>
