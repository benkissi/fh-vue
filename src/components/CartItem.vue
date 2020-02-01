<template>
  <div id="wrapper">
    <div id="image" class="property"><img :src="image" /></div>
    <div id="title" class="property">{{ title }}</div>
    <div id="count" class="property">
      <button @click="decreaseQuantity(itemId)">-</button>{{ quantity
      }}<button @click="increaseQuantity(itemId)">+</button>
    </div>
    <div id="price" class="property">${{ price }}</div>
    <div id="total" class="property">${{ total }}</div>
    <div id="close" class="property" @click="removeItem(itemId)">x</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CartItem",
  props: ["title", "price", "image", "count", "itemId"],
  methods: mapActions(["increaseQuantity", "decreaseQuantity", "removeItem"]),
  computed: {
    total() {
      return this.price * this.count;
    },
    quantity() {
      return this.count;
    }
  }
};
</script>

<style lang="scss" scoped>
#wrapper {
  display: flex;
  margin: 5px;
  padding: 5px;
  justify-content: center;
  align-items: center;
  button {
    margin: 0 10px 0 10px;

    &:hover {
      cursor: pointer;
      font-weight: bold;
      font-size: 20px;
    }
  }

  #image {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(214, 213, 212);
    border-radius: 5%;
    padding: 5px;
    img {
      width: 100%;
    }
  }
}

.property {
  margin: 0 20px 0 20px;
  width: 150px;
}

#close {
  font-weight: bolder;
  color: tomato;

  &:hover {
    cursor: pointer;
    font-weight: bold;
    font-size: 20px;
  }
}
</style>
