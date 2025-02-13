<template>
  <div :class="['card', active ? 'active' : '']">
    <img :src="ImgRibbon" alt="ribbon" class="ribbon" v-if="discountActive" />
    <img :src="image" alt="img" class="product" />
    <div class="content">
      <h6>{{ name }}</h6>
      <div class="price">
        <p class="after">${{ finalPrice }}</p>
        <p class="before" v-if="discountActive">
          <s>${{ price }}</s>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import ImgSample from "../assets/img/pizza/Cheese Pizza.png";
import ImgRibbon from "../assets/img/ribbon.svg";

// Define props
defineProps({
  image: String, // Product image URL
  name: String, // Product name
  price: Number, // Original price
  finalPrice: Number, // Discounted price
  discountActive: Boolean, // Check if discount is active
  active: Boolean,
});
</script>

<style lang="scss" scoped>
@import "../styles/main.scss";

.card {
  border: 1px solid rgba(51, 51, 51, 0.1);
  border-radius: 16px;
  border-width: 1px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: relative;
  transition: 0.5s ease-in-out;

  img {
    transition: 0.5s ease-in-out;
  }

  .ribbon {
    position: absolute;
    top: 0;
    right: 0;
  }

  .price {
    display: flex;
    gap: 10px;

    .after {
      font-weight: 400;
      font-size: 20px;
      line-height: 27.24px;
      letter-spacing: 0%;
    }

    .before {
      color: $color4;
      opacity: 0.5;
      font-weight: 400;
      font-size: 20px;
      line-height: 27.24px;
      letter-spacing: 0%;
      text-decoration: line-through;
    }
  }

  h6 {
    font-weight: 700;
    font-size: 20px;
    line-height: 27.24px;
    letter-spacing: 0%;
  }

  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 27.24px;
    letter-spacing: 0%;
  }
}

.card:hover {
  background-color: rgba(231, 126, 35, 0.3);

  img.product {
    transform: rotate(15deg);
  }
}

.card:active,
.card.active {
  background-color: $color1;
  color: $color5;

  .price .before {
    color: $color5;
  }

  img.product {
    transform: rotate(15deg);
  }
}
</style>
