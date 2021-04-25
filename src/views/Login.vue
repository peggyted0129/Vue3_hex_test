<template>
<div class="jumbotron">
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <nav class="d-flex align-items-center nav-bag">
          <ul class="nav menu">
            <li class="nav-border nav-link">
              測試區 首頁
            </li>
          </ul>
        </nav>
        <h1 class="text-center mt-3">帳號登錄</h1>
        <Alert />
        <Form v-slot='{ errors, values, validate }'>
          <!--此行隱藏 : 錯誤訊息變數要掛上去，否則 ESLint 會跳錯-->
          <div style="display:none">{{ errors }}{{ values }}{{ validate }}</div>
          <div class="form-group">
            <label for="員工代號" class="h1 text-left">員工代號</label>
            <Field type="text" class="form-control" id="員工代號" name="員工代號"
             :class="{ 'is-invalid': errors['員工代號'] }" rules="required"></Field>
            <error-message name="員工代號" class="invalid-feedback login-error"></error-message>
          </div>
          <div class="form-group mb-8">
            <label for="密碼" class="h1 text-left">密碼</label>
            <Field type="password" class="form-control" id="密碼" name="密碼"
             :class="{ 'is-invalid': errors['密碼'] }" rules="required"></Field>
            <error-message name="密碼" class="invalid-feedback login-error"></error-message>
          </div>
          <div class="form-group">
            <button type="button" class="btn btn-primary" @click="signin">
              Login
              <i class="fas fa-spinner fa-spin" v-if="status.loadingIcon"></i>
            </button>
          </div>
        </Form>
        <router-view/>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Alert from '../components/AlertMessage'

export default {
  components: {
    Alert
  },
  data () {
    return {
      status: { // loadingItem 判斷畫面上哪個元素正在讀取中
        loadingIcon: false
      }
    }
  },
  methods: {
    signin () {
      const vm = this
      vm.$store.dispatch('alertModules/updateMessage', { message: '已登入', status: 'info' })
      vm.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/all';

.nav-link, .nav-link:hover {
  background-color: #545c64;
  color: rgb(85, 208, 75);
  text-decoration: none;
}
.nav-border {
  border-bottom: solid 3px rgb(85, 208, 75);
}
</style>
