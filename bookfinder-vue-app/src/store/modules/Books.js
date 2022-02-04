import "axios";
import axios from "axios";

const state = {
  Books: [],
  UserInput: [],
};

const getters = {
  allBooks: (state) => state.Books,
  userInput: (state) => state.UserInput,
};

const actions = {
  async fetchBooksData({ commit }) {
    await axios
      .get("https://api.itbook.store/1.0/search/" + state.UserInput)
      .then((response) => {
        const books = response.data.books;
        console.log(books);
        commit("setBooksData", books);
      })
      .catch((error) => {
        console.log(error);
        alert("error occured, please try again");
      });
  },
};

const mutations = {
  setBooksData: (state, books) => (state.Books = books),
  setUserInputData: (UserInput) => (state.UserInput = UserInput),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
