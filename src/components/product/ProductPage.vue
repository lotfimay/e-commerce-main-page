<template>
  <div class="product-presentation">
    <product-demonstration
      :images="product.images"
      :selectedImage="this.getSelectedImage"
      :changeSelectedImage="changeSelectedImage"
      @open-dialog="() => openDialog(selectedImage)"
    ></product-demonstration>
    <product-info
      :company="product.company"
      :name="product.name"
      :description="product.description"
      :price="product.price"
      :discount="product.discount"
    ></product-info>
  </div>
  <template v-if="isDialogShowing">
    <base-dialog @close-dialog="this.isDialogShowing = !this.isDialogShowing">
      <product-demonstration
        :images="product.images"
        :selectedImage="this.dialogSelectedImage"
        :changeSelectedImage="this.changeDialogSelectedImage"
        :style="this.dialogStyle()"
      ></product-demonstration>
    </base-dialog>
  </template>
</template>
<script>
import ProductInfo from './ProductInfo.vue';
import ProductDemonstration from './ProductDemonstration.vue';
import thumbnail1 from '../../assets/image-product-1-thumbnail.jpg';
import thumbnail2 from '../../assets/image-product-2-thumbnail.jpg';
import thumbnail3 from '../../assets/image-product-3-thumbnail.jpg';
import thumbnail4 from '../../assets/image-product-4-thumbnail.jpg';

import image1 from '../../assets/image-product-1.jpg';
import image2 from '../../assets/image-product-2.jpg';
import image3 from '../../assets/image-product-3.jpg';
import image4 from '../../assets/image-product-4.jpg';

export default {
  components: {
    ProductInfo,
    ProductDemonstration,
  },
  data() {
    return {
      product: {
        company: 'Sneaker Company',
        name: 'Fall Limited Edition Sneakers',
        description: `These low-profile sneakers are your perfect casual wear companion.
                      Featuring a durable rubber outer sole, they’ll withstand everything the
                      weather can offer`,
        price: 250.5,
        discount: 0.5,
        images: [
          { image: image1, thumbnail: thumbnail1 },
          { image: image2, thumbnail: thumbnail2 },
          { image: image3, thumbnail: thumbnail3 },
          { image: image4, thumbnail: thumbnail4 },
        ],
        selectedImage: image1,
      },
      isDialogShowing: false,
      dialogSelectedImage: null,
    };
  },
  computed: {
    getSelectedImage() {
      return this.product.selectedImage;
    },
  },
  methods: {
    dialogStyle() {
      return {
        width: '100%',
        padding: 0,
      };
    },
    changeSelectedImage(image) {
      this.product.selectedImage = image;
    },
    changeDialogSelectedImage(image) {
      this.dialogSelectedImage = image;
    },
    openDialog() {
      this.dialogSelectedImage = this.product.selectedImage;
      this.isDialogShowing = true;
    },
  },
};
</script>
<style scoped>
.product-presentation {
  display: flex;
  width: 80%;
  margin: 2rem auto;
  padding: 1rem;
}

@media (max-width: 45rem) {
  .product-presentation {
    display: block;
    position: relative;
    top: 5.5rem;
    width: 100%;
    margin: 0;
    padding: 0;
  }
}
</style>
