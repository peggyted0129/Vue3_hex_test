<template>
<section>
  <button type="button" @click="textBtn" class="btn-lg btn-secondary mt-5 font-weight-bolder">
    接收資料失敗，有警示聲
  </button>
</section>
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
    textBtn () {
      const vm = this
      vm.$http.get('https://randomuser.me/api/').then(res => {
        console.log('撈資料成功', res.data)
        vm.playAudio1()
        vm.$store.dispatch('alertModules/updateMessage', { message: `處理完畢, 請執行下一筆 ! ${vm.tcatno}`, status: 'info' })
      }).catch(err => {
        console.log(err)
        vm.$store.dispatch('alertModules/updateMessage', { message: '資料有誤，請再次確認', status: 'danger' })
        vm.playAudio()
      })
    },
    playAudio () {
      const audio = new Audio('/sound/alarm-tmc01.mp3')
      audio.play()
    },
    playAudio1 () {
      const audio = new Audio('/sound/alert_warm_bright_positive_event.mp3')
      audio.play()
    }
  },
  created () {
    const vm = this
    vm.setNavActive('tmc_hct_Active') // Navbar 樣式狀態停留
  }
}
</script>
