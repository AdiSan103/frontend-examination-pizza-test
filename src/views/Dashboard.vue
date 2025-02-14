<template>
  <PopUp v-if="popupStore.status"/>
  <main>
    <!-- menu -->
    <div class="menu" @click="handleMenu">
      <img v-if="MenuStatus" :src="HamburgerMenu" alt="menu" />
      <img v-else :src="CloseMenu" alt="menu" />
    </div>
    <header :class="[MenuStatus == false ? 'active' : '']">
      <div class="content">
        <img :src="LogoImg" alt="logo" />
        <ul>
          <li><Button href="#" label="Home" /></li>
          <li><Button href="#" label="Order" /></li>
          <li><Button href="#" label="About" /></li>
          <li><Button href="#" label="Blog" /></li>
          <li><Button href="#" label="Contact Us" /></li>
        </ul>
        <ul>
          <li><Button href="#" label="Login" /></li>
          <li><Button label="Register" /></li>
        </ul>
      </div>
    </header>
    <!--  -->
    <section class="banner">
      <h1>Pizza order</h1>
    </section>
    <!--  -->
    <section class="order">
      <div class="right">
        <h2>Choose Your Pizza</h2>
        <p v-if="PizzaListJson.length === 0">Loading..</p>
        <div class="items" v-else>
          <Card
            v-for="(item, index) in PizzaListJson.data"
            :key="index"
            :image="'/src/assets/img/pizza/' + item.name + '.png'"
            :name="item.name"
            :price="item.price"
            :finalPrice="item.discount.final_price"
            :discountActive="item.discount.is_active"
            :active="item?.id == selectedPizza?.id ? true : false"
            @click="handlePizza(item)"
          />
        </div>
      </div>
      <div class="left">
        <CardOrder :items="OrderCart" />
      </div>
    </section>
    <!--  -->
    <section class="custom">
      <h2>Custom Pizza</h2>
      <h6>Size</h6>
      <p v-if="PizzaSizeItem.length === 0">Loading..</p>
      <ul v-else>
        <RadioButton
          v-for="(item, index) in PizzaSizeItem"
          :key="index"
          @click="handlePizzaSize(item)"
          :label="item.name"
          name="group1"
        />
      </ul>
      <h6>Toppings</h6>
      <p v-if="PizzaToppingItem.length === 0">Loading..</p>
      <div class="toppings">
        <template v-for="(item, index) in PizzaToppingItem" :key="index">
          <CheckBox
            v-model="selectedTopping"
            :value="item.id"
            :label="item.name"
            :variant="selectedPizza.toppings.includes(item.id) ? 'outline' : 'disabled'"
            :checked="selectedTopping.includes(item.id) ? 'yes' : 'no'"
          />
        </template>
        <!-- <Button label="disabled" variant="disabled" /> -->
      </div>
    </section>
    <!--  -->
    <CardOrder class="cardorder-mobile" :items="OrderCart" />
    <!--  -->
    <footer>
      <Separator />
      <div class="content">
        <div class="main">
          <!--  -->
          <div>
            <img :src="LogoAlt" alt="logo" />
            <div class="socialmedia">
              <p>Find Us :</p>
              <ul>
                <li>
                  <img :src="IconFacebook" alt="social-media" />
                </li>
                <li>
                  <img :src="IconInstagram" alt="social-media" />
                </li>
                <li>
                  <img :src="IconYoutube" alt="social-media" />
                </li>
              </ul>
            </div>
          </div>
          <!--  -->
          <div class="navigation">
            <h6>Navigation</h6>
            <div class="items">
              <ul>
                <li>Home</li>
                <li>Order</li>
                <li>About</li>
                <li>Blog</li>
              </ul>
              <ul>
                <li>Contact</li>
                <li>Login</li>
                <li>Register</li>
              </ul>
            </div>
          </div>
          <!--  -->
          <div class="contact">
            <h6>Contact</h6>
            <ul>
              <li><img :src="IconMail" alt="icon" /> Food.now@mail.com</li>
              <li><img :src="IconCall" alt="icon" />+62848477102943</li>
              <li><img :src="IconWhatsapp" alt="icon" />+628184938494</li>
            </ul>
          </div>
          <!--  -->
          <div class="location">
            <h6>Location</h6>
            <div class="items">
              <img :src="IconLocation" alt="location" />
              <div>
                <span>Kerobokan</span>
                <p>
                  Jl. Raya Kerobokan Br Taman, Kuta No.98, Kerobokan Kelod, Kec. Kuta
                  Utara, Kabupaten Badung, Bali 80361
                </p>
              </div>
            </div>
          </div>
        </div>
        <Separator />
        <p class="copyright">
          Copyright © 2022 Foodnow. All Rights Reserved. Powered by PT. Timedoor
          Indonesia. | Privacy Policy
        </p>
        <p class="copyright">
          This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of
          Service apply.
        </p>
      </div>
    </footer>
  </main>
