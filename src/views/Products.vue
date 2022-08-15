<template>
  <h1>This is all out Products</h1>
  <h2>We have what you want</h2>
  <div class="container" v-if="products">
    <div class="row">
      <div
        class="col-12 col-md-3 col-lg-3"
        v-for="product in products"
        :key="product.id"
      >
        <h3>{{ product.id }}</h3>
        {{ product.title }}
        <router-link :to="{name : 'product', params : {id : product.id}  }">
            <img :src="product.image" alt="" width="200" height="200" />
        </router-link>
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
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>
