<template>
<div class="mt-5">
  <h4 class="font-weight-bolder mb-6">Hi Vicky!</h4>
  <p class="h5 font-weight-bolder mb-4">今日點餐單 張數 : </p>
  <div class="mb-5">
    <button type="button" class="btn btn-danger" @click="getUserMe">點我，開始撈取資料</button>
  </div>
  <div class="table-responsive bg-white mb-5" style="max-width: 450px">
    <table class="table border mb-0">
      <thead>
        <tr>
          <th style="width:150px;" scope="col">代號</th>
          <th style="width:150px;" scope="col">總張數</th>
          <th scope="col">Operations</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colspan="3" class="text-center"> 無今日點餐單資料 </td>
        </tr>
        <!--
        <tr v-if="todayData.length > 0">
          <td class="py-5 align-middle">{{ userData[0].mancode }}</td>
          <td class="py-5 align-middle">{{ todayData.length }}</td>
          <td class="py-5 align-middle">
            <router-link to="/OrderDetail" type="button" class="btn btn-secondary font-weight-bolder">
              查看明細
            </router-link>
          </td>
        </tr>-->
      </tbody>
    </table>
  </div>
  <router-link to="/Login" class="btn btn-lg btn-secondary font-weight-bolder" @click="logout">登出</router-link>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['navActive']) // 傳 Vuex 的值
  },
  methods: {
    ...mapActions(['setNavActive']), // 傳 Vuex 的方法
    getUserMe () {
      const vm = this
      vm.$store.dispatch('alertModules/tmcUpdateMessage', { message: '我是另一個 Tmc_Alert。開始撈資料囉!', status: 'danger' })
      vm.$http.get('https://randomuser.me/api/').then(res => {
        console.log('撈資料成功', res)
      })
    },
    logout () {
      this.$store.dispatch('alertModules/updateMessage', { message: '已登出', status: 'info' })
    }
  },
  created () {
    const vm = this
    vm.setNavActive('homeActive') // Navbar 樣式狀態停留
  }
}
</script>
