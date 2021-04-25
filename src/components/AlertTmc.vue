<template>
<div>
  <div class="h4 tmc-message-alert mt-7">
    <div class="alert alert-dismissible" :class="'alert-' + item.status"
          v-for="(item, i) in tmcMessage" :key="i">
      {{ item.message }}
      <button type="button" class="close" @click="tmcRemoveMessage(i)" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
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
    ...mapGetters('alertModules', ['tmcMessage'])
  },
  methods: {
    ...mapActions('alertModules', ['tmcUpdateMessage', 'tmcRemoveMessageWithTiming', 'tmcRemoveMessage'])
  }
}
</script>
<style scope>
.tmc-message-alert {
  max-width: 100%;
}
/*
.message-alert {
  max-width: 70%;
  position: fixed;
  top: 140px;
  right: 20px;
  z-index: 2000;
}
*/
</style>
