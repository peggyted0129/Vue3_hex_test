<template>
<section>
  <h1>發票列印頁</h1>
  <button type="button" @click="goPrint" class="btn-lg btn-secondary mt-5 font-weight-bolder">
    列印囉~~
  </button>
</section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MixPrint from '@/components/MixPrint.vue'

export default {
  mixins: [MixPrint],
  data () {
    return {
      store: '1', // 店家名稱代號
      armbno: [
        { bilym: 'u', food: '奶茶', bilno: 'MD28153367' },
        { bilym: 'u', food: '麵', bilno: 'MD28153368' },
        { bilym: 'u', food: '咖哩飯', bilno: 'MD28153369' }
      ],
      bilnoNums: ['MD28153367', 'MD28153368']
    }
  },
  computed: {
    ...mapGetters(['navActive'])
  },
  methods: {
    ...mapActions(['setNavActive']),
    goPrint () {
      const vm = this
      vm.$store.dispatch('alertModules/updateMessage', { message: '處理列印中...', status: 'info' })
      vm.bilnoNums.forEach(bilnoNUm => {
        console.log(bilnoNUm) // 一一帶入發票代號 'MDXXXXXX'
        const getBilno = vm.armbno.find(item => { // 找對應的發票明細
          return item.bilno === bilnoNUm
        })
        console.log(getBilno) // 得到對應的發票明細 'MD28153367' 和類別 'u'
        /* GET 發票明細
        const api = `${env.process.VUE_APP_API_URL}/api/armbil/print?bilym=${getBilno.bilno}&bilno=${getBilno.bilym}`
        vm.$http.get(api).then(res => {
          console.log(res)
          const format = vm.getForm(res.data.armbno, res.data.armbil, res.data.armcdd , '0')
          console.log('format', format)
        })
        */
        const format = vm.getForm('0')
        console.log('format', format)
      })
    }
  },
  created () {
    const vm = this
    vm.setNavActive('print_Active') // Navbar 樣式狀態停留
  }
}
</script>
