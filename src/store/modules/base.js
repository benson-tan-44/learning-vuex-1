import items from '../../data/items';
import Vue from 'vue';

const state = {
  items: [],
  funds: 10000

}

const getters = {
  items: state => {
    return state.items;
  },
  funds: state => {
    return state.funds;
  }
}

const mutations = {
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
  },

}

const actions = {
  initItems: ({commit}) => {
    commit('setItems', items);
  },
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


}


export default {
  state,
  getters,
  mutations,
  actions
};
