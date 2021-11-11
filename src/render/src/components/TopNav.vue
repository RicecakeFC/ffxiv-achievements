<template>
  <q-drawer
    :value="value"
    @input="$emit('input', value)"
    side="left"
    bordered
    show-if-above
    :mini="miniState"
    @mouseover="miniState = false"
    @mouseout="miniState = true"
    mini-to-overlay
    :width="200"
    :breakpoint="500"
    class="bg-grey-3"
  >
    <q-list padding>
      <template v-for="(item, i) in navItems" :key="i">
        <q-separator v-if="item.type === 'separator'" />
        <q-item v-else clickable v-ripple :to="item.to">
          <q-item-section avatar>
            <q-icon :name="item.icon" />
          </q-item-section>

          <q-item-section>{{ item.title }}</q-item-section>
        </q-item>
      </template>
    </q-list>
  </q-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

defineProps<{
  value: boolean;
}>();

const { t } = useI18n({ useScope: 'global' });

interface NavItem {
  type: string;
  title?: string;
  to?: string;
  icon?: string;
}

const Separator: NavItem = {
  type: 'separator',
};

// left nav
const miniState = ref(true);
const navItems: NavItem[] = [
  {
    type: 'Home',
    title: t('top.nav.home'),
    to: '/',
    icon: 'home',
  },
  {
    type: 'Card',
    title: t('top.nav.card'),
    to: '/card',
    icon: 'view_module',
  },
  Separator,
  {
    type: 'Setting',
    title: t('top.nav.setting'),
    to: '/setting',
    icon: 'settings',
  },
];
</script>
