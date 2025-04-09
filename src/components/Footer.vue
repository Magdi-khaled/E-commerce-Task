<script setup>
import { footerLinks, paylinks } from '@/composables/footerData.js';
</script>

<template>
    <footer class="container">
        <div class="footer-head">
            <div class="logo">
                <span class="brand-name">E-commerce</span>
            </div>
            <div class="footer-links">
                <a href="" v-for="(link, index) in footerLinks" :key="index">{{ link }}</a>
            </div>
        </div>
        <div class="payments">
            <div class="links">
                <a href="" title="Facebook">
                    <i class="fa-brands fa-facebook-f">
                    </i>
                </a>
                <a href="" title="Instgram">
                    <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="" title="GitHub">
                    <i class="fa-brands fa-github"></i>
                </a>
            </div>

            <div class="methods">
                <ul>
                    <li v-for="(item, index) in paylinks" :key="index">
                        <img loading="lazy" :src="item.src" :alt="item.alt">
                    </li>
                </ul>
            </div>
        </div>
        <div class="copy-right">
            <p>Copyright © 2025 e-commerce. All Rights Reseved.</p>
        </div>
    </footer>
</template>
