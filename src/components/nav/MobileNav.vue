<template>
  <div class="blur" @click="closeMobileNav"></div>
  <div
    class="mobile-nav-wrapper clickable"
    title="close"
    @click="closeMobileNav"
  >
    <div class="close-icon-container">
      <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
          fill="#69707D"
          fill-rule="evenodd"
        />
      </svg>
    </div>
    <nav class="mobile-nav">
      <ul class="mobile-nav__items">
        <li class="mobile-nav__item">
          <a href="">Collections</a>
        </li>
        <li class="mobile-nav__item">
          <a href="">Men</a>
        </li>
        <li class="mobile-nav__item">
          <a href="">Women</a>
        </li>
        <li class="mobile-nav__item">
          <a href="">About</a>
        </li>
        <li class="mobile-nav__item">
          <a href="">Contact</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  inject: ['closeMobileNav'],
};
</script>
<style scoped>
.blur {
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 10000;
  display: none;
  background-color: rgba(0, 0, 0, 0.5);
}
.close-icon-container {
  margin-top: 1rem;
}
.mobile-nav-wrapper {
  display: none;
  flex-direction: column;
  gap: 2rem;
  padding-left: 1.5rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  height: 100vh;
  background-color: white;
  z-index: 10001;
}
.mobile-nav__items {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* .main-nav__item {
  
} */

.mobile-nav__item a {
  text-decoration: none;
  color: hsl(220, 13%, 13%);
  font: inherit;
  padding-bottom: 2.5rem;
  font-weight: bold;
}

@media (max-width: 45rem) {
  .mobile-nav-wrapper {
    display: flex;
  }
  .blur {
    display: block;
  }
}
</style>
