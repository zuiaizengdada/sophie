const state = {
	currThemeType: 'dark' //当前主题类型
}

const getters = {
	// 获得当前主题类型
	getCurrThemeType(state) {
		return state.currThemeType
	}
}

const mutations = {
	// 修改当前主题类型
	setCurrThemeType(state, data) {
		state.currThemeType = data
	}
}

export default {
	namespaced: true,
	state,
	getters,
	mutations
}
