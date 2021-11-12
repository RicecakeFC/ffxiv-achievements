import set from 'lodash/set';

export type DarkMode = boolean | 'auto';
export interface UserConfigState {
  darkMode: DarkMode;
}

export const UserConfig = {
  namespaced: true,
  state: (): UserConfigState => ({
    darkMode: true,
  }),
  mutations: {
    setState: (
      state: UserConfigState,
      payload: Partial<UserConfigState>
    ): void => {
      let key: keyof typeof state;
      for (key in payload) {
        set(state, key, payload[key]);
      }
    },
  },
};
