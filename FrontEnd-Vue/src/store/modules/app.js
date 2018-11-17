/* eslint-disable no-multi-spaces */
/* eslint-disable space-in-parens */
/* eslint-disable no-trailing-spaces */
/* eslint-disable key-spacing */
// /* eslint-disable no-unused-vars */
// /* eslint-disable padded-blocks */
// /* eslint-disable func-call-spacing */
// /* eslint-disable spaced-comment */
/* eslint-disable */
import conf from '../../assets/js/conf'
const state = {
  treeData : null,
  treeDataSerial : null,
  currentBlockId: null,
  scenarioName: 'KKK1245'
}

const getters  = {
  __end () {
  }

}

const mutations = {
  treeData ( state, payload )  {
    state.treeData  = payload
  },
  treeDataSerial (state, payload) {
    state.treeDataSerial = payload
  },
  currentBlockId (state, payload) {
    state.currentBlockId = payload
  },
  scenarioName (state, payload) {
    state.scenarioName = payload
  },
  end () {}
}

const actions = {
  end () {}
}

export default {
  namespaced : true,
  state,
  getters,
  actions,
  mutations
}
