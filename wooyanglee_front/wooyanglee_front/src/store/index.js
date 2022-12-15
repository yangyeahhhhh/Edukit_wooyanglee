import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './models/auth'
import User from './models/user'
import History from './models/history'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Auth,
    User,
    History
  }
})
