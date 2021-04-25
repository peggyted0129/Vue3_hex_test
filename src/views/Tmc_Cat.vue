<template>
<section class="mt-5">
  <Form @submit="Tmcprint" v-slot="{ errors, values, validate }">
    <div style="display:none">{{ errors }}{{ values }}{{ validate }}</div>
    <label for="點餐單號" class="h1 text-left mb-3">點餐單號</label>
    <Field type="text" v-model="tcatno" class="form-control tmc-input-h" id="點餐單號" name="點餐單號"
     :class="{ 'is-invalid': errors['點餐單號'] }" rules="required"></Field>
    <error-message name="點餐單號" class="invalid-feedback"></error-message>
    <button type="submit" class="btn-lg btn-secondary mt-5 font-weight-bolder">
      輸入
    </button>
  </Form>
  <div style="height: 300px;width: 300px">
    <img src="https://upload.cc/i1/2021/04/24/4FRj5D.jpg" alt="漢堡 logo">
  </div>
  <div>
    <p class="d-flex align-items-center">
      <span class="h1 mr-9">今日張數 : 0 </span>
      <button type="button" class="btn-lg btn-outline-secondary text-dark font-weight-bolder" @click="detail">
        明細
      </button>
    </p>
    <button type="button" class="btn-lg btn-outline-secondary text-dark font-weight-bolder" @click="updateData">
      更新
    </button>
  </div>
</section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      tcatno: '',
      audios: [
        {
          id: 'error-alert',
          name: 'Error alert',
          file: new Audio('/sound/alarm-tmc01.mp3'),
          isPlaying: false
        },
        {
          id: 'warm-alert',
          name: 'Warm alert',
          file: new Audio('/sound/alarm-tmc01.mp3'),
          isPlaying: false
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['navActive']) // 傳 Vuex 的值
  },
  methods: {
    ...mapActions(['setNavActive']), // 傳 Vuex 的方法
    Tmcprint () {
      const vm = this
      console.log('1234')
      vm.$store.dispatch('alertModules/updateMessage', { message: '處理中...請稍等!', status: 'danger' })
      vm.$http.get('https://randomuser.me/api/').then(res => {
        console.log('撈資料成功', res)
        vm.$store.dispatch('alertModules/updateMessage', { message: '成功撈取資料', status: 'info' })
      })
    },
    play_audio (audio) {
      audio.isPlaying = true
      audio.file.play()
    },
    pause_audio (audio) {
      audio.isPlaying = false
      audio.file.pause()
    }
  },
  created () {
    const vm = this
    vm.setNavActive('tmc_cat_Active') // Navbar 樣式狀態停留
  }
}
</script>
