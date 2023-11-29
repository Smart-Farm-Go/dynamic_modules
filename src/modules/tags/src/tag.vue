<template>
  <el-tag>{{ props.modelValue }}</el-tag>
</template>

<script lang="ts">export default { name: 'DynamicModulesTag' };</script>

<script lang="ts" setup>
const props = withDefaults(defineProps<{ modelValue?: string }>(), {});
</script>
