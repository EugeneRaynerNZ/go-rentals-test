import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    items: [],
    loading: false,
    error: null
  },
  mutations: {
    setItems(state, items) {
        state.items = items;
    },
    setLoading(state, value) {
        state.loading = value;
    },
    setError(state, error) {
        state.error = error;
    },
    addToCart(state, item) {
        const existingItem = state.cart.find(i => i.id === item.id);
        if (existingItem) {
            existingItem.quantity += 1;
            existingItem.totalPrice += item.price;
        } else {
            state.cart.push({ ...item, quantity: 1, totalPrice: item.price });
        }
    },
    removeFromCart(state, itemId) {
        const index = state.items.findIndex(item => item.id === itemId);
        if (index !== -1) {
            state.items.splice(index, 1);
        }
    }
  },
  actions: {
    async fetchItems({ commit }) {
        try {
          commit('setLoading', true);
          const response = await fetch('https://fakestoreapi.com/products');
          if (!response.ok) {
            throw new Error('Failed to fetch items');
          }
          const items = await response.json();
          commit('setItems', items);
        } catch (error) {
          commit('setError', error.message);
        } finally {
          commit('setLoading', false);
        }
    },
    addToCart({ commit }, item) {
        commit('addToCart', item);
    },
    removeFromCart({ commit }, index) {
        commit('removeFromCart', index);
    }
  },
  getters: {
    items(state) {
        return state.items;
    },
    loading(state) {
        return state.loading;
    },
    error(state) {
        return state.error;
    },
    cart(state) {
        return state.cart;
    },
    cartTotal(state) {
        const total = state.cart.reduce((total, item) => total + item.totalPrice, 0);
        return total.toFixed(2);
    },
    cartItems(state) {
        return state.cart.map(cartItem => {
            const foundItem = state.items.find(item => item.id === cartItem.id);
            if (foundItem) {
              return {
                ...foundItem,
                quantity: cartItem.quantity,
                totalPrice: cartItem.totalPrice
              };
            }
            return null;
        }).filter(item => item !== null);
    }
  }
});