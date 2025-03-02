// src/views/PricePage.vue
<template>
  <ion-page>
    <ion-content :fullscreen="true" class="bitcoin-bg">
      <ion-refresher slot="fixed" @ionRefresh="refreshPrice($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>

      <div class="center-content">
        <div class="logo-container" @click="toggleView">
          <img src="../assets/bitcoin-logo-subtle.svg" alt="Bitcoin" class="bitcoin-logo">
        </div>
        
        <div class="display-container">
          <div class="price-container" @click="toggleView">
            <!-- Price value - always in the same position -->
            <p class="price">${{ formatWholeDollar(viewMode === 'price' ? bitcoinPrice : holdingsValue) }}</p>
            
            <!-- BTC amount - fades in/out without affecting layout -->
            <div class="holdings-wrapper">
              <p class="holdings" :class="{ 'visible': viewMode === 'holdings' }">
                {{ formatBitcoin(bitcoinHoldings) }} BTC
              </p>
            </div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonRefresher, IonRefresherContent } from '@ionic/vue';
import { defineComponent, ref, onMounted, computed } from 'vue';
import BitcoinService from '../services/BitcoinService';

export default defineComponent({
  name: 'PricePage',
  components: {
    IonContent,
    IonPage,
    IonRefresher,
    IonRefresherContent
  },
  setup() {
    const bitcoinPrice = ref<number>(0);
    const viewMode = ref<string>('price');
    const bitcoinHoldings = BitcoinService.bitcoinHoldings;
    
    // Calculate value with proper rounding to whole dollars
    const holdingsValue = computed((): number => {
      const rawValue = bitcoinPrice.value * bitcoinHoldings.value;
      // Round to whole dollars
      return Math.round(rawValue);
    });

    const loadPrice = async (): Promise<void> => {
      const price = await BitcoinService.getBitcoinPrice();
      // Round to whole dollars
      bitcoinPrice.value = Math.round(price);
    };

    const refreshPrice = async (event: CustomEvent): Promise<void> => {
      await loadPrice();
      event.target.complete();
    };

    const toggleView = (): void => {
      viewMode.value = viewMode.value === 'price' ? 'holdings' : 'price';
    };

    // Format as whole dollar amount
    const formatWholeDollar = (value: number): string => {
      // Ensure value is rounded to whole dollars
      const roundedValue = Math.round(value);
      return roundedValue.toLocaleString('en-US');
    };

    // Format Bitcoin with 8 decimal precision
    const formatBitcoin = (value: number): string => {
      return value.toLocaleString('en-US', { 
        minimumFractionDigits: 0, 
        maximumFractionDigits: 8
      });
    };

    onMounted(() => {
      loadPrice();
    });

    return {
      bitcoinPrice,
      bitcoinHoldings,
      holdingsValue,
      viewMode,
      refreshPrice,
      toggleView,
      formatWholeDollar,
      formatBitcoin
    };
  }
});
</script>

<style scoped>
.bitcoin-bg {
  --background: #F7931A; /* Bitcoin orange */
  --color: rgba(0, 0, 0, 0.7);
}

.center-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20px;
  text-align: center;
}

.logo-container {
  margin-bottom: 40px;
  cursor: pointer; /* Show that it's clickable */
}

.bitcoin-logo {
  height: 225px;
  width: auto;
  opacity: 0.8;
  transition: transform 0.2s ease;
}

.logo-container:active .bitcoin-logo {
  transform: scale(0.95); /* Subtle press effect */
}

.display-container {
  width: 100%;
  max-width: 400px;
}

.price-container {
  padding: 20px 0;
  width: 100%;
  cursor: pointer; /* Show that it's clickable */
  transition: transform 0.2s ease;
  position: relative;
}

.price-container:active {
  transform: scale(0.98); /* Subtle press effect */
}

.price {
  font-size: 48px;
  font-weight: bold;
  margin: 0;
  color: rgba(0, 0, 0, 0.7);
  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.1);
}

.holdings-wrapper {
  height: 30px; /* Fixed height space for holdings text */
  position: relative;
  margin-top: 10px;
}

.holdings {
  font-size: 20px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  color: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.holdings.visible {
  opacity: 1;
}
</style>