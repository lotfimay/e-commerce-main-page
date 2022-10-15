<template>
  <div class="product-demonstration">
    <div class="active-image clickable">
      <img :src="selectedImage" alt="" @click="$emit('open-dialog')" />
      <div
        class="logo-container clickable"
        title="previous"
        @click="selectPreviousElement(selectedImage)"
      >
        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 1 3 9l8 8"
            stroke="#1D2026"
            stroke-width="3"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
      </div>
      <div
        class="logo-container clickable"
        title="next"
        @click="selectNextElement(selectedImage)"
      >
        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m2 1 8 8-8 8"
            stroke="#1D2026"
            stroke-width="3"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </div>
    <div class="others-imgs">
      <div
        v-for="image in images"
        :key="image.thumbnail"
        class="img-container clickable"
        :class="{ selected_img: this.selectedImage == image.image }"
      >
        <img
          :src="image.thumbnail"
          class="small_image"
          @click="this.selectedImage = image.image"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    images: Array,
    image: String,
  },
  data() {
    return {
      selectedImage: this.image,
    };
  },
  methods: {
    setSelectedImage() {
      // this.selectedImage = imageURL.replace('-thumbnail', '');
    },
    printResource() {
      console.log(this.selectedImage);
    },
    selectNextElement(selectedImage) {
      this.images.forEach((element, index) => {
        if (element.image === selectedImage) {
          if (index + 1 === this.images.length) {
            this.selectedImage = this.images[0].image;
          } else {
            this.selectedImage = this.images[index + 1].image;
          }
        }
      });
    },
    selectPreviousElement(selectedImage) {
      this.images.forEach((element, index) => {
        if (element.image === selectedImage) {
          if (index - 1 === -1) {
            this.selectedImage = this.images[this.images.length - 1].image;
          } else {
            this.selectedImage = this.images[index - 1].image;
          }
        }
      });
    },
  },
  mounted() {},
};
</script>
<style scoped>
.product-demonstration {
  display: flex;
  flex-direction: column;
  max-height: 500px;
  caret-color: transparent;
  padding: 2rem;
}
.active-image {
  width: 100%;
  height: 400px;
  min-width: 270px;
  align-self: stretch;
  position: relative;
}
.active-image img {
  width: 100%;
  height: 100%;
  border-radius: 15px;
}

.others-imgs {
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.others-imgs img {
  width: 100%;
}
.others-imgs .img-container {
  margin: 0 0.5rem;
  border-radius: 10px;
}

.others-imgs .img-container:first-of-type {
  margin-left: 0;
}

.others-imgs .img-container:last-of-type {
  margin-right: 0;
}

.others-imgs .img-container img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
.selected_img {
  border: 2px solid hsl(26, 100%, 55%);
}
.selected_img img {
  filter: contrast(0.5);
}
.active-image .logo-container:first-of-type {
  left: -1rem;
}

.active-image .logo-container {
  background-color: rgb(244, 244, 244);
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 0.75rem;
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  top: calc(50% - 1.25rem);
  right: -1rem;
}

.active-image .logo-container svg {
  width: 100%;
  height: 100%;
}

@media (max-width: 45rem) {
  .others-imgs {
    display: none;
  }
  .product-demonstration {
    padding: 0;
    margin: 0;
    min-width: 100%;
    display: block;
    background-color: red;
  }
  .active-image,
  .active-image img {
    border-radius: 0;
  }
  .active-image .logo-container {
    right: 1rem;
  }
  .active-image .logo-container:first-of-type {
    left: 1rem;
  }
}
</style>
