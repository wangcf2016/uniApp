import { baseUrl } from '../public'
import request from '../../utils/request'

const state = {
  liginData: {}
}

const mutations = {
  login(state, data) {
  	state.liginData = data;
  }
}

const actions = {
	async login({ commit }, data) {
		console.log(baseUrl)
		console.log(JSON.stringify(data))
		request({
			url: baseUrl,
			data: {
				name: '1',
				value: '2'
			},
			success: function (res) {
				console.log(res)
			}
		})
	}
}

export default {
  state,
  mutations,
  actions
}
