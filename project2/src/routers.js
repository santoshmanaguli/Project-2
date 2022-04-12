import { createRouter, createWebHistory } from 'vue-router';
import SignUp from './components/SignUp.vue';
import SignIn from './components/SignIn.vue';
import ProfilePage from './components/ProfilePage.vue'

const routes = [
    {
        name: 'SignUp',
        component: SignUp,
        path: '/'
    },
    {
        name: 'SignIn',
        component: SignIn,
        path: '/signin'
    },
    {
        name: 'ProfilePage',
        component: ProfilePage,
        path: '/profile'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;