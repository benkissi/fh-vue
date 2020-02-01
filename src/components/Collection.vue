<template>
  <div id="container">
    <div v-for="(product, index) in products" :key="index">
      <Product v-bind:product="product" />
    </div>
    <Product />
  </div>
</template>

<script>
import Product from "./Product.vue";
export default {
  name: "Collection",
  props: ["collectionName", "products"],
  components: {
    Product
  }
};
</script>

<style scoped lang="scss">
#container {
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  /* align-items: center; */
}
</style>
