<template>
  <label
    :class="[
      'button-checkbox',
      variant === 'disabled' ? 'disabled' : '',
      variant === 'outline' ? 'outline' : '',
      checked === 'yes' ? 'checked-now' : '',
    ]"
  >
    <input
      type="checkbox"
      v-model="model"
      :value="value"
      hidden
      :disabled="variant === 'disabled'"
    />
    <span>{{ label }}</span>
  </label>
</template>

<script setup>
import { computed, defineEmits, defineProps } from "vue";

const props = defineProps({
  modelValue: { type: [Array, Boolean] },
  value: { type: [Boolean, Object] },
  label: { type: String, default: "Click Me" },
  variant: "disabled" | "outline",
  checked: "yes" | "no",
});

const emit = defineEmits(["update:modelValue"]);

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<style lang="scss" scoped>
@import "../styles/main.scss"; // Import global styles

.checked-now {
  background-color: #e77f234d!important;
  color: $color1!important;
  border: $color1 solid 1px!important;
}

.button-checkbox {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: $color1;
  color: #fff;  cursor: pointer;
  border: none;
  user-select: none;
  width: 100%;
  background-color: $color1;

  &:hover {
    background-color: #e0e0e0;
  }

  &.checked {
    background-color: #4caf50;
    color: white;
    border: 2px solid #388e3c;
  }

  &:hover {
    opacity: 0.8;
  }

  &.outline {
    background-color: transparent;
    border: 1.6px solid rgba(51, 51, 51, 0.5);
    border-radius: 50px;
    color: black;
  }

  &.outline:hover {
    border: 4px solid $color1;
    color: $color1;
  }

  &.outline:hover {
    border: 1px solid $color1;
    color: $color1;
  }

  &.disabled {
    background-color: rgba(227, 227, 227, 1);
    color: rgba(145, 145, 145, 1);
    cursor: not-allowed;
    opacity: 0.6;
  }
}
</style>
