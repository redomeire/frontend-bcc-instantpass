<template>
  <div>
    <b-jumbotron
      class="d-flex px-5 pt-5 pb-lg-0 pb-sm-5 flex-lg-row flex-sm-column-reverse align-items-center justify-content-center"
    >
      <div
        class="jumbotron-details d-flex w-100 flex-column align-items-sm-center text-lg-left align-items-lg-start"
      >
        <h1 class="text-lg-left text-sm-center font-weight-bold">
          Welcome and Enjoy!!
        </h1>
        <p class="mt-4 text-lg-left text-sm-center">
          Hello there! Welcome to the IT bookfinder website. Here, you can find
          your favorite IT book based on the title or the ISBN. The books
          consist of tutorial, popular frameworks, latest technology, and etc.
          This website consume itbookstore api
        </p>
        <b-button class="mt-4 font-weight-bold" href="#findBook"
          >Scroll down</b-button
        >
      </div>
      <div
        class="jumbotron-image d-flex align-items-center justify-content-center ms-lg-5"
      >
        <img src="../assets/jumbotron-book-image.png" class="w-100" alt="" />
      </div>
    </b-jumbotron>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.jumbotron {
  background: url(../assets/jumbotron-background.jpg);
}

h1 {
  color: #ee6f57;
}

p {
  font-size: 18px;
  color: #070d59;
}

.jumbotron-details {
  a {
    background-color: #1f3c88;
  }
}

.jumbotron-image {
  width: 50%;
}

@media screen and (max-device-width: 576px) {
  .jumbotron {
    flex-direction: column-reverse;

    h1 {
      text-align: center;
    }

    p {
      text-align: justify;
    }
  }

  .jumbotron-image {
    width: 100%;
  }
}
</style>
