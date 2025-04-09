<script setup>
defineProps({
    show: { type: Boolean, required: true },
    type: { type: String, required: true }
});
</script>

<template>
    <Teleport to="body">
        <div :class="[
            'teleport-message',
            show ? 'active' : '',
            type === 'message' ? 'message' : type === 'success' ? 'success' : '']">
            <i v-if="type === 'success'" class="fa-solid fa-check-double"></i>
            <i v-if="type === 'message'" class="fa-solid fa-heart-crack"></i>
            <slot />
        </div>
    </Teleport>
</template>