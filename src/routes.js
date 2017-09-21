import Home from './components/Home.vue';
import Inventory from './components/Inventory.vue';
import StoreItems from './components/StoreItems.vue';
import Party from './components/Party.vue';

export const routes = [
  { path: '/', component: Home  },
  { path: '/inventory', component: Inventory  },
  { path: '/store', component: StoreItems  },
  { path: '/party', component: Party  },
];
