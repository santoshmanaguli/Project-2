import { createRouter, createWebHistory } from 'vue-router';
import SignUp from './components/SignUp.vue';
import SignIn from './components/SignIn.vue';
import ProfilePage from './components/ProfilePage.vue'
import ForgotPass from './components/ForgotPass.vue'
import ChangePass from './components/ChangePass.vue'

const routes = [
    {
        name: 'SignUp',
        component: SignUp,
        path: '/signup'
    },
    {
        name: 'SignIn',
        component: SignIn,
        path: '/'
    },
    {
        name: 'ProfilePage',
        component: ProfilePage,
        path: '/profile'
    },
    {
        name:'ForgotPass',
        component: ForgotPass,
        path:'/forgotpass'
    },
    {
        name:'ChangePass',
        component: ChangePass,
        path:'/changepass'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;