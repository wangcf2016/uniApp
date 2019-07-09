
import Vue from 'vue'
import Vuex from 'vuex'

import login from './modules/login'
import home from './modules/home'
import demo from './modules/demo'
import toured from './modules/toured'
import takePic from './modules/takePic'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    login: {
      namespaced: true,
      ...login
    },
		home: {
			namespaced: true,
			...home
		},
		demo: {
			namespaced: true,
			...demo
		},
		toured: {
			namespaced: true,
			...toured
		},
		takePic: {
			namespaced: true,
			...takePic
		}
  }
})

export default store

