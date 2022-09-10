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
      if(state.cart == null){
        state.cart = []
        if(state.cart.length > 0){
          state.cart
        }
      }
      let cartID = state.cart.length + 1
      state.cart.push({cartID,product})
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
      console.log(product)
      context.commit('cart',product)
    },
    deleteItemCart : (context,item) => {
      console.log(`context.state.cart.${item.cartID}`);
      context.state.cart.pop(item.cartID,1)
      context.dispatch('getCart')
    }
  },
  modules: {},
});
