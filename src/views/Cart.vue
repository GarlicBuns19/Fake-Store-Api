<template>
    <div v-if="cart">

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
