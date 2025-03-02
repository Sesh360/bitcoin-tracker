<template>
  <ion-page>
    <ion-content :fullscreen="true" class="bitcoin-bg">
      <ion-refresher slot="fixed" @ionRefresh="refreshData($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>

      <div class="center-content">
        <div class="logo-container">
          <img src="../assets/bitcoin-logo-subtle.svg" alt="Bitcoin" class="bitcoin-logo">
        </div>
        
        <div class="changes-container">
          <div class="change-row" v-for="(change, period) in percentChanges" :key="period">
            <div class="period">{{ formatPeriod(period) }}</div>
            <div class="change" :class="getChangeClass(change)">
              {{ formatPercentage(change) }}
            </div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonRefresher, IonRefresherContent } from '@ionic/vue';
import { defineComponent, ref, onMounted } from 'vue';
import BitcoinService from '../services/BitcoinService';
import { RefresherCustomEvent } from '@ionic/core';

export default defineComponent({
  name: 'ChangePage',
  components: {
    IonContent,
    IonPage,
    IonRefresher,
    IonRefresherContent
  },
  setup() {
    const percentChanges = ref(BitcoinService.percentChanges.value);
    const isLoading = ref<boolean>(true);

    const fetchPercentChanges = async (): Promise<void> => {
      try {
        await BitcoinService.getBitcoinPercentChanges();
        percentChanges.value = BitcoinService.percentChanges.value;
        isLoading.value = false;
      } catch (error) {
        console.error('Error in component fetching percentage changes:', error);
        isLoading.value = false;
      }
    };

    const refreshData = async (event: RefresherCustomEvent): Promise<void> => {
      await fetchPercentChanges();
      // Now properly typed, this won't cause TypeScript errors
      event.target.complete();
    };

    const formatPeriod = (period: string): string => {
      switch (period) {
        case '1h': return '1 Hour';
        case '12h': return '12 Hours';
        case '24h': return '1 Day';
        case '7d': return '1 Week';
        case '30d': return '1 Month';
        case '180d': return '6 Months';
        case '1y': return '1 Year';
        case '3y': return '3 Years';
        case '5y': return '5 Years';
        case 'ytd': return 'YTD';
        case 'genesis': return 'Genesis';
        default: return period;
      }
    };

    const formatPercentage = (value: number): string => {
      if (value > 10000) {
        return `+${Math.round(value / 1000)}K%`;
      } else if (value > 1000) {
        return `+${(value / 1000).toFixed(1)}K%`;
      }
      
      const sign = value >= 0 ? '+' : '';
      return `${sign}${value.toFixed(2)}%`;
    };

    const getChangeClass = (value: number): string => {
      return value >= 0 ? 'positive' : 'negative';
    };

    onMounted(() => {
      fetchPercentChanges();
    });

    return {
      percentChanges,
      isLoading,
      refreshData,
      formatPeriod,
      formatPercentage,
      getChangeClass
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

.changes-container {
  width: 100%;
  max-width: 400px;
  overflow-y: auto;
  max-height: calc(100vh - 200px);
}

.change-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.change-row:last-child {
  border-bottom: none;
}

.period {
  font-size: 18px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
}

.change {
  font-size: 18px;
  font-weight: bold;
}

.positive {
  color: #006400; /* Dark green */
}

.negative {
  color: #8B0000; /* Dark red */
}
</style>