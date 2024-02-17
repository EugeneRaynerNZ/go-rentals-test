<template>
  <div id="app shopItems">
    <router-view/>

    <div class="cart">
      <h2>Cart</h2>
      <div class="cart--item" v-for="(cartItem, index) in cartItems" :key="cartItem.id + index">
        <p>{{ cartItem.title }}</p>
        <p>${{ cartItem.price }}</p>
        <p>Quantity: {{ cartItem.quantity }}</p>
        <p>Sub Total: {{ cartItem.totalPrice }}</p>
        <button @click="removeFromCart(cartItem.id)">Remove from Cart</button>
      </div>
      <!-- {{ cartItems }} -->
      <p>Total: ${{ cartTotal }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    cartItems() {
      return this.$store.getters.cartItems;
    },
    cartTotal() {
      return this.$store.getters.cartTotal;
    }
  },
  methods: {
    addToCart(productId) {
      this.$store.dispatch('addToCart', productId);
    },
    removeFromCart(productId) {
      this.$store.dispatch('removeFromCart', productId);
    }
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

body {
  font-family: "Roboto", sans-serif;
}

a{
  text-decoration: none;
  color: black;
}

a:visited {
  color: black;
}

p {
  margin: 0;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.cart {
  position: fixed;
  top: 80px;
  right: 16px;
  width: 160px;
  box-shadow: 0 0 0 0 rgba(0,0,0,0.4);
  background: white;

  &--item {
    margin-bottom: 16px;
  }
}
</style>