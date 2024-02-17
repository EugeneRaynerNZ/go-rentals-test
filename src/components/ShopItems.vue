<template>
    <div id="shopItems">
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">{{ error }}</div>
      <template v-else>
        <router-link :to="{ name: 'product', params: { id: item.id }}" class="item" v-for="item in items" :key="item.id">
          <div class="item--image-container" :style="{ backgroundImage: 'url(' + item.image + ')' }"></div>
          <p class="item--title">{{ item.title }}</p>
          <p class="item--price">${{ item.price }}</p>
          <div>
            <star-rating read-only :increment=0.1 :star-size=20 :rating="item.rating.rate"></star-rating>
            <p class="item--rating-count">out of {{ item.rating.count }} reviews</p>
          </div>
          <!-- <button @click="addToCart(item.id)">Add to Cart</button> -->
        </router-link>
      </template>
    </div>
</template>
  
<script>
  // import axios from 'axios'
  import StarRating from 'vue-star-rating'
  
  export default {
    name: 'ShopItems',
    components: {
      StarRating
    },
    computed: {
      items() {
        return this.$store.getters.items;
      },
      loading() {
        return this.$store.getters.loading;
      },
      error() {
        return this.$store.getters.error;
      },
    },
    
    created() {
      this.$store.dispatch('fetchItems');
    }
  }
</script>
  
<style lang="scss">
  #shopItems {
    display: flex;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 32px;

    .item {
      max-width: 240px;
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
  }

  #shopItems {
    display: flex;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 32px;

    .item {
      max-width: 240px;
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
  }
</style>