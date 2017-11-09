import Vue from 'vue';

const state = {
  apiKey: '2519bad98acfb01294fc145600974941',
  movies:[],
  genres:[],
  userGenre:null,
  isGenreSelected: false,
  showSingle:false,
  singleMovie: {},



}

const getters = {

  movies: state => {
    return state.movies;
  },

  genres: state => {
    return state.genres;
  },

  userGenre: state => {
    return state.userGenre;
  },

  isGenreSelected: state => {
    return state.isGenreSelected;
  },

  showSingle: state => {
    return state.showSingle;
  },

  singleMovie: state => {
    return state.singleMovie;
  },

  apiKey: state =>
  {
    return state.apiKey;
  }

}

const mutations = {

setMovies(state, movies) {
  state.movies = movies;
},

setGenre(state, genres) {
  state.genres = genres;
},

setGenreSelected(state, genreId) {
  state.isGenreSelected = !state.isGenreSelected;
  state.userGenre = genreId;
},

setShowSingle(state, movieObject) {
  state.showSingle = !state.showSingle;
  state.singleMovie = movieObject;
},

falseShowSingle(state) {
  state.showSingle = false;
},

falseGenreSelected(state) {
  state.isGenreSelected = false;
},


}

const actions = {
  initGenres: ({commit}) => {
    Vue.http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=' + state.apiKey ).then((response) => {
    commit('setGenre',  response.body.genres );
    })

  },

  getMovies: ({commit}) => {
    Vue.http.get('https://api.themoviedb.org/3/discover/movie?api_key=' + state.apiKey + '&with_genres=' + state.userGenre + '&page=1'  ).then((response) => {
    commit('setMovies',  response.body.results );
    })

  },


  genreSelected: ({commit}, genreId) =>
  {
    commit('setGenreSelected', genreId);
  },

  singleSelected: ({commit}, movieObject) => {
    commit('setShowSingle', movieObject);
  },

  backList: ({commit}) =>
  {
    commit('falseShowSingle');
  },

  backGenres: ({commit}) =>
  {
    commit('falseGenreSelected');
  }


}



export default {
  state,
  getters,
  mutations,
  actions
};
