<template>
  <div class="container" v-if="cart">
    <div class="row" v-for="item in cart" :key="item">
      <div class="col-md-6">
        <img :src="item.product.image" alt="" class="img-fluid" />
      </div>
      <div class="col-md-6">
        <h1>{{ item.product.title }}</h1>
      </div>
      <div class="col-md-12">
        <button @click="this.$store.dispatch('deleteItemCart', item)">
          Delete
        </button>
      </div>
    </div>
  </div>
  <div v-else>Nothing in cart</div>
  <h1>R{{ totalPrice }}</h1>
</template>
<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    totalPrice() {
      let cart = this.$store.state.cart;
      let sum = cart.reduce((x, c) => {
        return x + c.product.price;
      }, 0);
      console.log(sum);
      return sum;
    },
  },
  mounted() {
    this.$store.dispatch("getCart");
  },
};
</script>
<style scoped>
img {
  width: 50%;
  height: 400px;
}
</style>
