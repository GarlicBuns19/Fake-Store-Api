<template>
    <h1>This is all out Products</h1>
    <h2>We have what you want</h2>
    <div v-if="products">
        <ul>
        <li v-for="product in products" :key="product.id">
            <h3>{{product.id}}</h3>
            {{product.title}}
            <img :src="product.image" alt="" width="200" height="200">
        </li>
    </ul>
    </div>
    <div v-else>No stock</div>
</template>
<script>
export default{
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
