<template>
  <main class="wrapper">
    <div v-if="!$route.params.id" id="parent">
      <h1>No data to show</h1>
      <br/>
    </div>
    <div v-if="beers.length > 0 && $route.params.id >=0" id="parent">
      <button @click="returnToHome()" class="btn btn-light btn-text-large"><i class="fa fa-arrow-left"></i> Go back</button>
      <h1>Beer Details</h1>
      <div>
        <div class="child">
          <label><strong>Name:</strong></label>
        </div>
        <div class="child">
          <p> {{beers[$route.params.id].name}}</p>
        </div>
      </div>
      <div>
        <div class="child">
          <label><strong>First Brewed:</strong></label>
        </div>
        <div class="child">
          <p> {{beers[$route.params.id].first_brewed}}</p>
        </div>
      </div>
      <p>{{beers[$route.params.id].description}}</p>
      <h2>Ingredients</h2>
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
      <h2>Method</h2>
      <h3>Mash Temperature</h3>
      <Table
        :tableData="mashTempInformation"
      />
      <h3>Fermentation</h3>
      <p>{{fermentationInformation}}</p>
      <h3>Twist</h3>
      <p>{{methodTwist || 'None'}}</p>
    </div>
    <button @click="returnToHome()" class="btn btn-light btn-text-large"><i class="fa fa-arrow-left"></i> Go back</button>
  </main>
</template>

<script>
import Table from '@/components/TableComponent.vue'
export default {
  name: 'DetailsView',
  props: ['beers'],
  data () {
    return {
      ingredientsYeast: '',
      methodTwist: ''
    }
  },
  mounted () {
    if (this.$route.params.id) {
      this.ingredientsYeast = this.beers[this.$route.params.id].ingredients.yeast
      this.methodTwist = this.beers[this.$route.params.id].method.twist
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
    }
  },
  methods: {
    returnToHome (event) {
      history.back()
    }
  },
  components: {
    Table
  }
}
</script>
