<script>
export default {
  name: 'MixPrint',
  data () {
    return {
    }
  },
  methods: {
    getStore (getStoreNum) { // 帶入店家名稱代號得到店名
      const storeNames = [
        { taxnos: null, sellers: null, aeskey: null },
        {
          taxnos: '23316065', sellers: '利百美興業股份有限公司', aeskey: 'AB5AA1DCCEC1980CDD686E8BC45CB523'
        },
        { taxnos: null, sellers: null, aeskey: null },
        { taxnos: null, sellers: null, aeskey: null },
        {
          taxnos: '80218178', sellers: '施美有限公司', aeskey: '9979CFBF6473A96924975F101D5A3C3F'
        },
        {
          taxnos: '27687881', sellers: '樂兒美有限公司', aeskey: '945CD88FFD22E4383A64616B0E48C25A'
        },
        {
          taxnos: '27701069', sellers: '安而美有限公司', aeskey: '9D696C2CB1BCFEC4DF69291496AE271F'
        }
      ]
      return storeNames[getStoreNum]
    },
    getForm (times) {
      const getStoreName = this.getStore(this.store)
      console.log(getStoreName)
      // 得到資料
      const format = {
        RequestType: '2',
        InvoiceData: {
          ElcInvLineAdd: '-16',
          CopyTimes: times,
          // PatCnt: this.parsePatCnt(armcdd),
          // Ym: this.parseYm(armbil.bildat),
          // InvNo: armbil.bilno,
          // Rand: armbno.rand,
          AesKey: getStoreName.aeskey,
          MasTaxNo: getStoreName.taxnos
          // TaxNum: (armbil.uniform.trim() === '' || armbil.uniform == null) ? '00000000' : armbil.uniform,
          // Pric: this.parsePric(armbil),
          // PatStr: this.parsePatStr(armcdd),
          // Remark: '發票證明聯有誤, 請於次月5日前更正, 逾期恕不受理. ;' + armbil.bildat,
          // Text: this.parseText(armbil, armcdd, getStoreName.seller, getStoreName.taxno)
        }
      }
      return format
    }
  }
}
</script>
