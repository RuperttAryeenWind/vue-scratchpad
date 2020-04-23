<template>
  <div>
    <span class="tab"
          :class="{ activeTab: selectedTab === tab }"
          @click="selectedTab = tab"
          v-for="(tab, index) in tabs" :key="index"
    >
      {{tab}}
    </span>

    <div v-show="selectedTab === 'Reviews'">
      <h4>Reviews ( {{ reviews.length }} ) </h4>
      <div class="reviews" v-for="review in reviews" :key="review.name">
        <h5>Rated {{ review.rating }}/5 by {{ review.name }}</h5>
        <div> {{ review.review }} </div>
      </div>
    </div>

    <div v-show="selectedTab === 'Add a Review'">
      <ProductReview @review-submitted="updateReviews"/>
    </div>
  </div>
</template>

<script>
  import ProductReview from "./ProductReview"

  export default {
    name: 'ProductReviewTabs',
    props: {
      reviews: {
        type: Array,
        required: true
      }
    },
    components: {
      ProductReview
    },
    data() {
      return {
        tabs: ['Reviews', 'Add a Review'],
        selectedTab: "Reviews"
      }
    },
    methods: {
      updateReviews(review) {
        this.reviews.push(review)
      }
    }
  }
</script>