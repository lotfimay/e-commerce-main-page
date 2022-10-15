<template>
  <header class="main-header">
    <left-navigation></left-navigation>
    <right-navigation></right-navigation>
  </header>
</template>
<script>
import RightNavigation from './RightNavigation.vue';
import LeftNavigation from './LeftNavigation.vue';
export default {
  components: {
    RightNavigation,
    LeftNavigation,
  },
};
</script>
<style scoped>
.main-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 2rem auto;
  height: fit-content;
  padding-bottom: 1.5rem;
  border-bottom: 1px #ccc solid;
}

@media (max-width: 45rem) {
  .main-header {
    width: 100%;
    padding: 1rem;
    margin: 0;
    border-bottom: none;
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    background-color: white;
  }
}
</style>
