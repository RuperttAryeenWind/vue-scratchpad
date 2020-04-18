<template>
  <div id="app">
    <div class="product">
      <div class="product-image">
        <a :href="image.url">
          <img :src="image.url" :alt="image.alt" />
        </a>
      </div>
      <div class="product-info">
        <h1>{{ product }}</h1>
        <h4>{{ description }}</h4>
        <div>
          <p v-if="inventory > 10">In Stock</p>
          <p v-else-if="inventory <= 10 && inventory>0">Almost Sold Out</p>
          <p v-else>Out of Stock</p>
        </div>
        <div>
          <p v-show="onSale">On Sale!!!</p>
        </div>
        <div>
          <label>Details of the product</label>
          <ul>
            <li v-for="detail in details" :key="detail">{{detail}}</li>
          </ul>
        </div>
        <div>
          <label>Variants available</label>
          <ul>
            <li v-for="variant in variants" :key="variant.id">{{variant.color}}</li>
          </ul>
        </div>
        <div>
          <label>Sizes available</label>
          <ul>
            <li v-for="size in sizes" :key="size">{{size}}</li>
          </ul>
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
      description: "This is a pair of amazing socks",
      alt: "green socks",
      inventory: 100,
      onSale: true,
      variants: [
        { id: 1000, color: "green" },
        { id: 1001, color: "blue" }
      ],
      sizes: [ "S", "M", "L"],
      details: [ "S", "M", "L"],
      image: {
        url: "./assets/images/vmSocks-green-onWhite.jpg",
        alt: "green socks"
      }
    }
  },
}
</script>