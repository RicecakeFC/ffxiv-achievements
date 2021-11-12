<template>
  <q-layout view="hHr LpR lfr">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          <q-avatar>
            <img :src="logo" alt="logo" />
          </q-avatar>
          Title {{ darkMode }}
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <TopNav v-model:show="leftDrawerOpen" />

    <q-drawer v-model="rightDrawerOpen" side="right" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>footer</q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue';
import { setCssVar, useQuasar } from 'quasar';

import TopNav from '@/components/TopNav.vue';
import logo from 'Assets/favicon.webp';

import { useStore } from '@/store';
const store = useStore();

// top tool bar
// eslint-disable-next-line no-undef

// left nav
const leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

// right panel
const rightDrawerOpen = ref(false);
const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value;
};

// color theme
const $q = useQuasar();

const darkMode = computed(() => store.state.userConfig?.darkMode ?? true);
watchEffect(() => {
  $q.dark.set(darkMode.value);
});

watchEffect(() => {
  if ($q.dark.isActive) {
    setCssVar('primary', '#1c7c54');
    setCssVar('secondary', '#2a9d8f');
    setCssVar('accent', '#2a9d8f');
    setCssVar('info', '#38669b');
    setCssVar('warning', '#b68738');
    setCssVar('error', '#c14953');
    setCssVar('success', '#2a9d8f');
    setCssVar('system', '#272727');
    setCssVar('inner', '#2d2d32');
    setCssVar('background', '#33333d');
    setCssVar('selected', '#ffffff');
    setCssVar('fishing', '#22362b');
    setCssVar('fishingSecondary', '#183027');
    setCssVar('completed', '#173251');
    setCssVar('completedSecondary', '#0c2242');
    setCssVar('waiting', '#2d2d32');
    setCssVar('waitingSecondary', '#272727');
    setCssVar('predatorCnt', '#b68738');
  } else {
    setCssVar('primary', '#82C79D');
    setCssVar('secondary', '#2a9d8f');
    setCssVar('accent', '#2a9d8f');
    setCssVar('info', '#38669b');
    setCssVar('warning', '#b68738');
    setCssVar('error', '#c14953');
    setCssVar('success', '#1c7c54');
    setCssVar('system', '#e3e5e8');
    setCssVar('inner', '#EBECEF');
    setCssVar('background', '#f2f3f5');
    setCssVar('selected', '#F5F5F4');
    setCssVar('fishing', '#1c7c54');
    setCssVar('fishingSecondary', '#9ec483');
    setCssVar('completed', '#82C79D');
    setCssVar('completedSecondary', '#98c1d9');
    setCssVar('waiting', '#aed9e0');
    setCssVar('waitingSecondary', '#F1E6D3');
    setCssVar('predatorCnt', '#faf3dd');
  }
});
</script>
