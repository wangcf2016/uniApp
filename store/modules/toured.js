import { baseUrl } from '../public'
import request from '../../utils/request'

const state = {
	selectValue: "",
	selectName: "",
	listData: [
		{
			id: 1,
			type: 1,
			time: "2018-08-03至08-19",
			num: "3次/周",
			man: "李达康、秦始皇、武则天、还有很多字"
		},
		{
			id: 2,
			type: 2,
			time: "2018-08-03至08-19",
			num: "7次/周",
			man: "呵呵"
		},
		{
			id: 3,
			type: 3,
			time: "2018-08-03至08-19",
			num: "5次/周",
			man: "李明"
		},
		{
			id: 4,
			type: 3,
			time: "2018-08-03至08-19",
			num: "4次/周",
			man: "二狗"
		}
	]
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