import {  createRouter, createWebHistory } from "vue-router";

import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Delivery from '../views/Delivery.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart
    },
    {
        path: '/delivery',
        name: 'delivery',
        component: Delivery
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;