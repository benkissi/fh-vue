const state = {
  cart: []
};

const getters = {
  cart: state => state.cart,
  cartCount: state =>
    state.cart.reduce((accumulator, item) => {
      return accumulator + item.count;
    }, 0)
};

const actions = {
  addToCart: ({ commit }, item) => {
    commit("addItem", item);
  },

  increaseQuantity: ({ commit }, id) => {
    commit("increment", id);
  },
  decreaseQuantity: ({ commit }, id) => {
    commit("decrease", id);
  },
  removeItem: ({ commit }, id) => {
    commit("delete", id);
  }
};

const mutations = {
  addItem: (state, item) => {
    const existingItem = state.cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.count++;
      const itemIndex = state.cart.findIndex(
        cartItem => cartItem.id === item.id
      );

      return state.cart.splice(itemIndex, 1, existingItem);
    }
    item["count"] = 1;
    state.cart.unshift(item);
  },

  increment: (state, id) => {
    const item = state.cart.find(cartItem => cartItem.id === id);
    const itemIndex = state.cart.findIndex(cartItem => cartItem.id === item.id);

    if (itemIndex !== -1) {
      item.count++;
      state.cart.splice(itemIndex, 1, item);
    }
  },

  decrease: (state, id) => {
    const item = state.cart.find(cartItem => cartItem.id === id);
    const itemIndex = state.cart.findIndex(cartItem => cartItem.id === id);

    if (itemIndex !== -1) {
      item.count--;
      state.cart.splice(itemIndex, 1, item);
    }
  },

  delete: (state, id) => {
    const itemIndex = state.cart.findIndex(cartItem => cartItem.id === id);

    if (itemIndex !== -1) {
      state.cart.splice(itemIndex, 1);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
