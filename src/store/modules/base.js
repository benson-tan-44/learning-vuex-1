import Vue from 'vue';

const state = {
  apiKey: '2519bad98acfb01294fc145600974941',
  movies:[],
  genres:[],
  userGenre:null,
  isGenreSelected: false,
  showSingle:false,
  singleMovie: {},
  pageID:1



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
  },
  pageID: state =>
  {
    return state.pageID;
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

alterPage(state, command) {
  if(command === "add") {
    state.pageID++;
  } else if (command === "sub") {
    state.pageID--;
  }

}


}

const actions = {
  initGenres: ({commit}) => {
    Vue.http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=' + state.apiKey ).then((response) => {
    commit('setGenre',  response.body.genres );
    })

  },

  getMovies: ({commit}) => {
    Vue.http.get('https://api.themoviedb.org/3/discover/movie?api_key=' + state.apiKey + '&with_genres=' + state.userGenre + '&page=' + state.pageID  ).then((response) => {
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
  },

  changePage: ({commit}, command) =>
  {
    commit('alterPage', command);
  }


}



export default {
  state,
  getters,
  mutations,
  actions
};
