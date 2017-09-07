import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: null,
    count: 0,
    icon: '/static/img/ico-user-default.png',
    socket: {
      isConnected: false,
      conversations: ''
    },
    todayFormat: new Date()
  },
  actions: {
    tokenSet: (data) => {
      store.commit('TOKEN_SET', data)
    }
  },

  mutations: {
    REFRESH_DATA_MUTATION: (state, data) => {
    //  alert(data)
    },
    SOCKET_ONOPEN (state, event) {
      store.state.socket.isConnected = true
    },
    SOCKET_ONCLOSE (state, event) {
      store.state.socket.isConnected = false
    },
    SOCKET_ONERROR (state, event) {
      console.error(state, event)
    },
    // default handler called for all methods
    SOCKET_ONMESSAGE (event, messageBack) {
      if (messageBack.data != null) {
        alert('store')
        let oneData = JSON.parse(messageBack.data)
        if (oneData.command === 'CONVLIST') {
          store.state.socket.conversations = oneData.list
        }
        // alert(oneData)
      }
    },
    TOKEN_SET (state, token) {
      store.state.token = token
    }
  },

  getters: {

  }
})

export default store
