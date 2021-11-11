<template>
  <q-page>
    <div class="q-pa-sm">
      <div v-for="n in 50" :key="n">Drawer {{ n }} / 50</div>
    </div>
    <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    >
      <q-btn fab icon="keyboard_arrow_up" color="accent" />
    </q-page-scroller>
  </q-page>
</template>

<script>
export default {
  name: 'Card',
};
</script>

<style scoped></style>
