import { createApp } from 'vue'
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate'
import { required, email, min } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap'
import jquery from 'jquery'

import App from './App.vue'
import router from './router'
import store from './store'
window.$ = jquery

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})
setLocale('zh_TW')

const app = createApp(App).use(store)
app.config.productionTip = false
app.component('Form', Form) // 在全域的環境啟用此元件
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')
