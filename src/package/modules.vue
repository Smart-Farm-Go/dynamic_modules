<template>
  <component :is="module" v-bind="props.fields" v-model="values[props.fields.prop]"/>
</template>

<script lang="ts">export default { name: 'DynamicModules' };</script>
<script lang="ts" setup>
import { inject, shallowRef, watch } from 'vue';

const props = withDefaults(defineProps<{ fields: any }>(), {});
const values = inject('values', {});
const module = shallowRef<any>(undefined);

watch(() => props.fields, ({ type }) => {
  // 准备加载模块
  console.log('fields', type);
}, { immediate: true, deep: true });
</script>
