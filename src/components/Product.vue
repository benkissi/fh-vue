<template>
  <div v-if="product" id="wrapper">
    <div class="image-holder">
      <img :src="product.image" />
    </div>
    <main>
      <div class="title">
        <h2>{{ product.title }}</h2>
      </div>
      <div class="price">
        <p>${{ product.price }}</p>
      </div>
    </main>

    <footer><button @click="addToCart(product)">Add to cart</button></footer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Product",
  props: ["product"],
  methods: {
    ...mapActions(["addToCart"])
  },
  computed: mapGetters(["getters"])
};
</script>

<style scoped lang="scss">
#wrapper {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  .image-holder {
    width: 100%;

    img {
      width: 100%;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 10px 0 10px;

    h2 {
      margin: 0;
      margin-top: 5px;
    }

    p {
      font-weight: bold;
    }
  }

  footer {
    button {
      width: 100%;
      height: 50px;
      background-color: #9dc96a;
      color: white;
      font-size: 16px;
      &:hover {
        cursor: pointer;
        background-color: #719057;
      }
    }
  }
}
</style>
