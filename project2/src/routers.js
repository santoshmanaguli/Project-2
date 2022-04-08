import { createRouter, createWebHistory } from 'vue-router';
import SignUp from './components/SignUp.vue';
import SignIn from './components/SignIn.vue';

const routes = [
    {
        name: 'SignUp',
        component: SignUp,
        path: '/signup'
    },
    {
        name: 'SignIn',
        component: SignIn,
        path: '/signin'
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;