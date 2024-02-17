<template>
  <div class="item--view">
      <div class="back--button-container">
          <button @click="goBack">Back</button>
      </div>
      <div class="item">
          <div class="item--image-container" :style="{ backgroundImage: 'url(' + item.image + ')' }"></div>
          <h2 class="item--title">{{ item.title }}</h2>
          <p class="item--description">{{ item.description }}</p>
          <p class="item--price">Price: ${{ item.price }}</p>
          <div>
              <button @click="addToCart">Add to Cart</button>
          </div>
      </div>
      <!-- Other item details -->
  </div>
</template>

<script>
export default {
  name: 'ItemView',
  computed: {
    item() {
      return this.$store.state.items.find(item => item.id === parseInt(this.$route.params.id));
    }
  },
  methods: {
      addToCart() {
          this.$store.dispatch('addToCart', this.item);
      },
      goBack() {
          this.$router.go(-1)
      }
  }
}
</script>

<style lang="scss" scoped>

.back--button-container{
  width: 440px;
  padding: 40px 0;
}

.item {
    max-width: 440px;
    display: flex; 
    flex-direction: column;
    border: 1px solid black;
    border-radius: 4px;
    padding: 16px 0;
    row-gap: 8px;
    // fix this
    flex: 0 0 33%;

    > * {
      padding: 0 16px;
    }

    &--view {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    &--image-container {
      height: 200px;
      background-size: 120px;
      background-repeat: no-repeat;
      background-position: center center;

      img{
        max-width: 100%;
      }
    }
    
    &--title{
      font-size: 20px;
      margin: 0;
      line-height: 1.2;
    }

    &--category{
      text-transform: capitalize;
    }

    &--description{
      text-transform: capitalize;
    }

    &--price{
      font-size: 18px;
    }

    &--rating{
      &-rate {

      }

      &-count {

      }
    }
  }
</style>