import Vue from 'vue';

const state = {
  apiKey: '4cc9e2888fd6143958feade895be9651',
  result:[]


}

const getters = {

  result: state => {
    return state.result;
  },
  /*
  items: state => {
    return state.items;
  },
  funds: state => {
    return state.funds;
  }
  */
}

const mutations = {
  getSource: function()
{
    return this.$http.get('http://api.brewerydb.com/v2/?key=' + state.apiKey ).then((response) => {
        this.result = response.body;
    }, (response) => {
        this.result = [];

    });

},


  /*
  setItems(state, items){
    state.items = items;
  },
  setFunds(state, funds) {
    state.funds = funds;
  },
  setDesc(state, {id, desc}){
    const record = state.party.find(element => element.id == id);
    if(record) {
      record.desc = desc;
    }
  },
  buyItem(state, {id, price, quantity}) {
    const record = state.items.find(element => element.id == id);
    if(record) {
      record.stock += quantity;
      state.funds -= price * quantity;
    }
  },
  sellItem(state, {id, price, quantity}) {
    const record = state.items.find(element => element.id == id);
    if(record) {
      record.stock -= quantity;
      state.funds += price * quantity;
    }
  }
  */

}

const actions = {
  initAPI: ({commit}) => {
    commit('getSource');
  }
  /*
  initFunds: ({commit}) => {
    commit('setFunds', funds);
  },
  initParty: ({commit}) => {
    commit('setParty', party);
  },
  initDesc: ({commit}, member) => {
    commit('setDesc', member);
  },
  purchase: ({commit}, order) => {
    commit('buyItem', order);
  },
  sell: ({commit}, order) => {
    commit('sellItem', order);
  },
  loadData: ({commit}) => {
    Vue.http.get('data.json').
    then(response => response.json()).
    then(data => {
      if(data) {
        const funds = data.funds;
        const items = data.items;
        const party = data.party;
        commit('setItems', items);
        commit('setFunds', funds);
        commit('setParty', party);
      }
    });
  }
  */


}


export default {
  state,
  getters,
  mutations,
  actions
};
