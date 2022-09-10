<template>
  <div v-if="cart">
    <div v-for="item in cart" :key="item">
      <h1>{{ item.product.title }}</h1>
      <h1>{{ item.cartID }}</h1>
      <button @click="this.$store.dispatch('deleteItemCart', item)">
        Delete
      </button>
    </div>
    <h1>{{ totalPrice }}</h1>
  </div>
  <div v-else>Nothing in cart</div>
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
        console.log(sum)
        return sum
    },
  },
  mounted() {
    this.$store.dispatch("getCart");
  },
};
</script>
