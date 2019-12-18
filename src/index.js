import hatechEditor from './component/Hatech-Editor.vue'
const editor = {
    install(Vue, options) {
        Vue.component('hatechEditor', hatechEditor);//'component-name'这就是后面可以使用的组件的名字，install是默认的一个方法
    }
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(editor);
}
export default editor