<template>
  <p>{{ t('message') }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'HelloI18nExample',
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local',
    });

    // Something todo ..

    return { t };
  },
});
</script>

<i18n>
{
  "zh-CN": {
    "hello": "Hello i18n in SFC!"
  }
}
</i18n>
