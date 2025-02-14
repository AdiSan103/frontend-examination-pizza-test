<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

interface Props {
  label: string;
  name: string;
  value: string;
  modelValue: string;
}

defineProps<Props>();
const emit = defineEmits(["update:modelValue"]);

// const onChange = () => {
//   emit("update:modelValue", value);
// };
</script>

<template>
  <label class="container">
    <input
      type="radio"
      :name="name"
      :value="value"
    />
    <span class="custom"></span>
    {{ label }} <span class="price">(${{ value }})</span>
  </label>
</template>

<style lang="scss" scoped>
@import "../styles/main.scss";

.container {
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 8px;
  font-weight: 400;
  font-size: 20px;
  line-height: 27.24px;
  letter-spacing: 0%;

  input {
    display: none;
  }

  .custom {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid $color1;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;

    &::before {
      content: "";
      width: 0;
      height: 0;
      border-radius: 50%;
      background-color: $color1;
      transition: 0.3s ease-in-out;
    }
  }

  input:checked + .custom::before {
    width: 10px;
    height: 10px;
  }

  .price {
    font-weight: 400;
    font-size: 20px;
    line-height: 27.24px;
    letter-spacing: 0%;
    color:rgba(51, 51, 51, 0.5);
  }
}
</style>
