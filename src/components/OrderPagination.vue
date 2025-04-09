<script setup>
import { useCartStore } from '@/stores/cart';
import { ref, watch } from 'vue';
import BaseTeleport from '@/components/BaseTeleport.vue';

const props = defineProps({
    item: { type: Object, required: true }
});

const cartStore = useCartStore();

const quantity = ref(props.item.orderQuanity ?? 1);
const message = ref(false);

watch(quantity, (newVal) => {
    if (newVal === 0) {
        cartStore.removeFromCart(props.item);
        message.value = true;
        setTimeout(() => { message.value = false }, 1500);
    }
})
const handleQuantity = (increase) => {
    increase ? quantity.value++ : quantity.value--;
};
</script>

<template>
    <BaseTeleport :show="message" :type="'message'">product removerd from cart </BaseTeleport>
    <div class="pagination" @click.prevent>
        <div>
            <button @click="handleQuantity(false)">
                <i class="fa-solid fa-minus"></i>
            </button>
        </div>
        <h3>{{ props.item.orderQuanity }} </h3>
        <div>
            <button @click="handleQuantity(true)">
                <i class="fa-solid fa-plus"></i>
            </button>
        </div>
    </div>
</template>
