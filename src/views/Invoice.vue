<template>
<section class="mt-5">
  <label for="出貨單號" class="h1 text-left mb-3">出餐單號</label>
  <input type="text" v-model="tracking" class="form-control tmc-input-h" id="出餐單號" name="出餐單號">
  <button type="button" class="btn-lg btn-secondary mt-5 font-weight-bolder">
     列印
  </button>
</section>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      tracking: '' // 出貨單號
    }
  },
  computed: {
    ...mapGetters(['navActive'])
  },
  methods: {
    ...mapActions(['setNavActive'])
  },
  created () {
    const vm = this
    vm.setNavActive('invoiceActive')
  }
}
</script>
