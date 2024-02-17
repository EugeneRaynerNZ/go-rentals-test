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
        <button @click="removeFromCart(cartItem)">Remove from Cart</button>
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

$color-black: #020402;
$color-primary: #FF5E5B;
$color-error: #EB5160;

body {
  font-family: "Roboto", sans-serif;
}

a{
  text-decoration: none;
  color: $color-black;
}

a:visited {
  color: $color-black;
}

p {
  margin: 0;
}

button {
  background: $color-primary;
  color: white;
  border-radius: 4px;
  padding: 6px 8px;
  border: none;
  cursor: pointer;
  box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.45);
  transition: all 0.15s;
  min-width: 80px;

  &:hover {
    box-shadow: none;
  }
}

.cart {
  position: fixed;
  top: 80px;
  right: 16px;
  width: 160px;
  box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.4);
  background: white;
  padding: 16px;

  h2{
    margin: 0;
  }

  &--item {
    margin-bottom: 16px;

    button{
      background-color: $color-error;
    }
  }
}
</style>