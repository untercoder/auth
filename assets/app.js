/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';

import Vue from 'vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router';

import Login from './components/Login.vue'
import UserTable from './components/UserTable.vue'

Vue.use(VueRouter);

const routes = [
    {path: '/', component: Login, name: 'login'},
    {path: '/table', component: UserTable, name: 'table'}
]

const router = new VueRouter({
    mode: 'history',
    routes
})

new Vue({
    vuetify,
    router
}).$mount('#app')

