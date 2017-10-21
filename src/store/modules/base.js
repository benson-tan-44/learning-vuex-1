import Vue from 'vue';

const state = {
  apiKey: '2519bad98acfb01294fc145600974941',
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
    Vue.http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=' + state.apiKey ).then((response) => {
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
