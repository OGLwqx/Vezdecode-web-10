<script>
import ProductsCard from '@/components/ProductCard.vue'
import products from "../products.json"

export default {
  data() {
    return {
      products
    }
  },
  components: {
    ProductsCard
  }
}
</script>

<template>
  <div class="cards">
    <ProductsCard v-for="product in products" :key="product.id" :product="product" @click="$router.push({ name: 'product', params: { id: product.id } })" />
  </div>
</template>

<style scoped>
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>