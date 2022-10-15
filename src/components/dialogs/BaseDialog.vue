<template>
  <div class="blur" @click="$emit('close-dialog')"></div>
  <div class="modal">
    <div
      class="close-container clickable"
      @click="$emit('close-dialog')"
      title="close"
    >
      <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
          fill="#69707D"
          fill-rule="evenodd"
        />
      </svg>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  emits: ['close-dialog'],
};
</script>
<style scoped>
.blur {
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal {
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 100;
  top: 5vh;
  left: 35%;
  width: 30%;
  caret-color: transparent;
}

.modal .close-container {
  margin-bottom: 0.5rem;
  width: fit-content;
  margin-left: auto;
}
</style>
