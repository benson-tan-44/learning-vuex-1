import Vue from 'vue';

const state = {
  apiKey: '2519bad98acfb01294fc145600974941',
  movies:[],
  genres:[],
  userGenre:null


}

const getters = {

  result: state => {
    return state.movies;
  },

  genres: state => {
    return state.genres;
  },

  userGenre: state => {
    return state.userGenre;
  }

}

const mutations = {

setMovies(state, movies) {
  state.movies = movies;
},

setGenre(state, genres) {
  state.genres = genres;
},

setUserGenre(state, selectedGenre ) {
  state.userGenre = selectedGenre;
}

}

const actions = {
  initGenres: ({commit}) => {
    Vue.http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=' + state.apiKey ).then((response) => {
    commit('setGenre',  response.body.genres );
    })

  },

  getMovies: ({commit}) => {
    Vue.http.get("https://api.themoviedb.org/3/genre/" + state.userGenre   + "/movies?api_key=" + state.apiKey ).then((response) => {
      commit('setMovies', response.body.movies)
    })
  },

  changeGenres: ({commit}, selectedGenre) => {
    commit('setUserGenre', selectedGenre);
  }



}


export default {
  state,
  getters,
  mutations,
  actions
};
