<template>
<section class="mt-5">
  <div class="d-flex mb-5">
    <h4>單據明細</h4>
    <router-link to="/" type="button" class="btn btn-secondary order-btn">
      回到上一頁
    </router-link>
  </div>
  <div class="table-responsive bg-white mb-5" style="max-width: 600px">
    <table class="table border mb-0">
      <thead>
        <tr class="bg-theme font-weight-bolder">
          <th style="width:150px;" scope="col">代號</th>
          <th style="width:150px;" scope="col">單號</th>
          <th scope="col">時間</th>
        </tr>
      </thead>
      <tbody v-for="item in todayData" :key="item.indate">
        <tr v-if="todayData.length == 0">
          <td colspan="3" class="text-center"> 無今日出貨單資料 </td>
        </tr>
        <tr v-if="todayData.length > 0">
          <td class="py-5 align-middle">{{ userData[0].mancode }}</td>
          <td class="py-5 align-middle">{{ item.shpno }}</td>
          <td class="py-5 align-middle">{{ item.indate }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr class="bg-theme font-weight-bolder">
          <td>總計</td>
          <td colspan="2">今日出貨單總計 {{ todayData.length }} 張</td>
        </tr>
      </tfoot>
    </table>
  </div>
</section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      userData: JSON.parse(localStorage.getItem('userData')) || [], // 取出 localStorage 的 userData
      userToken: JSON.parse(localStorage.getItem('userToken')) || [],
      todayData: [] // 今日貨單張數明細
    }
  },
  computed: {
    ...mapGetters(['navActive']) // 傳 Vuex 的值
  },
  methods: {
    ...mapActions(['setNavActive']), // 傳 Vuex 的方法
    getTodayData () {
      const vm = this
      const api = `${process.env.VUE_APP_API_URL}/api/getpack_detail/${vm.userData[0].mancode}`
      vm.$http.get(api, {
        headers: {
          Authorization: vm.userToken[0]
        }
      }).then(res => {
        console.log(res.data)
        vm.todayData = res.data
      })
    }
  },
  created () {
    const vm = this
    vm.setNavActive('homeActive') // Navbar 樣式狀態停留
    vm.getTodayData() // 撈取貨單張數
  }
}
</script>
