
<template>
  <div id="app">
    <NavBar :cart="cart"/>
    <Product :cart="cart" @add-to-cart="addToCart" @remove-from-cart="removeFromCart"/>
  </div>
</template>

<script>
import Product from './components/Product'
import NavBar from './components/navbar/NavBar'

export default {
  name: 'App',
  components: {
    NavBar,
    Product
  },
  data: function () {
    return {
      cart: []
    }
  },
  methods: {
    addToCart(selected) {
      var index = this.cart.findIndex(item => item.id == selected.id);

      if (index >= 0) {
        this.cart[index].count++;
      } else {
        this.cart.push({ id: selected.id, count: 1});
      }
    },
    removeFromCart(selected) {
      var index = this.cart.findIndex(item => item.id == selected.id);

      if (index >= 0) {
        this.cart[index].count--;

        if (this.cart[index].count == 0) {
          this.cart = this.cart.filter((value) => value.id != selected.id)
        }
      }
    }
  }
}
</script>