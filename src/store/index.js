import { createStore } from "vuex";

export default createStore({
  state: {
    products: "",
    product: "",
    cart: null
  },
  getters: {},
  mutations: {
    stateProduct(state, payload) {
      state.product = payload;
    },
    sortByPrice(state){
      state.products.sort((a, b) => a.price - b.price);
    },
    sortByPriceDesc(state){
      state.products.sort((a, b) => b.price - a.price);
    },
    sortByTitle(state){
      state.products.sort((a, b) => {
        if(a.title < b.title)return -1;{
          return 1
        }
      });
    },
    cart(state,product){
      let cart = state.cart
      cart.push(product)
    }
  },
  actions: {
    shopProducts: async (context) => {
      await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => (context.state.products = data));
    },
    getProduct: async (context, id) => {
      await fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => context.commit("stateProduct", data));
    },
    getCart: (context) => {
      context.state.cart
    },
    addToCart: (context,product) => {
      context.commit('cart',product)
    }
  },
  modules: {},
});
