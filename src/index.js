// 问题：index.js无法被浏览器直接执行
// 如果是浏览器支持的语法

// vue3创建 需要 createApp
import { createApp } from 'vue'

// 引入vue插件后，让浏览器能够识别你 
import App from './App.vue'

const app = createApp(App)
app.mount('#app')