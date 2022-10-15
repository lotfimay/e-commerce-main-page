<template>
  <div class="left-nav">
    <div class="mobile-only clickable">
      <div class="menu-logo-container" @click="openMobileNav">
        <img src="../../assets/icon-menu.svg" alt="" />
      </div>
    </div>
    <div class="logo-container clickable">
      <img src="../../assets/logo.svg" alt="" />
    </div>
    <nav class="main-nav">
      <ul class="main-nav__items">
        <li class="main-nav__item">
          <a href="">Collections</a>
        </li>
        <li class="main-nav__item">
          <a href="">Men</a>
        </li>
        <li class="main-nav__item">
          <a href="">Women</a>
        </li>
        <li class="main-nav__item">
          <a href="">About</a>
        </li>
        <li class="main-nav__item">
          <a href="">Contact</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  inject: ['openMobileNav'],
};
</script>
<style>
.left-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}
.main-nav__items {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* .main-nav__item {
  
} */

.main-nav__item a {
  text-decoration: none;
  color: hsl(220, 14%, 75%);
  font: inherit;
  padding-bottom: 2.5rem;
}

.main-nav__item a:hover {
  color: black;
  border-bottom: 2px solid hsl(26, 100%, 55%);
}
.mobile-only {
  display: none;
}

@media (max-width: 45rem) {
  .mobile-only {
    display: block;
  }
  .main-nav {
    display: none;
  }
}
</style>
