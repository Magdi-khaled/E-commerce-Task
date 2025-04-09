<script setup>
import Cart from '@/components/Cart.vue';
import { useCartStore } from '@/stores/cart';
import { onMounted, onUnmounted, ref } from 'vue';
const toggleNav = ref(false);
const notSmallScreen = ref(true);
const showCart = ref(false);
const cartStore = useCartStore();

const updateScreen = () => {
  notSmallScreen.value = window.innerWidth > 768;
}
onMounted(() => {
  notSmallScreen.value = window.innerWidth > 768;
  window.addEventListener('resize', updateScreen)
});
onUnmounted(() => {
  window.removeEventListener('resize', updateScreen)
});
</script>

<template>
  <header>
    <div class="container">
      <button @click="toggleNav = !toggleNav" class="toggle-nav">
        <i class="fa-solid fa-bars-staggered"></i>
      </button>

      <!-- Logo -->
      <div class="logo">
        <span class="brand-name">E-commerce</span>
      </div>

      <!-- Navigation Links -->
      <transition name=fade>
        <nav v-if="toggleNav || notSmallScreen" class="nav" :class="{ 'small-nav': toggleNav }">
          <button @click="toggleNav = false" class="toggle-nav">
            <i class="fa-solid fa-bars-staggered"></i>
            <span class="brand-name">E-commerce</span>
          </button>
          <router-link class="nav-item" :to="{ name: 'Home' }"> home
          </router-link>
          <router-link :to="{ path: '/', hash: '#products' }" class="nav-item">
            Products
          </router-link>
          <router-link class="nav-item" :to="{ path: '/', hash: '#newArrivals' }"> new arrivals
          </router-link>
          <router-link class="nav-item" :to="{ path: '/', hash: '#about' }"> About
          </router-link>
          <router-link class="nav-item" :to="{ path: '/', hash: '#blogs' }"> Blogs
          </router-link>
        </nav>
      </transition>

      <!-- Icons and Cart -->
      <div class="icons">
        <button @click="showCart = !showCart" aria-label="Cart" class="icon-button">
          <i class="fa-solid fa-bag-shopping"></i>
          <span class="cart-badge">{{ cartStore.cart?.length }}</span>
        </button>
        <Cart v-model:showCart="showCart" />
        <button aria-label="Search" class="icon-button">
          <i class="fas fa-search"></i>
        </button>
        <button aria-label="User" class="icon-button">
          <i class="fas fa-user"></i>
        </button>
      </div>
    </div>
  </header>
</template>