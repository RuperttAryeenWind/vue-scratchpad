<template>
  <div id="app">
    <div class="product">
      <div class="product-image">
        <a :href="image">
          <img :src="image" :alt="alt" />
        </a>
      </div>
      <div class="product-info">
        <h1>{{ product }}</h1>
        <h1>{{ description }}</h1>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: function () {
    return {
      product: "Socks",
      description: "This is a pair of socks",
      image: `/assets/images/vmSocks-green-onWhite.jpg`,
      alt: "green socks"

      //  TODO: Move image attributes to nested object
      // image: {
      //   url: "./assets/images/vmSocks-green-onWhite.jpg",
      //   alt: "green socks"
      // }
    }
  },
}
</script>