export default {
  namespaced: true,
  state: {
    messages: [],
    tmcMessage: []
  },
  getters: {
    messages: (state) => state.messages,
    tmcMessage: (state) => state.tmcMessage
  },
  mutations: {
    TMC_UPDATE_MESSAG (state, payload) {
      state.tmcMessage.push(payload)
    },
    TMC_REMOVE_MESSAGE (state, payload) {
      state.tmcMessage.splice(payload, 1)
    },
    UPDATE_MESSAGE (state, payload) {
      state.messages.push(payload)
    },
    REMOVE_MESSAGE (state, payload) {
      state.messages.splice(payload, 1)
    }
  },
  actions: {
    tmcUpdateMessage (context, { message, status }) {
      const timestamp = Math.floor(new Date() / 1000) // 觸發訊息的時間戳
      context.commit('TMC_UPDATE_MESSAG', { message, status, timestamp })
      context.dispatch('tmcRemoveMessageWithTiming', timestamp) // 觸發 removeMessageWithTiming()
    },
    tmcRemoveMessageWithTiming (context, timestamp) { // 5 秒一到把自己移除
      setTimeout(() => {
        context.state.tmcMessage.forEach((item, index) => {
          if (item.timestamp === timestamp) {
            context.commit('TMC_REMOVE_MESSAGE', index)
          }
        })
      }, 5000)
    },
    tmcRemoveMessage (context, index) {
      context.commit('TMC_REMOVE_MESSAGE', index)
    },
    /* ----------------------------------------------- */
    updateMessage (context, { message, status }) {
      const timestamp = Math.floor(new Date() / 1000) // 觸發訊息的時間戳
      context.commit('UPDATE_MESSAGE', { message, status, timestamp })
      context.dispatch('removeMessageWithTiming', timestamp) // 觸發 removeMessageWithTiming()
    },
    removeMessageWithTiming (context, timestamp) { // 10 秒一到把自己移除
      setTimeout(() => {
        context.state.messages.forEach((item, index) => {
          if (item.timestamp === timestamp) {
            context.commit('REMOVE_MESSAGE', index)
          }
        })
      }, 5000)
    },
    removeMessage (context, index) {
      context.commit('REMOVE_MESSAGE', index)
    }
  }
}
