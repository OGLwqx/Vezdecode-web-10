<script>
import products from "../products.json"

export default {
  computed: {
    product() {
      return products.find(product => product.id === +this.$route.params.id)
    }
  }
}
</script>

<template>
  <div class="back" @click="$router.go(-1)">Назад</div>
  <div class="product">
    <div class="image__wrapper">
      <img class="image" :src="product.photo" alt="">
    </div>
    <div class="info">
      <h1>{{ product.name }}</h1>
      <h3>{{ product.cost }} баллов</h3>
      <pre>{{ product.description }}</pre>
      <button class="add-to-basket">
        Добавить в корзину
      </button>
    </div>
  </div>
</template>

<style scoped>
.product {
  display: flex;
}

.image__wrapper {
  margin-right: 15px;
}

.image {
  height: 400px;
  width: 400px;
}

.add-to-basket {
  border: none;
  border-radius: 8px;
  font-weight: 800;
  font-size: 16px;
  padding: 6px;
  margin-top: 10px;
  cursor: pointer;
}

.back {
  cursor: pointer;
  font-weight: 800;
  font-size: 16px;
}
</style>
