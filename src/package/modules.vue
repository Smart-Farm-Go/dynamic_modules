<template>
  <component :is="module" v-bind="props.fields" v-model="value" v-on="props.fields.on || {}">{{ value }}</component>
</template>

<script lang="ts">export default { name: 'DynamicModules' };</script>
<script lang="ts" setup>
import { computed, inject, shallowRef, watch } from 'vue';
import * as Modules from '../modules'; // 引入全部模块

const props = withDefaults(defineProps<{ fields: { [key: string]: any } }>(), {});
const values = inject<{ [name: string]: any }>('values', {});
const module = shallowRef<any>(undefined);

const value = computed({
  get() {
    return values.value[props.fields.prop];
  },
  set(value: any) {
    values.value[props.fields.prop] = value;
  },
});

// 加载模块
// 部分参数通过 v-bind 进行了穿透,
// 因为是数据所以 event 方法无法穿透，需要将 on 重新挂载到组件上.
watch(() => props.fields, ({ types }) => {
  module.value = (Modules as { [name: string]: any })[types] || types;
}, { immediate: true, deep: true });
</script>
