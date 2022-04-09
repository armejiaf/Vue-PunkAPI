<template>
  <main class="wrapper">
    <h1>Products</h1>

    <div class="card-container">
      <ProductCard
        v-for="product in inventory"
        :key="product.id"
        :product="product"
        :addToCart="addToCart"
      />
    </div>
  </main>

</template>

<script>
import ProductCard from '@/components/ProductCardComponent.vue'

export default {
  props: ['inventory', 'addToCart'],
  components: {
    ProductCard
  }
}
</script>
