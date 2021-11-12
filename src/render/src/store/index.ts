// store.ts
import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { UserConfig, UserConfigState } from '@/store/user-config';

export interface State {
  count: number;
  userConfig?: UserConfigState;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    count: 0,
  },
  modules: {
    userConfig: UserConfig,
  },
});

// define your own `useStore` composition function
export function useStore(): Store<State> {
  return baseUseStore(key);
}

export default store;
