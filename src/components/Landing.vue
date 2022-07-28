<template>
    <h1>Landing</h1>
    <ul>
        <li v-for="product of products" :key="product.id">
            {{product.title}}
        </li>
    </ul>
</template>
<script>
export default {
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
