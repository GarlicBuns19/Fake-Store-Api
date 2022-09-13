<template>
  <h1>This is all out Products</h1>
  <h2>We have what you want</h2>
  <div class="container" v-if="products">
    <div class="row">
        <div class="col-md-12">
            <button @click="sortByPrice">Sort by Price</button>
            <button @click="sortByPriceDesc">Sort by Price</button>
            <button @click="sortByTitle">Sort by title</button>
        </div>
      <div
        class="col-md-4 mx-auto"
        v-for="product in products"
        :key="product.id"
        id="productCard"
      >
      <h3>{{ product.title }}</h3>
      <!-- {{ product.title }} -->
      <router-link :to="{name : 'product', params : {id : product.id}  }">
        <img :src="product.image" alt="" width="200" height="200" />
      </router-link>
      <h1>R {{product.price}} </h1>
        <button type="button" @click="this.$store.dispatch('addToCart',product)">Add to cart</button>
      </div>
    </div>
  </div>
  <div v-else>No stock</div>
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch("shopProducts");
  },
  methods:{
    sortByPrice(){
        this.$store.commit("sortByPrice");
    },
    sortByPriceDesc(){
        this.$store.commit("sortByPriceDesc");
    },
    sortByTitle(){
        this.$store.commit("sortByTitle");
    }
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>
<style scoped>
#productCard{
  margin: 1px;
}
</style>
