<template>
  <div id="app">
    <navbar-top></navbar-top>
    <jumbotron-detail></jumbotron-detail>
    <b-container fluid>
      <search-box> </search-box>
      <div
        class="books-container mt-5 w-100 py-5 d-flex flex-wrap justify-content-center"
      >
        <card-result
          v-for="book in allBooks"
          :key="book.isbn"
          v-bind:image="book.image"
          v-bind:title="book.title"
          v-bind:subtitle="book.subtitle"
          v-bind:price="book.price"
          v-bind:isbn="book.isbn13"
          v-bind:url="book.url"
        >
        </card-result>
      </div>
      <search-result> </search-result>
    </b-container>
    <footer-bottom></footer-bottom>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TopNavigation from "@/components/TopNavigation.vue";
import Jumbotron from "@/components/Jumbotron.vue";
import Card from "@/components/Card.vue";
import SearchBox from "@/components/SearchBox.vue";
import SearchResult from "@/components/SearchResult.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  methods: {},
  computed: mapGetters(["allBooks"]),
  components: {
    "navbar-top": TopNavigation,
    "jumbotron-detail": Jumbotron,
    "card-result": Card,
    "search-box": SearchBox,
    "search-result": SearchResult,
    "footer-bottom": Footer,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

html {
  scroll-behavior: smooth;
}

#app {
  font-family: "Quicksand", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
