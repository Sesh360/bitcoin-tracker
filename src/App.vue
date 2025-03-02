<template>
  <ion-app>
    <swiper :options="swiperOptions" ref="swiper">
      <swiper-slide>
        <price-page />
      </swiper-slide>
      <swiper-slide>
        <change-page />
      </swiper-slide>
      <swiper-slide>
        <holdings-page />
      </swiper-slide>
    </swiper>
  </ion-app>
</template>

<script lang="ts">
import { IonApp } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.min.css';
import PricePage from './views/PricePage.vue';
import ChangePage from './views/ChangePage.vue';
import HoldingsPage from './views/HoldingsPage.vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    Swiper,
    SwiperSlide,
    PricePage,
    ChangePage,
    HoldingsPage
  },
  setup() {
    const swiper = ref(null);
    
    const swiperOptions = {
      initialSlide: 0,
      speed: 400,
      spaceBetween: 0,
    };
    
    return {
      swiper,
      swiperOptions
    };
  }
});
</script>

<style>
.swiper {
  height: 100%;
  width: 100%;
}

.swiper-slide {
  height: 100%;
  width: 100%;
}

/* Global style for input cursor color */
input {
  caret-color: rgba(0, 0, 0, 0.7) !important;
}
</style>