import { defineStore } from "pinia";
import { nextTick, ref, watch } from "vue";

export const useCartStore = defineStore("cart", () => {
    // state
    const cart = ref(JSON.parse(localStorage.getItem('cartItems') || '[]'))

    // actions
    const addToCart = (product) => {
        try {
            const existIndex = cart.value.findIndex(v => v.id === product.id)
            if (existIndex !== -1) {
                console.log(existIndex);
                // Optional: Increase quantity if already exists
                cart.value[existIndex].orderQuantity++;
                localStorage.setItem('cartItems', JSON.stringify(cart.value))
                return;
            }
            cart.value.push(product);
        } catch (error) {
            console.error('error adding to cart:', error)
        }
    }

    const removeFromCart = async (product) => {
        try {
            const index = cart.value.findIndex(v => v.id === product.id)
            if (index !== -1) {
                cart.value.splice(index, 1);
            }
        } catch (error) {
            console.error('error removing from cart', error)
        }
    }
    const handleQuantity = (increase) => {
        const updatedCart = [...cartStore.cart];
        const index = updatedCart.findIndex(p => p.id === props.item.id);
        if (index !== -1) {
            const targetItem = updatedCart[index];
            if (increase) {
                targetItem.orderQuantity++;
            } else {
                targetItem.orderQuantity--;
                if (targetItem.orderQuantity <= 0) {
                    cartStore.removeFromCart(props.item);
                    message.value = true;
                    setTimeout(() => { message.value = false }, 1500);
                    return;
                }
            }

            cartStore.cart = updatedCart; // force update
        }
    }

    const updateQuantity = (productId, amount) => {
        const item = cart.value.find(v => v.id === productId);
        if (item) {
            item.orderQuantity += amount;
            if (item.orderQuantity <= 0) {
                removeFromCart(item);
            }
        }
    };

    // Update cart from local storage
    watch(cart, (newCart) => {
        localStorage.setItem('cartItems', JSON.stringify(newCart))
    }, { deep: true });
    return { cart, addToCart, handleQuantity, updateQuantity, removeFromCart }
})