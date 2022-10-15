<template>
  <div class="right-nav">
    <div class="cart-logo-container clickable">
      <img
        src="../../assets/icon-cart.svg"
        alt=""
        @click="isCartShowing = !isCartShowing"
      />
      <keep-alive>
        <cart-component v-if="isCartShowing"></cart-component>
      </keep-alive>
      <div class="notifications-number" @click="isCartShowing = !isCartShowing">
        <span>3</span>
      </div>
    </div>
    <div class="profile-pic-container clickable">
      <img src="../../assets/image-avatar.png" alt="" />
    </div>
  </div>
</template>
<script>
import CartComponent from '../CartComponent.vue';
export default {
  components: {
    CartComponent,
  },
  data: () => {
    return {
      isCartShowing: false,
    };
  },
};
</script>
<style scoped>
.right-nav {
  display: flex;
  align-items: center;
  caret-color: transparent;
}

.profile-pic-container {
  width: 56px;
  height: 56px;
  margin-left: 1rem;
  border-radius: 50%;
  border: 2px solid transparent;
}
.profile-pic-container:hover {
  border-color: hsl(26, 100%, 55%);
}
.profile-pic-container img {
  width: 100%;
  border-radius: 50%;
}
.cart-logo-container {
  position: relative;
}
.notifications-number {
  background-color: hsl(26, 100%, 55%);
  text-align: center;
  font-size: 0.75rem;
  color: white;
  border-radius: 40%;
  position: absolute;
  top: -0.35rem;
  right: -0.25rem;
  padding: 0 0.3rem;
  caret-color: transparent;
}
</style>
