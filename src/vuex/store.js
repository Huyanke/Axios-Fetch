import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

// 应用初始状态
const state = {
    count: 10,
    show: true,
}

// 定义所需的 mutations
const mutations = {
  // INCREMENT(state) {
    increment(state) {
        state.count++
        state.show = true;
        console.log(state.count)
    },
    // DECREMENT(state) {
    decrement(state) {
        state.count--
        state.show = false;
        console.log(state.count)
    }
}

// 创建 store 实例
export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations
})
