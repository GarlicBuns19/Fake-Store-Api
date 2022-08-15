import { createStore } from 'vuex'

export default createStore({
  state: {
    products: '',
    product: ''
  },
  getters: {
  },
  mutations: {
    stateProduct(state,payload){
      state.product = payload
    }
  },
  actions: {
    shopProducts: async (context) =>{
      await fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => context.state.products = data)
    },
    getProduct: async (context, id) =>{
      await fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => context.commit('stateProduct', data))
    },
  },
  modules: {  
  }
})
