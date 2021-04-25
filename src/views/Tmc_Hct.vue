<template>
<section>
  <h1>456</h1>
</section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      userData: JSON.parse(localStorage.getItem('userData')) || [], // 取出 localStorage 的 userData
      userToken: JSON.parse(localStorage.getItem('userToken')) || []
    }
  },
  computed: {
    ...mapGetters(['navActive']) // 傳 Vuex 的值
  },
  methods: {
    ...mapActions(['setNavActive']) // 傳 Vuex 的方法
  },
  created () {
    const vm = this
    vm.setNavActive('tmc_hct_Active') // Navbar 樣式狀態停留
  }
}
</script>
