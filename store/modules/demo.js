
const state = {
  singleValue: '',
	singleName: '',
	moreValue: '',
	moreName: ''
}

const mutations = {
  singleSelect(state, data) {
		console.log(JSON.stringify(data))
  	state.singleValue = data.data.value;
		state.singleName = data.data.name;
  },
	moreSelect(state, data) {
		state.moreValue = data.data.value;
		state.moreName = data.data.name;
	}
}

const actions = {
	async singleSelect({ commit }, value) {
		commit('singleSelect', { data: value })
	},
	async moreSelect({ commit }, value) {
		commit('moreSelect', { data: value })
	}
}

export default {
  state,
  mutations,
  actions
}
