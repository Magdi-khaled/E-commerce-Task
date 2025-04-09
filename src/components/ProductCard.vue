<script setup>
import { useCartStore } from '@/stores/cart';
import BaseTeleport from '@/components/BaseTeleport.vue';
import { ref } from 'vue';

const props = defineProps({
    product: { type: Object, required: true }
})
const cartStore = useCartStore()

const success = ref(false);
const addProduct = () => {
    try {
        cartStore.addToCart(props.product);
        success.value = true;
        setTimeout(() => { success.value = false }, 1500);
    }
    catch (err) {
        console.error(err);
    }
}
</script>

<template>
    <BaseTeleport :show="success" :type="'success'">product added to cart </BaseTeleport>
    <div class="product-card">
        <img :src="product.image" alt="product-img">
        <div>
            <h3> {{ product.title }}</h3>
            <h3> {{ product.price }}$ </h3>
        </div>
        <div class="colors">
            <span v-for="(color, index) in product.colors" :key="index" :style="{ backgroundColor: `#${color}` }">
            </span>
        </div>
        <button @click="addProduct" class="add-to-cart" title="Add to cart">
            <i class="fa-solid fa-cart-plus"></i>
        </button>
    </div>
</template>
