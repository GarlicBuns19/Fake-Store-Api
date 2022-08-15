<template>
  <div v-if="product">
    <h1>
      {{ product.title }}
    </h1>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch("getProduct", this.$route.params.id);
  },
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
};
</script>
