<template>
  <div>
    <h1>Top Page</h1>
    <div>
      <img v-if="image" :src="imageUrl" :alt="name" :class="imageClass" />
    </div>
    <div>
      <p>{{ name }}</p>
      <p>{{ body }}</p>
      <p>{{ price }}円</p>
    </div>
  </div>
</template>
<script>
// import axios from "axios";
export default {
  // async asyncData({ $config }) {
  //   const { data } = await axios.get(`${$config.apiUrl}/menu`, {
  //     headers: { "X-API-KEY": $config.apiKey },
  //   });
  //   return {
  //     items: data.contents,
  //   };
  // },
  props: {
    image: {
      type: Object,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
};
</script>
