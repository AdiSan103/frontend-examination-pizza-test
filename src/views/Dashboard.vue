<template>
  <main>
    <header>
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
        <div class="popup">
          <h6>Payment Summary</h6>
          <ul>
            <li>
              <p>Veggie Pizza</p>
              <span>8$</span>
            </li>
            <li>
              <p>Veggie Pizza</p>
              <span>8$</span>
            </li>
            <li>
              <p>Veggie Pizza</p>
              <span>8$</span>
            </li>
            <li>
              <p>Veggie Pizza</p>
              <span>8$</span>
            </li>
            <li>
              <p>Veggie Pizza</p>
              <span>8$</span>
            </li>
          </ul>
          <Separator />
          <div class="total">
            <p>Total</p>
            <span>8$</span>
          </div>
          <Button label="Order Now" />
        </div>
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
          v-model="selectedCustomSize"
          :label="item.name"
          name="group1"
          :value="item.extra_price"
        />
      </ul>
      <h6>Toppings</h6>
      <p v-if="PizzaToppingItem.length === 0">Loading..</p>
      <div class="toppings">
        <Button
          v-for="(item, index) in PizzaToppingItem"
          :key="index"
          :label="item.name"
          :variant="selectedPizza.toppings.includes(item.id) ? 'outline' : 'disabled'"
        />
        <!-- <Button label="disabled" variant="disabled" /> -->
      </div>
    </section>
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
import { onMounted, ref } from "vue";

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

import PizzaListJson from "../store/json/pizza-list.json";
import PizzaSizeJson from "../store/json/size-list.json";
import PizzaToppingJson from "../store/json/topping-list.json";

const PizzaListItem = ref([]);
const PizzaSizeItem = ref([]);
const PizzaToppingItem = ref([]);

const selectedCustomSize = ref();
const selectedPizza = ref();

const handlePizza = (item) => {
  selectedPizza.value = item;
};

onMounted(() => {
  PizzaListItem.value = PizzaListJson.data;
  PizzaSizeItem.value = PizzaSizeJson.data;
  PizzaToppingItem.value = PizzaToppingJson.data;
  //
  selectedPizza.value = PizzaListItem.value[0];
});
</script>
