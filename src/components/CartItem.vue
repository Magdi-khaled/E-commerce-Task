<script setup>
import OrderPagination from '@/components/OrderPagination.vue';
defineProps({
    item: { type: Object, required: true }
});

</script>
<template>
    <div class="cart-item">
        <img :src="item.image" alt="cart-item-image">
        <div class="item-content">
            <div>
                <h1>{{ item.title }}</h1>
                <h2>price : ${{ item.price }}</h2>
                <h2>size : {{ item.sizes[0] }}</h2>
                <div class="paginate">
                    <OrderPagination :item="item" />
                </div>
            </div>
        </div>
    </div>
</template>
