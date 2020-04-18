<template>
  <div id="app">
    <div class="product">
      <div class="product-image">
        <a :href="selectedProduct.image.url">
          <img :src="selectedProduct.image.url" :alt="selectedProduct.image.alt" />
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
          <div v-for="variant in variants" :key="variant.id">
            <p @click="updateProduct(variant)">{{variant.color}}</p>
          </div>
        </div>
        <div>
          <label>Sizes available</label>
          <ul>
            <li v-for="size in sizes" :key="size">{{size}}</li>
          </ul>
        </div>
        <div>
          <button v-on:click="addToCart">Add to Cart</button>
          <button v-on:click="removeFromCart">Remove from Cart</button>
          <div class="cart">
            <p>Cart({{cart}})</p>
          </div>
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
      inventory: 15,
      onSale: true,
      selectedProduct : {
        id: 1000,
        color: "green",
        image: {
          url: "./assets/images/vmSocks-green-onWhite.jpg",
          alt: "green socks"
          },
      },
      variants: [
        {
          id: 1000,
          color: "green",
          image: {
            url: "./assets/images/vmSocks-green-onWhite.jpg",
            alt: "green socks"
            },
        },
        {
          id: 1001,
          color: "blue",
          image: {
            url: "./assets/images/vmSocks-blue-onWhite.jpg",
            alt: "green socks"
            },
        }
      ],
      sizes: [ "S", "M", "L"],
      details: [ "S", "M", "L"],
      cart: 0
    }
  },
  methods: {
    addToCart() {
      if (this.inventory > 0) {
        this.cart = this.cart + 1;
        this.inventory = this.inventory - 1;
      }
    },
    removeFromCart() {
      if (this.cart > 0) {
        this.cart = this.cart - 1
        this.inventory = this.inventory + 1;
      }
    },
    updateProduct(product) {
      this.selectedProduct = product;
    }
  }
}
</script>