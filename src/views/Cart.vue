<template>
  <div id="cart">
    <h1>Your Cart</h1>
    <template v-if="cartNotEmpty">
      <div id="header">
        <div></div>
        <div>Item</div>
        <div>Quantity</div>
        <div>Unit Price</div>
        <div>Amount</div>
        <div>Remove</div>
      </div>
      <div v-for="item in cart" :key="item.id">
        <CartItem
          :title="item.title"
          :image="item.image"
          :price="item.price"
          :count="item.count"
          :itemId="item.id"
        />
      </div>
      <hr />
      <div id="amount">
        <h3>Total</h3>
        <h2>${{ amount }}</h2>
      </div>
      <div id="checkout">
        <button>Checkout</button>
      </div>
    </template>
    <h2 v-else>You have no items in cart - {{ cartNotEmpty }}</h2>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartItem from "@/components/CartItem.vue";

export default {
  name: "Cart",
  computed: {
    ...mapGetters(["cart"]),
    cartNotEmpty() {
      return this.cart.length > 0;
    },
    amount() {
      const total = this.cart.reduce((acc, item) => {
        return item.count * item.price + acc;
      }, 0);

      return total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    }
  },
  components: {
    CartItem
  }
};
</script>

<style lang="scss" scoped>
#cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  hr {
    width: 70%;
  }

  #amount {
    width: 70%;
    display: flex;
    justify-content: space-between;
  }
  #checkout {
    width: 70%;
    display: flex;
    justify-content: flex-end;

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

#header {
  display: flex;
  margin-bottom: 15px;

  div {
    width: 150px;
    margin: 0 20px 0 20px;
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
