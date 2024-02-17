<template>
  <div class="home">
    <ShopItems></ShopItems>
  </div>
</template>

<script>
import ShopItems from '@/components/ShopItems.vue'

export default {
  name: 'HomeView',
  components: {
    ShopItems
  },
}
</script>

<style lang="scss" scoped>
  .home {
    max-width: 800px;
    margin: 100px auto;
  }
</style>
