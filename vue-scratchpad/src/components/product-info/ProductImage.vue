<template>
  <div class="product-image">
    <a :href="image.url">
      <img :src="image.url" :alt="image.alt" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'ProductImage',
  props: {
    image: {
      required: true
    }
  }
}
</script>