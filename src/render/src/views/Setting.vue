<template>
  <q-page>
    <q-card>
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="display" :label="t('setting.display.title')" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="display">
          <div class="text-h6">{{ t('setting.display.darkMode') }}</div>
          <q-list>
            <q-item tag="label" v-ripple>
              <q-item-section avatar>
                <q-radio v-model="darkMode" :val="true" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ t('setting.display.dark') }}</q-item-label>
              </q-item-section>
            </q-item>

            <q-item tag="label" v-ripple>
              <q-item-section avatar>
                <q-radio v-model="darkMode" :val="false" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ t('setting.display.light') }}</q-item-label>
              </q-item-section>
            </q-item>

            <q-item tag="label" v-ripple>
              <q-item-section avatar top>
                <q-radio v-model="darkMode" val="auto" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ t('setting.display.auto') }}</q-item-label>

                <q-item-label caption>
                  与系统主题同步（WIN10配置: 设置 -> 颜色 -> 选择颜色）
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-tab-panel>

        <q-tab-panel name="alarms">
          <div class="text-h6">Alarms</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

        <q-tab-panel name="movies">
          <div class="text-h6">Movies</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from '@/store';

const { t } = useI18n();
const store = useStore();
const darkMode = computed({
  get: () => store.state.userConfig?.darkMode ?? true,
  set: (val) => store.commit('userConfig/setState', { darkMode: val }),
});

// const $q = useQuasar();
//
// type DarkModeOption = boolean | 'auto';
//
// const darkMode = computed<DarkModeOption>({
//   get: () => $q.dark.mode,
//   set: (val) => {
//     $q.dark.set(val);
//   },
// });

const tab = ref('display');
</script>
