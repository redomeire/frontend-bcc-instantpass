<template>
  <b-card
    data-aos="fade-up"
    data-aos-duration="1000"
    img-alt="Image"
    img-top
    style="width: 250px; margin: 1rem"
  >
    <div
      class="card-image"
      v-bind:style="{
        backgroundImage: 'url(' + image + ')',
      }"
    ></div>
    <div class="card-details">
      <h6 class="font-weight-bold p-2">
        {{ title }}
      </h6>
      <section>
        <button
          v-on:click="showCustomDialog = !showCustomDialog"
          class="book-details my-4 btn rounded-pill text-white font-weight-bold"
        >
          Detail
        </button>
        <div
          id="custom-dialog"
          class="custom-dialog shadow-lg position-fixed p-4 text-left text-white w-75"
          v-show="showCustomDialog"
        >
          <h6>Book Data</h6>
          <ul>
            <li>Title : {{ title }}</li>
            <li>Subtitle : {{ subtitle }}</li>
            <li>Price : {{ price }}</li>
            <li>ISBN code : {{ isbn }}</li>
          </ul>
          <a
            :href="url"
            class="btn-preview btn rounded-3 text-white fw-bold"
            target="_blank"
            >Visit Preview</a
          >
          <button
            class="close-custom btn rounded-pill text-white fw-bold"
            v-on:click="showCustomDialog = !showCustomDialog"
          >
            <img src="../assets/close-icon.png" alt="" style="width: 20px" />
          </button>
        </div>
      </section>
    </div>
  </b-card>
</template>

<script>
export default {
  props: ["image", "title", "subtitle", "isbn", "price", "url"],
  data: function () {
    return {
      showCustomDialog: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.card-body {
  padding: 0;
  transition: ease 0.2s;
}

.card-image {
  height: 300px;
  background-size: cover;
}

.card-title {
  font-weight: bold;
}

.card-body:hover {
  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

.book-details {
  background-color: #ee6f57;
  border: none;
}

.book-details:hover {
  background-color: #ee6f57;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6);
}

.book-details:focus {
  background-color: #ee6f57;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6);
}

.custom-dialog {
  background-color: #ee6f57;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 2;
}

.close-custom {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  padding: 0;
}

.btn-preview {
  background-color: #1f3c88;
}
</style>
