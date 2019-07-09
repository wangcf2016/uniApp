import { baseUrl } from '../public'
import request from '../../utils/request'

const state = {
	selectValue: "",
	selectName: "",
}

const mutations = {
	select(state, data){
		console.log(JSON.stringify(data))
		state.selectValue = data.data.value;
		state.selectName = data.data.name;
	}
}

const actions = {
	async select({ commit }, value) {
		commit('select',{ data: value })
	}
}

export default {
	state,
	mutations,
	actions
}