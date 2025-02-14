<script setup lang="ts">
import { usePopupStore } from '../store/popUp'; // Import the Pinia store
import Button from "./Button.vue";
import IconInfo from "../assets/img/notif.svg";

// Access the store
const popupStore = usePopupStore();

// Close the popup when the Button is clicked
const closePopup = () => {
  popupStore.hidePopup();
};
</script>

<template>
  <div class="popUp" v-if="popupStore.status">
    <div class="main">
      <img :src="IconInfo" alt="info">
      <h2>Order Success</h2>
      <p>Thank you, we have received your order successfully.</p>
      <!-- Bind Button to close the popup -->
      <Button label="Close" @click="closePopup" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/main.scss"; // Import global styles

.popUp {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  min-height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.207);
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 32.68px;
    text-align: center;
  }

  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 27.24px;
    text-align: center;
    margin-bottom: 10px;
  }

  .main {
    background-color: white;
    max-width: 404px;
    text-align: center;
    gap: 40px;
    border-radius: 6px;
    padding: 32px;
  }
}
</style>
