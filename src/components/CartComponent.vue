<template>
  <div class="cart-item">
    <header class="cart-header">
      <h3>Cart</h3>
    </header>
    <template v-if="items.length > 0">
      <ul class="items-list">
        <li class="item" v-for="item in items" :key="item.id">
          <div class="product-image-container">
            <img :src="item.image" alt="" />
          </div>
          <div class="product-infos">
            <p class="product-name">{{ item.name }}</p>
            <p class="product-price-quantity">
              ${{ item.price }} x {{ item.quantity }}
              <span>${{ item.price * item.quantity }}</span>
            </p>
          </div>
          <div class="delete-icon-container">
            <img
              src="../assets/icon-delete.svg"
              alt=""
              @click="deleteItem(item.id)"
            />
          </div>
        </li>
      </ul>
      <button>Checkout</button>
    </template>
    <p class="empty-cart" v-else>Your cart is empty</p>
  </div>
</template>
<script>
import image from '../assets/image-product-1-thumbnail.jpg';
export default {
  data() {
    return {
      items: [
        {
          id: '123456',
          name: 'Fall Limited Edition Sneakers',
          price: 125.25,
          quantity: 3,
          image: image,
        },
      ],
    };
  },
  methods: {
    deleteItem(itemId) {
      this.items = this.items.filter((item) => item.id !== itemId);
    },
  },
};
</script>
<style scoped>
.cart-item {
  position: absolute;
  width: 22rem;
  background-color: white;
  right: -7rem;
  top: 3rem;
  overflow: auto;
  border-radius: 8px;
  z-index: 10;
  box-shadow: 0px 2px 20px hsla(0, 0%, 0%, 0.5);
}
.cart-header {
  padding: 0.5rem 1rem 1rem 1rem;
  border-bottom: 1px solid #ccc;
}
.items-list {
  list-style: none;
  overflow: auto;
  max-height: 20rem;
}
.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}
.product-image-container {
  width: 50px;
  height: 50px;
  border-radius: 5px;
  margin-right: 0.5rem;
}
.product-image-container img {
  width: 100%;
  height: 100%;
  border-radius: inherit;
}
.product-infos {
  color: hsl(220, 14%, 75%);
}
.delete-icon-container {
  /* background-color: blue; */
  margin-left: 0.5rem;
}
button {
  background-color: hsl(26, 100%, 55%);
  border: 1px hsl(26, 100%, 55%) solid;
  color: white;
  font: inherit;
  width: calc(100% - 2rem);
  padding: 0.75rem 1rem;
  border-radius: 5px;
  margin: 0 1rem 1rem 1rem;
  cursor: pointer;
}
.product-price-quantity span {
  color: black;
  font-weight: bold;
}
.empty-cart {
  padding: 5rem;
  text-align: center;
  margin: auto;
  font-weight: bold;
  color: hsl(220, 14%, 75%);
}

@media (max-width: 45rem) {
  .cart-item {
    right: -3rem;
    position: fixed;
    top: 4.5rem;
    left: 0.5rem;
    right: 0.5rem;
    width: calc(98% - 0.5rem);
  }
}
</style>
