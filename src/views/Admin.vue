<template>
  <section>
    <button type="button" class="btn btn-primary my-5">
      <div class="d-flex align-items-center justify-content-center">
        <span class="material-icons">add</span>
        <p class="mb-0 pt-1">新增</p>
      </div>
    </button>
    <table class="table table-hover border bg-white" v-if="adminData">
      <thead class="bg-milk">
        <tr>
          <th scope="col" style="min-width:120px">姓名</th>
          <th scope="col" style="min-width:120px">代號</th>
          <th scope="col">eMail</th>
          <th scope="col" style="min-width:120px">部門</th>
          <th scope="col">操作</th>
        </tr>
      </thead>
      <tbody v-for="user in adminData" :key="user.id">
        <tr>
          <th scope="row" class="align-middle">{{ user.name }}</th>
          <td class="align-middle">{{ user.mancode }}</td>
          <td class="align-middle">{{ user.email }}</td>
          <td class="align-middle">{{ user.depno }}</td>
          <td class="align-middle">
            <button type="button" class="btn-sm btn-secondary text-white mr-5"
             data-toggle="modal" data-target="#updateModal">修改</button>
            <button type="button" class="btn-sm btn-danger">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <!--Modal-->
    <div class="modal fade" id="updateModal" tabindex="-1" role="dialog" aria-labelledby="updateModal" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">修改</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      userData: JSON.parse(localStorage.getItem('userData')) || [],
      userToken: JSON.parse(localStorage.getItem('userToken')) || [],
      adminData: [] // 撈出的 admin 使用者名單
    }
  },
  computed: {
    ...mapGetters(['navActive'])
  },
  methods: {
    ...mapActions(['setNavActive']),
    getAllUser () {
      const vm = this
      const api = `${process.env.VUE_APP_API_URL}/users`
      vm.$http.get(api, {
        headers: {
          Authorization: vm.userToken[0]
        }
      }).then(res => {
        console.log(res)
        vm.adminData = res.data
        console.log('vm.adminData', vm.adminData)
      })
    }
  },
  created () {
    const vm = this
    vm.setNavActive('adminActive') // Navbar 樣式狀態停留
    console.log(vm.userData)
    console.log(vm.userToken[0])
    vm.getAllUser()
  }
}
</script>
