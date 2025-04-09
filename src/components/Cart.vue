<script setup>
import { computed, ref, watch } from 'vue';
import CartItem from './CartItem.vue';
import BaseButton from '@/components/BaseButton.vue';
import { useCartStore } from '@/stores/cart';

const showCart = defineModel('showCart');
const cartStore = useCartStore();

watch(cartStore.cart, (newVal) => {
    cartStore.cart = newVal;
});

const totalPrice = computed(() => {
    return cartStore.cart.reduce((sum, item) => {
        const price = (item.price);
        const quantity = (item.orderQuantity);
        return sum + (price * quantity);
    }, 0);
});

</script>
<template>
    <teleport to='body'>
        <transition name="cart-fade">
            <div v-if="showCart" class="cart">
                <div class="cart-header">
                    <h1>shopping cart</h1>
                    <button @click="showCart = !showCart" class="toggle-cart">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div class="cart-items">
                    <section v-if="!cartStore.cart.length" class="empty-cart">
                        <p>cart is empty</p>
                    </section>
                    <section v-else class="items">
                        <div>
                            <div v-for="item in cartStore.cart" :key="item.id">
                                <CartItem :item="item" />
                                <hr>
                            </div>
                        </div>
                        <div class="checkout">
                            <div class="details">
                                <!-- <h3>checkout details</h3> -->
                                <h4> Total price <span>{{ totalPrice }}$</span></h4>
                            </div>
                            <BaseButton>
                                checkout <i class="fa-solid fa-arrow-right"></i>
                            </BaseButton>
                        </div>
                    </section>
                </div>
            </div>
        </transition>
    </teleport>
</template>
