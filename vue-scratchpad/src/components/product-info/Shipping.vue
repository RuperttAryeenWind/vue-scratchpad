<template>
  <p>Shipping: {{ shipping }}</p>
</template>

<script>
export default {
  name: 'Shipping',
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    shipping() {
      return this.premium ? "Free" : "2.99 USD"
    }
  }
}
</script>