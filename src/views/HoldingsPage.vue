// src/views/HoldingsPage.vue
<template>
  <ion-page>
    <ion-content :fullscreen="true" class="bitcoin-bg">
      <div class="center-content">
        <!-- <div class="logo-container">
          <img src="../assets/bitcoin-logo-subtle.svg" alt="Bitcoin" class="bitcoin-logo">
        </div> -->
        
        <div class="holdings-container">
          <div class="input-wrapper">
            <ion-item class="bitcoin-input">
              <ion-label position="stacked">BTC Amount</ion-label>
              <ion-input type="number" v-model="bitcoinAmount" @ionChange="onAmountChange"></ion-input>
            </ion-item>
          </div>
          
          <ion-button expand="block" @click="saveHoldings">Save</ion-button>
          
          <div class="current-holdings" v-if="currentHoldings > 0">
            <p>{{ formatBitcoin(currentHoldings) }} BTC</p>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonButton, IonItem, IonInput, IonLabel } from '@ionic/vue';
import { defineComponent, ref, onMounted, watch } from 'vue';
import { toastController } from '@ionic/vue';
import BitcoinService from '../services/BitcoinService';

export default defineComponent({
  name: 'HoldingsPage',
  components: {
    IonContent,
    IonPage,
    IonButton,
    IonItem,
    IonInput,
    IonLabel
  },
  setup() {
    const bitcoinAmount = ref<number>(0);
    const currentHoldings = ref<number>(0);

    const onAmountChange = (): void => {
      // Keep the number valid
      if (bitcoinAmount.value < 0) {
        bitcoinAmount.value = 0;
      }
    };

    const saveHoldings = async (): Promise<void> => {
      BitcoinService.updateBitcoinHoldings(bitcoinAmount.value);
      
      const toast = await toastController.create({
        message: 'Saved',
        duration: 1500,
        color: 'dark',
        position: 'bottom'
      });
      
      await toast.present();
    };

    const formatBitcoin = (value: number): string => {
      return value.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 8 });
    };

    onMounted(() => {
      currentHoldings.value = BitcoinService.bitcoinHoldings.value;
      bitcoinAmount.value = currentHoldings.value;
    });

    watch(BitcoinService.bitcoinHoldings, (newValue: number) => {
      currentHoldings.value = newValue;
    });

    return {
      bitcoinAmount,
      currentHoldings,
      onAmountChange,
      saveHoldings,
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
}

.bitcoin-logo {
  height: 80px;
  width: auto;
  opacity: 0.8;
}

.holdings-container {
  width: 100%;
  max-width: 400px;
}

.input-wrapper {
  margin-bottom: 20px;
}

.bitcoin-input {
  --background: transparent;
  --border-color: rgba(0, 0, 0, 0.5);
  --color: rgba(0, 0, 0, 0.7);
  --placeholder-color: rgba(0, 0, 0, 0.5);
  border-radius: 0;
  --border-style: solid;
  --border-width: 0 0 1px 0;
  --padding-start: 0;
  --highlight-color-focused: rgba(0, 0, 0, 0.7);
  --highlight-height: 1px;
}

/* Add global style to fix cursor color */
:deep(input) {
  caret-color: rgba(0, 0, 0, 0.7) !important;
}

ion-input {
  --color: rgba(0, 0, 0, 0.7);
  font-size: 20px;
  --placeholder-opacity: 0.7;
  margin-top: 10px; /* Add space between label and input */
  --padding-top: 8px;
}

ion-label {
  --color: rgba(0, 0, 0, 0.7);
  font-weight: bold;
  opacity: 0.8;
  margin-bottom: 8px;
}

ion-button {
  --background: transparent;
  --color: rgba(0, 0, 0, 0.7);
  --border-color: rgba(0, 0, 0, 0.5);
  --border-style: solid;
  --border-width: 1px;
  --border-radius: 0;
  --box-shadow: none;
  margin-top: 20px;
  height: 50px;
  text-transform: none;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.5px;
  opacity: 0.9;
}

.current-holdings {
  margin-top: 30px;
  font-size: 24px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.7);
  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.1);
}
</style>