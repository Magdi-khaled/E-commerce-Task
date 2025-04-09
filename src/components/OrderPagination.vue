<script setup>
import { useCartStore } from '@/stores/cart';
import { ref } from 'vue';
import BaseTeleport from './BaseTeleport.vue';

const props = defineProps({
    item: { type: Object, required: true }
});
const cartStore = useCartStore();
const message = ref(false);

const handleQuantity = async (increase) => {
    if (!increase && props.item.orderQuantity === 1) {
        message.value = true;
        setTimeout(() => { message.value = false }, 1500);
    }
    await cartStore.updateQuantity(props.item.id, increase ? 1 : -1);
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
        <h3>{{ props.item.orderQuantity }} </h3>
        <div>
            <button @click="handleQuantity(true)">
                <i class="fa-solid fa-plus"></i>
            </button>
        </div>
    </div>
</template>
