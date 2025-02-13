<script setup lang="ts">
import { defineProps } from "vue";

// Define props with TypeScript
interface Props {
  label: string;
  href?: string;
  variant?: "disabled" | "outline";
  type?: "button" | "submit" | "reset";
}

defineProps<Props>();

</script>

<template>
  <template v-if="href">
    <a :href="href" class="base-link">{{ label }}</a>
  </template>
  <template v-else>
    <button
      :type="type || 'button'"
      :class="[
        'base-button',
        variant === 'disabled' ? 'disabled' : '',
        variant === 'outline' ? 'outline' : '',
      ]"
      :disabled="variant === 'disabled'"
    >
      {{ label }}
    </button>
  </template>
</template>

<style lang="scss" scoped>
@import "../styles/main.scss"; // Import SCSS variables & global styles

.base-link {
  font-weight: 700;
  font-size: 18px;
  line-height: 24.51px;
  color: #fff;
  text-decoration: none;
  transition: 0.3s ease-in-out;
}

.base-link:hover {
  color: $color1;
}

/* Default Button Styles */
.base-button {
  width: 100%;
  border-radius: 50px;
  padding: 10px 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  background-color: $color1;
  font-weight: 700;

  &:hover {
    opacity: 0.8;
  }

  &.outline {
    background-color: transparent;
    border:1.6px solid rgba(51, 51, 51, 0.5); 
    border-radius: 50px;
    padding: 14px 12px; 
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
