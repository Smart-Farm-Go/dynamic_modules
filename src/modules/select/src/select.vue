<template>
  <el-select>
    <el-option v-for="(item, key) of props.options" :key="key" :value="item[props.valueText]" :disabled="item.disabled">{{ item[props.labelText] }}</el-option>
  </el-select>
</template>

<script lang="ts">export default { name: 'DynamicModulesSelect' };</script>
<script lang="ts" setup>
interface Props {
  options: { label: string; value: string; disabled?: boolean }[];
  valueText?: string;
  labelText?: string;
}

const props = withDefaults(defineProps<Props>(), {
  options: () => [],
  valueText: 'value',
  labelText: 'label',
});
</script>
