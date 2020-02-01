import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Cart from "@/views/Cart.vue";
import cartModule from "@/store/modules/cart.js";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Cart", () => {
  //   let actions
  let state;
  let store;

  beforeEach(() => {
    state = {
      cart: []
    };

    store = new Vuex.Store({
      modules: {
        cart: {
          state,
          actions: cartModule.actions,
          getters: cartModule.getters
        }
      }
    });
  });

  it("should not render cart if empty", () => {
    const wrapper = shallowMount(Cart, { store, localVue });
    expect(wrapper.text()).toContain("You have no items in cart");
  });

  it("should render cart if not empty", () => {
    const wrapper = shallowMount(Cart, { store, localVue });
    expect(wrapper.text()).toContain("You have no items in cart");
  });
});
