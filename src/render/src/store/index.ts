// store.ts
import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { UserConfig, UserConfigState } from '@/store/user-config';
import VuexPersistence from 'vuex-persist';

export interface RootState {
  count: number;
  userConfig?: UserConfigState;
}

const vuexLocalStorage = new VuexPersistence<RootState>({
  key: 'rc-ffxiv-achievements-vuex',
  storage: window.localStorage,
  reducer: (state) => {
    return {
      userConfig: state.userConfig,
    };
  },
});

export const key: InjectionKey<Store<RootState>> = Symbol();

export const store = createStore<RootState>({
  state: {
    count: 0,
  },
  modules: {
    userConfig: UserConfig,
  },
  plugins: [vuexLocalStorage.plugin],
});

// define your own `useStore` composition function
export function useStore(): Store<RootState> {
  return baseUseStore(key);
}

export default store;
