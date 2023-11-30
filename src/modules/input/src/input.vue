<template>
  <el-input>
    <template #suffix v-if="slots.suffix">
      <new-component :is="slots.suffix"/>
    </template>
    <template #prefix v-if="slots.prefix">
      <new-component :is="slots.prefix"/>
    </template>
    <template #append v-if="slots.append">
      <new-component :is="slots.append"/>
    </template>
    <template #prepend v-if="slots.prepend">
      <new-component :is="slots.prepend"/>
    </template>
  </el-input>
</template>

<script lang="ts">export default { name: 'DynamicModulesInput' };</script>
<script lang="ts" setup>
import NewComponent from '../../utils/NewComponent.vue';
import { computed } from 'vue';

interface Props {
  slots?: { [name: string]: any };
}

const props = withDefaults(defineProps<Props>(), { slots: () => ({}) });
const slots = computed(() => props.slots);
</script>
