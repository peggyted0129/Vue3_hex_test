<template>
<div class="home jumbotron">
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <Alert />
        <nav class="d-flex align-items-center nav-bag">
          <ul class="nav menu d-flex">
            <li>
              <router-link to="/" class="nav-link" :class="{ active: navActive == 'homeActive' }">測試區 首頁</router-link>
            </li>
            <li>
              <router-link to="/invoice" class="nav-link nav-hover" :class="{ active: navActive == 'invoiceActive' }">點餐</router-link>
            </li>
            <li>
              <router-link to="/tmc_cat" class="nav-link nav-hover" :class="{ active: navActive == 'tmc_cat_Active' }">菜單_漢堡類</router-link>
            </li>
            <li>
              <router-link to="/tmc_hct" class="nav-link nav-hover" :class="{ active: navActive == 'tmc_hct_Active' }">菜單_餐前點</router-link>
            </li>
            <li>
              <a class="nav-link nav-hover" href="#">菜單_湯類</a>
            </li>
            <li>
              <a class="nav-link nav-hover" href="#">菜單_甜點</a>
            </li>
            <li>
              <router-link to="/print" class="nav-link nav-hover" :class="{ active: navActive == 'print_Active' }">發票列印</router-link>
            </li>
            <li>
              <a class="nav-link nav-hover" href="#">發票重印</a>
            </li>
            <li>
              <router-link to="/admin" class="nav-link nav-hover" :class="{ active: navActive == 'adminActive' }">管理畫面</router-link>
            </li>
          </ul>
          <div class="dropdown ml-auto">
            <a class="nav-link nav-link-right d-flex align-items-center" @click.prevent="iconToggle" data-toggle="dropdown" href="#">
              <p class="mb-0">User : Vicky</p>
              <span class="dropdown-icon material-icons">expand_more</span>
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">取消 ( 保持登入 )</a>
              <router-link to="/Login" class="dropdown-item" @click="logout">登出</router-link>
            </div>
          </div>
        </nav>
        <AlertTmc />
        <router-view/>
      </div>
    </div>
  </div>
</div>
</template>

<script>
/* global $ */
import { mapGetters } from 'vuex'
import Alert from './AlertMessage'
import AlertTmc from './AlertTmc'

export default {
  components: {
    Alert,
    AlertTmc
  },
  data () {
    return {
      isLoading: false
    }
  },
  computed: {
    ...mapGetters(['navActive'])
  },
  methods: {
    ...mapGetters(['setNavActive']),
    iconToggle () {
      $('.dropdown-icon').toggleClass('rotate')
    },
    logout () {
      this.$store.dispatch('alertModules/updateMessage', { message: '已登出', status: 'info' })
    }
  }
}
</script>