</template>

<script setup>
import { onMounted, ref, toRaw, watch } from "vue";

import Button from "../components/Button.vue";
import Card from "../components/Card.vue";
import LogoImg from "../assets/img/logo.svg";
import LogoAlt from "../assets/img/logo-alt.svg";
import RadioButton from "../components/RadioButton.vue";
import IconFacebook from "../assets/img/icons/facebook.svg";
import IconInstagram from "../assets/img/icons/instagram.svg";
import IconYoutube from "../assets/img/icons/youtube.svg";
import IconMail from "../assets/img/icons/mail.svg";
import IconCall from "../assets/img/icons/phone.svg";
import IconWhatsapp from "../assets/img/icons/whatsapp.svg";
import IconLocation from "../assets/img/icons/location.svg";
import Separator from "../components/Separator.vue";
import HamburgerMenu from "../assets/img/icons/hamburger-menu.svg";
import CloseMenu from "../assets/img/icons/close-menu.svg";

import PizzaListJson from "../store/json/pizza-list.json";
import PizzaSizeJson from "../store/json/size-list.json";
import PizzaToppingJson from "../store/json/topping-list.json";
import CardOrder from "../components/CardOrder.vue";

import { useCartStore } from "../store/cart"; // Adjust the path if necessary
import CheckBox from "../components/CheckBox.vue";
import PopUp from "../components/PopUp.vue";
import { usePopupStore } from '../store/popUp'; // adjust the path to where your store is located

const cart = useCartStore();
const popupStore = usePopupStore();

const PopUpStatus = ref(true);
const MenuStatus = ref(true);
const OrderCart = ref([]);

const PizzaListItem = ref([]);
const PizzaSizeItem = ref([]);
const PizzaToppingItem = ref([]);

const selectedCustomSize = ref();
const selectedPizza = ref();
const selectedTopping = ref([]);

// To show the popup, you can call:
popupStore.showPopup();

// To hide the popup, you can call:
popupStore.hidePopup();

const handlePizza = (item) => {
  selectedPizza.value = item;
  //
  cart.addPizza(item.id);
  cart.addPizzaName(item.name);
  cart.addPizzaPrice(item.price);
};

const handleMenu = () => {
  MenuStatus.value = !MenuStatus.value;
};

const handlePizzaSize = (item) => {
  selectedCustomSize.value = item;
  //
  cart.addSize(item.id);
  cart.addSizeName(item.name);
  cart.addSizePrice(item.extra_price);
};

// do first run apps...
onMounted(() => {
  PizzaListItem.value = PizzaListJson.data;
  PizzaSizeItem.value = PizzaSizeJson.data;
  PizzaToppingItem.value = PizzaToppingJson.data;
  //
  selectedCustomSize.value = PizzaSizeItem.value[0];
  selectedPizza.value = PizzaListItem.value[0];

  cart.addPizza(JSON.stringify(selectedPizza.value.id));
  cart.addPizzaName(JSON.stringify(selectedPizza.value.name));
  cart.addPizzaPrice(JSON.stringify(selectedPizza.value.price));

  cart.addSize(JSON.stringify(selectedCustomSize.value.id));
  cart.addSizeName(JSON.stringify(selectedCustomSize.value.name));
  cart.addSizePrice(JSON.stringify(selectedCustomSize.value.extra_price));
});



watch(() => {
  const normalArray = [...selectedTopping.value]; //these case proxyArray
  cart.addTopping(JSON.stringify(toRaw(normalArray)));

  //
  OrderCart.value = [
    // 1. pizza
    { title: cart.pizzaName, price: cart.pizzaPrice },
    // 2. size
    { title: cart.sizeName, price: cart.sizePrice },
    // 3. toppings (filter by toppingsId)
     // 3. toppings (filter by toppingsId)
  ...PizzaToppingItem.value.filter(item => cart.toppingsId.includes(item.id)).map(item => ({
    title: item.name,
    price: item.price,
  }))
  ];

  // console.log("-------------");
  // console.log("pizza id : " + cart.pizzaId);
  // console.log("size id : " + cart.sizeId);
  // console.log("topping id : " + cart.toppingsId);
  // console.log("-------------");
});
</script>
