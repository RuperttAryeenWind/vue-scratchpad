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
        <div>
          <p v-if="inventory > 10">In Stock</p>
          <p v-else-if="inventory <= 10 && inventory>0">Almost Sold Out</p>
          <p v-else>Out of Stock</p>
        </div>
        <div>
          <p v-show="onSale">On Sale!!!</p>
        </div>
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
      alt: "green socks",
      inventory: 100,
      onSale: true

      //  TODO: Move image attributes to nested object
      // image: {
      //   url: "./assets/images/vmSocks-green-onWhite.jpg",
      //   alt: "green socks"
      // }
    }
  },
}
</script>