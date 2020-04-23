<template>
  <div>
    <label>Details of the product</label>
    <ul>
      <li v-for="detail in details" :key="detail">{{ detail}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProductDetails',
  props: {
    details: {
      type: Array,
      required: true
    }
  }
}
</script>