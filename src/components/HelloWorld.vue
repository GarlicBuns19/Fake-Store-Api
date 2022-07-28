<template>
  <ul>
    <li v-for="product in products" :key="product.id">
      <p>{{product.title}}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted(){
    this.$store.dispatch('shopProducts')
  },
  computed:{
    products(){
      return this.$store.state.products
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
