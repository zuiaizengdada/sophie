import {
	mapGetters,
	mapMutations
} from "vuex"

const themeMixin = {
	computed: {
		...mapGetters('theme', ['getCurrThemeType'])
	},
	methods: {
		...mapMutations('theme', ['setCurrThemeType'])
	}
}

export default themeMixin
