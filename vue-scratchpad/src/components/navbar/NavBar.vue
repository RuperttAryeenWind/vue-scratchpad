<template>
  <div class="nav-bar">
    <div class="cart">
      <p>Cart ( {{ size }} )</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    cart: {
      type: Array,
      required: true
    }
  },
  computed: {
    size() {
      return this.cart
        .map(product => product.count)
        .reduce((a, b) => a + b, 0);
    }
  }
}
</script>