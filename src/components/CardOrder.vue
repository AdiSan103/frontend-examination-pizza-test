<script setup lang="ts">
import { computed } from "vue";
import Button from './Button.vue';
import Separator from './Separator.vue';
import { usePopupStore } from '../store/popUp'; // Import the Pinia store


const props = defineProps<{
  items: { title: string; price: number }[];
}>();

const popupStore = usePopupStore();

// Compute total price dynamically
const totalPrice = computed(() =>
  props.items.reduce((sum, item) => sum + Number(item.price), 0)
);

// Trigger the popup visibility
const showPopup = () => {
  popupStore.showPopup();
};

</script>

<template>
  <div class="popup">
    <h6>Payment Summary</h6>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <p>{{ item.title }}</p>
        <span>${{ item.price }}</span>
      </li>
    </ul>
    <Separator />
    <div class="total">
      <p>Total</p>
      <span>${{ totalPrice }}</span>
    </div>
    <Button label="Order Now" @click="showPopup"/>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/main.scss";

.popup {
  border-radius: 16px;
  gap: 24px;
  padding: 32px;
  background-color: #fff;
  box-shadow: 0px 100px 80px 0px rgba(163, 160, 160, 0.07);

  h6 {
    color: $color1;
    font-weight: 700;
    font-size: 24px;
    line-height: 32.68px;
    letter-spacing: 0%;
  }

  ul {
    margin: 20px 0;

    li {
      display: flex;
      justify-content: space-between;
      margin: 10px 0;

      p {
        font-weight: 400;
        font-size: 20px;
        line-height: 27.24px;
        letter-spacing: 0%;
        color: rgba(98, 111, 121, 1);
      }

      span {
        font-weight: 400;
        font-size: 20px;
        line-height: 27.24px;
        letter-spacing: 0%;
        text-align: right;
      }
    }
  }

  .total {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;

    p {
      font-weight: 400;
      font-size: 24px;
      line-height: 32.68px;
      letter-spacing: 0%;
      color: $color4;
    }

    span {
      font-weight: 700;
      font-size: 24px;
      line-height: 32.68px;
      letter-spacing: 0%;
      text-align: right;
      color: $color1;
    }
  }
}
</style>
