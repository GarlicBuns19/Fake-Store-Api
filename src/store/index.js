import { createStore } from 'vuex'

export default createStore({
  state: {
    products: ''
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    shopProducts: async (context) =>{
      await fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => context.state.products = data)
    },
  },
  modules: {
  }
})
