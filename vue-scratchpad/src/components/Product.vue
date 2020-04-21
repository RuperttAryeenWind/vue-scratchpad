<template>
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
        <p>{{ availability }}</p>
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
        <div>Variants available</div>
        <div class="variant-box">
          <div class="color-box"
            v-for="(variant, index) in variants"
            :key="variant.id"
            :style="{ backgroundColor:variant.color, 'border-radius': '50%'}"
            @click="updateProduct(index)" />
        </div>
      </div>
      <div>
        <label>Sizes available</label>
        <ul>
          <li v-for="size in sizes" :key="size">{{size}}</li>
        </ul>
      </div>
      <div>
        <button v-on:click="addToCart"
          :disabled="availability=='Out of Stock'"
          :class="{disabledButton: availability=='Out of Stock'}">Add to Cart</button>
        <button v-on:click="removeFromCart">Remove from Cart</button>
        <div class="cart">
          <p>Cart({{cart}})</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import product_data from "../data/product_info";

export default {
  name: 'App',
  components: {
  },
  data: () => product_data,
  methods: {
    addToCart() {
      var selected = this.variants[this.selectedProduct];
      var available = selected.inventory - selected.carted;

      if (available > 0) {
        this.cart = this.cart + 1;
        selected.carted = selected.carted + 1;
      }
    },
    removeFromCart() {
      var selected = this.variants[this.selectedProduct];

      if (selected.carted > 0) {
        this.cart = this.cart - 1
        selected.carted = selected.carted - 1;
      }
    },
    updateProduct(product) {
      this.selectedProduct = product;
    }
  },
  computed: {
    image() {
      return this.variants[this.selectedProduct].image
    },
    availability() {
      var selected = this.variants[this.selectedProduct];
      var quantity = selected.inventory - selected.carted;
      return quantity > 10
        ? "In Stock"
        : (quantity <= 10 && quantity > 0)
          ? "Almost Sold Out"
          : "Out of Stock";
    }
  }
}
</script>