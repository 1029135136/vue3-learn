import {createApp} from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import './assets/main.css'
import Axios from 'axios';//引入axios
import router from './router'
const app = createApp(App)
app.use(ElementPlus, {size: 'small', zIndex: 3000})
app.use(ElementPlus)
app.use(router)
app.config.errorHandler = function (err, vm, info) {
    console.log(err, vm, info)
}
app.config.globalProperties.Axios=Axios //全局配置axios

app.mount('#app')
