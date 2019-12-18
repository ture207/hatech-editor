import Vue from 'vue'
import App from './App.vue'

import hatechEditor from './index.js' //使用本地的

Vue.use(hatechEditor)

new Vue({
    el: '#app',
    render: h => h(App)
})