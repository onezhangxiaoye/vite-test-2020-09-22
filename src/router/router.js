import {createRouter, createWebHashHistory} from "vue-router";
import Home from "../view/home/Home.vue";
import Page from "../view/page/Page.vue";

const routers = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/page',
        name: 'page',
        component: Page,
    },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routers,
})
