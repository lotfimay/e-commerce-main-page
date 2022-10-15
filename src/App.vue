<template>
  <the-navigation-bar></the-navigation-bar>
  <mobile-nav v-if="isMobileNavShowing"></mobile-nav>
  <product-page></product-page>
</template>

<script>
import TheNavigationBar from './components/nav/TheNavigationBar.vue';
import ProductPage from './components/product/ProductPage.vue';
import MobileNav from './components/nav/MobileNav.vue';
export default {
  name: 'App',
  components: {
    TheNavigationBar,
    ProductPage,
    MobileNav,
  },
  data() {
    return {
      isMobileNavShowing: false,
    };
  },
  methods: {
    openMobileNav() {
      this.isMobileNavShowing = true;
    },
    closeMobileNav() {
      this.isMobileNavShowing = false;
    },
  },
  provide() {
    return {
      openMobileNav: this.openMobileNav,
      closeMobileNav: this.closeMobileNav,
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap');
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: 'Kumbh Sans', sans-serif;
}

.clickable {
  cursor: pointer;
}
</style>
