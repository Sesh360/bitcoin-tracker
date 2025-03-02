<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="price" href="/tabs/price">
          <ion-icon :icon="cashOutline" />
        </ion-tab-button>
          
        <ion-tab-button tab="holdings" href="/tabs/holdings">
          <ion-icon :icon="walletOutline" />
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { cashOutline, walletOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Tabs',
  components: { IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      cashOutline,
      walletOutline,
    }
  }
});
</script>

<style scoped>
ion-tab-bar {
  --background: rgba(255, 255, 255, 0.2);
  --color: black;
}

ion-tab-button {
  --color-selected: black;
}
</style>