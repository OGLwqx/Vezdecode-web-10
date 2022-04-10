<script>
export default {
  props: {
    product: {
      type: Object
    }
  },
}
</script>

<template>
<div class="card">
  <div class="card-image__wrapper">
    <img class="card-image" :src="product.photo" alt="">
    <p class="text-muted">{{ product.cost }} баллов</p>
    <h2 class="card-heading">{{ product.name }}</h2>
  </div>
</div>
</template>

<style scoped>

.card-image {
  width: 180px;
  height: 180px;
}

.card {
  width: 180px;
}

.card {
  cursor: pointer;
}

.card-heading {
  text-align: center;
}

.text-muted {
  color: var(--vt-c-text-dark-3);
}

</style>
