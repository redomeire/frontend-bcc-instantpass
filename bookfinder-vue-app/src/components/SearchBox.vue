<template>
  <section
    id="findBook"
    class="d-flex flex-column align-items-center justify-content-center p-5"
  >
    <h1 class="text-center font-weight-bold">Find IT books that you want</h1>
    <figcaption class="text-center mt-2">
      <q> A room without books is like a body without a soul </q>
      <br />
      <span>&mdash; Cicero</span>
    </figcaption>
    <div class="search-bar mt-5 mx-auto">
      <div
        class="card input-group p-3 d-flex flex-column justify-content-center align-items-end"
      >
        <div class="forms d-flex flex-wrap">
          <div class="form-1 w-100 text-left">
            <label for="" class="mb-2">Search by title or isbn</label>
            <div class="form-outline">
              <input
                type="search"
                id="search-title"
                class="form-control search-input text-black"
                placeholder="type something..."
              />
            </div>
          </div>
        </div>
        <button
          id="search-button"
          type="button"
          v-on:click="submitButton"
          class="btn rounded-3 mt-4 d-flex align-items-center justify-content-center"
        >
          <img src="../assets/search-icon.png" width="20" alt="" />
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import store from "../store/modules/Books";
export default {
  name: "Search",
  components: {},
  computed: {},
  methods: {
    ...mapActions(["fetchBooksData"]),
    submitButton: function () {
      const inputValue = document.querySelector("#search-title").value;
      store.mutations.setUserInputData(inputValue);
      this.fetchBooksData();
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 30px;
}

.card {
  transition: ease 0.2s;
}

.card:hover {
  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

#search-button {
  background-color: #ee6f57;
  width: 30%;
}

#search-button:focus {
  border-color: #ee6f57;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6);
  z-index: 1;
}
</style>
