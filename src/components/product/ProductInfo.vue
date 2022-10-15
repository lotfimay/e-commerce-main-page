<template>
  <div class="product-infos">
    <header class="product-header">
      <span class="company-name">{{ company }}</span>
      <h1 class="product-name">{{ name }}</h1>
    </header>
    <p class="product-description">
      {{ description }}
    </p>
    <div class="price-infos">
      <div class="price">
        <h1>${{ (price * discount).toString() }}</h1>
        <span>{{ discount * 100 }}%</span>
      </div>
      <span class="old-price">${{ price }}</span>
    </div>
    <div class="actions">
      <div class="quantity">
        <div class="logo-container minus-icon clickable">
          <img
            src="../../assets/icon-minus.svg"
            @click="decrementQuantity"
            alt=""
          />
        </div>
        <span class="cart-quantity">{{ quantity }}</span>
        <div class="logo-container clickable">
          <img
            src="../../assets/icon-plus.svg"
            @click="incrementQuantity"
            alt=""
          />
        </div>
      </div>
      <button class="add-to-cart">
        <div class="img-container clickable">
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#fff"
              fill-rule="nonzero"
            />
          </svg>
        </div>
        Add to cart
      </button>
    </div>
  </div>
</template>
<script>
export default {
  //   props: ['company', 'name', 'description', 'price', 'discount'],
  props: {
    company: String,
    name: String,
    description: String,
    price: Number,
    discount: {
      type: Number,
      required: false,
    },
  },
  data() {
    return {
      quantity: 0,
    };
  },
  methods: {
    incrementQuantity() {
      this.quantity++;
    },
    decrementQuantity() {
      if (this.quantity > 0) {
        this.quantity--;
      }
    },
  },
};
</script>
<style scoped>
.product-infos {
  align-self: center;
  margin-left: 4rem;
  flex-shrink: 1;
  /* background-color: blue; */
}

.company-name {
  color: hsl(26, 100%, 55%);
  text-transform: uppercase;
}
.product-name {
  margin-top: 1rem;
  width: 60%;
}
.product-description {
  margin-top: 2rem;
  color: hsl(220, 14%, 75%);
  width: 70%;
  /* background-color: aquamarine; */
}
.price-infos {
  margin-top: 1rem;
}

.price {
  display: flex;
  align-items: center;
  font-weight: bold;
}

.price span {
  padding: 0.3rem 0.5rem;
  color: hsl(26, 100%, 55%);
  font-weight: bold;
  background-color: hsl(25, 100%, 94%);
  border-radius: 8px;
  margin-left: 1rem;
}

.old-price {
  text-decoration: line-through;
  font-weight: bold;
  color: hsl(220, 14%, 75%);
}

.actions {
  display: flex;
  align-items: center;
  width: fit-content;
  flex-wrap: wrap;
  margin-top: 1.5rem;
  align-content: center;
  align-content: space-around;
  gap: 0.5rem;
  /* background-color: red; */
  /* height: 200px; */
}

.actions .quantity {
  display: flex;
  padding: 0.5rem 1rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  width: 8rem;
  border-radius: 5px;
  font-weight: bold;
  caret-color: transparent;
  background-color: hsl(223, 64%, 98%);
  flex-grow: 1;
}
.add-to-cart {
  background-color: hsl(26, 100%, 55%);
  border: hsl(26, 100%, 55%) 1px solid;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  padding: 0.5rem 3rem;
  border-radius: 5px;

  cursor: pointer;
  flex-grow: 1;
}
.add-to-cart .img-container {
  margin-right: 0.5rem;
}

.quantity > div:first-of-type {
  margin-top: -8px;
}

@media (max-width: 45rem) {
  .product-infos {
    margin-top: 1rem;
    margin-left: 1rem;
    /* margin-bottom: 1rem; */
    padding-bottom: 1rem;
    /* background-color: red; */
  }
  .product-description {
    width: 100%;
  }
  .product-name {
    width: 100%;
  }
  .price-infos {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 2rem;
  }
  .actions {
    flex-direction: column;
    width: 100%;
    align-items: stretch;
    /* background-color: red; */
  }
  .actions .quantity,
  .add-to-cart {
    width: calc(100% - 2rem);
    margin-right: 2rem;
  }
}
</style>
