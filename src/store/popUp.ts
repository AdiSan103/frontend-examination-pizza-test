import { defineStore } from 'pinia';

export const usePopupStore = defineStore('popup', {
  state: () => ({
    status: false,
  }),
  actions: {
    showPopup() {
      this.status = true;
    },
    hidePopup() {
      this.status = false;
    },
  },
});
