import Vue from 'vue';

const state = {
  apiKey: '4cc9e2888fd6143958feade895be9651',
  result:[]


}

const getters = {

  result: state => {
    return state.result;
  }

}

const mutations = {

setSource(state, result) {
  state.result = result;
}


}

const actions = {
  initAPI: ({commit}) => {
    Vue.http.get('http://api.brewerydb.com/v2/?key=' + state.apiKey ).then((response) => {
    commit('setSource',  response.body );
  })

  }


}


export default {
  state,
  getters,
  mutations,
  actions
};
