<template>
    <div v-if="cart">
        <div v-for="item in cart" :key="item">
            <h1>{{item.product.title}}</h1>
            <h1>{{item.cartID}}</h1>
            <button
            @click="this.$store.dispatch('deleteItemCart',item)"
            >Delete</button>
        </div>
    </div>
    <div v-else>Nothing in cart</div>
</template>
<script>

export default {
    computed : {
        cart(){
            return this.$store.state.cart
        }
    },
    mounted(){
        this.$store.dispatch('getCart')
    }
}
</script>
