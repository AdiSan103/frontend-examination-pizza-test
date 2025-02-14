import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    pizzaId: null as number | null,
    pizzaName: null as string | null,
    pizzaPrice: null as number | null,
    sizeId: null as number | null,
    sizeName: null as string | null,
    sizePrice:  null as number | null,
    toppingsId: [] as number[], // Array to hold multiple topping IDs
  }),
  actions: {
    addPizza(pizzaId: number) {
      this.pizzaId = pizzaId;
    },
    addPizzaName(pizzaName: string) {
      this.pizzaName = pizzaName;
    },
    addPizzaPrice(pizzaPrice: number) {
      this.pizzaPrice = pizzaPrice;
    },

    addSize(sizeId: number) {
      this.sizeId = sizeId;
    },
    addSizeName(sizeName: string) {
      this.sizeName = sizeName;
    },
    addSizePrice(sizePrice: number) {
      this.sizePrice = sizePrice;
    },
    addTopping(toppingId: number[]) {
      // if (!this.toppingsId.includes(toppingId)) {
      //   this.toppingsId.push(toppingId); // Add topping ID if it's not already in the list
      // }
      this.toppingsId = toppingId;
    },
    removeTopping(toppingId: number) {
      this.toppingsId = this.toppingsId.filter(id => id !== toppingId);
    },
    clearCart() {
      this.pizzaId = null;
      this.sizeId = null;
      this.toppingsId = [];
    },
  },
});
