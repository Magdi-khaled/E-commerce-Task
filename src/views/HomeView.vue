<script setup>
import BaseButton from '@/components/BaseButton.vue';
import ProductCard from '@/components/ProductCard.vue';
import products from '@/composables/products.js';
import { useRouter } from 'vue-router';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Mousewheel, Scrollbar, Autoplay } from 'swiper/modules';

const router = useRouter();
const modules = [Navigation, Mousewheel, Scrollbar, Autoplay];
</script>

<template>

    <div class="home">
        <div class="container">
            <section class="preview-section">
                <div class="first-prev">
                    <img src="../assets/media/preview/1.PNG" alt="">
                </div>
                <div class="mid-prev">
                    <div>
                        <img src="../assets/media/preview/3.PNG" alt="">
                    </div>
                    <div class="prev-text">
                        <h2>ultimate</h2>
                        <h1>sale</h1>
                    </div>
                    <p>New Collection</p>
                    <BaseButton aria-role="link" @click="router.push({ path: '/', hash: '#products' })">
                        shop now
                        <i class="fa-solid fa-cart-shopping"></i>
                    </BaseButton>
                    <div>
                        <img src="../assets/media/preview/4.PNG" alt="">
                    </div>
                </div>
                <div class="last-prev">
                    <img src="../assets/media/preview/2.PNG" alt="">
                </div>
            </section>

            <section id="products" class="products-section">
                <h1>our products</h1>
                <div>
                    <swiper :modules="modules" :breakpoints="{
                        339: { slidesPerView: 1.5, spaceBetween: 15 },
                        510: { slidesPerView: 2.5, spaceBetween: 15 },
                        768: { slidesPerView: 3.4, spaceBetween: 15 },
                        1076: { slidesPerView: 4, spaceBetween: 20 },
                        1280: { slidesPerView: 4.5, spaceBetween: 15 }
                    }" navigation pagination :mousewheel="{ scrollable: true }" :autoplay="false" class="products">
                        <swiper-slide v-for="item in products.slice(0, 6)">
                            <!-- <router-link :to="{ name: 'Product', params : {id: item.id} }"> -->
                            <ProductCard :product="item" />
                            <!-- </router-link> -->
                        </swiper-slide>
                    </swiper>
                    <BaseButton>
                        view more <i class="fa-solid fa-share"></i>
                    </BaseButton>
                </div>
            </section>

            <section id="newArrivals" class="products-section">
                <h1>new arrivals</h1>
                <div>
                    <swiper :modules="modules" :breakpoints="{
                        339: { slidesPerView: 1.5, spaceBetween: 15 },
                        510: { slidesPerView: 2.5, spaceBetween: 15 },
                        768: { slidesPerView: 3.4, spaceBetween: 15 },
                        1076: { slidesPerView: 4, spaceBetween: 20 },
                        1280: { slidesPerView: 4.5, spaceBetween: 15 }
                    }" navigation pagination :mousewheel="{ scrollable: true }" :autoplay="false" class="products">
                        <swiper-slide v-for="item in products.slice(5)">
                            <!-- <router-link :to="{ name: 'Product', params : {id: item.id} }"> -->
                            <ProductCard :product="item" />
                            <!-- </router-link> -->
                        </swiper-slide>
                    </swiper>
                    <BaseButton>
                        view more <i class="fa-solid fa-share"></i>
                    </BaseButton>
                </div>
            </section>
        </div>
    </div>
</template>

<style scoped lang="scss">
:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
    position: absolute;
    top: 50%;
    width: 2rem;
    height: 2rem;
    font-size: medium;
    font-weight: bolder;
    background-color: rgb(160, 159, 159);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    z-index: 10;

    &.swiper-button-prev {
        left: 0.65%;
    }

    &.swiper-button-next {
        right: 0.65%;
    }

    &::after {
        font-size: 12px;
        color: #252525;
    }
}
</style>