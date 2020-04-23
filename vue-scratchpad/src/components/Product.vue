<template>
  <div class="product">
    <ProductImage :image="image" />
    <div class="product-info">
      <h1>{{ product }}</h1>
      <h4>{{ description }}</h4>
      <div>
        <p>{{ availability }}</p>
      </div>
      <div>
        <p v-show="onSale">On Sale!!!</p>
      </div>
      <Shipping :premium="premium" />
      <ProductDetails :details="details" />
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
                :class="{disabledButton: availability=='Out of Stock'}">
          Add to Cart
        </button>
        <button v-on:click="removeFromCart"
                :disabled="this.quantityInCart == 0"
                :class="{disabledButton: this.quantityInCart == 0}">
          Remove from Cart
        </button>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
import product_data from "../data/product_info";
import ProductImage from "../components/product-info/ProductImage"
import Shipping from "../components/product-info/Shipping"
import ProductDetails from "../components/product-info/ProductDetails"

export default {
  name: 'Product',
  components: {
    ProductImage,
    Shipping,
    ProductDetails
  },
  props: {
    cart: {
      type: Array,
      required: true
    }
  },
  data: () => product_data,
  methods: {
    addToCart() {
      var quantity = this.selected.inventory - this.quantityInCart;

      if(quantity > 0) {
        this.$emit('add-to-cart', this.selected);
      }
    },
    removeFromCart() {
      this.$emit('remove-from-cart', this.selected);
    },
    updateProduct(product) {
      this.selectedProduct = product;
    }
  },
  computed: {
    console: () => console,
    window: () => window,
    image() {
      return this.selected.image
    },
    selected() {
      return this.variants[this.selectedProduct];
    },
    quantityInCart() {
      if (this.cart && this.cart.length > 0) {
        var index = this.cart.findIndex(item => item.id == this.selected.id);

        if (index >= 0) {
          return this.cart[index].count;
        }
      }
      return 0;
    },
    availability() {
      var quantity = this.selected.inventory - this.quantityInCart;
      return quantity > 10
        ? "In Stock"
        : (quantity <= 10 && quantity > 0)
          ? "Almost Sold Out"
          : "Out of Stock";
    }
  }
}
</script>